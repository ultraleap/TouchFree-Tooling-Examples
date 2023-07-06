const defaultSize = 60;
const buttonGoalSize = [defaultSize, defaultSize, defaultSize];
const minChange = 0.001;

let connectedToTracking = false;
let bsSocket;

let videosSelectable = true;
let buttonHideTimeout = -1;
let container = null;
let windowWidth = 0;
let handPresent = false;
let buttonCurrentSize = [defaultSize, defaultSize, defaultSize];
let firstHoverDone = false;

const retryTrackingTimeout = 30000;

window.onload = function () {
    TouchFree.Init({ initialiseCursor: false });
    TouchFree.RegisterEventCallback("OnConnected", () => (connectedToTracking = true));
    TouchFree.RegisterEventCallback("HandFound", handleHandFound);
    TouchFree.RegisterEventCallback("HandsLost", handleHandsLost);
    TouchFree.RegisterEventCallback("TransmitInputAction", (action) => {
        setTimeout(() => handleInputAction(action), 1);
    });

    setTimeout(() => {
        tryConnect();
    }, retryTrackingTimeout);

    try {
        bsSocket = new BSDatagramSocket();
    } catch {
        console.log("BrightSign not available");
        document.body.classList.add("body");
    }
};

function handleHandFound() {
    touchFreeEvent("hand_detected");
    handPresent = true;
    container.classList.add("hand");

    if (videosSelectable) {
        resetButtonMenuVisibility();
    }

    if (buttonHideTimeout !== -1) {
        clearTimeout(buttonHideTimeout);
    }
}

function handleHandsLost() {
    touchFreeEvent("hand_lost");
    handPresent = false;
    firstHoverDone = false;

    if (container.classList.contains("hand")) {
        container.classList.remove("hand");
    }

    for (let i = 0; i < container.children.length; i++) {
        updateContainerItem(i, 0);
        dehover(container.children[i]);
    }

    buttonHideTimeout = window.setTimeout(() => {
        container.style.opacity = 0;
        buttonHideTimeout = -1;
    }, 7000);
}

function tryConnect() {
    if (!connectedToTracking) {
        try {
            TouchFree.Connection.ConnectionManager.Connect();
            console.log("Connected");
        } catch {}

        setTimeout(() => {
            tryConnect();
        }, retryTrackingTimeout);
    }

    TouchFree.Plugins.InputActionManager.SetPlugins([new LockedYAxis()]);
    TouchFree.Plugins.InputActionManager.plugins[0].SetYValue(window.innerHeight / 2);
}

let lastElementWithDown = null;

function pointerdown(element) {
    lastElementWithDown = element;
}

function videoAClick(element) {
    videoClick(element, "play_video_a");
}

function videoBClick(element) {
    videoClick(element, "play_video_b");
}

function videoCClick(element) {
    videoClick(element, "play_video_c");
}

function videoClick(element, eventName) {
    if (videosSelectable && lastElementWithDown === element) {
        touchFreeEvent(eventName);
        videoSelected();
        element.classList.add("selected");
    }
}

function videoSelected() {
    videosSelectable = false;
    setTimeout(() => {
        container.style.opacity = "0";
        setTimeout(() => {
            videosSelectable = true;
            resetButtonMenuVisibility();
        }, 7200);
    }, 300);
}

function resetButtonMenuVisibility() {
    if (handPresent) {
        container.style.opacity = null;
        videosSelectable = true;
        document.querySelector(".selected")?.classList.remove("selected");
    }
}

setTimeout(() => {
    container = document.getElementsByClassName("container")[0];
    windowWidth = container.scrollWidth;
    updateButtonSizes();
}, 10);

function touchFreeEvent(valueToSend) {
    console.log(valueToSend);
    if (bsSocket) {
        bsSocket.SendTo("127.0.0.1", "5000", valueToSend);
    }
}

function updateButtonSizes() {
    let furtherUpdateRequired = false;
    for (var i = 0; i < 3; i++) {
        if (buttonCurrentSize[i] !== buttonGoalSize[i]) {
            const maxToChange = (buttonCurrentSize[i] - buttonGoalSize[i]) / 2;

            if (maxToChange > minChange || maxToChange < -minChange) {
                buttonCurrentSize[i] = buttonCurrentSize[i] - maxToChange;
                furtherUpdateRequired = true;
            } else {
                buttonCurrentSize[i] = buttonGoalSize[i];
            }

            const childToUpdate = container.children[i].children[0];
            childToUpdate.style.width = `${buttonCurrentSize[i]}%`;
            childToUpdate.style.height = `${buttonCurrentSize[i]}%`;
        }
    }

    if (furtherUpdateRequired) {
        updateButtonRef = setTimeout(updateButtonSizes, 30);
    } else {
        updateButtonRef = null;
    }
}

let updateButtonRef = null;

let progressToClick = 0;

function handleInputAction(action) {
    progressToClick = action?.ProgressToClick ?? 0;

    if (action && handPresent) {
        var xPosition = action.CursorPosition[0] > 0 ? action.CursorPosition[0] : 0;
        var mouseXpercentage = Math.round((xPosition / windowWidth) * 100);

        for (var i = 0; i < container.children.length; i++) {
            if (mouseXpercentage > 33 * i && mouseXpercentage < 33 * (i + 1)) {
                updateContainerItem(i, progressToClick);
                if (!firstHoverDone) {
                    firstHoverDone = true;
                    hover(container.children[i]);
                }
            } else {
                updateContainerItem(i, null);
            }
        }
    } else {
        for (var i = 0; i < container.children.length; i++) {
            updateContainerItem(i, 3);
        }
    }

    if (!updateButtonRef) {
        updateButtonRef = setTimeout(updateButtonSizes, 1);
    }
}

function updateContainerItem(index, progressToClick) {
    if (progressToClick !== null) {
        buttonGoalSize[index] = 90 - 10 * progressToClick;
    } else {
        buttonGoalSize[index] = 80;
    }
}

function hover(element) {
    if (!element.classList.contains("hovered")) {
        element.classList.add("hovered");
        element.children[0].src = element.dataset.gif;
    }
}

function dehover(element) {
    if (element.classList.contains("hovered")) {
        element.classList.remove("hovered");
        element.children[0].src = element.dataset.png;
    }
}

class LockedYAxis extends TouchFree.Plugins.InputActionPlugin {
    constructor() {
        super(...arguments);
        this.yValue = 100;
        console.log("Plugin initialised");
    }

    ModifyInputAction(_inputAction) {
        _inputAction.CursorPosition[1] = this.yValue;
        return _inputAction;
    }

    SetYValue(value) {
        this.yValue = value;
    }
}

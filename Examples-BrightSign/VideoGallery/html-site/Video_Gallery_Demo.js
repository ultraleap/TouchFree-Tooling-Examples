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

let updateButtonRef = null;
let progressToClick = 0;

let lastElementWithDown = null;

const retryTrackingTimeout = 30000;

window.onload = function () {
    touchfree.init({ initialiseCursor: false });
    touchfree.registerEventCallback("onConnected", () => (connectedToTracking = true));
    touchfree.registerEventCallback("handFound", handleHandFound);
    touchfree.registerEventCallback("handsLost", handleHandsLost);
    touchfree.registerEventCallback("transmitInputAction", handleInputAction);

    document.getElementById("left").style.backgroundImage = `url(Media/Madronzio.png)`;
    document.getElementById("middle").style.backgroundImage = `url(Media/Routure.png)`;
    document.getElementById("right").style.backgroundImage = `url(Media/LeWear.png)`;

    container = document.getElementById("container");

    tryConnect();

    try {
        bsSocket = new BSDatagramSocket();
    } catch {
        console.log("BrightSign not available");
    }
};

function handleHandFound() {
    touchFreeEvent("hand_detected");
    handPresent = true;

    if (videosSelectable) {
        resetButtonMenuVisibility();
    }

    clearTimeout(buttonHideTimeout);
}

function handleHandsLost() {
    touchFreeEvent("hand_lost");
    handPresent = false;
    firstHoverDone = false;

    buttonHideTimeout = window.setTimeout(() => {
        container.style.opacity = 0;
        buttonHideTimeout = -1;
    }, 7000);
}

function tryConnect() {
    if (!connectedToTracking) {
        try {
            touchfree.connect();
            console.log("Connected");
        } catch {}

        setTimeout(() => {
            tryConnect();
        }, retryTrackingTimeout);
    }

    touchfree.internal.InputActionManager.setPlugins([new LockedYAxis()]);
    touchfree.internal.InputActionManager.plugins[0].setYValue(window.innerHeight / 2);
}

function pointerdown(element) {
    lastElementWithDown = element;
}

function videoClick(element, eventName) {
    if (videosSelectable && lastElementWithDown === element) {
        touchFreeEvent(`play_video_${eventName}`);
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
        const selected = document.querySelector(".selected");
        if (selected) {
            selected.classList.remove("selected");
        }
    }
}

function touchFreeEvent(valueToSend) {
    console.log(valueToSend);
    if (bsSocket) {
        bsSocket.SendTo("127.0.0.1", "5000", valueToSend);
    }
}

function handleInputAction(action) {
    if (!action) return;
    progressToClick = action.ProgressToClick ? action.ProgressToClick : 0;

    const hovered = document.querySelector(".hovered");
    if (hovered) {
        hovered.style.transform = `scale(${1.1 - 0.1 * progressToClick})`;
    }
}

function hover(element, file) {
    element.classList.add("hovered");
    element.style.backgroundImage = `url(Media/${file})`;
}

function dehover(element, file) {
    element.classList.remove("hovered");
    element.style.backgroundImage = `url(Media/${file})`;
    element.style.transform = "scale(1)";
}

class LockedYAxis extends touchfree.internal.InputActionPlugin {
    constructor() {
        super(...arguments);
        this.yValue = 100;
        console.log("Plugin initialised");
    }

    modifyInputAction(_inputAction) {
        _inputAction.CursorPosition[1] = this.yValue;
        return _inputAction;
    }

    setYValue(value) {
        this.yValue = value;
    }
}

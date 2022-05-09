var connectedToTracking = false;
var bsSocket;

try {
    TouchFree.Connection.ConnectionManager.init();
    TouchFree.Connection.ConnectionManager.instance.addEventListener('OnConnected', () => { connectedToTracking = true });


} catch {

}

var retryTrackingTimeout = 30000;

window.onload = function () {

    var inputSystem = new TouchFree.InputControllers.WebInputController();

    setTimeout(() => {
        tryConnect();
    }, retryTrackingTimeout);

    try {
        bsSocket = new BSDatagramSocket();
    }
    catch {
        console.log("BrightSign not available");
        document.body.classList.add("body");
    }
}

var tryConnect = function () {
    if (!connectedToTracking) {
        try {
            TouchFree.Connection.ConnectionManager.Connect();
            console.log('Connected');
        } catch { }

        setTimeout(() => {
            tryConnect();
        }, retryTrackingTimeout);
    }

    TouchFree.Plugins.InputActionManager.SetPlugins([ new LockedYAxis() ]);
    TouchFree.Plugins.InputActionManager.plugins[0].SetYValue(window.innerHeight / 2);
}

var lastElementWithDown = null;

var pointerdown = (element) => {
    lastElementWithDown = element;
}

var videoAClick = function (element) {
    videoClick(element, 'play_video_a');
};

var videoBClick = function (element) {
    videoClick(element, 'play_video_b');
};

var videoCClick = function (element) {
    videoClick(element, 'play_video_c');
};

var videoClick = (element, eventName) => {
    if (videosSelectable && lastElementWithDown === element) {
        touchFreeEvent(eventName);
        videoSelected();
        element.classList.add("selected");
    }
}

var videoSelected = function () {
    videosSelectable = false;
    setTimeout(() => {
        container.style.opacity = "0";
        setTimeout(() => {
            videosSelectable = true;
            resetButtonMenuVisibility();
        }, 7200);
    }, 300);
}

var resetButtonMenuVisibility = function () {
    if (handPresent) {
        container.style.opacity = null;
        videosSelectable = true;
        var selected = document.getElementsByClassName("selected")[0];
        if (selected) {
            selected.classList.remove("selected");
        }
    }
}

var videosSelectable = true;
var buttonHideTimeout = -1;

var container = null;
var windowWidth = 0;

var handPresent = false;

var defaultSize = 60;

var buttonGoalSize = [defaultSize, defaultSize, defaultSize];
var buttonCurrentSize = [defaultSize, defaultSize, defaultSize];
var minChange = 0.001;

var firstHoverDone = false;


setTimeout(() => {
    container = document.getElementsByClassName("container")[0];
    windowWidth = container.scrollWidth;
    updateButtonSizes();
}, 10);

TouchFree.Connection.ConnectionManager.instance.addEventListener('HandFound', () => {
    touchFreeEvent('hand_detected');
    handPresent = true;
    container.classList.add('hand');

    if (videosSelectable) {
        resetButtonMenuVisibility();
    }

    if (buttonHideTimeout !== -1) {
        clearTimeout(buttonHideTimeout);
    }
});

TouchFree.Connection.ConnectionManager.instance.addEventListener('HandsLost', () => {
    touchFreeEvent('hand_lost');
    handPresent = false;
    firstHoverDone = false;

    if (container.classList.contains('hand')) {
        container.classList.remove('hand');
    }

    for (var i = 0; i < container.children.length; i++) {
        updateContainerItem(i, 0);
        dehover(container.children[i]);
    }

    buttonHideTimeout = window.setTimeout(() => {
        container.style.opacity = 0;
        buttonHideTimeout = -1;
    }, 7000);
});



var touchFreeEvent = function (valueToSend) {
    console.log(valueToSend);
    if (bsSocket) {
        bsSocket.SendTo('127.0.0.1', '5000', valueToSend);
    }
}

var updateButtonSizes = function () {
    var furtherUpdateRequired = false;
    for (var i = 0; i < 3; i++) {
        if (buttonCurrentSize[i] !== buttonGoalSize[i]) {
            var maxToChange = (buttonCurrentSize[i] - buttonGoalSize[i]) / 2;

            if (maxToChange > minChange || maxToChange < -minChange) {
                buttonCurrentSize[i] = buttonCurrentSize[i] - maxToChange;
                furtherUpdateRequired = true;
            } else {
                buttonCurrentSize[i] = buttonGoalSize[i];
            }

            var childToUpdate = container.children[i].children[0];
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

var updateButtonRef = null;

var progressToClick = 0;
TouchFree.Plugins.InputActionManager.instance.addEventListener('TransmitInputAction', (action) => {
    setTimeout(() => handleInputAction(action), 1);
});

var handleInputAction = function (action) {
    progressToClick = !action ? 0 : (!action.detail ? 0 : action.detail.ProgressToClick);

    if (action && action.detail && handPresent) {
        var xPosition = action.detail.CursorPosition[0] > 0 ? action.detail.CursorPosition[0] : 0;
        var mouseXpercentage = Math.round(xPosition / windowWidth * 100);

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

var updateContainerItem = function (index, progressToClick) {
    if (progressToClick !== null) {
        buttonGoalSize[index] = 90 - (10 * progressToClick);
    } else {
        buttonGoalSize[index] = 80;
    }
}

var hover = function (element) {
    if (!element.classList.contains('hovered')) {
        element.classList.add('hovered');
        element.children[0].src = element.dataset.gif;
    }
}

var dehover = function (element) {
    if (element.classList.contains('hovered')) {
        element.classList.remove('hovered');
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
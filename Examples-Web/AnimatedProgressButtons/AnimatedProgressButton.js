TouchFree.Connection.ConnectionManager.init();
const InputTypes = TouchFree.TouchFreeToolingTypes.InputType;
const InteractionTypes = TouchFree.TouchFreeToolingTypes.InteractionType;

window.onload = function () {
    var inputSystem = new TouchFree.InputControllers.WebInputController();

    TouchFree.Connection.ConnectionManager.AddConnectionListener(() => {
            TouchFree.Plugins.InputActionManager._instance.addEventListener("TransmitInputAction", AnimateButtonProgress, false);
        });
}

function AnimateButtonProgress(inputAction) {
    var overlay = document.getElementById('hovered');
    var buttonCentre = [50, 50];
    if (overlay) {
        var relativeCursorPos = RelativeCursorPos(overlay, inputAction.detail.CursorPosition);
        var progressPercent = (EasedProgress(inputAction.detail.ProgressToClick) * 100);

        if (inputAction.detail.InputType === InputTypes.MOVE) {
            overlay.style.opacity = '0.25';
            CircularProgress(overlay, progressPercent, relativeCursorPos);
        }
        if (inputAction.detail.InputType === InputTypes.DOWN) {
            overlay.style.opacity = '0.5';
            CircularProgress(overlay, progressPercent, buttonCentre);
            overlay.id = 'pressed';
        }
    }
    
    var pressedOverlay = document.getElementById('pressed');
    if (pressedOverlay) {
        pressedOverlay.style.opacity = inputAction.detail.ProgressToClick * 0.75;
        if (inputAction.detail.ProgressToClick === 0) {
            pressedOverlay.id = 'hovered';
        }
    }

    var dehoveredOverlay = document.getElementById('dehovered');
    if (dehoveredOverlay) {
        CircularProgress(dehoveredOverlay, 0, buttonCentre);
        dehoveredOverlay.style.opacity = "0";
        dehoveredOverlay.id = '';
    }

}

function RelativeCursorPos(element, cursorPos) {
    var boundingRect = element.getBoundingClientRect();
    var relativePos = [0, 0];
    relativePos[0] = (cursorPos[0] - boundingRect.left) / boundingRect.width;
    relativePos[1] = ((window.innerHeight - cursorPos[1]) - boundingRect.top) / boundingRect.height;

    return [relativePos[0] * 100, relativePos[1] * 100];
}

function CircularProgress(element, progressPercent, centrePoint) {
    element.style.clipPath = "circle(" + progressPercent.toString() + "% at " + centrePoint[0] + "% " + centrePoint[1] + "%)";
}

function EasedProgress(x) {
    return 0.1 + CubicEaseIn(x * 0.9);
}

function CubicEaseIn(x) {
    return x * x * x;
}
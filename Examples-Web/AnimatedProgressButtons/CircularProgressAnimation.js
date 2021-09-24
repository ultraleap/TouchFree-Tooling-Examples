TouchFree.Connection.ConnectionManager.init();
const InputTypes = TouchFree.TouchFreeToolingTypes.InputType;
const InteractionTypes = TouchFree.TouchFreeToolingTypes.InteractionType;

const overlayHoverOpacity = '0.5';
const overlayPressedOpacity = '0.75';

window.onload = function () {
    new TouchFree.InputControllers.WebInputController();

    TouchFree.Connection.ConnectionManager.AddConnectionListener(() => {
        new CircularProgress();
        });
}


class CircularProgress {
    constructor() {
        // Set up the button progress event handler
        TouchFree.Plugins.InputActionManager._instance.addEventListener("TransmitInputAction", CircularProgress.AnimateCircularProgress, false);
    }

    // Animates a clip path for active overlay elements, identified by the "hovered" id
    static AnimateCircularProgress(inputAction) {
        var overlay = document.getElementById('hovered');
        var buttonCentre = [50, 50];
        if (overlay) {
            var relativeCursorPos = CircularProgress.RelativeCursorPos(overlay, inputAction.detail.CursorPosition);
            var progressPercent = (CircularProgress.EasedProgress(inputAction.detail.ProgressToClick) * 100);
    
            if (inputAction.detail.InputType === InputTypes.MOVE) {
                overlay.style.opacity = overlayHoverOpacity;
                CircularProgress.ClipOverlay(overlay, progressPercent, relativeCursorPos);
            }
            if (inputAction.detail.InputType === InputTypes.DOWN) {
                overlay.style.opacity = overlayPressedOpacity;
                CircularProgress.ClipOverlay(overlay, progressPercent, buttonCentre);
                overlay.id = 'pressed';
            }
        }
        
        var pressedOverlay = document.getElementById('pressed');
        if (pressedOverlay) {
            pressedOverlay.style.opacity = inputAction.detail.ProgressToClick * overlayPressedOpacity;
            if (inputAction.detail.ProgressToClick === 0) {
                pressedOverlay.id = 'hovered';
            }
        }
    
        var dehoveredOverlay = document.getElementById('dehovered');
        if (dehoveredOverlay) {
            CircularProgress.ClipOverlay(dehoveredOverlay, 0, buttonCentre);
            dehoveredOverlay.style.opacity = '0';
            dehoveredOverlay.id = '';
        }
    
    }

    static RelativeCursorPos(element, cursorPos) {
        var boundingRect = element.getBoundingClientRect();
        var relativePos = [0, 0];
        relativePos[0] = (cursorPos[0] - boundingRect.left) / boundingRect.width;
        relativePos[1] = ((window.innerHeight - cursorPos[1]) - boundingRect.top) / boundingRect.height;

        return [relativePos[0] * 100, relativePos[1] * 100];
    }

    static ClipOverlay(element, progressPercent, centrePoint) {
        element.style.clipPath = "circle(" + progressPercent.toString() + "% at " + centrePoint[0] + "% " + centrePoint[1] + "%)";
    }

    static EasedProgress(x) {
        return 0.1 + CircularProgress.CubicEaseIn(x * 0.9);
    }

    static CubicEaseIn(x) {
        return x * x * x;
    }
}

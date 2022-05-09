TouchFree.Connection.ConnectionManager.init();
const InputTypes = TouchFree.TouchFreeToolingTypes.InputType;
const InteractionTypes = TouchFree.TouchFreeToolingTypes.InteractionType;

const overlayHoverOpacity = '0.5';
const overlayPressedOpacity = '0.75';

window.onload = function () {
    AddTouchFreeCursor();
    new TouchFree.InputControllers.WebInputController();

    TouchFree.Connection.ConnectionManager.AddConnectionListener(() => {
        new LinearProgress();
        });
}

class LinearProgress {
    constructor() {
        // Set up the button progress event handler
        TouchFree.Plugins.InputActionManager._instance.addEventListener("TransmitInputAction", LinearProgress.AnimateLinearProgress, false);
    }

    // Animates a clip path for active overlay elements, identified by the "hovered" id
    static AnimateLinearProgress(inputAction) {
        var overlay = document.getElementById('hovered');
        
        if (overlay) {
            var progressPercent = inputAction.detail.ProgressToClick * 100;
    
            if (inputAction.detail.InputType === InputTypes.MOVE) {
                overlay.style.opacity = overlayHoverOpacity;
            }
            if (inputAction.detail.InputType === InputTypes.DOWN) {
                overlay.style.opacity = overlayPressedOpacity;
                overlay.id = 'pressed';
            }
            LinearProgress.ClipOverlay(overlay, progressPercent);
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
            LinearProgress.ClipOverlay(dehoveredOverlay, 0);
            dehoveredOverlay.style.opacity = '0';
            dehoveredOverlay.id = '';
        }
    
    }

    static ClipOverlay(element, progressPercent) {
        element.style.clipPath = "inset(0% " + (100 - progressPercent).toString() + "% 0% 0%)";
    }
}

function AddTouchFreeCursor()
{
    var cursorRing = document.createElement('img');
    var cursor = document.createElement('img');
    cursor.src = "./images/Dot.png";
    cursor.style.position = "absolute";
    cursor.width = 75;
    cursor.height = 75;
    cursor.style.zIndex = "1001";

    // This is a special class used by the WebInputController to identify the html elements that
    // make up the cursor. This is so it can ignore cursor-related objects when it is looking
    // for elements to pointerover/pointerout etc.
    cursor.classList.add('touchfreecursor');
    cursorRing.classList.add('touchfreecursor');

    document.body.appendChild(cursor);
    document.body.appendChild(cursorRing);

    var dotCursor = new TouchFree.Cursors.DotCursor(cursor, cursorRing);
}
const InputTypes = TouchFree.TouchFreeToolingTypes.InputType;
const InteractionTypes = TouchFree.TouchFreeToolingTypes.InteractionType;

const overlayHoverOpacity = "0.5";
const overlayPressedOpacity = "0.75";

window.onload = function () {
    TouchFree.Init({ initialiseCursor: false });
    AddTouchFreeCursor();
    TouchFree.RegisterEventCallback("TransmitInputAction", AnimateLinearProgress);
};

// Animates a clip path for active overlay elements, identified by the "hovered" id
function AnimateLinearProgress(inputAction) {
    const overlay = document.getElementById("hovered");

    if (overlay) {
        const progressPercent = inputAction.ProgressToClick * 100;

        if (inputAction.InputType === InputTypes.MOVE) {
            overlay.style.opacity = overlayHoverOpacity;
        }
        if (inputAction.InputType === InputTypes.DOWN) {
            overlay.style.opacity = overlayPressedOpacity;
            overlay.id = "pressed";
        }
        ClipOverlay(overlay, progressPercent);
    }

    const pressedOverlay = document.getElementById("pressed");
    if (pressedOverlay) {
        pressedOverlay.style.opacity = inputAction.ProgressToClick * overlayPressedOpacity;
        if (inputAction.ProgressToClick === 0) {
            pressedOverlay.id = "hovered";
        }
    }

    const dehoveredOverlay = document.getElementById("dehovered");
    if (dehoveredOverlay) {
        ClipOverlay(dehoveredOverlay, 0);
        dehoveredOverlay.style.opacity = "0";
        dehoveredOverlay.id = "";
    }
}

function ClipOverlay(element, progressPercent) {
    element.style.clipPath = `inset(0%  ${100 - progressPercent}% 0% 0%)`;
}

function AddTouchFreeCursor() {
    const cursorRing = document.createElement("img");
    const cursor = document.createElement("img");
    cursor.src = "./images/Dot.png";
    cursor.style.position = "absolute";
    cursor.width = 75;
    cursor.height = 75;
    cursor.style.zIndex = "1001";

    // This is a special class used by the WebInputController to identify the html elements that
    // make up the cursor. This is so it can ignore cursor-related objects when it is looking
    // for elements to pointerover/pointerout etc.
    cursor.classList.add("touchfreecursor");
    cursorRing.classList.add("touchfreecursor");

    document.body.appendChild(cursor);
    document.body.appendChild(cursorRing);

    new TouchFree.Cursors.DotCursor(cursor, cursorRing);
}

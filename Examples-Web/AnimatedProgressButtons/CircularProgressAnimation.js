const InputTypes = TouchFree.TouchFreeToolingTypes.InputType;
const InteractionTypes = TouchFree.TouchFreeToolingTypes.InteractionType;

const overlayHoverOpacity = "0.5";
const overlayPressedOpacity = "0.75";
const buttonCentre = [50, 50];

window.onload = () => {
    TouchFree.Init({ initialiseCursor: false });
    TouchFree.RegisterEventCallback("TransmitInputAction", AnimateCircularProgress);
};

// Animates a clip path for active overlay elements, identified by the "hovered" id
function AnimateCircularProgress(inputAction) {
    const overlay = document.getElementById("hovered");
    if (overlay) {
        const relativeCursorPos = GetRelativeCursorPos(overlay, inputAction.CursorPosition);
        const progressPercent = EasedProgress(inputAction.ProgressToClick) * 100;

        if (inputAction.InputType === InputTypes.MOVE) {
            overlay.style.opacity = overlayHoverOpacity;
            ClipOverlay(overlay, progressPercent, relativeCursorPos);
        }
        if (inputAction.InputType === InputTypes.DOWN) {
            overlay.style.opacity = overlayPressedOpacity;
            ClipOverlay(overlay, progressPercent, buttonCentre);
            overlay.id = "pressed";
        }
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
        ClipOverlay(dehoveredOverlay, 0, buttonCentre);
        dehoveredOverlay.style.opacity = "0";
        dehoveredOverlay.id = "";
    }
}

function GetRelativeCursorPos(element, cursorPos) {
    const bounds = element.getBoundingClientRect();
    const x = (cursorPos[0] - bounds.left) / bounds.width;
    const y = (cursorPos[1] - bounds.top) / bounds.height;
    return [x * 100, y * 100];
}

function ClipOverlay(element, progressPercent, centrePoint) {
    element.style.clipPath = `circle(${progressPercent}% at ${centrePoint[0]}% ${centrePoint[1]}%)`;
}

function EasedProgress(x) {
    return 0.1 + CubicEaseIn(x * 0.9);
}

function CubicEaseIn(x) {
    return x * x * x;
}

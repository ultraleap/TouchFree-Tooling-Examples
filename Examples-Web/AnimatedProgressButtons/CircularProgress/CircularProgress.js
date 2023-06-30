window.addEventListener("load", () => {
    TouchFree.Init({ initialiseCursor: false });
    TouchFree.RegisterEventCallback("TransmitInputAction", AnimateCircularProgress);
});

// Animates a clip path for active overlay elements, identified by the "hovered" id
function AnimateCircularProgress(inputAction) {
    const hoveredElement = document.querySelector(".hovered");
    if (hoveredElement) {
        const relativeCursorPos = GetRelativeCursorPos(hoveredElement, inputAction.CursorPosition);
        const progressPercent = EasedProgress(inputAction.ProgressToClick) * 100;

        const root = document.querySelector(":root");
        root.style.setProperty("--progress", `${progressPercent}%`);
        root.style.setProperty("--point", `${relativeCursorPos[0]}% ${relativeCursorPos[1]}%`);
    }
}

function GetRelativeCursorPos(element, cursorPos) {
    const bounds = element.getBoundingClientRect();
    const x = (cursorPos[0] - bounds.left) / bounds.width;
    const y = (cursorPos[1] - bounds.top) / bounds.height;
    return [x * 100, y * 100];
}

function EasedProgress(x) {
    return 0.1 + CubicEaseIn(x * 0.9);
}

function CubicEaseIn(x) {
    return x * x * x;
}

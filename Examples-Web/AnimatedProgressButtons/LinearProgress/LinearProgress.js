window.addEventListener("load", () => {
    touchfree.init({ initialiseCursor: false });
    AddTouchFreeCursor();
    touchfree.registerEventCallback("transmitInputAction", AnimateLinearProgress);
});

// Animates a clip path for active overlay elements, identified by the "hovered" id
function AnimateLinearProgress(inputAction) {
    const hoveredElement = document.querySelector(".hovered");
    if (hoveredElement) {
        const progressPercent = inputAction.ProgressToClick * 100;
        document.querySelector(":root").style.setProperty("--progress", `${progressPercent}%`);
    }
}

function AddTouchFreeCursor() {
    const cursor = document.createElement("img");
    cursor.src = "./Dot.png";
    cursor.style.position = "absolute";
    cursor.width = 75;
    cursor.height = 75;
    cursor.style.zIndex = "1001";

    // This is a special class used by the WebInputController to identify the html elements that
    // make up the cursor. This is so it can ignore cursor-related objects when it is looking
    // for elements to pointerover/pointerout etc.
    cursor.classList.add("touchfreecursor");

    document.body.appendChild(cursor);

    new touchfree.DotCursor(cursor, document.createElement("img"));
}

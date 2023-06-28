window.onload = () => {
    // Set up TouchFree
    TouchFree.Init();

    // Add eventListers to all the buttons
    const buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        // When the cursor enters the button then call onHover
        element.addEventListener("pointerenter", () => onHover(element));
        // When the cursor leaves the button then call onUnhover
        element.addEventListener("pointerleave", () => onUnhover(element));

        element.addEventListener("pointerdown", () => onDown(element));
        element.addEventListener("pointerup", () => onUp(element));
    }
};

function onHover(element) {
    // Add "button-hovered" class to the button
    element.classList.add("button--hovered");
}

function onUnhover(element) {
    // Remove "button-hovered" class to the button
    element.classList.remove("button--hovered");
}

function onDown(element) {
    element.classList.add("button--pressed");
    // Change background color
    document.body.style.backgroundColor = element.style.backgroundColor;
}

function onUp(element) {
    element.classList.remove("button--pressed");
}

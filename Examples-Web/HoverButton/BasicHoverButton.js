window.onload = function () {
    // Set up TouchFree
    TouchFree.Connection.ConnectionManager.init();
    new TouchFree.InputControllers.WebInputController();
    // Add basic inbuilt cursor
    new TouchFree.Cursors.SVGCursor();

    // Add eventListers to all the buttons
    const buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        // When the cursor enters the button then call onHover
        element.addEventListener("pointerenter", () => onHover(element));
        // When the cursor leaves the button then call onHover
        element.addEventListener("pointerleave", () => onUnhover(element));

        element.addEventListener("pointerdown", () => onDown(element));
        element.addEventListener("pointerup", () => onUp(element));
    }
};

const onHover = (element) => {
    // Add "button-hovered" class to the button
    element.classList.add("button--hovered");
};

const onUnhover = (element) => {
    // Remove "button-hovered" class to the button
    element.classList.remove("button--hovered");
};

const onDown = (element) => {
    element.classList.add("button--pressed");
    // Change background color
    document.body.style.backgroundColor = element.style.backgroundColor;
};

const onUp = (element) => {
    element.classList.remove("button--pressed");
};

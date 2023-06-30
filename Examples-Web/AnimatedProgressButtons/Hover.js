function onEnter(element) {
    element.classList.add("hovered");
}

function onLeave(element) {
    element.classList.remove("hovered");
    element.classList.remove("active");
}

function onDown(element) {
    document.body.style.backgroundColor = element.style.backgroundColor;

    element.classList.remove("hovered");
    element.classList.add("active");
}

function onUp(element) {
    element.classList.remove("active");
    document.querySelector(":root").style.setProperty("--progress", "0%");
}

window.addEventListener("load", () => {
    const buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener("pointerdown", () => onDown(button));
        button.addEventListener("pointerup", () => onUp(button));
        button.addEventListener("pointerenter", () => onEnter(button));
        button.addEventListener("pointerleave", () => onLeave(button));
    }
});

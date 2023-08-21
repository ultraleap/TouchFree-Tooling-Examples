import "./style.css";
import * as TouchFree from "touchfree";
import { TouchFreeInputAction } from "touchfree";

TouchFree.init();

const COLOR_MAP = [
  "var(--melon)",
  "var(--sunset)",
  "var(--cream)",
  "var(--tea-green)",
  "var(--electric-blue)",
  "var(--jordy-blue)",
  "var(--periwinkle)",
  "var(--mauve)",
  "var(--baby-powder)",
];

let isDark = false;

const dark = document.getElementById("dark");
const label = document.getElementById("label");
const textArea = document.querySelector(
  ".text-container"
) as HTMLDivElement | null;
const root = document.querySelector(":root") as HTMLDivElement | null;

dark?.addEventListener("pointerup", () => {
  if (!label) return;
  if (isDark) {
    root?.style.setProperty("--background-color", "white");
    root?.style.setProperty("--percent", "80%");
    textArea?.style.setProperty("color", "black");
    label.textContent = "Dark";
    isDark = false;
  } else {
    root?.style.setProperty("--background-color", "#5c5c5c");
    root?.style.setProperty("--percent", "50%");
    textArea?.style.setProperty("color", "white");
    label.textContent = "Light";
    isDark = true;
  }
});

function onClick(event: Event) {
  if (!textArea) return;
  const button = event.target as HTMLButtonElement;
  textArea.textContent = button.textContent;
  textArea.style.backgroundColor = button.style.backgroundColor;
  root?.style.setProperty("--display-color", button.style.backgroundColor);
  textArea?.style.setProperty("color", "black");
}

function onPointerEnter(event: Event) {
  const element = event.target as HTMLElement;
  element.classList.add("hovered");
  element.style.transform = "scale(1.1)";
}

function onPointerLeave(event: Event) {
  const element = event.target as HTMLElement;
  element.classList.remove("hovered");
  element.style.transform = "scale(1)";
}

function createButton(index: number, content: "NUM" | "ALPHA") {
  const button = document.createElement("button");
  switch (content) {
    case "NUM":
      button.textContent = (index + 1).toString();
      break;
    case "ALPHA":
      button.textContent = String.fromCharCode(index + 65);
      break;
  }
  button.addEventListener("pointerup", onClick);
  button.addEventListener("pointerenter", onPointerEnter);
  button.addEventListener("pointerleave", onPointerLeave);
  button.style.backgroundColor = COLOR_MAP[index];
  return button;
}

const horizontalContainer = Array.from(
  document.querySelectorAll(".button-container__horizontal")
);

const verticalContainer = Array.from(
  document.querySelectorAll(".button-container__vertical")
);

verticalContainer.forEach((container) => {
  for (let i = 0; i < 8; i++) {
    const button = createButton(i, "NUM");
    container.appendChild(button);
  }
});

horizontalContainer.forEach((container) => {
  for (let i = 0; i < 8; i++) {
    const button = createButton(i, "ALPHA");
    container.appendChild(button);
  }
});

TouchFree.registerEventCallback(
  "transmitInputAction",
  (action: TouchFreeInputAction) => {
    const hovered = document.querySelector(
      ".hovered"
    ) as HTMLButtonElement | null;
    if (!hovered) return;
    hovered.style.transform = `scale(${1.1 - action.ProgressToClick * 0.1})`;
  }
);

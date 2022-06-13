# TouchFree Tooling Examples for Web

Examples of touchless content only possible through using [Touchfree Tooling](https://github.com/ultraleap/TouchFree).

To run this app run `npm start` and open http://localhost:3000 to view it in the browser.

The code of interest is in App.tsx, InteractionButton.tsx and style.css (the rest is boilerplate)

### GIF of working button

![Animated Buttons Showing Progress To Click As A Wave Fill](media/wave-fill.gif)

## Setup

1. Ensure that the [Touchfree](https://github.com/ultraleap/TouchFree) Service is running.
2. Clone the repo and find the example you want to try
3. Run `npm install`
4. Run `npm start` and open http://localhost:3000 to view it in the browser.

This example is best viewed fullscreen.

## Animated Progress Buttons

This example shows a button style that provide visual feedback showing when and where the user is going to interact with the UI. This is achieved through animation applied to the button that reacts to the `ProgressToClick` value provided by TouchFree. The result is a UI that feels connected to the movement of your hand.

### Wave Progress Animation
![Animated Buttons Showing Progress To Click As A Wave Fill](media/wave-fill.gif)

Recommended Interaction: Hover & Hold

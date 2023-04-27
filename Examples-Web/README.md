# TouchFree Tooling Examples for Web

Examples of touchless content only possible through using [TouchFree Web Tooling](https://developer.leapmotion.com/touchfree-tooling-for-web).

## Setup

Wave Progress Button is set up slightly differently as it is a react app. The WaveProgressButton folder contains a readme on how to setup that example.

1. Ensure that the [TouchFree Service](https://docs.ultraleap.com/touchfree-user-manual/#touchfree-service) is running. [Download the installer here](https://developer.leapmotion.com/touchfree).
2. Clone the repo and find the example you want to try
3. Open the include html file in your browser

These examples are best viewed fullscreen.

## Hover Buttons

This example shows you the most basic way to add hover states to your UI using `pointerEnter` and `pointerExit` events.

![Hover Button Example](Media/HoverButtonExample.gif)

Recommended Interaction: AirPush

## Animated Progress Buttons

These examples show button styles that provide visual feedback showing when and where the user is going to interact with the UI. This is achieved through animation applied to the button that reacts to the `ProgressToClick` value provided by TouchFree. The result is a UI that feels connected to the movement of your hand.

### Circular Progress Animation

![Animated Buttons Showing Progress To Click As Expanding Circle](Media/CircularProgressExample.gif)

Recommended Interaction: AirPush

### Linear Progress Animation

![Animated Buttons Showing Progress To Click As Linear Fill](Media/LinearProgressExample.gif)

Recommended Interaction: Hover & Hold

### Wave Progress Animation

![Animated Buttons Showing Progress To Click As A Wave Fill](WaveProgressButton/public/media/wave-fill.gif)

Recommended Interaction: Hover & Hold

### Border Progress Animation

![Animated Buttons Showing Progress To Click As a Gradually Completed Border](BorderProgressButtons/public/BorderProgressExample.gif)

Recommended Interaction: AirPush

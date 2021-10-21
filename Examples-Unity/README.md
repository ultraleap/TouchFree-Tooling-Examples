# TouchFree Tooling Examples for Unity

Examples of touchless content only possible through using [Touchfree Tooling](https://github.com/ultraleap/TouchFree).

## Setup

1. Ensure that the [Touchfree](https://github.com/ultraleap/TouchFree) Service is running.
2. Clone the repo and open the Unity project
4. Open the scene file in the example directory 

These examples are best viewed fullscreen.
Tested with Unity 2019.4.22f1

## Animated Progress Buttons

This example shows a button style that provides visual feedback showing when and where the user is going to interact with the UI. This is achieved through animation applied to the button that reacts to the `ProgressToClick` value provided by TouchFree. The result is a UI that feels connected to the movement of your hand.

![Animated Buttons Showing Progress To Click As A Contracting Circle](Media/ProgressButtons.gif)

Recommended Interaction: AirPush

## Drag based Swipe Detection

This example shows how to trigger a binary operation based on a swiping movement of the cursor. A screen transition is triggered when the user pushes and drags for a set distance in a horizontal direction. 

![Screen transitions triggered by swiping to the left and right](Media/DragSwipe.gif)

Recommended Interaction: AirPush, TouchPlane

Note: Ensure "Scroll and Drag" is enabled in the TouchFree Interaction Settings






# TouchFree Tooling Examples for Web

Examples of touchless content only possible through using [TouchFree Web Tooling](https://developer.leapmotion.com/touchfree-tooling-for-web).

## Setup

Wave Progress and Border Progress Buttons are set up slightly differently as they are React apps. They both contain a readme on how to setup React example.

1. Ensure that the [TouchFree Service](https://docs.ultraleap.com/touchfree-user-manual/#touchfree-service) is running. [Download the installer here](https://developer.leapmotion.com/touchfree).
2. Clone the repo and find the example you want to try
3. Open the include html file in your browser

These examples are best viewed fullscreen.

### TouchFree Web Tooling Integration

Several examples use a bundled version of tooling while others reference the [TouchFreeWebTooling GitHub](https://github.com/ultraleap/TouchFreeWebTooling) as an npm package dependency. When integrating the tooling into your own project there are a couple of ways we recommend:

1. JS Bundle
   - A single `TouchFree_Tooling.js` bundle file available as a [download on the Ultraleap website](https://developer.leapmotion.com/touchfree-tooling-for-web).
   - Steps to add this to a website are shown in the [documentation site](https://docs.ultraleap.com/touchfree-user-manual/tooling-for-web.html#add-touchfree-tooling-in-one-minute).
2. Integrating with Git URL
   - Use TouchFree Web Tooling as an NPM package retrieved from the [GitHub repository](https://github.com/ultraleap/TouchFreeWebTooling). See [npm install docs](https://docs.npmjs.com/cli/v9/commands/npm-install) for more details about installing from git url.
3. NPM Workspace with Git Submodule
   - Create a root package.json in a project folder (above both the submodule and your project) and add your project’s package.json and TouchFree Web Tooling package.json as workspaces within. See the [official npm workspaces docs](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true) for more details.
   - NOTE: Webpack doesn't seem to work with this method

## QuickStart

This example is a basic application that demonstrates key features of TouchFree.

![Quick Start Example](Media/QuickStartExample.gif)

Recommended Interaction: AirPush

## Hover Buttons

This example shows you the most basic way to add hover states to your UI using `pointerEnter` and `pointerExit` events.

![Hover Button Example](Media/HoverButtonExample.gif)

Recommended Interaction: AirPush

## Depth

This example shows you how to add depth to your content using `distanceFromScreen`.

![Depth Example](Media/DepthExample.gif)

Recommended Interaction: Any!

## Animated Progress Buttons

These examples show button styles that provide visual feedback showing when and where the user is going to interact with the UI. This is achieved through animation applied to the button that reacts to the `ProgressToClick` value provided by TouchFree. The result is a UI that feels connected to the movement of your hand.

### Circular Progress Animation

![Animated Buttons Showing Progress To Click As Expanding Circle](Media/CircularProgressExample.gif)

Recommended Interaction: AirPush

### Linear Progress Animation

![Animated Buttons Showing Progress To Click As Linear Fill](Media/LinearProgressExample.gif)

Recommended Interaction: Hover & Hold

### Wave Progress Animation

![Animated Buttons Showing Progress To Click As A Wave Fill](Media/WaveFill.gif)

Recommended Interaction: Hover & Hold

### Border Progress Animation

![Animated Buttons Showing Progress To Click As a Gradually Completed Border](Media/BorderProgressExample.gif)

Recommended Interaction: AirPush

## Analytics

This example demonstrates how to begin and end analytics sessions from TouchFree Web Tooling. This is an "opt in" feature and will only run when triggered via Web Tooling as part of an application.

The output of the analytics recording can be found in csv files in this location: `C:\ProgramData\Ultraleap\TouchFree\AnalyticsSessions`

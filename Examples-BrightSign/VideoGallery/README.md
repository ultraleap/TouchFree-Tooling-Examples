# Creating a BrightSign presentation that is interactive using TouchFree

This example uses BrightAuthor:connected and is set up for the XC2055.

## BrightAuthor presentation

The BrightAuthor presentation is created in three parts:

-   The video layer - This contains the main presentation content
-   The HTML layer - This contains the TouchFree tooling and buttons
-   The Hand status layer - This handles status information about whether hands are detected as present by TouchFree

### The video layer

The video layer has a few different states:

-   No one detected as present - This is just a loop of the videos with a Call to Interact
    -   When a user is detected it transitions to the user detected state
-   User detected, interactive options shown - This shows a simple menu where the user can select a video to play
    -   If a video is selected then it transitions to the Video Selected state
    -   If no user is detected for 7 seconds then it transitions back to the no one detected state
-   Video selected - This plays the video selected in the interactive screen (there are actually 3 of these, one for each video)
    -   If a user is detected then it transitions back to the user detected menu screen
    -   If no user is detected at the end of the video it transitions back to the no one detected state

### The HTML layer

The HTML layer contains the integration with TouchFree. This uses [TouchFree Tooling for Web](https://docs.ultraleap.com/touchfree-user-manual/tooling-for-web.html), follow this link if you would like further information.
This connects to the TouchFree service and receives messages about hand state and inputs from hands.
On receipt of these messages we handle the interactions using a simple HTML UI which contains 3 buttons.
The buttons are styled with previews of the videos that the user can select to play.
On selection of a video we send a message to the BrightAuthor presentation via UDP messaging. This is handled by the "User Detected" state of the video layer.
We also send messages to the BrightAuthor presentation on hands lost and hand found events, allowing the handling of these events by the hand status layer.

There are a few implementation specific bits of javascript for this presentation.

There is a plugin that is added to the TouchFree tooling that forces any hand position to effectively appear at a vertical position of 100px.
This is to handle the fact that the HTML layer is only 1/3 of the height of the screen.
The HTML layer being restricted in size is to improve performance as it limits the size of the HTML layer that is rendered.

There is also some custom styling for the size of the buttons.
This allows us to handle the progress to click in a way that is clear to user and animate the buttons in a visually pleasant way.
We also swap the images on the button to a gif when hovered to give a preview of the video that will play.

#### Designing the HTML layer for TouchFree interaction

To make it easier to interact using TouchFree we recommend having large buttons with minimal space between them.
We made it so that the buttons fill all of the available space and visually appear to be smaller. Making it so that the user cannot click anywhere other than on one of the buttons.
To improve tracking reliability we also placed the interactive HTML layer in the bottom half of the screen as reliability improves where the zone that users are attempting to interact in is between 25cm and 75cm from the camera and we assumed the physical configuration would have the camera in a Screentop set up.

### The Hand status layer

The Hand status layer handles the hand detection and allows recording a delayed hand loss state.
This has three different states that also send some messages to the presentation and receive messages from the HTML layer:

No Hands for over 7 seconds

-   On hands detected from the HTML layer go to hands detected state and send "hands_found" message

Hands detected

-   On hands lost from the HTML layer go to hands lost state and send "hands_lost" message

Hands lost

-   On hands found from the HTML layer go to hands detected state and send "hands_found" message
-   After 7 seconds go to No hands for 7 seconds state and send "hands_lost_extended" message

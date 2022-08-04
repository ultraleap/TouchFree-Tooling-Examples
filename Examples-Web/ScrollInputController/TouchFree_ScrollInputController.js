const InteractionType = TouchFree.TouchFreeToolingTypes.InteractionType;

class WebClickScrollInputController extends TouchFree.InputControllers.WebInputController {

    constructor() {
        super();
        this.interactionType = -1;
        this.pointerDownElement = null;
        this.cancelUpDueToScrolling = false;

        this.scrollTarget;
        this.scrollDownPos;
        this.scrollLeftDownPos;
        this.scrollTopDownPos;
        this.scrollDownHandler;

        this.scrollDistanceThreshold = 25;

        TouchFree.Connection.ConnectionManager.AddConnectionListener(() => {
            TouchFree.Configuration.ConfigurationManager.RequestConfigState(function(state) {
                this.interactionType = state.interaction.InteractionType;
            }.bind(this));
        });
    }

    HandleInputAction(_inputData) {
        let invertedCursorPos = [_inputData.CursorPosition[0], _inputData.CursorPosition[1]];
        let elementAtPos = this.GetTopNonCursorElement(invertedCursorPos);
        this.activeEventProps.clientX = invertedCursorPos[0];
        this.activeEventProps.clientY = invertedCursorPos[1];

        switch (_inputData.InputType) {
            case TouchFree.TouchFreeToolingTypes.InputType.CANCEL:
                let cancelEvent = new PointerEvent("pointercancel", this.activeEventProps);
                if (elementAtPos !== null) {
                    let parentTree = this.GetOrderedParents(elementAtPos);
                    parentTree.forEach((parent) => {
                        if (parent !== null) {
                            parent.dispatchEvent(cancelEvent);
                        }
                    });
                }
                if (this.pointerDownElement !== null) {
                    this.pointerDownElement.dispatchEvent(cancelEvent);
                    this.pointerDownElement = null;
                }
                break;
            case TouchFree.TouchFreeToolingTypes.InputType.MOVE:
                this.HandleMove(elementAtPos);
                break;
            case TouchFree.TouchFreeToolingTypes.InputType.DOWN:
                let downEvent = new PointerEvent("pointerdown", this.activeEventProps);
                this.DispatchToTarget(downEvent, elementAtPos);
                this.pointerDownElement = elementAtPos;
                this.cancelUpDueToScrolling = false;
                break;
            case TouchFree.TouchFreeToolingTypes.InputType.UP:
                this.dispatchUp(elementAtPos);
                break;
        }
    }

    dispatchUp(elementAtPos) {
        let upEvent = new PointerEvent("pointerup", this.activeEventProps);
        this.DispatchToTarget(upEvent, elementAtPos);
        if (!this.cancelUpDueToScrolling) {
            if (elementAtPos !== null) {
                let clickEvent = new PointerEvent("click", this.activeEventProps);
                this.DispatchToTarget(clickEvent, elementAtPos);
            }
        }
        this.cancelUpDueToScrolling = false;
    }

    registerScrollableElement(elementToScroll) {
        //console.log("Register scroll element: " + elementToScroll);
        this.scrollDownHandler = (e) => {
          this.onScrollDown(e, elementToScroll);
        };
        if (elementToScroll === null) {
            return;
        }
        elementToScroll.addEventListener("pointerdown", this.scrollDownHandler, true);
    }
    
    unregisterScrollableElement(elementToScroll) {
        //console.log("Unregister scroll element: " + elementToScroll);
        if (elementToScroll === null) {
            return;
        }
        elementToScroll.removeEventListener("pointerdown", this.scrollDownHandler);
    }

    onScrollDown = (e, elementToScroll) => {
        //console.log("DOWN");
        if (e.pointerType == "touch") {
            console.log("touch detected, exit gesture scroll");
            return;
        }
        this.scrollDownPos = [e.clientX, e.clientY];
        this.scrollLeftDownPos = elementToScroll.scrollLeft;
        this.scrollTopDownPos = elementToScroll.scrollTop;

        this.scrollTarget = elementToScroll;
        document.addEventListener("pointermove", this.globalScrollMove);
        document.addEventListener("pointerup", this.globalScrollUp);
        document.addEventListener("pointercancel", this.globalScrollCancel);
    }

    globalScrollMove = (e) => {
        //console.log("MOVE");
        let newMovePos = [e.clientX, e.clientY];
        let diffX = newMovePos[0] - this.scrollDownPos[0];
        let diffY = newMovePos[1] - this.scrollDownPos[1];

        let mag = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
        if (mag > this.scrollDistanceThreshold) {
            this.cancelUpDueToScrolling = true;
            let newScrollLeft = this.scrollLeftDownPos - diffX;
            let newScrollTop = this.scrollTopDownPos - diffY;
            this.scrollTarget.scroll(newScrollLeft, newScrollTop);
        }
    }

    globalScrollUp = (e) => {
        //console.log("UP");
        this.scrollTarget = null;
        document.removeEventListener("pointermove", this.globalScrollMove);
        document.removeEventListener("pointerup", this.globalScrollUp);
    }

    globalScrollCancel = (e) => {
        //console.log("CANCEL");
        this.scrollTarget = null;
        document.removeEventListener("pointermove", this.globalScrollMove);
        document.removeEventListener("pointerup", this.globalScrollUp);
    }
}

const InteractionType = TouchFree.TouchFreeToolingTypes.InteractionType;

class FocusInputController extends TouchFree.InputControllers.WebInputController {

    HandleEnterLeaveBehaviour(_element) {
        let oldParents = this.GetOrderedParents(this.lastHoveredElement);
        let newParents = this.GetOrderedParents(_element);
        let highestCommonIndex = this.GetCommonAncestorIndex(oldParents, newParents);
        let leaveEvent = new PointerEvent("pointerleave", this.activeEventProps);
        let enterEvent = new PointerEvent("pointerenter", this.activeEventProps);
        if (highestCommonIndex === null) {
            oldParents.forEach((parentNode) => {
                parentNode === null || parentNode === void 0 ? void 0 : parentNode.dispatchEvent(leaveEvent);
            });
            newParents.forEach((parentNode) => {
                parentNode === null || parentNode === void 0 ? void 0 : parentNode.dispatchEvent(enterEvent);
            });
        }
        else {
            oldParents.slice(highestCommonIndex).forEach((parentNode) => {
                if (parentNode === null || parentNode === void 0) {
                    void 0;
                }
                else {
                    parentNode.dispatchEvent(leaveEvent);
                    // Remove focus from the element.
                    parentNode.blur();
                }
            });
            newParents.slice(highestCommonIndex).forEach((parentNode) => {
                if (parentNode === null || parentNode === void 0) {
                    void 0;
                }
                else {
                    parentNode.dispatchEvent(enterEvent);
                    // Focus the element.
                    parentNode.focus();
                }
            });
        }
    }
}
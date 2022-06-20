TouchFree.Connection.ConnectionManager.init();
const InputTypes = TouchFree.TouchFreeToolingTypes.InputType;
const InteractionTypes = TouchFree.TouchFreeToolingTypes.InteractionType;

window.onload = function () {
    AddTouchFreeCursor();
    new TouchFree.InputControllers.WebInputController();
}

function AddTouchFreeCursor()
{
    var cursor = document.createElement('img');
    cursor.src = "./images/CursorFillNoTail.png";
    cursor.style.position = "absolute";
    cursor.width = 150;
    cursor.height = 150;
    cursor.style.zIndex = "9001";
    cursor.style.transform = "rotate(-30deg)";
    cursor.style.transformOrigin = "50% 0%";
    cursor.style.transform = "translate(-50%, 0%) rotate(-30deg)";

    var cursorBorder = document.createElement('img');
    cursorBorder.src = "./images/CursorBorderBlackNoTail.png";
    cursorBorder.style.position = "absolute";
    cursorBorder.width = 150;
    cursorBorder.height = 150;
    cursorBorder.style.zIndex = "9003";
    cursorBorder.style.transform = "rotate(-30deg)";
    cursorBorder.style.transformOrigin = "50% 0%";
    cursorBorder.style.transform = "translate(-50%, 0%) rotate(-30deg)";

    var cursorFill = document.createElement('img');
    cursorFill.src = "./images/CursorFillBlackNoTail.png";
    cursorFill.style.position = "absolute";
    cursorFill.width = 150;
    cursorFill.height = 150;
    cursorFill.style.zIndex = "9002";
    cursorFill.style.transform = "rotate(-30deg)";
    cursorFill.style.transformOrigin = "50% 0%";
    cursorFill.style.transform = "translate(-50%, 0%) rotate(-30deg)";

    // This is a special class used by the WebInputController to identify the html elements that
    // make up the cursor. This is so it can ignore cursor-related objects when it is looking
    // for elements to pointerover/pointerout etc.
    cursor.classList.add('touchfreecursor');
    cursorBorder.classList.add('touchfreecursor');
    cursorFill.classList.add('touchfreecursor');

    document.body.appendChild(cursor);
    document.body.appendChild(cursorBorder);
    document.body.appendChild(cursorFill);

    var dotCursor = new SystemCursor(cursor, cursorBorder, cursorFill);
}

var cursorBorder;
var cursorFill;

class SystemCursor extends TouchFree.Cursors.TouchlessCursor
{
    constructor(_cursor, _cursorBorder, _cursorFill) {
        super(_cursor);
        this.cursorBorder = _cursorBorder;
        this.cursorFill = _cursorFill;
		
        this.animationUpdateDuration = (1 / 30) * 1000;
        this.fadeOutDelayMs = 500;
        this.currentFadingInterval = -1;
        this.fadeOutDelayTimeout = -1;
        this.opacity = 0.0;

        this.FadeCursorOut();

        TouchFree.Connection.ConnectionManager.instance.addEventListener('HandFound', this.ShowCursor.bind(this));
        TouchFree.Connection.ConnectionManager.instance.addEventListener('HandsLost', this.HideCursor.bind(this));
    }

    UpdateCursor(_inputAction) {
        let left = _inputAction.CursorPosition[0] + "px";
        let top = (window.innerHeight - _inputAction.CursorPosition[1]) + "px";
        this.cursor.style.left = this.cursorBorder.style.left = this.cursorFill.style.left = left;
        this.cursor.style.top = this.cursorBorder.style.top = this.cursorFill.style.top = top;
        this.cursorFill.style.clipPath = "inset(" + (100 - (_inputAction.ProgressToClick * 100)).toString() + "% 0% 0% 0%)";
    }
	
    ShowCursor() {
        clearTimeout(this.fadeOutDelayTimeout);
        clearInterval(this.currentFadingInterval);
        this.currentFadingInterval = setInterval(this.FadeCursorIn.bind(this), this.animationUpdateDuration);
    }

    HideCursor() {
        this.fadeOutDelayTimeout = setTimeout(() => {
            clearTimeout(this.fadeOutDelayTimeout);
            clearInterval(this.currentFadingInterval);
            this.currentFadingInterval = setInterval(this.FadeCursorOut.bind(this), this.animationUpdateDuration);
        }, this.fadeOutDelayMs);
    }

    FadeCursorIn() {
        this.opacity += 0.05;
        if (this.opacity >= 1) {
            this.opacity = 1;
            clearInterval(this.currentFadingInterval);
            this.currentFadingInterval = -1;
        }
        this.ApplyOpacity([this.cursor, this.cursorBorder, this.cursorFill]);
    }

    FadeCursorOut() {
        this.opacity -= 0.05;
        if (this.opacity <= 0) {
            this.opacity = 0;
            clearInterval(this.currentFadingInterval);
            this.currentFadingInterval = -1;
        }
        this.ApplyOpacity([this.cursor, this.cursorBorder, this.cursorFill]);
    }

    ApplyOpacity(elementArray) {
        for (let i = 0; i < elementArray.length; i++) {
            elementArray[i].style.opacity = this.opacity;
        }
    }
}
TouchFree.Connection.ConnectionManager.init();
const InputTypes = TouchFree.TouchFreeToolingTypes.InputType;
const InteractionTypes = TouchFree.TouchFreeToolingTypes.InteractionType;

window.onload = function () {
    AddTouchFreeCursor();
    new TouchFree.InputControllers.WebInputController();

    TouchFree.Connection.ConnectionManager.AddConnectionListener(() => {
        new LinearProgress();
        });
}

function AddTouchFreeCursor()
{
    var cursor = document.createElement('img');
    cursor.src = "./images/CursorFillNoTail.png";
    cursor.style.position = "absolute";
    cursor.width = 150;
    cursor.height = 150;
    cursor.style.zIndex = "1001";
    cursor.style.transform = "rotate(-30deg)";

    var cursorBorder = document.createElement('img');
    cursorBorder.src = "./images/CursorBorderBlackNoTail.png";
    cursorBorder.style.position = "absolute";
    cursorBorder.width = 150;
    cursorBorder.height = 150;
    cursorBorder.style.zIndex = "1003";
    cursorBorder.style.transform = "rotate(-30deg)";

    var cursorFill = document.createElement('img');
    cursorFill.src = "./images/CursorFillBlackNoTail.png";
    cursorFill.style.position = "absolute";
    cursorFill.width = 150;
    cursorFill.height = 150;
    cursorFill.style.zIndex = "1002";
    cursorFill.style.transform = "rotate(-30deg)";

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
    }

    UpdateCursor(_inputAction) {
        this.cursorBorder.style.left = (_inputAction.CursorPosition[0] - (this.cursor.clientWidth / 2)) + "px";
        this.cursorBorder.style.top = (window.innerHeight - (_inputAction.CursorPosition[1] + (this.cursor.clientHeight / 2))) + "px";

        this.cursorFill.style.left = (_inputAction.CursorPosition[0] - (this.cursor.clientWidth / 2)) + "px";
        this.cursorFill.style.top = (window.innerHeight - (_inputAction.CursorPosition[1] + (this.cursor.clientHeight / 2))) + "px";
        this.cursorFill.style.clipPath = "inset(" + (100 - (_inputAction.ProgressToClick * 100)).toString() + "% 0% 0% 0%)";

        super.UpdateCursor(_inputAction);
    }
}
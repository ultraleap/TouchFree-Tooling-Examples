TouchFree.Connection.ConnectionManager.init();

window.onload = function () {
    new TouchFree.InputControllers.WebInputController();

    TouchFree.Connection.ConnectionManager.AddConnectionListener(() => {
        AddTouchFreeCursor();
    });
}

const rotateAmount = 10; // deg
const squishScale = 1;

function HandleInputAction(e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.detail.CursorPosition[0] - rect.left;
    var y = (window.innerHeight - e.detail.CursorPosition[1]) - rect.top;

    var squishXAmount = 0;
    var squishYAmount = 0;

    var halfWidth = rect.width / 2;
    var halfHeight = rect.height / 2;

    if (x < halfWidth)
    {
        squishXAmount = -1 * rotateAmount * (1 - (x / halfWidth));
    } else {
        squishXAmount = rotateAmount * ((x - halfWidth) / halfWidth);
    }

    if (y < halfHeight)
    {
        squishYAmount = rotateAmount * (1 - (y / halfHeight));
    } else {
        squishYAmount = -1 * rotateAmount * ((y - halfHeight) / halfHeight);
    }

    let progressScalingFactor = 1 + (e.detail.ProgressToClick * squishScale);

    squishXAmount *= progressScalingFactor;
    squishYAmount *= progressScalingFactor;

    e.target.style.transform = `perspective(1000px) rotateX(${squishYAmount}deg) rotateY(${squishXAmount}deg)`;
}

function AddTouchFreeCursor()
{
    var cursorRing = document.createElement('img');
    var cursor = document.createElement('img');
    cursor.src = "./images/Dot.png";
    cursor.style.position = "absolute";
    cursor.width = 50;
    cursor.height = 50;
    cursor.style.zIndex = "1001";

    // This is a special class used by the WebInputController to identify the html elements that
    // make up the cursor. This is so it can ignore cursor-related objects when it is looking
    // for elements to pointerover/pointerout etc.
    cursor.classList.add('touchfreecursor');
    cursorRing.classList.add('touchfreecursor');

    document.body.appendChild(cursor);
    document.body.appendChild(cursorRing);

    var dotCursor = new TouchFree.Cursors.DotCursor(cursor, cursorRing);
}
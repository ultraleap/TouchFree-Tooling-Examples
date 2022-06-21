TouchFree.Connection.ConnectionManager.init();
const InputTypes = TouchFree.TouchFreeToolingTypes.InputType;
const InteractionTypes = TouchFree.TouchFreeToolingTypes.InteractionType;

window.onload = function () {
    AddTouchFreeCursor();
    new TouchFree.InputControllers.WebInputController();
}

function AddTouchFreeCursor()
{
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.width = "150px";
    container.style.height = "150px";
    container.style.zIndex = "9000";

    const cursor = document.createElement('img');
    cursor.src = "./images/CursorFillNoTail.png";
    cursor.style.position = "absolute";
    cursor.width = 150;
    cursor.height = 150;
    cursor.style.zIndex = "9001";
    cursor.style.transform = "rotate(-30deg)";
    cursor.style.transformOrigin = "50% 0%";
    cursor.style.transform = "translate(-50%, 0%) rotate(-30deg)";

    const cursorBorder = document.createElement('img');
    cursorBorder.src = "./images/CursorBorderBlackNoTail.png";
    cursorBorder.style.position = "absolute";
    cursorBorder.width = 150;
    cursorBorder.height = 150;
    cursorBorder.style.zIndex = "9003";
    cursorBorder.style.transform = "rotate(-30deg)";
    cursorBorder.style.transformOrigin = "50% 0%";
    cursorBorder.style.transform = "translate(-50%, 0%) rotate(-30deg)";

    const cursorFill = document.createElement('img');
    cursorFill.src = "./images/CursorFillBlackNoTail.png";
    cursorFill.style.position = "absolute";
    cursorFill.width = 150;
    cursorFill.height = 150;
    cursorFill.style.zIndex = "9002";
    cursorFill.style.transform = "rotate(-30deg)";
    cursorFill.style.transformOrigin = "50% 0%";
    cursorFill.style.transform = "translate(-50%, 0%) rotate(-30deg)";

    const source = document.createElement("source");
    source.setAttribute('src', './ctis/Scroll_lite.mp4');
    source.setAttribute('type', 'video/mp4');

    const video = document.createElement("video");
    video.setAttribute("width", "300px");
    video.setAttribute("height", "300px");
    video.setAttribute('loop', "true");
    video.style.borderRadius = "5%";
    video.style.transform = "translate(50%, 0%)";
    video.style.zIndex = "9004";
    video.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
    video.muted = true;
    video.appendChild(source);
    video.classList.add('hidden');

    //cti.appendChild(video);

    // Create style to fade-in/fade-out the CTI
    const style = document.createElement('style');
    style.textContent = `
        video:not(.hidden), :host(.touchfreecursor:not(.hidden)) {
            opacity: 1;
            transition: opacity 0.5s;
        }
        .hidden, :host(.touchfreecursor.hidden) {
            opacity: 0;
            transition: opacity 0.5s;
        }
    `;

    // This is a special class used by the WebInputController to identify the html elements that
    // make up the cursor. This is so it can ignore cursor-related objects when it is looking
    // for elements to pointerover/pointerout etc.
    [
        cursor,
        cursorBorder,
        cursorFill,
        video,
        container
    ].forEach(el => el.classList.add('touchfreecursor'));

    document.body.appendChild(container);

    // Create shadow root DOM. This allows an isolation of the style
    const shadow = container.attachShadow({mode: 'open'});
    shadow.appendChild(style);
    shadow.appendChild(cursor);
    shadow.appendChild(cursorBorder);
    shadow.appendChild(cursorFill);
    shadow.appendChild(video);

    const dotCursor = new SystemCursor(cursorFill, container, video, source);
}

class SystemCursor extends TouchFree.Cursors.TouchlessCursor
{
    constructor(_cursorFill, _container, _video, _source) {
        super(_container);
        this.cursorFill = _cursorFill;
        this.video = _video;
        this.source = _source;

        this.HideCursor();

        this.timeOut = null;
        this.ctiShown = false;

        TouchFree.Connection.ConnectionManager.instance.addEventListener('HandFound', this.ShowCursor.bind(this));
        TouchFree.Connection.ConnectionManager.instance.addEventListener('HandsLost', this.HideCursor.bind(this));
    }

    UpdateCursor(_inputAction) {
        this.cursor.style.left = `${_inputAction.CursorPosition[0]}px`;
        this.cursor.style.top = `${window.innerHeight - _inputAction.CursorPosition[1]}px`;
        this.cursorFill.style.clipPath = "inset(" + (100 - (_inputAction.ProgressToClick * 100)).toString() + "% 0% 0% 0%)";
    }

    HandleInputAction(_inputData) {
        this.UpdateCursor(_inputData);
        switch (_inputData.InputType) {
            case TouchFree.TouchFreeToolingTypes.InputType.MOVE:
                break;
            case TouchFree.TouchFreeToolingTypes.InputType.DOWN:
                this.ResetTimeout();
                break;
            case TouchFree.TouchFreeToolingTypes.InputType.UP:
                break;
            case TouchFree.TouchFreeToolingTypes.InputType.CANCEL:
                break;
        }
    }

    ShowCursor() {
        this.timeOut = setTimeout(this.ShowCTI.bind(this), 8000);
        this.cursor.classList.remove("hidden");
    }

    HideCursor() {
        if (this.timeOut) {
            clearTimeout(this.timeOut);
            this.timeOut = null;
        }
        if (this.ctiShown) {
            this.HideCTI();
        }
        this.cursor.classList.add("hidden");
    }

    ShowCTI() {
        this.ctiShown = true;
        this.video.classList.remove('hidden');
        this.video.play();
    }

    HideCTI() {
        this.ctiShown = false;
        this.video.classList.add('hidden');
        this.video.pause();
        this.video.currentTime = 0;
    }

    ResetTimeout() {
        if (this.timeOut) {
            clearTimeout(this.timeOut);
            this.timeOut = null;
        }
        if (this.ctiShown) {
            this.HideCTI();
        }
        this.timeOut = setTimeout(this.ShowCTI.bind(this), 8000);
    }

    SetVideoSource(src, type) {
        this.source.setAttribute('src', src);
        this.source.setAttribute('type', type);
    }
}
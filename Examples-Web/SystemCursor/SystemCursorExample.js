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

    const cti = document.createElement("div");
    cti.style.width = `300px`;
    cti.style.height = `300px`;
    cti.style.backgroundColor = "blue";
    cti.style.zIndex = "9004";
    cti.style.opacity = "0";
    cti.style.transform = "translate(50%, 0%)";
    cti.style.borderRadius = "5%";
    cti.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";

    const video = document.createElement("video");
    video.setAttribute("width", "100%");
    video.setAttribute("height", "100%");
    video.setAttribute('loop', "true");
    video.style.borderRadius = "5%";
    video.muted = true;

    const source = document.createElement("source");
    source.setAttribute('src', './ctis/Scroll_lite.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    cti.appendChild(video);

    // This is a special class used by the WebInputController to identify the html elements that
    // make up the cursor. This is so it can ignore cursor-related objects when it is looking
    // for elements to pointerover/pointerout etc.
    cursor.classList.add('touchfreecursor');
    cursorBorder.classList.add('touchfreecursor');
    cursorFill.classList.add('touchfreecursor');
    cti.classList.add('touchfreecursor');
    container.classList.add('touchfreecursor');

    container.appendChild(cursor);
    container.appendChild(cursorBorder);
    container.appendChild(cursorFill);
    container.appendChild(cti);

    document.body.appendChild(container);

    var dotCursor = new SystemCursor(cursorFill, cti, container, video, source);
}

class SystemCursor extends TouchFree.Cursors.TouchlessCursor
{
    constructor(_cursorFill, _cti, _container, _video, _source) {
        super(_container);
        this.cursorFill = _cursorFill;
        this.cti = _cti;
        this.video = _video;
        this.source = _source;

        this.animationUpdateDuration = (1 / 30) * 1000;
        this.fadeOutDelayMs = 500;
        this.currentFadingInterval = -1;
        this.fadeOutDelayTimeout = -1;
        this.opacity = 0.0;

        this.FadeCursorOut();

        this.timeOut = null;
        this.ctiShown = false;

        TouchFree.Connection.ConnectionManager.instance.addEventListener('HandFound', this.ShowCursor.bind(this));
        TouchFree.Connection.ConnectionManager.instance.addEventListener('HandsLost', this.HideCursor.bind(this));
    }

    UpdateCursor(_inputAction) {
        let left = _inputAction.CursorPosition[0] + "px";
        let top = (window.innerHeight - _inputAction.CursorPosition[1]) + "px";
        this.cursor.style.left = left;
        this.cursor.style.top = top;
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
        clearTimeout(this.fadeOutDelayTimeout);
        clearInterval(this.currentFadingInterval);
        this.currentFadingInterval = setInterval(this.FadeCursorIn.bind(this), this.animationUpdateDuration);

        this.timeOut = setTimeout(this.ShowCTI.bind(this), 8000);
    }

    HideCursor() {
        this.fadeOutDelayTimeout = setTimeout(() => {
            clearTimeout(this.fadeOutDelayTimeout);
            clearInterval(this.currentFadingInterval);
            this.currentFadingInterval = setInterval(this.FadeCursorOut.bind(this), this.animationUpdateDuration);
        }, this.fadeOutDelayMs);

        if (this.timeOut) {
            clearTimeout(this.timeOut);
            this.timeOut = null;
        }
        if (this.ctiShown) {
            this.HideCTI();
        }
    }

    FadeCursorIn() {
        this.opacity += 0.05;
        if (this.opacity >= 1) {
            this.opacity = 1;
            clearInterval(this.currentFadingInterval);
            this.currentFadingInterval = -1;
        }
        this.ApplyOpacity([this.cursor]);
    }

    FadeCursorOut() {
        this.opacity -= 0.05;
        if (this.opacity <= 0) {
            this.opacity = 0;
            clearInterval(this.currentFadingInterval);
            this.currentFadingInterval = -1;
        }
        this.ApplyOpacity([this.cursor]);
    }

    ApplyOpacity(elementArray) {
        for (let i = 0; i < elementArray.length; i++) {
            elementArray[i].style.opacity = this.opacity;
        }
    }

    ShowCTI() {
        this.ctiShown = true;
        this.cti.style.opacity = "1";
        this.video.play();
    }

    HideCTI() {
        this.ctiShown = false;
        this.cti.style.opacity = "0";
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
TouchFree.Connection.ConnectionManager.init();
const InputTypes = TouchFree.TouchFreeToolingTypes.InputType;
const InteractionTypes = TouchFree.TouchFreeToolingTypes.InteractionType;


window.onload = function () {
    new TouchFree.InputControllers.WebInputController();
    
    TouchFree.Connection.ConnectionManager.AddConnectionListener(() => {
        new SwipeChevrons();
        });
}

class SwipeChevrons
{
    constructor()
    {
        // Set up the button progress event handler
        TouchFree.Plugins.InputActionManager._instance.addEventListener("TransmitInputAction", (inputAction) => {this.UpdateCursor(inputAction);}, false);
        this.dragging=false;
        this.canvas = this.CreateCursor();
        this.ctx = this.canvas.getContext("2d");
        this.previousAction = null;
        this.maxVelocity = 8000;
    }

    CreateCursor(){
        if (!document.getElementById("Cursor"))
        {
            var canvasNode = document.createElement("canvas");
            canvasNode.height = '200';
            canvasNode.width = '200';
            canvasNode.style.position = 'absolute';
            canvasNode.style.pointerEvents = 'none';
            canvasNode.id = "Cursor";
            document.body.append(canvasNode);
            return canvasNode;
        }
        else
        {
            return document.getElementById("Cursor");
        }
    }

    // Animates a clip path for active overlay elements, identified by the "hovered" id
    UpdateCursor(inputAction) {
        if (inputAction.detail.InputType === InputTypes.DOWN)
        {
            this.dragging = true;
            console.log("Down");
            this.DrawCursorRing({ProgressToClick:1.1, velocityX:0, velocityY:0});
        }
        else if (inputAction.detail.InputType === InputTypes.UP)
        {
            this.dragging = false;
        }

        if (inputAction.detail.InputType === InputTypes.MOVE)
        {
            this.canvas.style.left = (inputAction.detail.CursorPosition[0] - (this.canvas.width / 2)) + "px";
            this.canvas.style.top = (inputAction.detail.CursorPosition[1] - (this.canvas.height / 2)) + "px";
            
            let duration = this.previousAction === null ? 0 : inputAction.detail.Timestamp - this.previousAction.Timestamp;
            let velocityX = this.previousAction === null ? 0 : (inputAction.detail.CursorPosition[0] - this.previousAction.CursorPosition[0]) / duration;
            let velocityY = this.previousAction === null ? 0 : (inputAction.detail.CursorPosition[1] - this.previousAction.CursorPosition[1]) / duration;
            
            let params = {
                ProgressToClick: inputAction.detail.ProgressToClick,
                velocityX: velocityX,
                velocityY: velocityY
            }
 
            this.DrawCursorRing(params);
        }

        this.previousAction = structuredClone(inputAction.detail);
    }

    DrawCursorRing(params)
    {
        // Clear the canvas
        this.ctx.clearRect(0,0,200,200);

        // Draw the ring cursor
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#FFFFFF40";
        this.ctx.lineWidth = 10 + ((params.velocityX * this.maxVelocity) * 0.5);
        // this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, 50, 0, 2 * Math.PI);
        
        let mag = Math.sqrt((params.velocityX * params.velocityX) + (params.velocityY * params.velocityY));
        let dot = params.velocityX;
        let angle = params.velocityY > 0 ? Math.acos((dot / mag)): (Math.PI * 2) - Math.acos((dot / mag));
        let spread = Math.min((mag / this.maxVelocity) * 1000000 * Math.PI, 0.45 * Math.PI);
        
        this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, 75, angle - Math.max(0.25,spread), angle + Math.max(0.25,spread));
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#00EEFF80";

        this.ctx.lineWidth = (params.ProgressToClick + 1) * 5;
        this.ctx.arc((this.canvas.width / 2) + (params.velocityX * this.maxVelocity), (this.canvas.height / 2) + (params.velocityY * this.maxVelocity), 15, 0, 2 * Math.PI);

        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = '#FFFFFF80';
        this.ctx.stroke();
        this.ctx.closePath();
    }
}
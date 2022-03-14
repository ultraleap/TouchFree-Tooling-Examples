class BlobCursor{
    static dotRadius = 25;
    static previousVerts;
    static previousPos = [0,0];

    constructor () {
        TouchFree.Plugins.InputActionManager._instance.addEventListener("TransmitInputAction", BlobCursor.AnimateBlob, false);
    }

    static AnimateBlob(inputaction) {
        var overlay = document.getElementById('hovered');
        var blobCanvas = document.getElementById("Cursor");
        var ctx = blobCanvas.getContext("2d");
        var cursorPos = inputaction.detail.CursorPosition;
        var r = document.querySelector(':root');
        var rs  = getComputedStyle(r);

        cursorPos[1] = window.innerHeight - cursorPos[1];
        cursorPos = BlobCursor.Interpolate(BlobCursor.previousPos, inputaction.detail.CursorPosition, 0.5);

        blobCanvas.width = window.innerWidth;
        blobCanvas.height = window.innerHeight;

        
        ctx.fillStyle = "#00000000";
        ctx.fillRect(0,0,blobCanvas.style.width,blobCanvas.style.height);
        ctx.beginPath();
        ctx.fillStyle = '#FFFFFF80';
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = inputaction.detail.ProgressToClick * 10;
        
        var dotRadius = BlobCursor.dotRadius;
        var rectWidth = overlay ? overlay.clientWidth / 2 : dotRadius;
        var rectHeight = overlay ? overlay.clientHeight / 2 : dotRadius;

        var verts = [[rectWidth, rectHeight - dotRadius], [rectWidth - dotRadius, rectHeight], 
        [-rectWidth + dotRadius, rectHeight], [-rectWidth, rectHeight - dotRadius], 
        [-rectWidth,-rectHeight + dotRadius], [-rectWidth + dotRadius,-rectHeight], 
        [rectWidth - dotRadius,-rectHeight], [rectWidth, -rectHeight + dotRadius]];


        if (BlobCursor.previousVerts)
        {
            for (var i = 0; i < verts.length; i++)
            {
                verts[i] = BlobCursor.Interpolate(BlobCursor.previousVerts[i], verts[i], 0.2);
            }
        }
        

        ctx.moveTo(cursorPos[0] + verts[0][0], cursorPos[1] + verts[0][1]);
        ctx.arcTo(cursorPos[0] + verts[0][0], cursorPos[1] + verts[1][1], cursorPos[0] + verts[1][0], cursorPos[1] + verts[1][1], BlobCursor.dotRadius);
        ctx.lineTo(cursorPos[0] + verts[2][0], cursorPos[1] + verts[2][1]);

        ctx.arcTo(cursorPos[0] + verts[3][0], cursorPos[1] + verts[2][1], cursorPos[0] + verts[3][0], cursorPos[1] + verts[3][1], BlobCursor.dotRadius);
        ctx.lineTo(cursorPos[0] + verts[4][0], cursorPos[1] + verts[4][1]);

        ctx.arcTo(cursorPos[0] + verts[4][0], cursorPos[1] + verts[5][1], cursorPos[0] + verts[5][0], cursorPos[1] + verts[5][1], BlobCursor.dotRadius);
        ctx.lineTo(cursorPos[0] + verts[6][0], cursorPos[1] + verts[6][1]);

        ctx.arcTo(cursorPos[0] + verts[7][0], cursorPos[1] + verts[6][1], cursorPos[0] + verts[7][0], cursorPos[1] + verts[7][1], BlobCursor.dotRadius);
        ctx.lineTo(cursorPos[0] + verts[0][0], cursorPos[1] + verts[0][1]);

        ctx.shadowBlur = 20;
        ctx.shadowColor = "white";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        BlobCursor.previousVerts = verts;
        BlobCursor.previousPos = cursorPos;
        
        var progress = (1 - inputaction.detail.ProgressToClick) * 0.4;
        TouchFree.Plugins.InputActionManager.plugins[0].SetSnapSoftness(progress);
    }

    static Interpolate(pointA, pointB, time)
    {
        return [pointA[0] + ((pointB[0] - pointA[0]) * time), pointA[1] + ((pointB[1] - pointA[1]) * time)];
    }
}
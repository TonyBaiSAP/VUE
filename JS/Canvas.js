var Canvas = function() {
    if(this instanceof Canvas) {
        this.oCanvas = document.getElementById("canvas");
        this.oContext = this.oCanvas.getContext("2d");
    } else {
        return new Canvas();
    }
    
}

Canvas.prototype.drawRect = function(sColor, iStart, iEnd, iWidth, iHeight, bClear) {
    this.oContext.fillStyle = sColor;
    if(bClear) {
        this.oContext.strokeRect(iStart, iEnd, iWidth, iHeight);
        this.oContext.clearRect(iStart, iEnd, iWidth, iHeight);
    } else {
        this.oContext.fillRect(iStart, iEnd, iWidth, iHeight);
    }
}

Canvas.prototype.drawLines = function() {
    this.oContext.fillStyle = "#FF0000";
    var aLines = new Array();
    for (let i = 1; i < arguments.length; i++) {
        aLines.push(arguments[i]);
    }
    if (arguments[0]) {
        this.oContext.moveTo(arguments[0][0], arguments[0][1]);
    } else {
        throw new Error("Please set start point");
    }
    
    if(aLines) {
        if (aLines[aLines.length - 1][0] === arguments[0][0]) {
            aLines.forEach(oLine => {
                this.oContext.lineTo(oLine[0], oLine[1]);
            });
        } else {
            throw new Error("This is not closed line");
        }
    } else {
        throw new Error("There are no lines to draw");
    }
    this.oContext.stroke();
}

Canvas.prototype.drawArc = function(x1, y1, x2, y2) {
    this.oContext.fillStyle = "#FF0000";
    this.oContext.beginPath();
    this.oContext.arc(x1, y1, x2, y2, Math.PI * 2, true);
    this.oContext.closePath();
    this.oContext.fill();
}

window.onload = function() {
    var oCanvas = new Canvas();
    oCanvas.drawRect("#FF0000", 0, 0, 150, 75, false);
    oCanvas.drawRect("#FF0000", 1, 200, 150, 75, true);

    oCanvas.drawLines([200, 20], [300, 50], [200, 50]);
    oCanvas.drawArc(200, 200, 50, 0);
}
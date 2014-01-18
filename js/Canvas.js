var Canvas = function(idCanvasDiv, idCanvas, idCanvasAspectRatio, isFullScreen) {
    //This section is similar to the initialize() method from prototypejs.
    this.idCanvasDiv = idCanvasDiv;
    this.idCanvas = idCanvas;
    this.idCanvasAspectRatio = idCanvasAspectRatio;
    this.isFullScreen = isFullScreen;

    //Adding a method to an object
    this.resize = function () {
        var gameArea = $('#'+this.idCanvasDiv)
        var widthToHeight = (($('#'+this.idCanvasAspectRatio).val()=='4/3')?(4/3):(16/9));
        var newWidth = null;
        var newHeight = null;
        if (this.isFullScreen) {
            newWidth = window.innerWidth;
            newHeight = window.innerHeight;
        } else {
            newWidth = gameArea.getMeasuredWidth();
            newHeight = gameArea.getMeasuredHeight();
        }
        var newWidthToHeight = newWidth / newHeight;

        if (newWidthToHeight > widthToHeight) {
            newWidth = newHeight * widthToHeight;
            gameArea.style.height = newHeight + 'px';
            gameArea.style.width = newWidth + 'px';
        } else {
            newHeight = newWidth / widthToHeight;
            gameArea.style.width = newWidth + 'px';
            gameArea.style.height = newHeight + 'px';
        }

        gameArea.style.marginTop = (-newHeight / 2) + 'px';
        gameArea.style.marginLeft = (-newWidth / 2) + 'px';

        var gameCanvas = $('#'+this.idCanvas);
        gameCanvas.width = newWidth;
        gameCanvas.height = newHeight;
    }
}
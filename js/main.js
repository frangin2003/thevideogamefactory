$( document ).ready(function() {
    console.log( "ready!" );

    // Init splitter
    var mySplitter = new Splitter("id_splitter");
    mySplitter.split();

    // Init canvas
    var stage = new createjs.Stage("myCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
});

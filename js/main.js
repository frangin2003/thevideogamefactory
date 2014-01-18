$( document ).ready(function() {
    console.log( "ready!" );

    // Init UI
    var mySplitter = new Splitter("id_splitter");
    mySplitter.split();
    $('#myTab a:first').tab('show');

    // Init canvas
    var stage = new createjs.Stage("myCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();

    // Init canvas settings
    $('#id_canvas_height').on('keyup', function(e) {
        $('#myCanvas').height = $('#id_canvas_height').val();
    });
    $('#id_canvas_width').on('keyup', function(e) {
        $('#myCanvas').width = $('#id_canvas_width').val();
    });
});

$( document ).ready(function() {
    console.log( "ready!" );

    // Init UI
    var mySplitter = new Splitter("id_splitter");
    mySplitter.split();
    $('#myTab a:first').tab('show');
    $('#id_canvas_aspect_ratio').select2();
    $('#id_splitter').on('splitter.resize', function(e) {
        console.log(e);
    });

    // Init canvas settings
    $('#id_canvas_height').on('keyup', function(e) {
        $('#myCanvas').height = $('#id_canvas_height').val();
    });
    $('#id_canvas_width').on('keyup', function(e) {
        $('#myCanvas').width = $('#id_canvas_width').val();
    });

    // Init canvas
    var stage = new createjs.Stage("myCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();

    var myCanvas = new Canvas('id_right', 'myCanvas', 'id_canvas_aspect_ratio', false);


    $(window).resize( myCanvas.resize );
});

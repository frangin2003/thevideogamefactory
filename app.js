Ext.application({
    name: 'HelloExt',
    launch: function() {

        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'tabpanel',
                    id: 'west',
                    region: 'west',
                    collapsible: true,
                    animCollapse: true,
                    layout: 'border',
                    closeAction: "hide",
                    plain: true,
                    modal: true,
                    autoScroll: true,
                    width: '60%',
                    title: '',
                    split: true,
                    header: false,
                    collapseMode: 'mini',
                    dockedItems: [{
                        dock: 'top',
                        xtype: 'toolbar',
                        items: [ '->', {
                            xtype: 'button',
                            text: 'test',
                            tooltip: 'Test Button'
                        }]
                    }],
                    items: [{
                        html: '<p>A TabPanel component can be a region.</p>',
                        title: 'A Tab',
                        autoScroll: true
                    }]
                },
                {

                    region: "center",
                    id:"centerpanel",
                    collapsible: true,
                    animCollapse: true,
                    layout: 'fit',
                    closeAction: "hide",
                    plain: true,
                    modal: true,
                    autoScroll: true,
                    split: true,
                    header: false,
                    collapseMode: 'mini',
                    html: '<canvas id="canvas-game-preview" width="400" height="300">'
                        + 'Sorry, your browser doesn\'t support canvas!!!'
                        + '</canvas>',
                    listeners: {
                        'afterlayout': function(panel, layout, eOpts ) {
                            // Init canvas
                            var stage, sunShape;

                            stage = new createjs.Stage('canvas-game-preview');
                            sunShape = new createjs.Shape();
                            sunShape.graphics.beginFill('#F00');
                            sunShape.graphics.drawCircle(0, 0, 25);
                            sunShape.graphics.endFill();
                            sunShape.x = 25;
                            sunShape.y = 25;
                            stage.addChild(sunShape);
                            createjs.Tween.get(sunShape, {loop: true})
                                .to({x:525, y:375}, 3000)
                                .wait(2000)
                                .to({x:25, y:25}, 3000);
                            createjs.Ticker.setFPS(60);
                            createjs.Ticker.addEventListener("tick", function(e) {
                                stage.update();
                            });

                        }
                    }
                }
            ]
        });
    }
});
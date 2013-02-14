g1.MyGame = ig.Game.extend({

	// Load a font
	//TODO: get font from some external interface
	//ig.game.font1
	font1: new ig.Font( 'media/04b03.font.png' ),

	// btn: 'wait for init',
	
	
	/*
	loadLevel: function( level ) {        
    this.parent( level );
    //ig.hero = ig.game.getEntitiesByType( EntityHero )[0];
	},
*/

	initializeLayers: function() {
		// Setup the necessary order
		this.createLayer('backgroundMaps', {
			clearOnLoad: true,
			mapLayer: true
		});
		
		this.createLayer('entities', {
			clearOnLoad: true,
			entityLayer: true,
			autoSort : this.autoSort,
			sortBy   : this.sortBy,
			_doSortEntities: false
		});
		
		this.createLayer('foregroundMaps', {
			clearOnLoad: true,
			mapLayer: true
		});
		
		this.createLayer('gui');
	},

	init: function() {
		this.initializeLayers();
		// Initialize your game here; bind keys etc.

		//this.loadLevel(LevelA);
		//this.loadLevelDeferred(ig.global['LevelA']);
		//ig.game.loadLevelDeferred(ig.global['LevelA']);
		ig.game.loadLevel(ig.global['LevelA']);



    // // For Mobile Browsers and Ejecta
    // // if( ig.ua.mobile ) {
    // if( true ) {
    // 	var x = 40 * ig.system.scale;
    // 	var y = 48 * ig.system.scale;
    //   var ypos1 = ig.system.height - y*2;
    //   var ypos2 = ig.system.height - y;
    //   this.buttons = [
    //       new ig.TouchButton( 'left',  0, ypos2, x, y, this.buttonImage, 0 ),
    //       new ig.TouchButton( 'right', x, ypos2, x, y, this.buttonImage, 1 )
    //   ];

    // //ig.system.context.fillRect(40, 0, 65, 65);
    // }


    this.addItem(g1.keypad = new g1.Keypad());
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();


		if (g1.cFrame == undefined || g1.cFrame == 0 || g1.cFrame == ig.system.fps) g1.cFrame = 0;
		g1.cFrame++;

		// if (ig.input.state('left')) {
		// 	console.log('left')
		// }

		// this.btn.update();
	}
	,
	draw: function() {
		// // Draw all entities and backgroundMaps
		this.parent();
		// this.btn.draw();
		// // Add your own drawing code here
		// var x = ig.system.width/2+8,
		// 		y = ig.system.height/2-20;
		// //this.font.draw( 'OAK', x, y, ig.Font.ALIGN.CENTER );

    // this.img_arrows.draw(0, 0, [sourceX], [sourceY], [width], [height])
    // this.img_arrows.draw(0, 0);

    // var c = ig.system.context;
    // c.fillStyle = '#ccc';
    // c.strokeStyle = 'black';
    // c.shadowBlur=20;
    // c.shadowColor="black";
    // c.fillRect(50, 50, 300, 100);
    // c.strokeRect(50, 50, 300, 100);
    // c.shadowBlur=0;
    // ig.game.font1.draw( "this.username", 60, 50, ig.Font.ALIGN.CENTER );

    //mlog(ig.input.state('left')+', '+ig.input.pressed('left'))
	}
});
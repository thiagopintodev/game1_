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

    buttons: [],
    buttonImage: new ig.Image( 'media/iphone-buttons.png' ),

	init: function() {
		this.initializeLayers();
		// Initialize your game here; bind keys etc.
		//new FeatureInputBindings();
		FeatureInputBindings.bind();

		//this.loadLevel(LevelA);
		//this.loadLevelDeferred(ig.global['LevelA']);
		//ig.game.loadLevelDeferred(ig.global['LevelA']);
		ig.game.loadLevel(ig.global['LevelA']);

		//this.createLayer()


    // For Desktop Browsers
    ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
    ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );



    // For Mobile Browsers and Ejecta
    // if( ig.ua.mobile ) {
        var ypos = ig.system.height - 48;
        this.buttons = [
            new ig.TouchButton( 'left', 0, ypos, 40, 48, this.buttonImage, 0 ),
            new ig.TouchButton( 'right', 50, ypos, 40, 48, this.buttonImage, 1 )
        ];

    //ig.system.context.fillRect(40, 0, 65, 65);
    // }

		// this.addItem(new g1.ArrowButtons());

		// ig.game.spawnEntity(EntityHero);
		//ig.game.spawnEntity(FeatureButton, 100, 50, {right: 99, bottom: 0});
		// ig.game.spawnEntity(FeatureButton, {});
		// this.addItem( new FeatureButton('red', 'left', 		100, 50, {left: 0, 		bottom: 0}) 	);
		// this.addItem( new FeatureButton('green', 'up', 		100, 50, {left: 100, 	bottom: 50}) 	);
		// this.addItem( new FeatureButton('yellow', 'down', 100, 50, {left: 100, 	bottom: 0}) 	);
		// this.addItem( new FeatureButton('red', 'right', 	100, 50, {left: 200, 	bottom: 0}) 	);

		//this.btn = new FeatureButton({with: 100, height: 50, right: 99, bottom: 0});

		
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();


		if (ig.system.cFrame == undefined || ig.system.cFrame == 0 || ig.system.cFrame == ig.system.fps) ig.system.cFrame = 0;
		ig.system.cFrame++;

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



    //mlog(ig.input.state('left')+', '+ig.input.pressed('left'))

    // ig.system.context.fillStyle = 'green';
    // ig.system.context.fillRect(65, 0, 65, 65);
    // ig.system.context.fillStyle = 'red';
    // ig.system.context.fillRect(65, 65, 65, 65);
    // ig.system.context.fillStyle = 'blue';
    // ig.system.context.fillRect(0, 65, 65, 65);
    // ig.system.context.fillRect(130, 65, 65, 65);

    // Draw all touch buttons - if we have any
    for( var i = 0; i < this.buttons.length; i++ ) {
      this.buttons[i].draw();
    }
	}
});
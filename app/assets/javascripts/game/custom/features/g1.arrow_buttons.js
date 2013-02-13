g1.ArrowButtons = ig.Entity.extend({

  _layer: 'gui',

  anim: new ig.Animation(
          new ig.AnimationSheet( 'media/arrow_down_32.png', 32, 32),
          0.1, [0]
        ),

  buttons: [
    {key: 'up',    x1: 32, y1: 00, x2: 64,  y2: 32, angle: Math.PI},
    {key: 'left',  x1: 00, y1: 32, x2: 32,  y2: 64, angle: Math.PI / 2},
    {key: 'down',  x1: 32, y1: 32, x2: 64,  y2: 64, angle: 0},
    {key: 'right', x1: 64, y1: 32, x2: 96,  y2: 64, angle: -Math.PI / 2}
  ],

  init: function() {
    this.parent();

    ig.input.bind( ig.KEY.A, 'left' );
    ig.input.bind( ig.KEY.D, 'right');
    ig.input.bind( ig.KEY.W, 'up'   );
    ig.input.bind( ig.KEY.S, 'down' );

    ig.input.bind( ig.KEY.LEFT_ARROW,   'left'  );
    ig.input.bind( ig.KEY.RIGHT_ARROW,  'right' );
    ig.input.bind( ig.KEY.UP_ARROW,     'up'    );
    ig.input.bind( ig.KEY.DOWN_ARROW,   'down'  );


    ig.input.bind( ig.KEY.MOUSE1,   'cursor'  );

    ig.input.bind( ig.KEY.L,  'learn'   );

    //ig.input.bind( ig.KEY.UP_ARROW, 'jump' );

    for( var i = 0; i < this.buttons.length; i++ ) {
      var b = this.buttons[i];
      // b.x1 = ig.system.width  - b.x1;
      // b.x2 = ig.system.width  - b.x2;
      b.y1 += ig.system.height - 64;
      b.y2 += ig.system.height - 64;
    }

  },
  
  update: function() {
    this.parent();

    // if( ig.input.state('up')) {
    //   key = 'up';
    // }
    // else if( ig.input.state('down')) {
    //   key = 'down';
    // }
    // else if( ig.input.state('left')) {
    //   key = 'left';
    // }
    // else if( ig.input.state('right')) {
    //   key = 'right';
    // }
    // else if( ig.input.state('cursor')) {
    //   key = this.getButtonPressed();
    // }

    var key = this.getButtonPressed();

    if (key)
      ig.hero.moving.walk(key, false);
    else
      ig.hero.moving.stop();
  },
  
  draw: function() {
    this.parent();


    for( var i = 0; i < this.buttons.length; i++ ) {
      var b = this.buttons[i];
      this.anim.angle = b.angle;
      // mlog(b.pivot);
      this.anim.draw( b.x1, b.y1 );
    }
  },


  getButtonPressed: function() {
    var x = ig.input.mouse.x,
        y = ig.input.mouse.y;

    //mlog(this.x1+' < '+x+' && '+x +'<'+ this.x2 + ' : '+ this.y1+' < '+y+' && '+y +'<'+ this.y2);

    for( var i = 0; i < this.buttons.length; i++ ) {
      var b = this.buttons[i];
      if (ig.input.state('cursor') && b.x1 < x && x < b.x2 && b.y1 < y && y < b.y2) return b.key;
      if (ig.input.state(b.key)) return b.key;
    }
    return null;
  }

  // getButtonPressed: function() {
  //   var x = ig.input.mouse.x,
  //       y = ig.input.mouse.y;

  //   //mlog(this.x1+' < '+x+' && '+x +'<'+ this.x2 + ' : '+ this.y1+' < '+y+' && '+y +'<'+ this.y2);

  //   for( var i = 0; i < this.buttons.length; i++ ) {
  //     var b = this.buttons[i];
  //     if (b.x1 < x && x < b.x2 && b.y1 < y && y < b.y2) return b;
  //   }
  //   return null;
  // }




  //private methods

  // _initSettings: function(color, direction, width, height, settings) {
  //   //
  //   this.color = color;
  //   this.direction = direction;
  //   //size
  //   this.width  = width;
  //   this.height = height;
  //   //pos
  //   if (settings.right == undefined)
  //     this.x1 = settings.left;
  //   else
  //     this.x1 = ig.system.realWidth  - width - settings.right;
  //   if (settings.bottom == undefined)
  //     this.y1 = settings.top;
  //   else
  //     this.y1 = ig.system.realHeight  - height - settings.bottom;
  //   //area
  //   this.x2 = this.x1 + width;
  //   this.y2 = this.y1 + height;
  // },




});



/*
FeatureButton = ig.Entity.extend({  
  // action: 'undefined',
  // image: null,
  // tile: 0,
  // pos: {x: 0, y: 0},
  // size: {x: 0, y: 0},
  // area: {x1: 0, y1:0, x2: 0, y2:0},

  // pressed: false, 
  // touchId: 0,
  
  //init: function( action, x, y, width, height, image, tile ) {
  init: function() {
    // var internalWidth = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
    // var s = ig.system.scale * (internalWidth / ig.system.realWidth);
    
    // this.action = action;
    // this.pos = {x: x, y: y};
    // this.size = {x: width, y: height};
    // this.area = {x1: x * s, y1: y * s, x2: (x + width) * s, y2: (y + height) *s};
    
    // this.image = image || null;
    // this.tile = tile || 0;
    this.parent();

    if( ig.input.state('goto')) {
      //this.walk('up', false);
      console.log('walk')
    }

    this.w = 100;
    this.h = 50;
    
    this.r = 0;
    this.b = 0;

    this.l = ig.system.realWidth  - this.w - this.r;
    this.t = ig.system.realHeight - this.h - this.b;
    console.log('init')
  },
  
  
  draw: function() {
    console.log('draw');
    this.parent();
    // if( this.image ) { 
    //   this.image.drawTile( this.pos.x, this.pos.y, this.tile, this.size.x, this.size.y );
    // }


    ig.system.context.fillStyle = 'red';
    ig.system.context.fillRect(this.l, this.t, this.w, this.h);
  }
});
*/
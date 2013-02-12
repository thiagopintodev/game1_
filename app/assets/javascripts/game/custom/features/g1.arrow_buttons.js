g1.ArrowButtons = ig.Entity.extend({

  _layer: 'gui',

  image: new ig.Image( 'media/key_arrows.gif' ),

  buttons: [
    {direction: 'up',    x1: 48, x2: 96,  y1: 00, y2: 48, color: 'red'},
    {direction: 'left',  x1: 00, x2: 48,  y1: 48, y2: 96, color: 'blue'},
    {direction: 'down',  x1: 48, x2: 96,  y1: 48, y2: 96, color: 'white'},
    {direction: 'right', x1: 96, x2: 144, y1: 48, y2: 96, color: 'green'}
  ],

  init: function() {
    this.parent();
  },
  
  update: function() {
    this.parent();

    if( ig.input.state('cursor')) {
      //this.walk('up', false);
      //mlog(ig.input.mouse.x)
      var b = this.getButtonPressed();
      if (b)
        ig.hero.moving.walk(b.direction, false);
      else
        ig.hero.moving.stop();
    }
    // else
    //   ig.hero.moving.stop();
  },
  
  draw: function() {
    this.parent();


    for( var i = 0; i < this.buttons.length; i++ ) {
      var b = this.buttons[i];
    ig.system.context.fillStyle = b.color;
      ig.system.context.fillRect(b.x1, b.y1, 48, 48);
    }
  },


  getButtonPressed: function() {
    var x = ig.input.mouse.x * ig.system.scale,
        y = ig.input.mouse.y * ig.system.scale;

    // mlog(this.x1+' < '+x+' && '+x +'<'+ this.x2 + ' : '+ this.y1+' < '+y+' && '+y +'<'+ this.y2);

    for( var i = 0; i < this.buttons.length; i++ ) {
      var b = this.buttons[i];
      if (b.x1 < x && x < b.x2 && b.y1 < y && y < b.y2) return b;
    }
    return false;
  }




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
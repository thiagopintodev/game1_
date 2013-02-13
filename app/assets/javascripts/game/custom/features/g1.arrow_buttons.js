g1.ArrowButtons = ig.Entity.extend({

  _layer: 'gui',

  btn_size: 32,

  anim: new ig.Animation(
          new ig.AnimationSheet( 'media/arrow_down_32.png', 32, 32),
          0.1, [0]
        ),

  buttons: [
    {action: 'up',    x1: 1, y1: 0, x2: 2, y2: 1, angle: 1},
    {action: 'left',  x1: 0, y1: 1, x2: 1, y2: 2, angle: 1/2},
    {action: 'down',  x1: 1, y1: 1, x2: 2, y2: 2, angle: 0},
    {action: 'right', x1: 2, y1: 1, x2: 3, y2: 2, angle: -1/2}
  ],

  init: function() {
    this.parent();

    setInterval(this.interval, 1000, this);

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

    var variables = ['x1', 'x2', 'y1', 'y2'];
    for( var i = 0; i < this.buttons.length; i++ ) {
      var b = this.buttons[i];
      for( var j = 0; j < variables.length; j++ ) {
        var v = variables[j];
        b[v] = b[v] * this.btn_size;
      }
      b.angle = b.angle * Math.PI;
        
      // b.x1 = ig.system.width - this.btn_size * ig.system.scale;
      // b.x2 = ig.system.width - this.btn_size * ig.system.scale;
      b.y1 += ig.system.height - this.btn_size * ig.system.scale;
      b.y2 += ig.system.height - this.btn_size * ig.system.scale;
    }

  },
  
  update: function() {
    this.parent();

    this.action = this.getButtonPressed();

    if (this.action)
      ig.hero.moving.walk(this.action, this.b_running);
    else {
      this.last_action = null;
      this.b_running = false;
      ig.hero.moving.stop();
    }
  },
  
  draw: function() {
    this.parent();

    for( var i = 0; i < this.buttons.length; i++ ) {
      var b = this.buttons[i];
      this.anim.angle = b.angle;
      this.anim.draw( b.x1, b.y1 );
    }
  },

  //init functions

  interval: function(context) {
    context.last_action = context.action;
    context.b_running = (context.action == context.last_action);
  },

  // update functions

  getButtonPressed: function() {
    var x = ig.input.mouse.x,
        y = ig.input.mouse.y;

    //mlog(this.x1+' < '+x+' && '+x +'<'+ this.x2 + ' : '+ this.y1+' < '+y+' && '+y +'<'+ this.y2);

    for( var i = 0; i < this.buttons.length; i++ ) {
      var b = this.buttons[i];
      if (ig.input.state('cursor') && b.x1 < x && x < b.x2 && b.y1 < y && y < b.y2) return b.action;
      if (ig.input.state(b.action)) return b.action;
    }
    return null;
  }

});
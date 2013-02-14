g1.Keypad = ig.Entity.extend(

  _layer: 'gui'

  btn_size: 32

  anim: new ig.Animation(
          new ig.AnimationSheet( 'media/arrow_down_32.png', 32, 32),
          0.1, [0]
        )

  # buttons = [{action: 'up', x1: 0, y1: 0, x2: 32, y2: 32, angle: MATH.PI*1/2}]

  buttons: [
    {fn: 'actions', walk: true, action: 'up',    x: 1, y: 0, angle: 1},
    {fn: 'actions', walk: true, action: 'left',  x: 0, y: 1, angle: 1/2},
    {fn: 'actions', walk: true, action: 'down',  x: 1, y: 1, angle: 0},
    {fn: 'actions', walk: true, action: 'right', x: 2, y: 1, angle: -1/2}
    {fn: 'presses', walk: null, action: 'yes',   x: 0, y: 1, angle: 1},
    {fn: 'presses', walk: null, action: 'no',    x: 1, y: 1, angle: 0},
  ]

  messages: []


  #events

  init: ->
    @parent()
    @init_inputs()
    @init_set_buttons()
    setInterval(@interval, 1000, this)
  
  update: ->
    @parent();
    @update_clicks()
  
  draw: ->
    @parent()
    @draw_buttons()





  # init functions

  interval: (context) ->
    context.last_action = context.action
    context.b_running = context.action == context.last_action

  init_inputs: ->
    ig.input.bind( ig.KEY.A, 'left' )
    ig.input.bind( ig.KEY.D, 'right')
    ig.input.bind( ig.KEY.W, 'up'   )
    ig.input.bind( ig.KEY.S, 'down' )
    ig.input.bind( ig.KEY.J, 'yes')
    ig.input.bind( ig.KEY.K, 'no' )

    ig.input.bind( ig.KEY.LEFT_ARROW,   'left'  )
    ig.input.bind( ig.KEY.RIGHT_ARROW,  'right' )
    ig.input.bind( ig.KEY.UP_ARROW,     'up'    )
    ig.input.bind( ig.KEY.DOWN_ARROW,   'down'  )
    ig.input.bind( ig.KEY.NUMPAD_1, 'yes')
    ig.input.bind( ig.KEY.NUMPAD_2, 'no' )

    ig.input.bind( ig.KEY.MOUSE1,   'cursor'  )

  init_set_buttons: ->

    for b in @buttons
      # angle
      b.angle = b.angle * Math.PI

      # size
      b.x1 = @btn_size * b.x
      b.x2 = @btn_size * (b.x+1)
      b.y1 = @btn_size * b.y
      b.y2 = @btn_size * (b.y+1)

      # offset
      b.y1 += ig.system.height - @btn_size * 2
      b.y2 += ig.system.height - @btn_size * 2
      unless b.walk
        b.x1 += ig.system.width - @btn_size * 2
        b.x2 += ig.system.width - @btn_size * 2
      delete b.x
      delete b.y








  # update functions

  update_clicks: ->
    @action = @getButtonPressed()

    if @action == 'yes'
      @update_send_yes()
    else if @action == 'no'
      @update_send_no()
    else if @action #left..
      ig.hero.moving.walk(@action, @b_running)
    else
      @last_action = null
      @b_running = false
      ig.hero.moving.stop()

  getButtonPressed: ->
    x = ig.input.mouse.x
    y = ig.input.mouse.y

    #mlog(@x1+' < '+x+' && '+x +'<'+ @x2 + ' : '+ @y1+' < '+y+' && '+y +'<'+ @y2)

    for b in @buttons
      return b.action if (ig.input[b.fn]['cursor'] && b.x1 < x && x < b.x2 && b.y1 < y && y < b.y2)
      return b.action if (ig.input[b.fn][b.action])
    return null


  yes: 0
  no: 0

  update_send_yes: ->
    @yes+=1
  update_send_no: ->
    @no+=1


  # draw functions

  draw_buttons: ->
    for b in @buttons
      @anim.angle = b.angle
      @anim.draw(b.x1, b.y1)

    ig.game.font1.draw( "yes: #{@yes} no: #{@no}", 64, 64, ig.Font.ALIGN.CENTER );
)
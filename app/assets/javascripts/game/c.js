$(function() {
  definePositions();
  loadImpact()
});


function definePositions() {

  sizes = {};
  
  sizes.split = {
    w: parseInt($("#split").css("width").replace('px','')) / 2,
    h: parseInt($("#split").css("height").replace('px',''))
  }


  

  $("#canvas").css({
    top:  0,
    left:   sizes.split.w,
    width:  sizes.split.w,
    height: sizes.split.h,
    });
  $("#panel").css({
    top:  0,
    left:   0,
    width:  sizes.split.w,
    height: sizes.split.h,
    });


  /*
  $("#smallpanel").css({
    top:  sizes.canvas.h,
    left:   0,
    width:  sizes.smallpanel.w,
    height: sizes.smallpanel.h,
    });

  */
}


function loadImpact() {
    ig.main( '#canvas', g1.Game, 60, sizes.split.w, sizes.split.h, 1 );

    $('#myTab a[href="#tab-chat"]').tab('show');

    $('#myTab a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });

    $('#canvas').click(function() {
      $('#text').blur();
    });
}
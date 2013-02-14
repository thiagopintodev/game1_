sizes = {};




function mlog(s) {
  if (ig.system.cFrame===1) console.log(s)
}

function merge(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}


$(function() {
  definePositions();
  loadImpact()
});


function definePositions() {

  
  sizes.split = {
    w: parseInt($("#split").css("width").replace('px','')),
    h: parseInt($("#split").css("height").replace('px','')),
  }


  

  // $("#canvas").css({
  //   top:  0,
  //   left:   sizes.split.w,
  //   width:  sizes.split.w,
  //   height: sizes.split.h,
  //   });
  // $("#panel").css({
  //   top:  0,
  //   left:   0,
  //   width:  sizes.split.w,
  //   height: sizes.split.h,
  //   });


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
    ig.setNocache( true );
    ig.main( '#canvas', g1.MyGame, 60, sizes.split.w/2, sizes.split.h/2, 2 );
    // ig.main( '#canvas', g1.MyGame, 60, sizes.split.w, sizes.split.h, 1 );

// ig.main(
//     '#canvas',
//     YourGame,
//     60,
//     window.innerWidth,
//     window.innerHeight,
//     1
// );

    // $('#myTab a[href="#tab-chat"]').tab('show');

    // $('#myTab a').click(function (e) {
    //   e.preventDefault();
    //   $(this).tab('show');
    // });

    // $('#canvas').click(function() {
    //   $('#text').blur();
    // });
}
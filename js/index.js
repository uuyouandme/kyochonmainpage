$(document).ready(function () {

/* header category hover */
  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

/* visual hover */
$(".scimg1").hover(function(){
  $(".s1_4").show();
  $(this).find(".s1_" + $(this).attr("class").slice(-1)).show();
}, function(){
  $(".s1_2, .s1_3, .s1_4").hide();
});

$(".scimg2").hover(function(){
  $(".s1_2").show();
  $(this).find(".s1_" + $(this).attr("class").slice(-1)).show();
}, function(){
  $(".s1_2, .s1_3, .s1_4").hide();
});

$(".scimg3").hover(function(){
  $(".s1_3").show();
  $(this).find(".s1_" + $(this).attr("class").slice(-1)).show();
}, function(){
  $(".s1_2, .s1_3, .s1_4").hide();
});

/* menu button_info hover */
$(document).ready(function(){
  $(".box1_ta").hide();

  $(".s3box").click(function(){
    $(".box1_ta").slideToggle("slow");
  });
});


/* menu button_more hover */
$(document).ready(function(){
  $("#section4").hide();

  $(".s3box2").click(function(){
    $("#section4").slideToggle("slow");
  });
});

/* event slide */
let banner_w= $(".eventimg ul li").width();
  
  $(".eventimg ul li:last").prependTo(".eventimg ul");
  $(".eventimg ul").css({ left:-banner_w});

  function bannerAuto(){
    $(".eventimg ul").stop().animate({left:"-="+banner_w+"px"},700,function(){			
			$(".eventimg ul li:first-child").appendTo(".eventimg ul"); 
			$(this).css({left:-banner_w}); 
		});
  };

  bauto = setInterval(bannerAuto,4000);

  $(".eventimg").hover(function(){ 
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(bannerAuto,4000);
  });


/* bottom slide btn */
  let $img = $(".eventimg ul li");
  let $btn = $(".slide_btn ul li");
  let oldidx = 0; 
  let idx = 0;
  let img_n = $img.length;

  function changeImg(idx){
    if(oldidx != idx){
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut("600");
      $img.eq(idx).stop().fadeIn("600");
    }
    oldidx = idx; 
  };

  function changeAuto(){
    idx++;
    if(idx > img_n-1){ 
      idx=0;
    }
    changeImg(idx);
  };

  timer = setInterval(changeAuto,4000);

  //하단버튼
  $btn.click(function(){
    clearInterval(timer);
    idx=$(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });


});

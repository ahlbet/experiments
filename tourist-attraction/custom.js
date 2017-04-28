var headerHeight = $('.water-skyline').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= headerHeight) {

    $('#header-h1').css({
      'transform' : 'translate(0px, '+ wScroll / 2 +'%)'
    });

    $('.flag').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }

  if(wScroll > $('.row-1').offset().top - $(window).height()){
    var offset = (Math.min(0, wScroll - $('.row-1').offset().top +$(window).height() - 350)).toFixed();
    $('.cont-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('.cont-2').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

  if(wScroll > $('.row-2').offset().top - $(window).height()){
    var offset = (Math.min(0, wScroll - $('.row-2').offset().top +$(window).height() - 350)).toFixed();
    $('.cont-3').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('.cont-4').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

  if(wScroll > $('.row-3').offset().top - $(window).height()){
    var offset = (Math.min(0, wScroll - $('.row-3').offset().top +$(window).height() - 350)).toFixed();
    $('.cont-5').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('.cont-6').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

});

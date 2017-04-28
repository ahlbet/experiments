var mountHeight = $('.mount-box').height();
var skyHeight = $('.sky-box').height();

$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  if (wScroll <= mountHeight) {
    $('.head-text').css({
      'transform' : 'translate(0px, '+ wScroll / 2 +'%)'
    });
  }

  // if (wScroll <= skyHeight+100) {
  //   $('.head-2').css({
  //     'transform' : 'translate(0px, -'+ wScroll / 2 +'%)'
  //   });
  // }

  if(wScroll > $('#peter-h1').offset().top - $(window).height()){
    var offset = (Math.min(0, wScroll - $('#peter-h1').offset().top +$(window).height() - 350)).toFixed();
    $('.peter-text').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('.pic-1').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

  if(wScroll > $('#dylan-h1').offset().top - $(window).height()){
    var offset = (Math.min(0, wScroll - $('#dylan-h1').offset().top +$(window).height() - 350)).toFixed();
    $('.pic-2').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('.dylan-text').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

});

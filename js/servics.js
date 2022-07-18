$(function() {
  
    var watchScroll =0;
    var rightComments = $('.r-event .event-body');
      var leftComments = $('.l-event .event-body');
      TweenMax.staggerFrom(rightComments, 1, {x: 100, ease:Bounce.easeOut},1);
      TweenMax.staggerFrom(leftComments, 1, {x: -100,ease:Bounce.easeOut},1);
    
      $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        (scrollTop > watchScroll)?
        $('footer').addClass('footer-up'):
          $('footer').removeClass('footer-up');
        
        watchScroll = scrollTop;
      })
    })


    $(document).ready(function(){

      $("main").fadeOut(3000,function(){
        $("body").css({overflow: `auto`})
      })
      
      
      })




let dark = document.querySelector('.moon');

if (localStorage.getItem('darkMode') === null) {
  localStorage.setItem('darkMode', 'false');
}

function checkState() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    dark.src = '/img/sun.png';
  } else {
    document.body.classList.remove('dark');
    dark.src = '/img/moon.png';
  }
}
checkState();

dark.onclick = function () {
  localStorage.getItem('darkMode') === 'true'
    ? localStorage.setItem('darkMode', 'false')
    : localStorage.setItem('darkMode', 'true');
  checkState();
};

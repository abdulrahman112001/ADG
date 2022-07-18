
  
$(document).ready(function(){

  $("main").fadeOut(3000,function(){
    $("body").css({overflow: `auto`})
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
  
 })  



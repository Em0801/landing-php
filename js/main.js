let section1 = document.querySelector('#section-1');
var fx_nav = 0; // Para el Transparent del Nav
window.addEventListener('scroll', () => {
  /********************************NAV COLOR*****************************/
  if (window.pageYOffset > section1.offsetTop) {
    fx_nav = window.pageYOffset / 200;
    document.querySelector('header').setAttribute("style", "background-color : rgba(255,255,255," + fx_nav + ") !important;max-width: 100vw;");
    document.querySelector('.contact-header').setAttribute("style", "color : rgb(0,0,0); border: 1px solid rgb(0,0,0");
    document.querySelector('.burguer').setAttribute("style", "color : rgb(0,0,0) ;margin-top:revert;");
    document.querySelector('.bar1').setAttribute("style", "background-color : rgb(0,0,0) ;");
    document.querySelector('.bar2').setAttribute("style", "background-color : rgb(0,0,0) ;");
    document.querySelector('.bar3').setAttribute("style", "background-color : rgb(0,0,0) ;");
    document.querySelector('.logo-white').setAttribute("style", "display : none !important;");
    document.querySelector('.logo-black').setAttribute("style", "display : flex !important;");
  } else {
    document.querySelector('header').setAttribute("style", "background-color : rgba(255,255,255," + fx_nav - fx_nav + ") !important;max-width: 100vw;");
    document.querySelector('.contact-header').setAttribute("style", "color : rgb(255,255,255); border: 1px solid rgb(255,255,255");
    document.querySelector('.burguer').setAttribute("style", "color : rgb(255,255,255) ;margin-top:revert;");
    document.querySelector('.bar1').setAttribute("style", "background-color : rgb(255,255,255) ;");
    document.querySelector('.bar2').setAttribute("style", "background-color : rgb(255,255,255) ;");
    document.querySelector('.bar3').setAttribute("style", "background-color : rgb(255,255,255) ;");
    document.querySelector('.logo-black').setAttribute("style", "display : none !important;");
    document.querySelector('.logo-white').setAttribute("style", "display : flex !important;");
  }
  //console.log(window.fx_nav);
})

/********************************NAV COLOR*****************************/
if (window.pageYOffset > section1.offsetTop) {
  fx_nav = window.pageYOffset / 200;
  document.querySelector('header').setAttribute("style", "background-color : rgba(255,255,255," + fx_nav + ") !important;max-width: 100vw;");
  document.querySelector('.contact-header').setAttribute("style", "color : rgb(0,0,0); border: 1px solid rgb(0,0,0");
  document.querySelector('.burguer').setAttribute("style", "color : rgb(0,0,0) ;margin-top:revert;");
  document.querySelector('.bar1').setAttribute("style", "background-color : rgb(0,0,0) ;");
  document.querySelector('.bar2').setAttribute("style", "background-color : rgb(0,0,0) ;");
  document.querySelector('.bar3').setAttribute("style", "background-color : rgb(0,0,0) ;");
  document.querySelector('.logo-white').setAttribute("style", "display : none !important;");
  document.querySelector('.logo-black').setAttribute("style", "display : flex !important;");
} else {
  document.querySelector('header').setAttribute("style", "background-color : rgba(255,255,255," + fx_nav - fx_nav + ") !important;max-width: 100vw;");
  document.querySelector('.contact-header').setAttribute("style", "color : rgb(255,255,255); border: 1px solid rgb(255,255,255");
  document.querySelector('.burguer').setAttribute("style", "color : rgb(255,255,255) ;margin-top:revert;");
  document.querySelector('.bar1').setAttribute("style", "background-color : rgb(255,255,255) ;");
  document.querySelector('.bar2').setAttribute("style", "background-color : rgb(255,255,255) ;");
  document.querySelector('.bar3').setAttribute("style", "background-color : rgb(255,255,255) ;");
  document.querySelector('.logo-black').setAttribute("style", "display : none !important;");
  document.querySelector('.logo-white').setAttribute("style", "display : flex !important;");
}


function myBurguer(x) {
  x.classList.toggle("change");
}
$('#divTag').click(function () {
  $('#mB').click();
  $('#burguerT').click();
});

$('#click-unidades').click(function () {
  $('#mB').click();
  $('#burguerT').click();
});
$('#click-salto').click(function () {
  $('#mB').click();
  $('#burguerT').click();
});
$('#click-ubicacion').click(function () {
  $('#mB').click();
  $('#burguerT').click();
});
$('#click-avance').click(function () {
  $('#mB').click();
  $('#burguerT').click();
});
$('#click-contacto').click(function () {
  $('#mB').click();
  $('#burguerT').click();
});
$('.play-g2').click(function () {
  $('video').trigger('play');
});
$('#play').click(function () {
  $('video').trigger('play');
});
$('.play-g4').click(function () {
  $('video').trigger('play');
});
$('body').on('hidden.bs.modal', '.modal', function () {
  $('video').trigger('pause');
});
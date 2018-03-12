$(document).ready(function() {

  // Cambiar titulo:
  $("h1").text("Aplicaciones Web y Móvil - Similitudes y Diferencias");

  // Modificar texto parrafo 1:
  $(".p1").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

  // Agregar subtitulo:
  $("h1").append("<h2>Este es un subtitulo</h2>");

  // Cambiar clase de img:
  // $("img").removeClass('img-fluid');
  $("img").addClass('la-clase-que-debe-cambiar');

  //Cambiar color de body con Botton
  $(".btn").click(function(){
    $("body").css({"background-color":"rgba(192, 192, 192, 0.9)"});
  });

});

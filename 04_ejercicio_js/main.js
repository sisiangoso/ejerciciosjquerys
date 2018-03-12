$("#anuncio").ready(function(){
 $("#anuncio").text("Click para cambiar de color")
    .hide()
    .fadeIn(3000)
    .width(400)
    .height(499)
});
$("#anuncio").on("click", function(){
    let colores = ["red", "yellow", "orange", "green", "purple"]
    let color = colores[Math.floor(Math.random() * colores.length)];
$("#anuncio").css("background-color", color)   
});





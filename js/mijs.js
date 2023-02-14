2 //maneras 



//1ra Por funcion directa en el elemento
// function Saludar() {
//     alert($("#Saludo").val() + ", " + $("#Nombre").val());
// }

//2da Llamando directo al elemento con jquery
$("#saludo").on("click",function (e) {
    e.preventDefault();
    alert($("#Saludo").val() + ", " + $("#Nombre").val());
    // $("#etiqueta_saludo").text("Buen Saludo");

})

$("#LimpiarForm").on("click",function (e) {
    e.preventDefault();
    $("#Nombre").val('');
    $("#Saludo").val('');
})


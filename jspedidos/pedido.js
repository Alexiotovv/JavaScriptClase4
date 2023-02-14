$("#btnMas").on("click", function () {
    cant=parseInt($("#Cantidad").val()) + 1;
    $("#Cantidad").val(cant);
    Calcular();
});

$("#btnMenos").on("click", function () {
    if (parseInt($("#Cantidad").val())>1) {
        cant=parseInt($("#Cantidad").val()) - 1;
        $("#Cantidad").val(cant);
        Calcular();
    }
});

$("#btnPagar").on("click",function(){
    Calcular();
});

function Calcular(){

    precio=$("#PrecioProducto").val();
    cantidad=$("#Cantidad").val();
    tamano=$("#Tamano").val();

    total=parseInt(precio)*parseInt(cantidad);
    if (tamano=='A') {
        total=total*1.10;    
    }else{
        total=total*1.20;
    }
    $("#TotalPagar").val(total);
}
$("#PrecioProducto").on('keyup', function() {
    Calcular();
});
$("#Tamano").on('change', function() {
    Calcular();
});

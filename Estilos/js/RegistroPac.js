function CrearNuevo(){
    swal({
        title: "Nuevo registro de paciente",
        text: "Esta seguro de crear un registro?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-warning",
        confirmButtonText: "SI",
        cancelButtonText: "NO",
        closeOnConfirm: true,
        closeOnCancel: false
    },
        function (isConfirm) {
            Reiniciar();
            document.getElementById('txtnombre').disabled=false;
            document.getElementById('txtapellidos').disabled=false;
            document.getElementById('txtfechanacimiento').disabled=false;
            document.getElementById('txtdireccion').disabled=false;
            document.getElementById('txtdui').disabled=false;
            document.getElementById('txtnit').disabled=false;
            document.getElementById('btnnuevo').disabled=true;
            document.getElementById('btnguardar').disabled=false;
        });
}

function Guardar(){
    var sin = confirm("Esta seguro de guardar la informacion?");
    if (sin){

        ok();
    }
}
function ok(){
    swal({
        title: "TARJETA # ",
        text: "La informacion se ha guardado correctamente!",
        type: "success",
        showCancelButton: false,
        confirmButtonClass: "btn-success",
        confirmButtonText: "OK",
        cancelButtonText: "NO",
        closeOnConfirm: true,
        closeOnCancel: true
    },
        function (isConfirm) {
            document.getElementById('txtnombre').disabled=true;
            document.getElementById('txtapellidos').disabled=true;
            document.getElementById('txtfechanacimiento').disabled=true;
            document.getElementById('txtdireccion').disabled=true;
            document.getElementById('txtdui').disabled=true;
            document.getElementById('txtnit').disabled=true;
            document.getElementById('btnnuevo').disabled=false;
            document.getElementById('btnguardar').disabled=true;
        });
}
function Reiniciar(){
    $('#txtnombre').val('');
    $('#txtapellidos').val('');
    $('#txtfechanacimiento').val('');
    $('#txtdireccion').val('');
    $('#txtdui').val('');
    $('#txtnit').val('');
}
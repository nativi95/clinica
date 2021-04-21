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
        var nombre = document.getElementById('txtnombre').value;
        var apellidos = document.getElementById('txtapellidos').value;
        var fechanacimiento = document.getElementById('txtfechanacimiento').value;
        var direccion = document.getElementById('txtdireccion').value;
        var dui = document.getElementById('txtdui').value;
        var nit = document.getElementById('txtnit').value;
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function(){
        //     if(xhttp.readyState == 4 && xhttp.status == 200){
        //         ok();
        //     }
        // };
        // xhttp.open("POST","../../Forms/RegistroPacientes.php",true);
        // xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // xhttp.send("nombre="+nombre+"&apellido="+apellidos+"&fecha="+fechanacimiento+"&direccion="+direccion+"&dui="+dui+"&nit="+nit);
        $.ajax({
            type: "POST",
            url: "../Forms/RegistroPacientes.php",
            async:false,
            data: {nombre:nombre, apellido:apellidos, fecha:fechanacimiento, direccion:direccion, dui:dui, nit:nit,accion:"guardar"},
            success: function(response){
                var js = JSON.parse(response);
                ok(js[0].ntarjeta,js[0].guardado);
                alert("Ha sido ejecutada la acción.");
            }
        });
    }
}
function ok(ntarjeta,result){
    swal({
        title: "TARJETA # "+ntarjeta,
        text: result,
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
<?php
require_once "../config/db.php";


if(isset($_POST))
{
    if(isset($_POST["accion"]) =="guardar"){
        echo InsertPaciente();
    }else{
        $menu = file_get_contents("RegistroPacientes.html");
        $menuz = file_get_contents("../Layout/Encabezado.html");
        $menu = preg_replace('/--menu--/',$menuz,$menu);
        $parametros = preg_replace('/--acciones--/', '', $menu);
        echo $menu;
    }
}
function InsertPaciente()
{
    global $mysqli;
    $accion="";
    
    $nombre = $_POST["nombre"];
    $apellido =  $_POST["apellido"];
    $fechanacimiento =  $_POST["fecha"];
    $direccion =  $_POST["direccion"];
    $dui =  $_POST["dui"];
    $nit =  $_POST["nit"];
    
    $insert = mysqli_query($mysqli, "CALL sp_insertpacientes('$nombre','$apellido',$fechanacimiento,'$direccion','$dui','$nit')") or die(mysqli_error($mysqli));
    while($result=mysqli_fetch_assoc($insert)){
        $arr[]=$result;
    }            
    return json_encode($arr);
}

?>
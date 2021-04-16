<?php
    $menu = file_get_contents("RegistroPacientes.html");
    $menuz = file_get_contents("../Layout/Encabezado.html");
    $menu = preg_replace('/--menu--/',$menuz,$menu);
    echo $menu
?>
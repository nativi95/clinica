<?php

class MakeId {


/**
*@param $name: Nombre del paciente
*@param $lastName: Apellido del paciente
*
*Esta funcion recupera las iniciales del nombre y apellido y las *devuelve e un string
*
*strlen() recupera la longitud de un string
*substr() extrae letras de un string especificando los limites
*
*@return $n.$ln iniciales concatenadas
*/
public function nameAndLastName($name, $lastName){
$n=substr($name, 0, -(strlen($name)-1));
$ln=substr($lastName, 0, -(strlen($lastName)-1));
return $n.$ln;
}



}

$p = new MakeId();

echo "el resultado es ".$p.nameAndLastName("Juan", "Ruiz");
?>
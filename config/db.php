
<?php
    $mysqli = new mysqli("MYSQL5038.site4now.net", "a5e2c6_clinica", "clinica2021", "db_a5e2c6_clinica");
    if ($mysqli->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    $mysqli = new mysqli("MYSQL5038.site4now.net", "a5e2c6_clinica", "clinica2021", "db_a5e2c6_clinica", 3306);
    if ($mysqli->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }


?>

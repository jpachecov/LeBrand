<?php
$para      = 'caen@ciencias.unam.mx';
$titulo    = '[Mensaje de pagina web]';
$mensaje   = $_POST['mensaje'];
$texto = str_replace("\n.", "\n..", $mensaje);
$nombre =  $_POST['nombre'];
$correo = $_POST['correo']
$mensaje_completo = "Nombre de la persona que se contacto es : " . $nombre . " y su   correo es : ". $correo;
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


if(validateUsername && validateMsn && validateEmail)

mail($para, $titulo,  $mensaje_completo , $cabeceras);
echo "El mensaje fue enviado correctamente";

else

echo "El mensaje no es correcto";





function validateUsername(){
    //NO cumple longitud minima
    if(strlen($nombre) < 4)
        return false;
    //SI longitud pero NO solo caracteres A-z
    else if(!preg_match("/^[a-zA-Z]+$/", $nombre))
        return false;
    // SI longitud, SI caracteres A-z
    else
        return true;
}

function validateMsn(){
    //NO cumple longitud minima
    if(strlen($texto) < 10)
        return false;

    // SI longitud, SI caracteres A-z
    else
        return true;
}


function validateEmail(){
    //NO hay nada escrito
    if(strlen($email) == 0)
        return false;
    // SI escrito, NO VALIDO email
    else if(!filter_var($correo, FILTER_SANITIZE_EMAIL))
        return false;
    // SI rellenado, SI email valido
    else
        return true;
}

?>

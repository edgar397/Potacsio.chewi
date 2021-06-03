<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];


$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message = $_POST['message'];
$message .= "Enviado el: " . date('d/m/Y', time());

$para = "carlosgarcia@cbta197.net";
$asunto = 'Quisiera añadirme';

mail($para, $asunto, utf8_decode($message), $header);
// EDGAR ACA VAS A PONER LA PAGINA DE INICIO BROOOOOOOO
header("Location:$('Proyecto1.html')");
?>
-->

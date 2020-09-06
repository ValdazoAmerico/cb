<?php
    $destinatario = 'cbconstrucciones2010@gmail.com';

    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];

    $header = "Enviado desde la pagina de CB Construcciones";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . "\nMail: " . $email . "\nTel: " . $tel;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\", 1000)</script>";

    ?>
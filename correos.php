<?php
    $destinatario = 'cbconstrucciones2010@gmail.com';

    $nombre = $_POST['nombre'];
    $tel = $_POST['tel']
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];

    $header = "Enviado desde la pagina de CB Construcciones";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . "\nTelefono :" . $tel;

    mail($destinatario, "Asunto", $mensajeCompleto, $header);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\", 1000)</script>";

    ?>
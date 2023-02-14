<?php
/*
Template Name: Ajax Functions
*/
?>
<?php
function eliminar_acentos($cadena)
{

    //Reemplazamos la A y a
    $cadena = str_replace(
        array('Á', 'À', 'Â', 'Ä', 'á', 'à', 'ä', 'â', 'ª'),
        array('A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a'),
        $cadena
    );

    //Reemplazamos la E y e
    $cadena = str_replace(
        array('É', 'È', 'Ê', 'Ë', 'é', 'è', 'ë', 'ê'),
        array('E', 'E', 'E', 'E', 'e', 'e', 'e', 'e'),
        $cadena
    );

    //Reemplazamos la I y i
    $cadena = str_replace(
        array('Í', 'Ì', 'Ï', 'Î', 'í', 'ì', 'ï', 'î'),
        array('I', 'I', 'I', 'I', 'i', 'i', 'i', 'i'),
        $cadena
    );

    //Reemplazamos la O y o
    $cadena = str_replace(
        array('Ó', 'Ò', 'Ö', 'Ô', 'ó', 'ò', 'ö', 'ô'),
        array('O', 'O', 'O', 'O', 'o', 'o', 'o', 'o'),
        $cadena
    );

    //Reemplazamos la U y u
    $cadena = str_replace(
        array('Ú', 'Ù', 'Û', 'Ü', 'ú', 'ù', 'ü', 'û'),
        array('U', 'U', 'U', 'U', 'u', 'u', 'u', 'u'),
        $cadena
    );

    //Reemplazamos la N, n, C y c
    $cadena = str_replace(
        array('Ñ', 'ñ', 'Ç', 'ç'),
        array('N', 'n', 'C', 'c'),
        $cadena
    );

    return $cadena;
}

include_once('db.php');

require_once 'mailer/class.phpmailer.php';

$nombre   = utf8_decode($_POST['name']);
$email    = $_POST['email'];
$phone    = $_POST['phone'];
$mensaje  = utf8_decode($_POST['message']);
$subject  = "Consulta: " . $_POST['name'];

$sql = "INSERT INTO consultas (nombre,email,telefono,mensaje) VALUES ('$nombre', '$email', '$phone', '$mensaje')";

$mail = new PHPMailer(true);

$message_   = "Nombre: " . $_POST['name'] . "<br/>";
$message_  .= "Email: " . $email . "<br/>";
$message_  .= "Teléfono: " . $phone . "<br/>";
$message_  .= "Consulta: " . $_POST['message'] . "<br/><br/>";

if ($email && $email && $phone  && $mensaje && $subject) {

    try {
        $mail->IsSMTP(); // telling the class to use SMTP
        $mail->SMTPAuth = true; // enable SMTP authentication
        $mail->Host     = "smtp.xxxx.net"; // sets the SMTP server
        $mail->Port     = 123; // set the SMTP port for the GMAIL server
        $mail->Username = "apikey"; // SMTP account username
        $mail->Password = "account_password"; // SMTP account password
        $mail->CharSet  = "UTF-8";
        $mail->isHTML(true);

        $mail->SetFrom('nombre@correo.com');
        $mail->AddReplyTo($email, $nombre);
        $mail->Subject = eliminar_acentos($subject);
        $mail->Body = $message_;
        $mail->AddAddress("nombre@correo.com");      // Cargamos el e-mail destinatario a la clase PHPMailer
        $mail->AddBCC("nombre@correo.com");          // Cargamos el e-mail destinatario a la clase PHPMailer


        $mail->Send(); // Realiza el envío =)
        if ($conn->query($sql) === true) {
            return true;
        }

        $conn->close();
        // $mail->ClearAddresses(); // Limpia los "Address" cargados previamente para volver a cargar uno.
    } catch (phpmailerException $e) {
        echo $e->errorMessage(); //Pretty error messages from PHPMailer
    } catch (Exception $e) {
        echo $e->getMessage(); //Boring error messages from anything else!
    }
}

?>


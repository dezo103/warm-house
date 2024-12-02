<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$to = "info.elitsufit@gmail.com";
$subject = "Заявочка с сайта elitsufit.pl";
$message = "Заявка отправлена пользователем $name с телефоном $phone";
$headers = "From $name <$phone>" . "\r\n";

?>



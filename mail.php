<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="Сообщение с сайта 4dea.ru\n\nFrom: $name \nMessage: $message";
$recipient = "ytacademy@ya.ru";
$subject = "4dea.ru – Contact Form";
$mailheader = "From: $email \r\n";

if(isset($name) and isset($email)) 
  mail($recipient, $subject, $formcontent, $mailheader);

?>
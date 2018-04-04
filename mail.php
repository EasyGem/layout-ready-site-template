<?php
$destination = "op@eactt.ru";

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$comment = htmlspecialchars($comment);

$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$comment = urldecode($comment);

$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$comment = trim($comment);

$headers = 'From: <'.$email.'>' . "\r\n";
$headers .= "Content-type: text/html; charset=\"utf-8\"";

if(isset($name) and isset($phone)) {
mail($destination, 
  "Заявка с сайта 'Технологии Труда'", "Имя: ".$name."\n E-mail: ".$email. "\n Телефон: ". $phone . "\r\n************\n".$comment , $headers);
};
  ?>
  
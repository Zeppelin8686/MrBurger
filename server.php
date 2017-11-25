<?php
  
  $name = $_POST['user-name'];
  $phone = $_POST['user-phone'];
  $street = $_POST['street'];
  $bulding = $_POST['bulding'];
  $housing = $_POST['housing'];
  $flat = $_POST['flat'];
  $floor = $_POST['floor'];
  $comment = $_POST['comment'];
  $payment = $_POST['payment'];
  $disturb = $_POST['callback'];
  $disturb = isset($disturb) ? 'НЕТ' : 'ДА'; 

  $mail_message = '
  <html>
      <head>
          <title>Заявка</title>
      </head>
      <body>
          <h2>Заказ</h2>
          <ul>
              <li>Имя: ' . $name . '</li>
              <li>Email: ' . $phone . '</li>
              <li>Улица: ' . $street . '</li>
              <li>Дом: ' . $bulding . '</li>
              <li>Корпус: ' . $housing . '</li>
              <li>Квартира: ' . $flat . '</li>
              <li>Этаж: ' . $floor . '</li>
              <li>Способ оплаты: ' . $payment . '</li>
              <li>Комментарии к заказу: ' . $comment . '</li>
              <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
          </ul>
      </body>
  </html>    
  ';

  $headers = "From: Mr.Burger <admin@burger.com>\r\n".
  "MIME-Version: 1.0" . "\r\n" .
  "Content-type: text/html; charset=UTF-8" . "\r\n";

  $mail = mail('awesome.baravik@yandex.com', 'Заказ', $mail_message, $headers) ;

  if ($mail) {
      echo 'Сообщение отправлено';
  }else{
      echo 'На сервере произошла ошибка';
  }

?>
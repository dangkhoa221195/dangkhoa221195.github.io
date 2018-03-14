<?php
    $to = "dangkhoa221195@gmail.com";
    $subject = "Diễn đàn tin học";
    $comment = "Test gửi email";
    $header = "From: dangkhoa221195@gmail.com";
    $send = mail($to, $subject, $comment, $header);
    if ($send) echo "Gui email thanh cong";
    else echo "Khong gui duoc email";

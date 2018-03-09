<?php
$filename =  basename($_POST['file']);
$fp = @fopen($filename, "r");
  
// Kiểm tra file mở thành công không
if (!$fp) {
    echo 'Mở file không thành công';
}
else
{
    // Lặp qua từng ký tự để đọc
    while(!feof($fp))
    {
        echo fgetc($fp);
    }
}
?>
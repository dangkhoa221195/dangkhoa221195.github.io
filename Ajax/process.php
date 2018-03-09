<?php
// ex1
$str = $_POST['data'];
$arr = json_decode($str);

$result = array(
    'tong' => 0, 
    'tich' => 1
);

foreach ($arr as $x) {
    $result['tong'] += $x;
    $result['tich'] *= $x;
}

var_dump($result);
?>
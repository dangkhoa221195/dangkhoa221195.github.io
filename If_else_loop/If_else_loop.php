<?php
$a = 1;

// if else
if ($a == 1) {
 	echo "mot";
} elseif ($a == 2) {
    echo "hai";
} else {
    echo "ba";
}

// ternary operator
$b = ($a == 2) ? "hai" : "not two";
echo $b;

// for loop
for ($i = 0; $i < 3; $i++) {
    echo $i;
}

// foreach loop
$arr = array("Jan", "Feb", "March");
foreach ($arr as $month) {
    echo $month;
}

// while loop
while ($a < 10) {
    echo $a;
    $a++;
}

// do while loop
$x = 2;
do {
    echo $x;
    $x += 2;
} while ($x < 10);

// switch
$y = 9;
switch ($y) {
    case 1:
        echo "mot";
        break;
    case 3:
        echo "ba";
        break;
    case 2:
    case 4:
    case 6:
        echo "so chan";
        break;
    default:
        echo "other";
}
?>
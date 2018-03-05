<?php
// Difference between == and ===
$a = 100;
$b = "100";
var_dump($a == $b); // true
var_dump($a === $b); // false

// isset() function
$i = "";
var_dump(isset($i)); // true
var_dump(isset($j)); // false

// empty() function 
$i = "";
$j = "something";
var_dump(empty($i)); // true
var_dump(empty($j)); // false
?>

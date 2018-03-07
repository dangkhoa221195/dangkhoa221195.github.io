<?php
$trim = "trim";
echo "1. ".rtrim($trim, "m")."<br>";

for ($i = 0; $i < strlen($trim) / 2; $i++) {
    $x = $trim[$i];
    $trim[$i] = $trim[strlen($trim) - 1 - $i];
    $trim[strlen($trim) - 1 - $i] = $x;
}

echo "2. ".ltrim($trim, "m");
?>
<?php
$file = new SplFileObject('Canvas.txt');
while (!$file->eof()) {
    $buffer = $file->current();
    echo $buffer;
    $file->next();
}
?>
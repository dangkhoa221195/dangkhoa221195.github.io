<?php
include("log.php");

$write = new Log();
$write->writeLog();

$a++;
fopen("abc.txt");
$b = 8 / 0;
<?php
ob_start();
mysql_connect("localhost","root","");
mysql_select_db("validateform");
mysql_query("set names 'utf8'"); 



echo $_GET['username'];

mysql_query("insert into member values(1, '$username', '$password', '$email', '$birthday')");
?>
<?php
session_start();

// create session
$_SESSION["user"] = "an";
echo $_SESSION["user"];

// delete session
unset($_SESSION["user"]);
echo $_SESSION["user"];
?>
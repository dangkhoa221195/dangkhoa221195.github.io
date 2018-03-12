<?php
ob_start();
if (isset($_COOKIE['demo'])) {
    setcookie("demo", "", time() - 1);
}
header("location: getCookie.php");
?>
<?php
require("session.php");

if (isset($_GET['id-session'])) {
    $sessionID = $_GET['id-session'];
    $sessionValue = $_GET['value-session'];
    session_id($sessionID);
    $session = new Session();
    $session->start_Session('_s', false);
    $_SESSION[$sessionID] = $sessionValue;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>domain 1</title>
</head>
<body>
	<form method="GET" action="?">
        <label>Session ID</label>
        <input type="text" name="id-session">   
        <br>
        <label>Session value</label>
        <input type="text" name="value-session">
        <br>
        <button type="submit" >Create session</button>
    </form>
</body>
</html>
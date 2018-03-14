<?php
require("session.php");

if (isset($_GET['id-session'])) {
    $sessionID = $_GET['id-session'];
    
    
    session_id($sessionID);
    $session = new Session();
    
    $session->start_Session('_s', false);
   
    echo $_SESSION[$sessionID];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>domain 2</title>
</head>
<body>
	<form method="GET" action="?">
        <input type="text" name="id-session">
        <button type="submit" >Read session</button>
    </form>
</body>
</html>
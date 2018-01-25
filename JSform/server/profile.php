<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Profile</title>
</head>
<body>
<center>
    <table width="50%" border="1" cellspacing="0">
    <?php
    include("connect.php");
    $mem = mysql_query("select * from member");
    while ($d = mysql_fetch_array($mem)) {
    ?>
        <tr>
            <td><?php echo $d['username'];?></td>
            <td><?php echo $d['email'];?></td>
            <td><?php echo $d['birthday'];?></td>
        </tr>
    <?php }?>
    </table>
</center>
</body>
</html>
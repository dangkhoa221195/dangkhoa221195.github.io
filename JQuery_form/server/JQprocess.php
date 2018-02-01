<?php
ob_start();
include("connect.php");

// kiểm tra trên server
if (isset($_POST['SUBMIT'])) {
    $kt = 0;
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $p = explode('/', $_POST['birthday']);
    if ($p[1] < 10) $p[1] = '0'.$p[1];
    if ($p[0] < 10) $p[0] = '0'.$p[0];
    $birthday = $p[2] .'-'. $p[1] .'-'. $p[0];

    // check username
    if (strlen($username) < 8) {
        echo "Username length min 8 letters <br>";
        $kt = 1;
    }

    $kq = mysql_query("select * from member");

    while ($x = mysql_fetch_array($kq)) {
        if ($username == $x['username']) {
            echo "Username already exist <br>";
            $kt = 1;
            break;
        }
    }

    // check password
    if (strlen($password) < 8) {
        echo "Password length min 8 letters <br>";
        $kt = 1;
    }

    // check email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "$email is an invalid email address <br>";
        $kt = 1;
    } 

    if (strlen($email) < 8) {
        echo "Email length 8 min letters <br>";
        $kt = 1;
    }

    // check birthday
    if ($birthday >= date("Y-m-d", time())) {
        echo "Birthday is invalid <br>";
        $kt = 1;
    }

    // neu thoa het cac dieu kien, insert vao db
    if ($kt == 0) {
        $password = md5($password);
        mysql_query("insert into member values(NULL, '$username', '$password', '$email', '$birthday')");
        header("location:profile.php");
    }
}

// kiểm tra username tồn tại chưa
if (isset($_POST['username'])) {
    $kq = mysql_query("select * from member");
    while ($x = mysql_fetch_array($kq)) {
        if ($_POST['username'] == $x['username']) {
            echo "U2";
            die();
        }
    }
}
?>
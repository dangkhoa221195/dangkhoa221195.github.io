<!DOCTYPE html>
<html>
<head>
    <title>Ajax</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script language="javascript" src="jquery-3.2.1.min.js"></script>
    <script language="javascript">
        function load_ajax(){
            $data = $("#showIni").html();
            $.ajax({
                url : "process.php",
                type : "post",
                dataType:"text",
                data: "data=" + $data,
                success : function (result){
                    $("#result").html(result);
                }
            });
        }
    </script>
    <style>
    .container {
        width: 500px;
        margin: 0 auto;
    }
    .progress_outer {
        border: 1px solid #000;
    }
    .progress {
        width: 20%;
        background: #DEDEDE;
        height: 20px;  
    }
    </style>
</head>
<body>
    <?php 
        $ini = array(1, 2, 3, 4);
        $myJSON = json_encode($ini);
    ?>
    <p id="showIni"><?= $myJSON ?></p>
    <p id="result"></p>
    <input type="button" onclick="load_ajax()" value="click here">
</body>
</html>
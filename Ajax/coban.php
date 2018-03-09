<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script language="javascript" src="jquery-3.2.1.min.js"></script>
        <script language="javascript">
            function load_ajax(){
                $.ajax({
                    url : "coban.php",
                    type : "post",
                    dataType:"text",
                    success : function (result){
                        alert("OK");
                    }
                });
            }
        </script>
    </head>
    <body>
        <input type="button" name="clickme" id="clickme" onclick="load_ajax()" value="Click Me"/>
    </body>
</html>
<?php
if (isset($_POST['submit'])) {
    if (is_uploaded_file($_FILES['fileToUpload']['tmp_name'])) {
        //echo $_FILES['fileToUpload']['name'];
        $target = "images/".$_FILES['fileToUpload']['name'];
        if (move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target)) {
            echo "done";
        }
    }
}
?>
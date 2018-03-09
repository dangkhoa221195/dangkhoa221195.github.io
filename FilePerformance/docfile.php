<?php
error_reporting(0);
if (isset($_POST)) {
    if (is_uploaded_file($_FILES['myfile']['tmp_name'])) {
        $target = "uploads/".$_FILES['myfile']['name'];
        if (move_uploaded_file($_FILES['myfile']['tmp_name'], $target)) {
            echo "done";
        }
    }
}

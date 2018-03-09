<?php
// demo tempnam
echo $tmpfname = tempnam("./", "test");
 
$handle = fopen($tmpfname, "w");
fwrite($handle, "this is a test string");
fclose($handle);

// demo csv
function array_to_csv_download($array, $filename = "export.csv", $delimiter=";") {
    header('Content-Type: application/csv');
    header('Content-Disposition: attachment; filename="'.$filename.'";');
    $f = fopen('php://output', 'w');

    foreach ($array as $line) {
        fputcsv($f, $line, $delimiter);
    }
}   

array_to_csv_download(array(
  array(1,2,3,4), // this array is going to be the first row
  array(1,2,3,4)), // this array is going to be the second row
  "numbers.csv"
);
?>
<?php
/**
 * Finds a string inside another string.
 *
 * @param string $str specifies the string to search
 * @param string $sub specifies the string to find
 * @throws LogicException if param is not string.
 * @return true if $sub exists in $str
 *         false if $sub doesn't exists in $str
 */
function findSub($str, $sub)
{
    $checkArr = array($str, $sub);
    $invalidParam = array();
    
    foreach ($checkArr as $key => $x) {
        if (!is_string($x)) $invalidParam[] = $key + 1;
    }
    
    if (!empty($invalidParam)) {
        $invalidList = implode(", ", $invalidParam);
        return "Invalid parameter ".$invalidList;
    } else {
        if (strpos($str, $sub) != false) return true;
        return false;
    }
}
?>

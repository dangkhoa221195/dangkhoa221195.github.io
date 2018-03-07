<?php
/**
 * Check multiple bytes string.
 *
 * @param string $str will be checked
 * @throws LogicException if param is not string.
 * @return true if $str is multiple bytes
 *         false if $str isn't multiple bytes
 */
function is_multiple($str)
{
    if (!is_string($str)) {
        return "Invalid parameter";
    } else {
        $bytes = mb_strlen($str, 'UTF-8');
        $len = strlen($str);
        
        if ($bytes != $len) return true;
        return false;
    }
}
?>
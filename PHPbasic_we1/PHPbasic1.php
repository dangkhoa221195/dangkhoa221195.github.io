<?php
$a = array(1, 4, 2, 5, 3);
$b = array(1, 33, 55, 77, 99, 4, 3);
$c = array(11, 22, 33, 44, 55, 1111);

/**
 * Ex1:
 * Find number 1 in param 1
 *
 * @param array $arr1 the array to search number 1
 * @param array $arr2
 * @param array $arr3
 * @throws LogicException if param is not array.
 */
function find1($arr1, $arr2, $arr3)
{
    // check input type
    $arrays = array($arr1, $arr2, $arr3);
    $invalidParam = array();
    
    foreach ($arrays as $key => $x) {
        if (!is_array($x)) $invalidParam[] = $key + 1;
    }
    
    if (!empty($invalidParam)) {
        $invalidList = implode(", ", $invalidParam);
        echo "Invalid parameter $invalidList";
    } else {
        // if all parameters is array, move to logic
        if (in_array(1, $arr1)) echo "Found";
        else echo "Not found";
    }
}

/**
 * Ex2:
 * Merge param 2, 3, delete duplicate in reuslt, 
 * echo result (fomat string)
 *
 * @param array $arr1
 * @param array $arr2
 * @param array $arr3
 * @throws LogicException if param is not array.
 */
function merge23($arr1, $arr2, $arr3)
{
    // check input type
    $arrays = array($arr1, $arr2, $arr3);
    $invalidParam = array();
    
    foreach ($arrays as $key => $x) {
        if (!is_array($x)) $invalidParam[] = $key + 1;
    }
    
    if (!empty($invalidParam)) {
        $invalidList = implode(", ", $invalidParam);
        echo "Invalid parameter $invalidList";
    } else {
        // if all parameters is array, move to logic
        $result = array_merge($arr2, $arr3);
        $result = array_unique($result);
        $result = implode(", ", $result);
        echo $result;
    }
}

/**
 * Ex3:
 * Merge param 2, 3, delete duplicate in reuslt (*), 
 * echo elements in (*) if sum of its digits is even
 *
 * @param array $arr1
 * @param array $arr2
 * @param array $arr3
 * @throws LogicException if param is not array.
 */
function sumIsEven($arr1, $arr2, $arr3)
{
    // check input type
    $arrays = array($arr1, $arr2, $arr3);
    $invalidParam = array();
    
    foreach ($arrays as $key => $x) {
        if (!is_array($x)) $invalidParam[] = $key + 1;
    }
    
    if (!empty($invalidParam)) {
        $invalidList = implode(", ", $invalidParam);
        echo "Invalid parameter $invalidList";
    } else {
        // if all parameters is array, move to logic
        $merge = array_merge($arr2, $arr3);
        $merge = array_unique($merge);
        $result = array();
        
        foreach ($merge as $x) {
            $sum = 0;
            $tmp = $x;
            
            while ($x) {
                $sum += $x % 10;
                $x = floor($x / 10);
            }
            
            if ($sum % 2 == 0) $result[] = $tmp;
        }
        
        $result = implode(", ", $result);
        echo $result; 
    }
}

/**
 * Ex4:
 * Merge param 2, 3, delete duplicate in reuslt (*), 
 * echo elements in param1 if its elements exists in (*)
 *
 * @param array $arr1
 * @param array $arr2
 * @param array $arr3
 * @throws LogicException if param is not array.
 */
function find1InMerge($arr1, $arr2, $arr3)
{
    // check input type
    $arrays = array($arr1, $arr2, $arr3);
    $invalidParam = array();
    
    foreach ($arrays as $key => $x) {
        if (!is_array($x)) $invalidParam[] = $key + 1;
    }
    
    if (!empty($invalidParam)) {
        $invalidList = implode(", ", $invalidParam);
        echo "Invalid parameter $invalidList";
    } else {
        // if all parameters is array, move to logic
        
        // merge param2 and param3
        $merge = array_merge($arr2, $arr3);
        $merge = array_unique($merge);
        $result = array();
        sort($arr1); 
        
        // find elements of param1 in (*)
        foreach ($arr1 as $x) {
            if (in_array($x, $merge)) $result[] = $x;
        }
        
        $result = implode(", ", $result);
        echo $result;
    }
}

/**
 * Ex5:
 * Merge param 2, 3, delete duplicate in reuslt (*), 
 * echo elements (decrese) in param1 if its key doesn't exists in (*) 
 *
 * @param array $arr1
 * @param array $arr2
 * @param array $arr3
 * @throws LogicException if param is not array.
 */
function findKey1InMerge($arr1, $arr2, $arr3)
{
    // check input type
    $arrays = array($arr1, $arr2, $arr3);
    $invalidParam = array();
    
    foreach ($arrays as $key => $x) {
        if (!is_array($x)) $invalidParam[] = $key + 1;
    }
    
    if (!empty($invalidParam)) {
        $invalidList = implode(", ", $invalidParam);
        echo "Invalid parameter $invalidList";
    } else {
        // if all parameters is array, move to logic
        
        // merge param2 and param3
        $merge = array_merge($arr2, $arr3);
        $merge = array_unique($merge);
        $result = array();
        
        foreach ($arr1 as $key => $x) {
            if (!in_array($key, $merge)) $result[] = $x;
        }
        
        rsort($result);
        $result = implode(", ", $result);
        echo $result;
    }
}
?>

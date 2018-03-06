<?php
// Empty array
    $arr = array();

// Array with values
    $arr = array(1, 2, 3);
    $arr = array(
            'id' => 1,
            'name' => 'alex'
    );

// Multi level array
    $arr = array(
        "student" => array(
                "id" => 1,
                "name" => "Mr.A"
        ),
        "book" => array(
                "name" => "PHP tutorial"
        )
    );

// Add element at begining of array
    array_unshift($arr, "first");

// Add element at the end of array
    $arr[] = "last";

// Delete element
    // take first element and delete
    $first = array_shift($arr);
    
    // take last element and delate
    $last = array_pop($arr);

// Iterate array
    // for loop
    $array = array(1, 2, 3, 4);
    $sizeOfArray = count($array);
    for ($i = 0; $i < $sizeOfArray; $i++) {
        echo $i . ' => ' . $array[$i];
    }

    // foreach loop
	$array = array(1, 2, 3, 4);
    foreach ($array as $index => $value) {
        echo $index . ' => ' . $value;
    }

// Sort array based on value, key
    // Increase value
    sort($array);
    
    // Increase key
    ksort($array);

// Delete duplicated value: 
    $arr = array_unique($array);
// Flip key and value: 
    $arr = array_flip($array);

// implode
    $arr = array('a', 'b', 'c');
    $str = implode(',', $arr);
    
// explode
    $arr = explode(' ', $str);
    
// array_key
    $array = array(
        'a' => 'apple',
        1 => 'one'
    );
    $keys = array_keys($array);
    
// array_values
    $values = array_values($array);
    
// in_array
    $array = array('a', 'b', 'c');
    $found = in_array('b', $array); //true
    $notFound = in_array('d', $array); //false
    
// array_key_exists
    $array = array(
        'a' => 'apple',
        1 => 'one'
    );
    $found = array_key_exists('a', $array); //true
    $notFound = array_key_exists(2, $array); //false
    
// array_shift
    $array = array(1, 2, 3);
    $first = array_shift($array);

// array_unshift
    $array = array(2, 3);
    array_unshift($array, 1);
    
// array_pop
    $array = array(1, 2, 3);
    $last = array_pop($array);

// array_diff
    $array1 = array('a', 'b', 'c');
    $array2 = array('b', 'c', 'd');
    $result = array_diff($array1, $array2); // $result = array('a');
    
// array_diff_key
    $array1 = array(
        'a' => 'apple',
        1 => 'one'
    );
    $array2 = array(
        '1' => 'one string',
        's' => 'samsung',
    );
    $result = array_diff_key($array1, $array2); // $result = array('a' => 'apple');
    
// array_intersect
    $array1 = array('a', 'b', 'c');
    $array2 = array('b', 'c', 'd');
    $result = array_intersect($array1, $array2); // $result = array(1 => 'b', 2 => 'c');
    var_dump($result);
    
// array_intersect_key
    $array1 = array(
        'a' => 'apple',
        1 => 'one'
    );
    $array2 = array(
        '1' => 'one string',
        's' => 'samsung',
    );
    $result = array_intersect_key($array1, $array2); // $result = array(1 => 'one');
    
// array_merge
    $array1 = array(
        'a' => 'apple',
        1 => 'one'
    );
    $array2 = array(
        '1' => 'one string',
        'a' => 'address'
    );
    $result = array_merge($array1, $array2);
    $result = array(
        'a' => 'address', //lấy giá trị cuối cùng
        0 => 'one',
        1 => 'one string'
    );
    
// array_merge_recursive
    $array1 = array(
        'a' => 'apple',
        1 => 'one'
    );
    $array2 = array(
        '1' => 'one string',
        'a' => 'address'
    );
    $result = array_merge_recursive($array1, $array2);
    $result = array(
        'a' => array('apple', 'address'),
        0 => 'one',
        1 => 'one string'
    );

// array + array
    $array1 = array(
        'a' => 'apple',
        1 => 'one'
    );
    $array2 = array(
        '1' => 'one string',
        'a' => 'address'
    );
    $result = $array1 + $array2;
    $result = array(
        'a' => 'apple', //lấy giá trị đầu tiên
        1 => 'one'
    );
    
// array_filter
    // delete empty element in array
    $array = array('runsystem', 1, '0', 0, false, null, array());
    $result = array_filter($array);
    $result = array('runsystem', 1);
    
    // filter array with condition
    $array = array(1, 2, 3, 4, 5);
    $result = array_filter($array, function($value) {
        return $value <= 3; //chỉ lấy những giá trị <= 3
    });
    
// array_map
    $array = array(1, 2, 3, 4, 5);
    $result = array_map(function($value) {
        return ++$value;
    }, $array); //$result = array(2, 3, 4, 5, 6);

// array_walk
    $array = array(1, 2, 3, 4, 5);
    array_walk($array, function(&$value, $key) {
        $value++;
    });
?>

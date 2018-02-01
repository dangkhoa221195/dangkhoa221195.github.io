var $thisDate = 1;							// Tracks current date being written in calendar
var $wordMonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var $today = new Date();
var $todaysDay = $today.getDay() + 1;         // thứ trong tuần của ngày hiện tại
var $todaysDate = $today.getDate();           // ngày hiện tại
var $todaysMonth = $today.getUTCMonth() + 1;  // tháng hiện tại
var $todaysYear = $today.getFullYear();       // năm hiện tại
var $monthNum = $todaysMonth;                 // tháng sẽ hiển thị
var $yearNum = $todaysYear;                   // năm sẽ hiển thị
var $firstDate = new Date(String($monthNum) + "/1/" + String($yearNum));       // Object thể hiện ngàyyy đầu tiên của tháng hiện tại
var $firstDay = $firstDate.getUTCDay();       // thứ trong tuần của ngày đầu tiên của tháng
var $lastDate = new Date(String($monthNum + 1) + "/0/" + String($yearNum));	// Object thể hiện ngàyyy cuối cùng của tháng hiện tại
var $numbDays = 0;

/**
 * function xác định số ngày trong tháng
 *
 */
function daysInMonth() {
    if ($monthNum == 1 || $monthNum == 3 || $monthNum == 5 || $monthNum == 7 || $monthNum == 8 || $monthNum == 10 || $monthNum == 12) $numbDays = 31;
    else if ($monthNum == 4 || $monthNum == 6 || $monthNum == 9 || $monthNum == 11) $numbDays = 30;
    else if ($yearNum % 400 == 0 && $yearNum % 100 == 0) $numbDays = 29;
    else $numbDays = 28;
}

/**
 * function thay đổi tháng/năm (dấu mũi tên)
 *
 */
function changeDate($buttonpressed) {
    if ($buttonpressed == "prevyr") $yearNum--;
    else if ($buttonpressed == "nextyr") $yearNum++;
    else if ($buttonpressed == "prevmo") $monthNum--;
    else if ($buttonpressed == "nextmo") $monthNum++;
    else if ($buttonpressed == "return") { 
        $monthNum = $todaysMonth;
        $yearNum = $todaysYear;
    }

    if ($monthNum == 0) {
        $monthNum = 12;
        $yearNum--;
    } else if ($monthNum == 13) {
        $monthNum = 1;
        $yearNum++;
    }
    
    daysInMonth();
    
    $firstDate = new Date(String($monthNum) + "/1/" + String($yearNum));  // cập nhật ngàyyy đầu tiên
    $firstDay = $firstDate.getDay() + 1;
    createCalendar();
}

/** 
 * function thay đổi tháng nhanh (input select)
 *
 */
function quickChange($month, $year) {
    $monthNum = $month;
    $yearNum = $year;
    
    daysInMonth();
    
    $firstDate = new Date(String($monthNum) + "/1/" + String($yearNum));  // cập nhật ngàyyy đầu tiên
    $firstDay = $firstDate.getDay() + 1;
    createCalendar();
}

/** 
 * function tạo table calendar theo tháng, năm
 *
 */
function createCalendar() {
    $calendarString = '';
    
    $calendarString += '<table width="454" border="1">';
    $calendarString += '<tr>';
    $calendarString += '<td class="arrow" id="prevyr">&#8647;</td>';
    $calendarString += '<td class="arrow" id="prevmo">&#8592;</td>';
    $calendarString += '<td colspan="2"><select class="slt-month">';
    for (var $m = 0; $m < 12; $m++) {
        if ($m + 1 == $monthNum) {
            $calendarString += '<option selected value="'+ ($m + 1) +'">'+ $wordMonth[$m] +'</option>';
        } else {
            $calendarString += '<option value="'+ ($m + 1) +'">'+ $wordMonth[$m] +'</option>';
        }
    }
    $calendarString += '</select></td>';
    $calendarString += '<td><select class="slt-year">';
    for (var $y = 1950; $y < 2050; $y++) {
        if ($y == $yearNum) {
            $calendarString += '<option selected value="'+ $y +'">'+ $y +'</option>';
        } else {
            $calendarString += '<option value="'+ $y +'">'+ $y +'</option>';
        }
    }
    $calendarString += '</select></td>';
    $calendarString += '<td class="arrow" id="nextmo">&#8594;</td>';
    $calendarString += '<td class="arrow" id="nextyr">&#8649;</td>';
    $calendarString += '</tr>';
    $calendarString += '<tr>';
    $calendarString += '<td class="word-day">Sun</td>';
    $calendarString += '<td class="word-day">Mon</td>';
    $calendarString += '<td class="word-day">Tue</td>';
    $calendarString += '<td class="word-day">Wed</td>';
    $calendarString += '<td class="word-day">Thu</td>';
    $calendarString += '<td class="word-day">Fri</td>';
    $calendarString += '<td class="word-day">Sat</td>';
    $calendarString += '</tr>';
    
    // tạo các ô ngày
    for (var $i = 1; $i <= 6; $i++) {
        $calendarString += '<tr>';
        for (var $x = 1; $x <= 7; $x++) {
            if ($x < $firstDay && $i == 1) {     // TH có ô trống
                $calendarString += '<td>&nbsp;</td>';
            } else if ($thisDate <= $numbDays) {
                if ($thisDate == $todaysDate && $monthNum == $todaysMonth && $yearNum == $todaysYear) {       // đánh dấu ngày hiện tại
                    $calendarString += '<td class="date now">' + $thisDate + '</td>';
                } else {
                    $calendarString += '<td class="date others">' + $thisDate + '</td>';
                }
                $thisDate++;
            }
        }
        $calendarString += '<tr>';
    }
    
    $calendarString += '</table>';
    $("#calendar").html($calendarString);
    $thisDate = 1;
}

/** 
 * function đưa ngày được chọn vào ô textbox
 *
 */
function pickDate($a) {
    $("#birthday").val($a);
    $("#calendar").hide();
}

/**
 * function check validate
 *
 */
function validateForm() {
    var $username = $("#username").val();
    var $password = $("#password").val();
    var $email = $("#email").val();
    var $birthday = $("#birthday").val(); 
    var $indexOf = $birthday.indexOf("/");
    var $birthdayDate = $birthday.substring(0, $indexOf);
    var $birthday = new Date(String($monthNum) + "/" + $birthdayDate + "/" + String($yearNum));
    
    $("#username_error").hide();
    $("#username_exist").hide();
    $("#password_error").hide();
    $("#email_error").hide();
    $("#email_exist").hide();
    $("#birthday_error").hide();
    
    // check tại client
    if ($username.length >= 8) {
        $("#username_error").hide();
    } else {
        $("#username_error").show();
        return false;
    }
    
    if ($password.length >= 8) {
        $("#password_error").hide();
    } else {
        $("#password_error").show();
        return false;
    }
    
    if ($email.length >= 8) {
        $("#email_error").hide();
    } else {
        $("#email_error").show();
        return false;
    }
    
    if ($birthday < $today) {
        $("#birthday_error").hide();
    } else {
        $("#birthday_error").show();
        return false;
    }
    
    return true;
}

/**
 * Hàm chính
 *
 */
$(document).ready(function() {
    changeDate("return");
    
    // click textbox hiển thị lịch
    $("#birthday").focus(function() {
        $("#calendar").show();
    });
    
    // lùi 1 năm
    $(document).on("click", "#prevyr", function() {
        changeDate("prevyr");
    });
    
    // tiến 1 năm
    $(document).on("click", "#nextyr", function() {
        changeDate("nextyr");
    });
    
    // lùi 1 tháng
    $(document).on("click", "#prevmo", function() {
        changeDate("prevmo");
    });
    
    // tiến 1 tháng
    $(document).on("click", "#nextmo", function() {
        changeDate("nextmo");
    });
    
    // chọn tháng bất kỳ
    $(document).on("change", ".slt-month", function() {
        quickChange($(this).val(), $yearNum);
    });
    
    // chọn năm bất kỳ
    $(document).on("change", ".slt-year", function() {
        quickChange($monthNum, $(this).val());
    });
    
    // chọn ngày
    $(document).on("click", ".date", function() {
        var $date = $(".date").index(this) + 1;
        pickDate($date + "/" + $monthNum + "/" + $yearNum);
    });
    
    // kiểm tra username tồn tại chưa
    $(document).on("focus", "#username", function() {
        $("#username_exist").hide();
    });
    
    $(document).on("blur", "#username", function() {
        var $username = $("#username").val();
        $.ajax({
            type:"POST",
            url:"http://dangkhoa2211.freevnn.com/JQprocess.php",
            data:"username=" + $username,
            success: function(html) {         
                if (html == "U2") $("#username_exist").show();
                else if (html == "U1") $("#username_error").show();
            },
            timeout: 3000
        });
    });
    
    // kiểm tra validate tại client
    $(document).on("submit", "#my_form", function() {
        return validateForm();
    });
});
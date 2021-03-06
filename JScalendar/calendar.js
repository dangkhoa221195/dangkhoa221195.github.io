        var thisDate = 1;							// Tracks current date being written in calendar
        var wordMonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
        var today = new Date();
        var todaysDay = today.getDay() + 1;         // thứ trong tuần của ngày hiện tại
        var todaysDate = today.getDate();           // ngày hiện tại
        var todaysMonth = today.getUTCMonth() + 1;  // tháng hiện tại
        var todaysYear = today.getFullYear();       // năm hiện tại
        var monthNum = todaysMonth;                 // tháng sẽ hiển thị
        var yearNum = todaysYear;                   // năm sẽ hiển thị
        var firstDate = new Date(String(monthNum) + "/1/" + String(yearNum));       // Object thể hiện ngàyyy đầu tiên của tháng hiện tại
        var firstDay = firstDate.getUTCDay();       // thứ trong tuần của ngày đầu tiên của tháng
        var lastDate = new Date(String(monthNum + 1) + "/0/" + String(yearNum));	// Object thể hiện ngàyyy cuối cùng của tháng hiện tại
        var numbDays = 0;
        
        // xác định số ngày trong tháng
        function daysInMonth() {
            if (monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12) numbDays = 31;
            else if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11) numbDays = 30;
            else if (yearNum % 400 == 0 && yearNum % 100 == 0) numbDays = 29;
            else numbDays = 28;
        }
        
        // nhấn nút thay đổi tháng/năm
        function changeDate(buttonpressed) {
            if (buttonpressed == "prevyr") yearNum--;
            else if (buttonpressed == "nextyr") yearNum++;
            else if (buttonpressed == "prevmo") monthNum--;
            else if (buttonpressed == "nextmo") monthNum++;
            else if (buttonpressed == "return") { 
                monthNum = todaysMonth;
                yearNum = todaysYear;
            }

            if (monthNum == 0) {
                monthNum = 12;
                yearNum--;
            } else if (monthNum == 13) {
                monthNum = 1;
                yearNum++;
            }
            
            daysInMonth();
            
            firstDate = new Date(String(monthNum) + "/1/" + String(yearNum));  // cập nhật ngàyyy đầu tiên
            firstDay = firstDate.getDay() + 1;
            createCalendar();
        }
        
        // thay đổi tháng nhanh (select)
        function quickChange(month, year) {
            monthNum = month;
            yearNum = year;
            
            daysInMonth();
            
            firstDate = new Date(String(monthNum) + "/1/" + String(yearNum));  // cập nhật ngàyyy đầu tiên
            firstDay = firstDate.getDay() + 1;
            createCalendar();
        }
        // hiển thị calendar theo tháng, năm
        function createCalendar() {
            calendarString = '';
            //var daycounter = 0;
            
            calendarString += '<table width="454" border="1">';
            calendarString += '<tr>';
            calendarString += '<td class="arrow" onclick=\"changeDate(\'prevyr\')\">&#8647;</td>';
            calendarString += '<td class="arrow" onclick=\"changeDate(\'prevmo\')\">&#8592;</td>';
            calendarString += '<td colspan="2"><select class="slt-month" onchange="quickChange(this.value , '+ yearNum +')">';
            for (var m = 0; m < 12; m++) {
                if (m + 1 == monthNum) {
                    calendarString += '<option selected value="'+ (m + 1) +'">'+ wordMonth[m] +'</option>';
                } else {
                    calendarString += '<option value="'+ (m + 1) +'">'+ wordMonth[m] +'</option>';
                }
            }
            calendarString += '</select></td>';
            calendarString += '<td><select class="slt-year" onchange="quickChange('+ monthNum +', this.value)">';
            for (var y = 1950; y < 2050; y++) {
                if (y == yearNum) {
                    calendarString += '<option selected value="'+ y +'">'+ y +'</option>';
                } else {
                    calendarString += '<option value="'+ y +'">'+ y +'</option>';
                }
            }
            calendarString += '</select></td>';
            calendarString += '<td class="arrow" onclick=\"changeDate(\'nextmo\')\">&#8594;</td>';
            calendarString += '<td class="arrow" onclick=\"changeDate(\'nextyr\')\">&#8649;</td>';
            calendarString += '</tr>';
            calendarString += '<tr>';
            calendarString += '<td class="word-day">Sun</td>';
            calendarString += '<td class="word-day">Mon</td>';
            calendarString += '<td class="word-day">Tue</td>';
            calendarString += '<td class="word-day">Wed</td>';
            calendarString += '<td class="word-day">Thu</td>';
            calendarString += '<td class="word-day">Fri</td>';
            calendarString += '<td class="word-day">Sat</td>';
            calendarString += '</tr>';
            
            // tạo các ô ngày
            for (var i = 1; i <= 6; i++) {
                calendarString += '<tr>';
                for (var x = 1; x <= 7; x++) {
                    if (x < firstDay && i == 1) {     // TH có ô trống
                        calendarString += '<td>&nbsp;</td>';
                    } else if (thisDate <= numbDays) {
                        if (thisDate == todaysDate && monthNum == todaysMonth && yearNum == todaysYear) {       // đánh dấu ngày hiện tại
                            calendarString += '<td onclick="pickDate(\''+ thisDate +'/'+ monthNum +'/'+ yearNum +'\');" class="now">' + thisDate + '</td>';
                        } else {
                            calendarString += '<td onclick="pickDate(\''+ thisDate +'/'+ monthNum +'/'+ yearNum +'\');" class="others">' + thisDate + '</td>';
                        }
                        thisDate++;
                    }
                }
                calendarString += '<tr>';
            }
            
            calendarString += '</table>';
            var object=document.getElementById('calendar');
            object.innerHTML = calendarString;
            thisDate = 1;
        }
        
        // đưa ngày vào ô textbox ban đầu
        function pickDate(a) {
            document.getElementById("my_decision").value = a;
            document.getElementById("calendar").style.display = 'none';
        }
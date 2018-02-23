var myChart = (function() {
    // coordinate of center point
    var centerX = 150;
    var centerY = 150;
    var radius = 80;
    
    // input data (unit: %) total must be 100%
    var dataValue = new Array(); 
    dataValue[0] = ["blue", 10, "Xuất sắc"];
    dataValue[1] = ["red", 20, "Tốt"];
    dataValue[2] = ["yellow", 10, "Trung bình"];
    dataValue[3] = ["green", 60, "Kém"];
    
    // sAngle, eAngle in arc method
    var start, end; 
    
    // set up canvas, ctx
    var canvas = document.getElementById("my_chart"); 
    var ctx = canvas.getContext("2d");
    var sumPercent = 0;
    
    // note content
    var str = "";
    
    // check data condition
    var check;
    
    var checkData = function() {
        // check dataValue condition
        for (i = 0; i < dataValue.length; i++) {
            sumPercent += dataValue[i][1];
        }
        
        if (sumPercent == 100) check =  1;
        else check =  0;
    }
    
    var drawChart = function() {
       
        // draw chart
        if (check) {
            
            // draw the circle
            for (i = 0; i < dataValue.length; i++) {
                
                if (i == 0) start = -0.5;
                else start = end;
                
                end = start + dataValue[i][1] / 100 * 2;

                // draw cirle
                ctx.beginPath();
                ctx.lineWidth = 40;
                ctx.strokeStyle = dataValue[i][0];
                ctx.arc(centerX, centerY, radius, start*Math.PI, end*Math.PI);
                ctx.stroke();

                // find the middle point
                var mid = start + (end - start) / 2;
                var m = centerX + Math.cos(mid * Math.PI) * radius;
                var n = centerY - Math.sin(-mid * Math.PI) * radius;

                // add percentage in chart
                ctx.font = "10px Arial";
                ctx.fillText(dataValue[i][1] + "%", m, n);
                
                // write note
                str += "<li type='none'><span style='background-color:" 
                        + dataValue[i][0] 
                        + "'>&nbsp;&nbsp;&nbsp;&nbsp;</span>"
                        + dataValue[i][2]
                        + "</li><br>";
                document.getElementById("note").innerHTML = str;
            }
        } else alert("Input data invalid");
    }
    
    var draw = function() {
        checkData();
        drawChart();
    }
    
    return {
        draw: draw
    }
})();

myChart.draw();

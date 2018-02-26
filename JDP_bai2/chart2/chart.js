var myChart = (function() {
    var valueDefault = [0, 1, 2, 3, 4]; // number show on Oy
    var max = valueDefault[valueDefault.length - 1]; // max in valueDefault
    var min = valueDefault[0]; // min in valueDefault
    var distanceDefault = 50; // distance between valueDefault numbers
    var dataValue = [1.5, 3.5, 1.5, 3.5, 2.5, 3, 3.5]; // input data
    var dataCoordinate = new Array(valueDefault.length); // coordinate for input
    const Ox = 10; // coordinate of "0" (zero)
    const Oy = 250;
    var canvas = document.getElementById("my_chart");
    var ctx = canvas.getContext("2d");
    var color = "#00AEEF";

    var drawVertical = function() {
        
        // draw vertical
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(Ox + 20, 250);
        ctx.lineTo(Ox + 20, 20);
        ctx.stroke();
         
        // add valueDefault on vertical
        var tmp_y = Oy; 

        for(i = 0; i < valueDefault.length; i++) { 
            ctx.font="30px Georgia";
            ctx.fillText(valueDefault[i], Ox, tmp_y);
            tmp_y -= distanceDefault;
        }
    }

    var drawHorizontal = function() {
        
        // draw horizontal
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(30, 250);
        ctx.lineTo(500, 250);
        ctx.stroke();
    }

    var handleInput = function() {
        
        //check condition for dataValue
        for(i = 0; i < dataValue.length; i++) {
            if (dataValue[i] > max)
                dataValue[i] = max;
            if (dataValue[i] < min)
                dataValue[i] = min;
        }

        // calculate coordinate for dataValue
        for(i = 0; i < dataValue.length; i++) {
            
            if (i == 0)
                dataCoordinate[i] = [50, Oy - dataValue[i] * distanceDefault];
            else
                dataCoordinate[i] = [dataCoordinate[i - 1][0] + 50, 
                                    Oy - dataValue[i] * distanceDefault];
        }
    }

    var drawLine = function() {
        
        // draw line
        ctx.beginPath();
        ctx.lineWidth = 5;
        
        for(i = 0; i < dataCoordinate.length - 1; i++) {
            ctx.moveTo(dataCoordinate[i][0], dataCoordinate[i][1]);
            ctx.bezierCurveTo(dataCoordinate[i][0] + 20, dataCoordinate[i][1], 
                              dataCoordinate[i + 1][0] - 20, dataCoordinate[i + 1][1], 
                              dataCoordinate[i + 1][0], dataCoordinate[i + 1][1]);
        }
        
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    
    var draw = function() {
        drawVertical();
        drawHorizontal();
        handleInput();
        drawLine();
    }
    
    return {
        draw: draw
    }
})();

myChart.draw();

var myChart = (function() {    

    // data input
    var dataValue = new Array();
    dataValue[0] = ["A", 2];
    dataValue[1] = ["B", 0.1];
    dataValue[2] = ["C", 3];
    dataValue[3] = ["E", 4];
    dataValue[4] = ["F", 4];
    var note = "LEVEL OF POSITION";

    // number show on Oy
    var valueDefault = [0, 1, 2, 3, 4];
    var max = valueDefault[valueDefault.length - 1];
    var min = 0;
    var distanceDefault = 50; // distance between valueDefault numbers

    // coordinate of origin
    var originX = 30, originY = 250;

    // horizontal configuration
    var columnWidth = 45;
    var columnDistance = 75;
    var columnColor = "#3366CC";
    var horizontalLong = ( columnDistance) * dataValue.length;

    // set up canvas
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext("2d");
     
    /**
     * Display horizontals
     *
     */ 
    var drawHorizontals = function() { 
        // draw Ox and horizontal lines
        var tmp_y = originY; 

        for (i = 0; i < valueDefault.length; i++) { 

            // write valueDefault numbers
            ctx.font="15px Arial";
            ctx.fillText(valueDefault[i], originX - 20, tmp_y);
            
            // draw horizontal lines
            ctx.beginPath();
            
            if (i != 0) ctx.strokeStyle = "gray";
            
            ctx.moveTo(originX, tmp_y);
            ctx.lineTo(originX + horizontalLong, tmp_y);
            ctx.stroke();
            tmp_y -= distanceDefault;
        }
    }

    /**
     * Display columns
     *
     */
    var drawVerticals = function() {
        // draw columns and names
        for (i = 0; i < dataValue.length; i++) {
            
            if (dataValue[i][1] > max) dataValue[i][1] = max;
            if (dataValue[i][1] < min) dataValue[i][1] = min;
            
            // columns
            ctx.beginPath();
            ctx.strokeStyle = columnColor;
            ctx.lineWidth = columnWidth;
            ctx.moveTo(originX + columnWidth / 2 + columnDistance * i, originY);
            ctx.lineTo(originX + columnWidth / 2 + columnDistance * i, 
                       originY - dataValue[i][1] * distanceDefault);
            ctx.stroke();
            
            // names
            ctx.font="15px Arial";
            ctx.fillText(dataValue[i][0], 
                         originX + columnWidth / 2 + columnDistance * i, 
                         originY + 20);
        }
    }

    /**
     * Display note
     *
     */
    var drawNote = function() {
        // item
        ctx.beginPath();
        ctx.strokeStyle = columnColor;
        ctx.lineWidth = columnWidth;
        ctx.moveTo(originX + horizontalLong + 38, 
                   originY - distanceDefault * (valueDefault.length - 1));
        ctx.lineTo(originX + horizontalLong + 38, 
                   originY - distanceDefault * (valueDefault.length - 1) + 20);
        ctx.stroke();

        // unit
        note = note.split(" ");

        for (i = 0; i < note.length; i++) {
            ctx.font="15px Arial";
            ctx.fillText(note[i], 
                        originX + horizontalLong + 14,
                        originY - distanceDefault * (valueDefault.length - 1) + 45 + i * 30);
        }
    }
    
    /**
     * Main function
     *
     */
    var draw = function() {
        drawHorizontals();
        drawVerticals();
        drawNote();
    }
    
    return {
        draw: draw
    }
})();

myChart.draw();

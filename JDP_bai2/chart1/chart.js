var myChart = (function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var chartName = "BIỂU ĐỒ TỔNG QUAN KHUNG NĂNG LỰC";

    // 2 parts of chart
    var first = {
       name: "ĐÃ ĐẠT", 
       percent: 80, 
       color1: "#456AA4", 
       color2: "#009ED5"
    };
    var second = {
        name: "CHƯA ĐẠT", 
        percent: 20, 
        color1: "#E4322B", 
        color2: "#E4322B"
    };

    const SCALE = 0.3;
    const RADIUS_BIG = 75; // radius of big part
    const LINEWIDTH_BIG = RADIUS_BIG * 2;
    const RADIUS_SMALL = 65; // radius of small part
    const LINEWIDTH_SMALL = RADIUS_SMALL * 2;
    const HEIGHT = 150; // height of pie chart
    const CENTER_X = 350;
    const CENTER_Y = 700;

    /**
     * Function draw a part of pie chart
     * @param size - "big" or "small" part
     * @param x - x-coordinate of the center
     * @param y - y-coordinate of the center
     *
     */
    var drawPart = function(size, x, y, start, end, color_below, color_above) {
        
        for (i = 0; i < HEIGHT; i++) {
            ctx.beginPath();
            
            if (size == "big") {
                ctx.lineWidth = LINEWIDTH_BIG;
                ctx.arc(x, y--, RADIUS_BIG, start * Math.PI, end * Math.PI);
            } else if (size == "small") {
                ctx.lineWidth = LINEWIDTH_SMALL;
                ctx.arc(x, y--, RADIUS_SMALL, start * Math.PI, end * Math.PI);
            }
            
            if (i != HEIGHT - 1) ctx.strokeStyle = color_below;
            else ctx.strokeStyle = color_above;
            
            ctx.stroke();
        }
    }

    /**
     * Function draw full pie chart
     *
     */
    var drawChart = function() {
        ctx.scale(1, SCALE);
        
        if (first["percent"] * 3 < second["percent"]) {
            drawPart("big", CENTER_X - 10, CENTER_Y - 10,
                     1.5, 2, 
                     second["color1"], second["color2"]);
            drawPart("small", CENTER_X, CENTER_Y,
                     0, first["percent"] / 100 * 2, 
                     first["color1"], first["color2"]);
            drawPart("big", CENTER_X - 10, CENTER_Y -10,
                     first["percent"] / 100 * 2, 1.5, 
                     second["color1"], second["color2"]);
        } else if (first["percent"] > 3 * second["percent"]) {
            drawPart("big", CENTER_X, CENTER_Y,
                     1.5, first["percent"] / 100 * 2, 
                     first["color1"], first["color2"]);
            drawPart("small", CENTER_X + 15, CENTER_Y - 30,
                     first["percent"] / 100 * 2, 2, 
                     second["color1"], second["color2"]);
            drawPart("big", CENTER_X, CENTER_Y,
                     0, 1.5, 
                     first["color1"], first["color2"]);
        } else if (first["percent"] < second["percent"]) { 
            drawPart("big", CENTER_X - 10, CENTER_Y - 10,
                     first["percent"] / 100 * 2, 2, 
                     second["color1"], second["color2"]);
            drawPart("small", CENTER_X, CENTER_Y,
                     0, first["percent"] / 100 * 2, 
                     first["color1"], first["color2"]);
        } else if (first["percent"] > second["percent"]) { 
            drawPart("small", CENTER_X + 15, CENTER_Y - 30,
                     first["percent"] / 100 * 2, 2, 
                     second["color1"], second["color2"]);
            drawPart("big", CENTER_X, CENTER_Y,
                     0, first["percent"] / 100 * 2, 
                     first["color1"], first["color2"]);
        } else if (first["percent"] == second["percent"]) { 
            drawPart("big", CENTER_X - 10, CENTER_Y - 10,
                     first["percent"] / 100 * 2, 2, 
                     second["color1"], second["color2"]);
            drawPart("big", CENTER_X, CENTER_Y,
                     0, first["percent"] / 100 * 2, 
                     first["color1"], first["color2"]);
        }
    }

    /**
     * Function draw name of 2 parts
     *
     */
    var drawNote = function() {
        ctx.scale(1,3);

        if (first["percent"] <= second["percent"]) {
            
            // note for first part
            ctx.beginPath();
            ctx.strokeStyle = first["color1"];
            ctx.lineWidth = 3;
            ctx.moveTo(CENTER_X + Math.cos(first["percent"] / 100 * Math.PI) * RADIUS_SMALL,
                       (CENTER_Y - HEIGHT + Math.sin(first["percent"] / 100 * Math.PI) * RADIUS_SMALL) / 3);
            ctx.lineTo(500, 100);
            ctx.lineTo(650, 100);
            ctx.stroke();
            
            ctx.font = "20px Arial";
            ctx.fillStyle = "gray";
            ctx.fillText(first["percent"] + "% " + first["name"], 500, 90);
            
            // note for second part
            ctx.beginPath();
            ctx.strokeStyle = second["color1"];
            ctx.lineWidth = 3;
            ctx.moveTo(CENTER_X + Math.cos(second["percent"] / 100 * Math.PI) * RADIUS_BIG,
                      (CENTER_Y - HEIGHT + Math.sin(-second["percent"] / 100 * Math.PI) * RADIUS_BIG) / 3);
            ctx.lineTo(200, 100);
            ctx.lineTo(50, 100);
            ctx.stroke();
            
            ctx.font = "20px Arial";
            ctx.fillStyle = "gray";
            ctx.fillText(second["percent"] + "% " + second["name"], 50, 90);
        } else {
            
            // note for first part
            ctx.beginPath();
            ctx.strokeStyle = first["color1"];
            ctx.lineWidth = 3;
            ctx.moveTo(CENTER_X + Math.cos(first["percent"] / 100 * Math.PI) * RADIUS_SMALL,
                       (CENTER_Y - HEIGHT + Math.sin(first["percent"] / 100 * Math.PI) * RADIUS_SMALL) / 3);
            ctx.lineTo(200, 100);
            ctx.lineTo(100, 100);
            ctx.stroke();
            
            ctx.font = "20px Arial";
            ctx.fillStyle = "gray";
            ctx.fillText(first["percent"] + "% " + first["name"], 50, 90);
            
            // note for second part
            ctx.beginPath();
            ctx.strokeStyle = second["color1"];
            ctx.lineWidth = 3;
            ctx.moveTo(CENTER_X + Math.cos(second["percent"] / 100 * Math.PI) * RADIUS_BIG,
                       (CENTER_Y - HEIGHT + Math.sin(-second["percent"] / 100 * Math.PI) * RADIUS_BIG) / 3);
            ctx.lineTo(500, 100);
            ctx.lineTo(600, 100);
            ctx.stroke();
            
            ctx.font = "20px Arial";
            ctx.fillStyle = "gray";
            ctx.fillText(second["percent"] + "% " + second["name"], 500, 90);
        }
    }

    /**
     * Function draw title of pie chart
     *
     */
    var drawChartName = function() {
        ctx.font = "12px Arial";
        ctx.fillStyle = "#77CAE7";
        ctx.fillText(chartName, CENTER_X - 120, CENTER_Y * SCALE + 100);
    }

    /**
     * Main function
     *
     */
    var draw = function() {
        if (first["percent"] + second["percent"] == 100) {
            drawChart();
            drawNote();
            drawChartName();
        } else alert("Invalid input");
    }
    
    return {
        draw: draw
    }
})();

myChart.draw();

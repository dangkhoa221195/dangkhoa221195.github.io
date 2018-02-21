var pieChart = (function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
 
    var drawSuccess = function() {
        // draw 80% 3d part
        ctx.save();
        ctx.scale(1, 0.5);
        ctx.beginPath();
        ctx.arc(250, 600, 220, 0, 1 * Math.PI);
        ctx.strokeStyle = "#456AA4";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        ctx.fillStyle = "#456AA4"; // xanh ngoc
        ctx.fillRect(30,250,440,55);
        ctx.fill();

        // draw 80% 2d part
        ctx.save();
        ctx.scale(1, 0.5);
        ctx.beginPath();
        ctx.arc(250, 500, 220, 0, 2 * Math.PI * 0.8);
        ctx.strokeStyle = "#009ED5";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        ctx.fillStyle = "#009ED5";
        ctx.fill();
        
        // draw 80% 3d part
        ctx.beginPath();
        ctx.moveTo(250,250);
        ctx.lineTo(318,145);
        ctx.lineTo(318,200);
        ctx.lineTo(285,250);
        ctx.closePath();
        ctx.strokeStyle = "#456AA4";
        ctx.stroke();
        ctx.fillStyle = "#456AA4";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(318,145);
        ctx.lineTo(470,250);
        ctx.lineTo(285,250);
        ctx.lineTo(318,200);
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();
    }

    var drawFail = function() {
        // draw 20%
        ctx.save();
        ctx.scale(1, 0.5);
        ctx.beginPath();
        ctx.arc(260, 490, 220, 0,  2 * Math.PI * 0.8, true);
        ctx.strokeStyle = "#E4322B";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        ctx.fillStyle = "#E4322B";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(260,245);
        ctx.lineTo(328,140);
        ctx.lineTo(480,245);
        ctx.closePath();
        ctx.strokeStyle = "#E4322B";
        ctx.stroke();
        ctx.fillStyle = "#E4322B";
        ctx.fill();

        // draw 20% under part
        ctx.beginPath();
        ctx.moveTo(260,245);
        ctx.lineTo(480,245);
        ctx.lineTo(480,300);
        ctx.lineTo(470,300);
        ctx.lineTo(470,250);
        ctx.lineTo(260,250);
        ctx.closePath();
        ctx.strokeStyle = "#E4322B";
        ctx.stroke();
        ctx.fillStyle = "#E4322B";
        ctx.fill();
    }

    var drawNote = function() {
        // draw note for 80%
        ctx.font = "20px Georgia";
        ctx.fillStyle = "gray";
        ctx.fillText("80% ĐÃ ĐẠT", 10, 70);
        ctx.beginPath();              
        ctx.lineWidth = "5";
        ctx.strokeStyle = "#456AA4";
        ctx.moveTo(10, 75);
        ctx.lineTo(150, 75);
        ctx.lineTo(200, 300);
        ctx.stroke();

        // draw note for 20%
        ctx.font = "20px Georgia";
        ctx.fillStyle = "gray";
        ctx.fillText("20% CHƯA ĐẠT", 350, 70);
        ctx.beginPath();              
        ctx.lineWidth = "5";
        ctx.strokeStyle = "#E4322B";
        ctx.moveTo(330, 160);
        ctx.lineTo(350, 75);
        ctx.lineTo(500, 75);
        ctx.stroke();
    }
    
    var draw = function() {
        drawSuccess();
        drawFail();
        drawNote();
    }
    
    return {
        draw: draw
    }
})();

pieChart.draw();

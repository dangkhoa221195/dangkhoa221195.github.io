var $life = 3;
var $score = 100;
var $time = 1500;
var $level = 1;
var $pause = 0;
var $bomb = 3;
sessionStorage.highScore = 0;

/**
 * Main function
 *
 */
function main() {
    menu();
    
    // create 1 monster for level 1
    if ($level == 1) {
        var $rand = 1 + Math.floor(Math.random() * 9);
        $a = new component($rand);
        
        // make monster move
        $a.update();
        
        if ($score == 200) {
            $time = 1000;
            $level = 2;
        }
    // create 2 monster for level 2
    } else if ($level == 2) {
        do {
            var $rand = 1 + Math.floor(Math.random() * 9);
            var $rand2 = 1 + Math.floor(Math.random() * 9);
        } while ($rand == $rand2)
            
        // make monsters move
        $a = new component($rand);
        $a.update();
        $b = new component($rand2);
        $b.update();
        
        if ($score == 300) {
            $time = 600;
            $level = 3;
        }
    // create 3 monster for level 3
    } else if ($level == 3) {
        do {
            var $rand = 1 + Math.floor(Math.random() * 9);
            var $rand2 = 1 + Math.floor(Math.random() * 9);
            var $rand3 = 1 + Math.floor(Math.random() * 9);
        } while ($rand == $rand2 || $rand == $rand3 || $rand2 == $rand3)
            
        // make monsters move
        $a = new component($rand);
        $a.update();
        $b = new component($rand2);
        $b.update();
        $c = new component($rand3);
        $c.update();
    }
}

/**
 * Display infomation on menu
 *
 */
function menu() {
    // Show hearts
    $(".heart-icon").remove();
    for (var i = 0; i < $life; i++) {
        $("#heart").append("<img src='images/heart_icon.png' class='heart-icon'>");
    }
    
    // Show score
    $("#score").html("Score: " + $score); 
    
    // Show bomb number
    if ($bomb > 0) $("#bomb").html($bomb);
    else $("#bomb").html('0');
}

/**
 * Object monster
 * @param {$number} position of monster
 *
 */
function component($number) {
    /*
    Position of monsters
    1 2 3
    4 9 5
    6 7 8
    */
    switch ($number) {
        case 1: // Direction of monster 1
            this.x = "0";
            this.y = "0";
            this.x1 = "100px";
            this.y1 = "100px";
            this.x2 = "-100px";
            this.y2 = "-100px";
            break;
        case 2: // Direction of monster 2
            this.x = "200px";
            this.y = "0";
            this.x1 = "200px";
            this.y1 = "100px";
            this.x2 = "200px";
            this.y2 = "-100px";
            break;
        case 3: // Direction of monster 3
            this.x = "400px";
            this.y = "0";
            this.x1 = "300px";
            this.y1 = "100px";
            this.x2 = "500px";
            this.y2 = "-100px";
            break;
        case 4: // Direction of monster 4
            this.x = "0";
            this.y = "200px";
            this.x1 = "100px";
            this.y1 = "200px";
            this.x2 = "-100px";
            this.y2 = "200px";
            break;   
        case 5: // Direction of monster 5
            this.x = "400px";
            this.y = "200px";
            this.x1 = "300px";
            this.y1 = "200px";
            this.x2 = "500px";
            this.y2 = "200px";
            break; 
        case 6: // Direction of monster 6
            this.x = "0";
            this.y = "400px";
            this.x1 = "100px";
            this.y1 = "300px";
            this.x2 = "-100px";
            this.y2 = "500px";
            break; 
        case 7: // Direction of monster 7
            this.x = "200px";
            this.y = "400px";
            this.x1 = "200px";
            this.y1 = "300px";
            this.x2 = "200px";
            this.y2 = "500px";
            break; 
        case 8: // Direction of monster 8
            this.x = "400px";
            this.y = "400px";
            this.x1 = "300px";
            this.y1 = "300px";
            this.x2 = "500px";
            this.y2 = "500px";
            break; 
        case 9: // Direction of monster 9
            this.x = "200px";
            this.y = "200px";
            
            // Monster 9 has 4 random directions
            var $freeMove = 1 + Math.floor(Math.random() * 4);
            switch ($freeMove) {
                case 1:
                    this.x1 = "200px";
                    this.y1 = "50px";
                    this.x2 = "200px";
                    this.y2 = "-100px";
                    break;
                case 2:
                    this.x1 = "350px";
                    this.y1 = "200px";
                    this.x2 = "500px";
                    this.y2 = "200px";
                    
                    break;
                case 3:
                    this.x1 = "200px";
                    this.y1 = "350px";
                    this.x2 = "200px";
                    this.y2 = "500px";
                    break;
                case 4:
                    this.x1 = "50px";
                    this.y1 = "200px";
                    this.x2 = "-100px";
                    this.y2 = "200px";
                    break;
            }
    }
    
    // Make the object move
    this.update = function() {
        $("#main").append("<img src='images/GameMonster.png' class='monster'>");
        $(".monster").css({top: this.y, left: this.x});
        
        // monster moves inside
        $(".monster").animate({
            top: this.y1,
            left: this.x1
        }, $time, "linear");
        
        // monster moves outside
        $(".monster").animate({
            top: this.y2,
            left: this.x2
        }, $time, "linear", function() {
            $score -= 10;
            monsterIsOut();
        });
    }
}

/**
 * When monster move out of frame
 *
 */
function monsterIsOut() {
    if ($score < 0) {
        gameOver();
    } else {
        $(".monster").stop(true, true);
        $(".monster").remove();
        main();
    }
}

/**
 * Game over function
 *
 */
function gameOver() {
    // Remove the monsters
    $(".monster").stop(true, true);
    $(".monster").remove();
    
    // Show notification "GAME OVER" and "SCORE"
    $("#noti").css("display","block");
    $("#info").css("display","block");
    
    if ($score < 0) $("#info").html("SCORE: 0");
    else if ($score > sessionStorage.highScore) {
        sessionStorage.highScore = $score;
        $("#info").html("NEW HIGH SCORE: " + $score);
    } else $("#info").html("SCORE: " + $score);
    
    // Remove event "click" on main, pause, bomb
    $("#main").off();
    $("#pause").off();
    $("#bomb_icon").off();
}

/**
 * Click in frame function
 *
 */
function clickInMain() {
    $score -= 10;
    $life--;
    
    if ($life < 0) gameOver();
    else menu();
}

/**
 * When player click in monster
 *
 */
function clickInMonster() {
    $score += 20;
    $life++;
    monsterIsOut();
}

/**
 * Pause/Resume game function
 *
 */
function clickInPause() {
    // Pause game
    if ($pause == 0) {
        $pause = 1;
        $(".monster").stop(true, true);
        $(".monster").remove();
        $("#info").html("PAUSE");
        $("#info").css("display","block");
        $("#main").off();
        $("#bomb_icon").off();
    // Resume game
    } else {
        $pause = 0;
        $("#info").css("display","none");
        $("#main").on("click", function() {
            clickInMain();
        });
        $("#bomb_icon").on("click", function() {
            clickInBomb();
        });
        main();
    }
}

/**
 * Replay
 *
 */
function clickInReplay() {
    $(".monster").stop(true, true);
    $(".monster").remove();
    $("#noti").css("display","none");
    $("#info").css("display","none");
    
    // Reset event "click" for Pause game
    $("#pause").off();
    $("#pause").on("click", function() {
        clickInPause();
    }); 
    
    // Reset event "click" for Bomb
    $("#bomb_icon").off();
    $("#bomb_icon").on("click", function() {
        clickInBomb();
    });
    
    // Reset event "click" for Main
    $("#main").off();
    $("#main").on("click", function() {
        clickInMain();
    });
    
    // Reset event "click" for Monster
    $(".monster").on("click", function() {
        clickInMonster();
    });
    
    // Reset other options
    $level = 1;
    $time = 1500;
    $score = 100;
    $life = 3;
    $pause = 0;
    $bomb = 3;
    
    main();
}

// Bomb function
function clickInBomb() {
    if ($bomb > 0) {
        $bomb--;
        $(".monster").stop(true, true);
        $(".monster").remove();
        $("#explode").show(1).delay(500).hide(1);
        
        if ($level == 1) $score += 10;
        if ($level == 2) $score += 20;
        if ($level == 3) $score += 30;
    }
    main();
}

/**
 * DOCUMENT READY
 *
 */
$(document).ready(function() {
    main();
    
    $("#main").on("click", function() {
        clickInMain();
    });
    
    $(document).on("click", ".monster", function() {
        clickInMonster();
    });
    
    $("#replay").on("click", function() {
        clickInReplay();
    });
    
    $("#pause").on("click", function() {
        clickInPause();
    }); 
    
    $("#bomb_icon").on("click", function() {
        clickInBomb();
    });
});
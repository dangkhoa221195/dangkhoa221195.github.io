var myModule = (function() {
    var interval;
    var currentSlide = 1;
    
    // cache DOM
    var $slider = $("#slider");
    var $sliderContainer = $slider.find(".slides");
    var $slides = $sliderContainer.find(".slide");
    var $thumbnails = $(".smallImages");
    
    // configuration
    var width = 720;
    var animationSpeed = 1000;
    var pause = 2000;
    var slidesLength = $slides.length;
      
    // initial slide  
    var first = function() {
        $thumbnails.eq(currentSlide - 1).addClass(" active");
    }
     
    // auto slide
    var move = function() {
        interval = setInterval(function() {
            currentSlide++;
            
            // display thumbnails
            for (var i = 0; i < slidesLength; i++) {
                $thumbnails.eq(i).removeClass(" active");
            }
     
            $thumbnails.eq(currentSlide - 1).addClass(" active");
            
            // display slide
            $slides.css("opacity","0.3");
            $slides.eq(currentSlide - 1).css("opacity","1");
            
            if (currentSlide == slidesLength + 1) currentSlide = 1;
            
            if (currentSlide > 1)
                $sliderContainer.animate({"marginLeft": "-=" + width}, animationSpeed);
            else {
                $sliderContainer.animate({"marginLeft": "0"}, animationSpeed);
                $slides.eq(currentSlide - 1).css("opacity","1");
                $thumbnails.eq(0).addClass(" active");
            }
        }, pause);
    }
    
    // stop auto slide
    var stop = function() {
        clearInterval(interval);
    }
    
    // next image
    var next = function() {
        currentSlide++;
        
        if (currentSlide == slidesLength + 1) currentSlide = 1;
        
        // display thumbnails
        for (var i = 0; i < slidesLength; i++) {
            $thumbnails.eq(i).removeClass(" active");
        }
 
        $thumbnails.eq(currentSlide - 1).addClass(" active");
        
        // display slide
        $slides.css("opacity","0.3");
        $slides.eq(currentSlide - 1).css("opacity","1");
        
        if (currentSlide > 1)
            $sliderContainer.animate({"marginLeft": "-=" + width}, animationSpeed);
        else {
            $sliderContainer.animate({"marginLeft": "0"}, animationSpeed);
            $slides.eq(currentSlide - 1).css("opacity","1");
        }
    }
    
    // previous image
    var pre = function() {
        currentSlide--;
        
        if (currentSlide == 0) currentSlide = slidesLength;

        // display thumbnails
        for (var i = 0; i < slidesLength; i++) {
            $thumbnails.eq(i).removeClass(" active");
        }
 
        $thumbnails.eq(currentSlide - 1).addClass(" active");
        
        // display slide
        $slides.css("opacity","0.3");
        $slides.eq(currentSlide - 1).css("opacity","1");
        
        if (currentSlide < slidesLength)
            $sliderContainer.animate({"marginLeft": "+=" + width}, animationSpeed);
        else {
            $sliderContainer.animate({"marginLeft": "-=" + width * (slidesLength - 1)}, animationSpeed);
            $slides.eq(currentSlide - 1).css("opacity","1");
        }
    }
    
    var pickSlide = function(pick) {
        
        // display thumbnails
        for (var i = 0; i < slidesLength; i++) {
            $thumbnails.eq(i).removeClass(" active");
        }
 
        $thumbnails.eq(pick - 1).addClass(" active");
        
        // display slide
        $slides.css("opacity","0.3");
        $slides.eq(pick - 1).css("opacity","1");
    }
    
    return {
        first: first,
        move: move,
        next: next,
        pre: pre,
        stop: stop,
        pickSlide: pickSlide
    }
})();

/**
 * Document ready
 *
 */
$(document).ready(function() {
    myModule.first();
    
    // auto slide
    myModule.move();
    
    // next image
    $(".next").click(function() {
        myModule.stop();
        myModule.next();
        myModule.move();
    });
    
    // previous image
    $(".pre").click(function() {
        myModule.stop();
        myModule.pre();
        myModule.move();
    });
});

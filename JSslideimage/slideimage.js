var slideIndex = 1;
showSlides(slideIndex);
// slideshow tự động
setInterval(function(){
    changeSlide(1);
}, 3000);

// nút pre và nút next
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// click vào các hình bên dưới
function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var smalls = document.getElementsByClassName("smallImages");
    var i;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < smalls.length; i++) {
        smalls[i].className = smalls[i].className.replace(" active","");
    }
    slides[slideIndex - 1].style.display = "block";
    smalls[slideIndex - 1].className += " active";
}
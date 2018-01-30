// khởi tạo chỉ số của slideIndex
var slideIndex = 1;

// đếm số hình ảnh của slideshow
var countSlides = $(".mySlides").length;

// đếm số hình ảnh nhỏ bên dưới
var countSmall = $(".smallImages").length;

/**
 * Hàm showSlides hiển thị hình ảnh theo tham số n
 * n > số hình : hiển thị ảnh đầu tiên
 * n < 1: hiển thị ảnh cuối cùng
 *
 */
function showSlides(n) {
    if (n > countSlides) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = countSlides;
    } else slideIndex = n;
    
    for (var i = 0; i < countSlides; i++) {
        $(".mySlides").eq(i).hide();
    }
    
    for (var i = 0; i < countSmall; i++) {
        $(".smallImages").eq(i).removeClass("active");
    }
    
    $(".mySlides").eq(slideIndex - 1).show();
    $(".smallImages").eq(slideIndex - 1).addClass("active");
}

/**
 * Hàm chính
 *
 */
$(document).ready(function() {
    showSlides(slideIndex);
    
    // tự động chuyển ảnh
    setInterval(function() {
        showSlides(slideIndex += 1);
    }, 2000);
    
    // hiển thị ảnh lớn khi click vào ảnh nhỏ
    $(".smallImages").click(function() {
        slideIndex = $(".smallImages").index(this) + 1;
        showSlides(slideIndex);
    });
    
    // click tới 1 ảnh
    $(".pre").click(function() {
        showSlides(slideIndex -= 1);
    });
    
    // click lùi 1 ảnh
    $(".next").click(function() {
        showSlides(slideIndex += 1);
    });
    
});

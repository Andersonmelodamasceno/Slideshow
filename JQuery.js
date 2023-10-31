$(document).ready(function() {
    let slideIndex = 0;

    function showSlides() {
        let slides = $(".slide");
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        slides.hide();
        slides.eq(slideIndex).show();
    }

    function nextSlide() {
        slideIndex++;
        showSlides();
    }

    function prevSlide() {
        slideIndex--;
        showSlides();
    }

    $(".next").click(nextSlide);
    $(".prev").click(prevSlide);

    setInterval(nextSlide, 3000); // Avança automaticamente a cada 3 segundos
});

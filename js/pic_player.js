document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= items.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = items.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // 自动轮播
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});

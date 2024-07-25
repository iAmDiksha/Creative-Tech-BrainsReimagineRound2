document.addEventListener('DOMContentLoaded', function () {
    let container = document.querySelector('.container')
    let counter = document.querySelector('.counter')
    let preloader = document.querySelector('.preloader')
    let c = 0;
    function loader(){
        let count = setInterval(()=>{
            c = c + 1;
            if(c === 100)
            {
                clearInterval(count);
                counter.classList.add('counter-hide')
                preloader.classList.add('pre-active')
                container.classList.remove('container_hide')
            }
        },10)
    }

    loader();

    const cardsContainers = document.querySelectorAll('.cards');
    const leftArrows = document.querySelectorAll('.arrow.left');
    const rightArrows = document.querySelectorAll('.arrow.right');

    cardsContainers.forEach((cardsContainer, index) => {
        let isDown = false;
        let startX;
        let scrollLeft;

        cardsContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            cardsContainer.classList.add('active');
            startX = e.pageX - cardsContainer.offsetLeft;
            scrollLeft = cardsContainer.scrollLeft;
        });

        cardsContainer.addEventListener('mouseleave', () => {
            isDown = false;
            cardsContainer.classList.remove('active');
        });

        cardsContainer.addEventListener('mouseup', () => {
            isDown = false;
            cardsContainer.classList.remove('active');
        });

        cardsContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - cardsContainer.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            cardsContainer.scrollLeft = scrollLeft - walk;
        });

        leftArrows[index].addEventListener('click', () => {
            cardsContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });

        rightArrows[index].addEventListener('click', () => {
            cardsContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    });

    let open = document.querySelector(".open")
    let close = document.querySelector(".close")
    let menu = document.querySelector('menu ul')

    open.addEventListener('click',()=>{
        open.style.display = "none"
        close.style.display = "inline-block"
        menu.style.right = "0"
    })
    close.addEventListener('click',()=>{
        close.style.display = "none"
        open.style.display = "inline-block"
        menu.style.right = "-100%"
    })


    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    const startSlideShow = () => {
        slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    };

    const stopSlideShow = () => {
        clearInterval(slideInterval);
    };

    prevButton.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    nextButton.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    startSlideShow(); // Start slideshow on page load

});


document.addEventListener('DOMContentLoaded', function () {
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

    let t1 = gsap.timeline();

    t1.from("nav",1,{
        opacity: 0,
        y: "-40px"
    })
    t1.from("menu",1,{
        opacity: 0,
        x: "-80px"
    })
    t1.from(".head .txt h1",2,{
        opacity: 0,
        x: "-100px"
    })
    t1.from(".head .txt p",2,{
        opacity: 0,
        x: "100px"
    })
    t1.from(".head .image",{
        opacity:0,
        y: "-100px",
        stagger: 1
    })
    t1.from(".head .small",1.2,{
        opacity:0,
        y: "-70px",
    })

});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function hidePreloader() {
    let preloader = document.querySelector(".preloader");

    // Додаємо клас для плавного зникнення
    preloader.classList.add("preloader--fade");

    // Чекаємо 1.5 секунди, поки opacity стане 0, і повністю приховуємо елемент
    setTimeout(() => {
        preloader.classList.add("preloader--hide");
    }, 1500);
}

function hidePreloader() {
    const preloader = document.getElementById("preloader"); // Замініть на свій ID прелоадера
    if (preloader) {
        preloader.style.transition = "opacity 0.5s ease"; 
        preloader.style.opacity = "0"; 

        setTimeout(() => {
            preloader.style.display = "none"; // Повністю прибираємо з DOM
        }, 500);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.overflow = "hidden"; // Забороняємо прокрутку
    document.body.classList.add('lock-scroll'); 

    const imgs = document.querySelectorAll('img, video');
    let i = 0;

    const intprochentChet = document.getElementById("intprochent_chet");
    const perchenload = document.getElementById("perchenload");

    const updateProgress = () => {
        i++;
        let percent = ((i * 100) / imgs.length).toFixed(0);
        intprochentChet.innerHTML = `${percent}%`;
        perchenload.style.width = `${percent}%`;

        if (i === imgs.length) {
            setTimeout(() => {
                document.body.classList.remove('lock-scroll'); // Дозволяємо скрол
                document.documentElement.style.overflow = "visible"; // Виправляємо зміщення
                hidePreloader();
            }, 1500);
        }
    };

    imgs.forEach((img) => { 
        if (img.complete) {
            updateProgress();
        } else {
            img.onload = updateProgress;
            img.onerror = updateProgress;
        }
    });
});

document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})


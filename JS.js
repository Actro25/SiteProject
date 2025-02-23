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
    document.body.classList.add('lock-scroll'); // Забороняємо скрол

    const imgs = document.querySelectorAll('img, video');
    let i = 0;
    
    const intprochentChet = document.getElementById("intprochent_chet");
    const perchenload = document.getElementById("perchenload");

    imgs.forEach((img) => { 
        img.onload = () => {
            i++;
            let percent = ((i * 100) / imgs.length).toFixed(0);
            
            intprochentChet.innerHTML = `${percent}%`; 
            perchenload.style.width = `${percent}%`; 

            if (i === imgs.length) {
                setTimeout(() => {
                    document.body.classList.remove('lock-scroll'); // Дозволяємо скрол
                    hidePreloader();
                }, 1500);
            }
        };
    });
});


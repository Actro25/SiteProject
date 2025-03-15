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

const layers = document.querySelector('.layers');
const hotBar = document.querySelector('.hot-bar-inner');
let isHovering = false;
let isHoveringHotBar = false;

document.addEventListener('mousemove', e => {
    if (!isHoveringHotBar) { // Анімація працює тільки якщо курсор не на хотбарі
        isHovering = true;
        document.documentElement.style.setProperty('--move-x', `${(e.clientX - window.innerWidth / 2) * -.005}deg`);
        document.documentElement.style.setProperty('--move-y', `${(e.clientY - window.innerHeight / 2) * -.01}deg`);
    }
});

// Наводимося на хотбар → зупиняємо рух
hotBar.addEventListener('mouseenter', () => {
    isHoveringHotBar = true;
    document.documentElement.style.transition = 'transform 0.5s ease-out';
    document.documentElement.style.setProperty('--move-x', `0deg`);
    document.documentElement.style.setProperty('--move-y', `0deg`);
});

// Виходимо з хотбару → повертаємо рух
hotBar.addEventListener('mouseleave', () => {
    isHoveringHotBar = false;
});

// Коли мишка виходить з layers → повертаємо анімацію в центр
layers.addEventListener('mouseleave', () => {
    if (!isHoveringHotBar) { // Якщо курсор НЕ на хотбарі
        isHovering = false;
        document.documentElement.style.transition = 'transform var(--transition)';
        document.documentElement.style.setProperty('--move-x', `0deg`);
        document.documentElement.style.setProperty('--move-y', `0deg`);
    
        // Через 1.5 секунди знімаємо transition
        setTimeout(() => {
            if (!isHovering && !isHoveringHotBar) {
                document.documentElement.style.transition = '';
            }
        }, 1500);
    }
});






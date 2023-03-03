// offcanvas 
const ofBtn = document.querySelector('.ofcanvas_btn');

function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = '../sound/revolve.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
    ofBtn.style.transform = "rotate(1800deg)";
    ofBtn.style.transition = "2.5s ease-out";
    setTimeout(() => {
        ofBtn.style.transform = "none";
        ofBtn.style.transition = "none";

    }, 2500);
} function soundClick_X() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = '../sound/revolve.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
    ofBtn.style.transform = "rotate(-1800deg)";
    ofBtn.style.transition = "2.5s ease-out";
    setTimeout(() => {
        ofBtn.style.transform = "none";
        ofBtn.style.transition = "none";

    }, 2500);
}

// -----------------------------------
//           for light mode
// --------------------------------------
const position = document.documentElement;
position.addEventListener("mousemove", (e) => {
    position.style.setProperty('--x', e.clientX + 'px');
    position.style.setProperty('--y', e.clientY + 'px');
})
// 1 Attiva il toggle dark_light
function attiva_toggle_dark_light() {
    if (root.classList.contains("light_mode")) {
        // 1.1 Attiva e salva dark mode
        root.classList.remove("light_mode");
        root.classList.add("dark_mode");
        localStorage.setItem("mode", "dark");
    }
    else {
        // 1.2 Attiva e salva light mode
        root.classList.remove("dark_mode");
        root.classList.add("light_mode");
        localStorage.setItem("mode", "light");
    }
}

// 2 Apertura/chiusura menu mobile e quando clicco un link il menu si chiude 
const btn_menu_toggle = document.getElementById("btn_menu_toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll('#menu a');

// 2.1 Aggiungo al bottone un evento per l'apertura/chiusura del menu tramite switch sulla classe
btn_menu_toggle.addEventListener("click", () => {
    btn_menu_toggle.classList.toggle("open");
    menu.classList.toggle("open");
});

// 2.2 Evito che al disattivarsi della media query si nota l'opacità 1-0
let lastWidth = window.innerWidth;
window.addEventListener("resize", () => {
    let currentWidth = window.innerWidth;
    if (lastWidth >= 1001 && currentWidth < 1001) {
        menu.style.transition = 'none';
        setTimeout(() => {
            menu.style.transition = '0.35s';
        }, 10);
    }
    lastWidth = currentWidth; // Aggiorno la larghezza attuale
});

// 2.3 Aggiungo ai link un evento per chiudere il menu in automatico 
for (const x of links) {
    x.addEventListener("click", (event) => {
        event.preventDefault()
        const targetId = x.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const offset = 80;
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
        
        btn_menu_toggle.classList.toggle("open");
        menu.classList.toggle("open");
    })
}

// 3 Switch light/dark mode
const btn_light_dark = document.getElementById("btn_light_dark_toggle");
const root = document.documentElement;
const theme = localStorage.getItem("mode");

// 3.1 Se theme non è null e theme è dark, applico la dark mode
if (!(theme === null) && theme != "light") {
    root.classList.remove("light_mode");
    root.classList.add("dark_mode");
}

// 3.2 Aggiunge l'evento click al toggle e
// l'interattività con toggle per l'accessibilità 
btn_light_dark.addEventListener("click", attiva_toggle_dark_light);



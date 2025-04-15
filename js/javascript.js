// Variabili
const btn_menu_toggle = document.getElementById("btn_menu_toggle");
const menu = document.getElementById("menu");
const svg = document.querySelectorAll('#menu li svg');
const links = document.querySelectorAll('#menu a');
const btn_light_dark = document.getElementById("btn_light_dark_toggle");
const root = document.documentElement;
const theme = localStorage.getItem("mode");

// Faccio vedere il body solo quando il caricamento è finito, per evitare il flickering/flash layout
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Funzione che gestisce lo sfondo dell'immagine portfolio
function sfondo_portfolio() {
    const modalità = localStorage.getItem('mode');
    let svg_sfondo;

    // SVG light
    if (modalità === null || modalità == 'light') {
        svg_sfondo = document.createElement("div");
        svg_sfondo.innerHTML = `
    <svg id="sfondo_immagine_personale" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
        <g transform="skewY(10)" font-family="monospace">
        <text x="10" y="35">
            <tspan fill="#DC82A5">a</tspan><tspan fill="#A5A5A7">.</tspan><tspan fill="#ad3f36">fs-link</tspan><tspan fill="#A5A5A7"> {</tspan>
        </text>
        <text x="30" y="70">
            <tspan fill="#ad3f36">position</tspan><tspan fill="#A5A5A7">: </tspan><tspan fill="#478d94">relative</tspan><tspan fill="#A5A5A7">;</tspan>
        </text>
        <text x="30" y="105">
            <tspan fill="#ad3f36">padding</tspan><tspan fill="#A5A5A7">: </tspan><tspan fill="#478d94">4px 2px</tspan><tspan fill="#A5A5A7">;</tspan>
        </text>
        <text x="30" y="140">
            <tspan fill="#ad3f36">font-weight</tspan><tspan fill="#A5A5A7">: </tspan><tspan fill="#478d94">bold</tspan><tspan fill="#A5A5A7">;</tspan>
        </text>
        <text x="30" y="175">
            <tspan fill="#ad3f36">color</tspan><tspan fill="#A5A5A7">: </tspan><tspan fill="#478d94">inherit</tspan><tspan fill="#A5A5A7">;</tspan>
        </text>
        <text x="30" y="210">
            <tspan fill="#ad3f36">background</tspan><tspan fill="#A5A5A7">: </tspan><tspan fill="#478d94">linear-gradient()</tspan><tspan fill="#A5A5A7">;</tspan>
        </text>
        <text x="30" y="245">
            <tspan fill="#ad3f36">background-position</tspan><tspan fill="#A5A5A7">: </tspan><tspan fill="#478d94">0 calc(50%)</tspan><tspan fill="#A5A5A7">;</tspan>
        </text>
        <text x="30" y="280">
            <tspan fill="#ad3f36">transition</tspan><tspan fill="#A5A5A7">: </tspan><tspan fill="#478d94">background-position 0.5s ease</tspan><tspan fill="#A5A5A7">;</tspan>
        </text>
        <text x="10" y="315">
            <tspan fill="#A5A5A7">}</tspan>
        </text>
        <text x="10" y="400">
            <tspan fill="#2b2b2b">&amp;:hover</tspan><tspan fill="#A5A5A7"> {</tspan>
        </text>
        <text x="30" y="435">
            <tspan fill="#ad3f36">background-position</tspan><tspan fill="#A5A5A7">: </tspan><tspan fill="#71B2B8">0 0</tspan><tspan fill="#A5A5A7">;</tspan>
        </text>
        <text x="10" y="470">
            <tspan fill="#A5A5A7">}</tspan>
        </text>
        </g>
    </svg>
    `;
    }

    // SVG dark
    else {
        svg_sfondo = document.createElement("div");
        svg_sfondo.classList.add('div_svg_sfondo');
        svg_sfondo.innerHTML = `
    <svg id="sfondo_immagine_personale" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
      <g transform="skewY(10)" font-family="monospace">
        <text x="10" y="35">
          <tspan fill="#F57C8A">a</tspan><tspan fill="#D1D1D6">.</tspan><tspan fill="#F26B4E">fs-link</tspan><tspan fill="#D1D1D6"> {</tspan>
        </text>
        <text x="30" y="70">
          <tspan fill="#F26B4E">position</tspan><tspan fill="#D1D1D6">: </tspan><tspan fill="#A7E1D5">relative</tspan><tspan fill="#D1D1D6">;</tspan>
        </text>
        <text x="30" y="105">
          <tspan fill="#F26B4E">padding</tspan><tspan fill="#D1D1D6">: </tspan><tspan fill="#A7E1D5">4px 2px</tspan><tspan fill="#D1D1D6">;</tspan>
        </text>
        <text x="30" y="140">
          <tspan fill="#F26B4E">font-weight</tspan><tspan fill="#D1D1D6">: </tspan><tspan fill="#A7E1D5">bold</tspan><tspan fill="#D1D1D6">;</tspan>
        </text>
        <text x="30" y="175">
          <tspan fill="#F26B4E">color</tspan><tspan fill="#D1D1D6">: </tspan><tspan fill="#A7E1D5">inherit</tspan><tspan fill="#D1D1D6">;</tspan>
        </text>
        <text x="30" y="210">
          <tspan fill="#F26B4E">background</tspan><tspan fill="#D1D1D6">: </tspan><tspan fill="#A7E1D5">linear-gradient()</tspan><tspan fill="#D1D1D6">;</tspan>
        </text>
        <text x="30" y="245">
          <tspan fill="#F26B4E">background-position</tspan><tspan fill="#D1D1D6">: </tspan><tspan fill="#A7E1D5">0 calc(50%)</tspan><tspan fill="#D1D1D6">;</tspan>
        </text>
        <text x="30" y="280">
          <tspan fill="#F26B4E">transition</tspan><tspan fill="#D1D1D6">: </tspan><tspan fill="#A7E1D5">background-position 0.5s ease</tspan><tspan fill="#D1D1D6">;</tspan>
        </text>
        <text x="10" y="315">
          <tspan fill="#D1D1D6">}</tspan>
        </text>
        <text x="10" y="400">
          <tspan fill="#B9B9B9">&amp;:hover</tspan><tspan fill="#D1D1D6"> {</tspan>
        </text>
        <text x="30" y="435">
          <tspan fill="#F26B4E">background-position</tspan><tspan fill="#D1D1D6">: </tspan><tspan fill="#9AD6E1">0 0</tspan><tspan fill="#D1D1D6">;</tspan>
        </text>
        <text x="10" y="470">
          <tspan fill="#D1D1D6">}</tspan>
        </text>
      </g>
    </svg>
    `;
    }

    // Inserisco lo sfondo dell'immagine personale nel DOM
    document.querySelector('#home figure').append(svg_sfondo);
}

// Attivazione e funzionamento toggle dark_light
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

    sfondo_portfolio();
}

// Aggiungo al bottone un evento per l'apertura/chiusura del menu tramite switch sulla classe
btn_menu_toggle.addEventListener("click", () => {
    btn_menu_toggle.classList.toggle("open");
    menu.classList.toggle("open");
});

// Sistemo l'opacità con il passaggio delle media query
let lastWidth = window.innerWidth;
// Se sono sopra i 1135px gli svg hanno la transizione
// if (lastWidth >= 1135) {
//     for (let x of svg) {
//         x.style.transition = '0.45s ease'
//     }
// }
// window.addEventListener("resize", () => {
//     let currentWidth = window.innerWidth;
//     // Se supero i 1135px non vedo effetti strani
//     if (lastWidth < 1135 && currentWidth >= 1135) {
//         menu.style.transition = 'none';
//         for (let x of svg) {
//             x.style.transition = '0.45s ease'
//         }
//     }
//     // Se scendo sotto i 1135px non vedo effetti stani
//     else if (lastWidth >= 1135 && currentWidth < 1135) {
//         for (let x of svg) {
//             x.style.transition = 'none'
//         }
//         menu.style.transition = 'none';
//         setTimeout(() => {
//             menu.style.transition = '0.35s ease';
//         }, 20);
//     }
//     lastWidth = currentWidth; // Aggiorno la larghezza attuale
// });

// Aggiungo ai link un evento per chiudere il menu in automatico 
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

//  Se theme non è null e theme è dark, applico la dark mode
if (!(theme === null) && theme != "light") {
    root.classList.remove("light_mode");
    root.classList.add("dark_mode");
}

// Aggiunge l'evento click al toggle e l'interattività con toggle per l'accessibilità 
btn_light_dark.addEventListener("click", attiva_toggle_dark_light);

// Aggiunto effetto elementi appaiono allo scroll
document.addEventListener("DOMContentLoaded", () => {
    const osservatore = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                osservatore.unobserve(entry.target); // Per evitare di rianimare l'elemento
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade_in").forEach(element => {
        osservatore.observe(element);
    });
});

// Vado nella funziona che gestise sfondo portfolio
sfondo_portfolio();
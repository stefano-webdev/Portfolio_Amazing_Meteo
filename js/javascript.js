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

// Click fuori dal menu aperto ne provoca la chiusura
window.addEventListener('click', (e) => {
    const el = e.target;
    if (!el.closest('#menu') &&
        el.id !== 'btn_menu_toggle' &&
        !el.classList.contains('hamburger') &&
        document.body.classList.contains('open')) {

        btn_menu_toggle.classList.toggle("open");
        menu.classList.toggle("open");
        document.body.classList.toggle("open");
    }
})

// Gli elementi appaiono in modo fluido solo quando sono visibili sullo schermo
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

// Funzione che gestisce lo sfondo dell'immagine portfolio
function sfondo_portfolio() {
    // Modalità e struttura
    const modalità = localStorage.getItem('mode');
    const svg_sfondo = document.createElement("div");
    svg_sfondo.classList.add('div_svg_sfondo');

    // Variabili dei colori
    let tspan_1;
    let tspan_2;
    let tspan_3;
    let tspan_4;
    let tspan_5;
    let tspan_6;

    // SVG light
    if (modalità === null || modalità == 'light') {
        tspan_1 = "#DC82A5";
        tspan_2 = "#A5A5A7";
        tspan_3 = "#AD3F36";
        tspan_4 = "#478D94";
        tspan_5 = "#71B2B8";
        tspan_6 = "#2B2B2B";
    }

    // SVG dark
    else {
        tspan_1 = "#F57C8A";
        tspan_2 = "#D1D1D6";
        tspan_3 = "#F26B4E";
        tspan_4 = "#A7E1D5";
        tspan_5 = "#9AD6E1";
        tspan_6 = "#B9B9B9";
    }

    svg_sfondo.innerHTML = `
    <svg id="sfondo_immagine_personale" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
        <g transform="skewY(10)" font-family="monospace">
        <text x="10" y="35">
            <tspan fill=${tspan_1}>a</tspan><tspan fill=${tspan_2}>.</tspan><tspan fill=${tspan_3}>fs-link</tspan><tspan fill=${tspan_2}> {</tspan>
        </text>
        <text x="30" y="70">
            <tspan fill=${tspan_3}>position</tspan><tspan fill=${tspan_2}>: </tspan><tspan fill=${tspan_4}>relative</tspan><tspan fill=${tspan_2}>;</tspan>
        </text>
        <text x="30" y="105">
            <tspan fill=${tspan_3}>padding</tspan><tspan fill=${tspan_2}>: </tspan><tspan fill=${tspan_4}>4px 2px</tspan><tspan fill=${tspan_2}>;</tspan>
        </text>
        <text x="30" y="140">
            <tspan fill=${tspan_3}>font-weight</tspan><tspan fill=${tspan_2}>: </tspan><tspan fill=${tspan_4}>bold</tspan><tspan fill=${tspan_2}>;</tspan>
        </text>
        <text x="30" y="175">
            <tspan fill=${tspan_3}>color</tspan><tspan fill=${tspan_2}>: </tspan><tspan fill=${tspan_4}>inherit</tspan><tspan fill=${tspan_2}>;</tspan>
        </text>
        <text x="30" y="210">
            <tspan fill=${tspan_3}>background</tspan><tspan fill=${tspan_2}>: </tspan><tspan fill=${tspan_4}>linear-gradient()</tspan><tspan fill=${tspan_2}>;</tspan>
        </text>
        <text x="30" y="245">
            <tspan fill=${tspan_3}>background-position</tspan><tspan fill=${tspan_2}>: </tspan><tspan fill=${tspan_4}>0 calc(50%)</tspan><tspan fill=${tspan_2}>;</tspan>
        </text>
        <text x="30" y="280">
            <tspan fill=${tspan_3}>transition</tspan><tspan fill=${tspan_2}>: </tspan><tspan fill=${tspan_4}>background-position 0.5s ease</tspan><tspan fill=${tspan_2}>;</tspan>
        </text>
        <text x="10" y="315">
            <tspan fill=${tspan_2}>}</tspan>
        </text>
        <text x="10" y="400">
            <tspan fill=${tspan_6}>&amp;:hover</tspan><tspan fill=${tspan_2}> {</tspan>
        </text>
        <text x="30" y="435">
            <tspan fill=${tspan_3}>background-position</tspan><tspan fill=${tspan_2}>: </tspan><tspan fill=${tspan_5}>0 0</tspan><tspan fill=${tspan_2}>;</tspan>
        </text>
        <text x="10" y="470">
            <tspan fill=${tspan_2}>}</tspan>
        </text>
        </g>
    </svg>
    `;

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
    document.body.classList.toggle("open");
});

// Scroll fino alla destinazione in modo fluido e chiudo menu in automatico quando clicco un link
for (const x of links) {
    x.addEventListener("click", (event) => {
        // Scroll fluido fino alla sezione
        event.preventDefault()
        const targetId = x.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const offset = 90;
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });

        // Se il bottone mobile esiste, chiusura automatica menù e gestisco overflow body
        if (window.getComputedStyle(btn_menu_toggle).display === 'block') {
            btn_menu_toggle.classList.toggle("open");
            menu.classList.toggle("open");
            document.body.classList.toggle("open");
        }
    });
}

//  Se theme non è uguale a null e theme è dark, applico la dark mode
if (theme !== null && theme == "dark") {
    root.classList.remove("light_mode");
    root.classList.add("dark_mode");
}

// Aggiunge l'evento click al toggle e l'interattività con toggle per l'accessibilità 
btn_light_dark.addEventListener("click", attiva_toggle_dark_light);

// Vado nella funzione che gestisce sfondo portfolio
sfondo_portfolio();
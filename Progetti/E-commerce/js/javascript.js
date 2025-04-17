// Settaggi generali
function settaggi_generali() {
    // Imposto dinamicamente il margin-top del contenitore madre
    let altezza_header = window.getComputedStyle(document.querySelector('header')).height;
    document.getElementById('contenitore_madre').style.marginTop = altezza_header;
    let altezza_input_cerca = Number(window.getComputedStyle(document.getElementById('input_cerca')).height.slice(0, -2)) - 4;
    document.querySelector('#div_ricerca button').style.height = `${altezza_input_cerca}px`;
}

// Variabili
const bottone_cerca = document.getElementById('bottone_cerca');
const input_cerca = document.getElementById('input_cerca');
const contenitore_prodotti = document.getElementById('contenitore_prodotti');
const div_categorie = document.querySelectorAll('div.categoria');
const crescente = document.querySelector('#div_crescente_decrescente div:nth-child(1)');
const decrescente = document.querySelector('#div_crescente_decrescente div:nth-child(2)');
const lista_range_prezzi = document.querySelectorAll('#div_range_prezzi div.range_valore');
const range_custom = document.getElementById('range_custom');
const bottone_AZ = document.querySelector('#div_ordine_alfabetico button:nth-child(1)');
const bottone_ZA = document.querySelector('#div_ordine_alfabetico button:nth-child(2)');
const prodotti_trovati_paragrafo = document.getElementById('prodotti_trovati');
let id;
let oggetto_carrello = [];
const lista_categorie = ["Mouse", "Accessori", "Altoparlante", "Assistenti vocali",
    "Speaker", "Smart home", "Laptop", "Notebook", "Computer portatile", "Portatile",
    "Computer", "PC", "PC Portatile", "Tastiere", "Keyboard", "Digitazione", "Cuffie",
    "Cuffie over-ear", "Cuffie wireless", "Audio", "Headphones", "Smartphone", "Telefoni",
    "Telefono cellulare", "Cellulare", "Dispositivo mobile", "Tablet", "Smartwatch",
    "Orologio intelligente", "Fitness tracker", "Fitness",  "Smart wearable", "Orologi", "Microfoni",
    "Microphone", "Router", "Router mesh", "Modem", "Dispositivo di rete", "Wi-Fi", "Router Wi-Fi",
    "Webcam", "Webcam full hd", "Webcam 1080p", "Videocamere", "Videocamera web",
    "Videochiamate", "Streaming", "Videoconferenze", "Fotocamere", "Fotocamera reflex", "Fotocamera digitale",
    "Fotocamera professionale", "Fotocamera mirrorless", "Fotografia", "Fotografia digitale", "Mirrorless",
    "Reflex", "Camera", "Macchina fotografica"];

// Assegnazione comandi
// Faccio vedere il body solo quando il caricamento è finito, per evitare il flickering/flash layout
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    setTimeout(() => {
        document.getElementById('torna_su').style.opacity = '1';
        document.querySelector('footer').style.opacity = '1';
    }, 40);
});

// Se torno alla homepage dell'ecommerce con il tasto indietro del browser, ricarico la pagina per sincronizzare il localStorage
window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        // Se la pagina è stata caricata dalla cache (andando indietro con gesture/tasto fisico) ricarico la pagina
        location.reload();
    }
});

// Home sito web
document.getElementById('logo').addEventListener('click', () => {
    input_cerca.value = '';
    prodotti_iniziali();
});
document.querySelector('#logo_contenitore svg').addEventListener('click', () => {
    input_cerca.value = '';
    prodotti_iniziali();
});

// Settaggio iniziale
window.addEventListener('resize', () => {
    settaggi_generali();
});

// Tasto cerca
bottone_cerca.addEventListener('click', () => {
    ricerca_prodotti();
});
input_cerca.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        ricerca_prodotti();
    }
});
input_cerca.addEventListener('input', () => {
    // Resetto lo stile del campo di input
    input_cerca.style.border = '2px solid black';
});

// Sezione categorie disponibili
div_categorie.forEach(categoria => {
    categoria.addEventListener('click', (event) => {
        if (event.target.textContent == 'Tutte le categorie') {
            input_cerca.value = '';
            prodotti_iniziali();
        }
        else {
            input_cerca.value = event.target.textContent;
            ricerca_prodotti();
        }
    });
    categoria.addEventListener('keydown', (event) => {
        if (event.key == 'Enter' || event.key == ' ') {
            event.preventDefault();
            categoria.click();
        }
    });
    categoria.setAttribute('tabindex', '0');
    categoria.style.outlineOffset = '3px';
});

// Sezione filtri
// Prezzo
crescente.addEventListener('click', () => {
    prezzo_crescente_decrescente('crescente');
});
crescente.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' || event.key == ' ') {
        event.preventDefault();
        prezzo_crescente_decrescente('crescente');
    }
});

decrescente.addEventListener('click', () => {
    prezzo_crescente_decrescente('decrescente');
});
decrescente.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' || event.key == ' ') {
        event.preventDefault();
        prezzo_crescente_decrescente('decrescente');
    }
});

// Range prezzi
lista_range_prezzi.forEach(elemento => elemento.addEventListener('click', (event) => {
    range_prezzi(event);
}));
lista_range_prezzi.forEach(div => {
    div.addEventListener('keydown', (event) => {
        if (event.key == 'Enter' || event.key == ' ') {
            event.preventDefault();
            div.click();
        }
    });
    div.setAttribute('tabindex', '0');
})

range_custom.addEventListener('focus', () => {
    document.getElementById('div_input_valuta').style.outline = '1px solid black';
});

range_custom.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        range_custom.blur();
    }
});

range_custom.addEventListener('blur', () => {
    document.getElementById('div_input_valuta').style.outline = 'none';
    document.getElementById('div_input_valuta').classList.add('attivo');
    range_custom.classList.add('attivo');
    if (range_custom.value == '') {
        document.getElementById('div_input_valuta').classList.remove('attivo');
        range_custom.classList.remove('attivo');
        const div_prodotti = Array.from(document.querySelectorAll('div.prodotto'));
        div_prodotti.forEach(div => div.style.display = 'flex');

        // Aggiorno i prodotti trovati
        const div_DOM = Array.from(document.querySelectorAll('div.prodotto'));
        const div_visibili = div_DOM.filter(div => window.getComputedStyle(div).display == 'flex');
        const lunghezza = div_visibili.length;
        if (lunghezza > 1 || lunghezza == 0) {
            prodotti_trovati_paragrafo.textContent = `${div_visibili.length} prodotti trovati`;
        }
        else {
            prodotti_trovati_paragrafo.textContent = `${div_visibili.length} prodotto trovato`;
        }
    }
});

range_custom.addEventListener('input', (event) => {
    range_custom_fnc(event);
});

// Ordine alfabetico
bottone_AZ.addEventListener('click', () => {
    ordine_alfabetico_fnc('az');
})
bottone_ZA.addEventListener('click', () => {
    ordine_alfabetico_fnc('za');
})

// Azzera filtri
document.getElementById('reset_filtri').addEventListener('click', () => {
    reset_filtri_fnc();
});

// Comando bottone torna_su
document.getElementById('torna_su').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('torna_su').blur();
});

// Funzioni
// Aggiungi al carrello funzione
function aggiungi_al_carrello_fnc(event) {
    // Raccolgo i dati del prodotto
    // Prodotto genitore
    const div_prodotto = event.target.parentElement;

    // Ottengo i dati specifici del prodotto
    const img = div_prodotto.querySelector('img').src;
    const titolo = div_prodotto.querySelector('p.titolo_prodotto').textContent;
    const descrizione = div_prodotto.querySelector('p.descrizione_prodotto').textContent;
    const quantità = Number(div_prodotto.querySelector('p.quantità').textContent);
    const prezzo_base = Number(Array.from(div_prodotto.querySelector('p.prezzo_prodotto').classList).at(-1));
    const prezzo_totale = prezzo_base * quantità;

    // Controllo se aggiungendo la quantità non supero 999 prodotti nel carrello
    const articoli_nel_carrelo = parseInt(document.getElementById('numero_prodotti').textContent);
    if ((articoli_nel_carrelo + quantità) > 999) {
        alert('Attenzione, puoi inserire nel carrello fino a 999 prodotti!');
        return;
    }

    // Metto i dati in un oggetto
    const prodotto = {
        "img": img,
        "titolo": titolo,
        "descrizione": descrizione,
        "prezzo_base": prezzo_base,
        "prezzo_totale": prezzo_totale,
        "quantità": quantità
    };

    // Se il prodotto è già presente nel carrello aggiorno la quantità, se non c'è (else) lo aggiungo 
    const prodotto_esistente = oggetto_carrello.find(elemento => elemento.titolo == prodotto.titolo);
    if (prodotto_esistente) {
        prodotto_esistente.quantità += prodotto.quantità;
        prodotto_esistente.prezzo_totale = (prodotto_esistente.prezzo_base * prodotto_esistente.quantità).toFixed(2);
    }
    else {
        oggetto_carrello.push(prodotto);
    }

    // Rendo visibile il div con la quantità nel carrello e ne aggiorno la quantità
    const div_quantità_nel_carrello = div_prodotto.querySelector('div.div_quantità_nel_carrello');
    div_quantità_nel_carrello.style.display = 'flex';
    div_quantità_nel_carrello.querySelector('p#paragrafo_quantità_nel_carrello').
        textContent = String(oggetto_carrello.find(elemento => elemento.titolo == prodotto.titolo).quantità);

    // Aggiorno il numerino dei prodotti totali nel carrello, somma delle quantità
    const numero_prodotti = oggetto_carrello.reduce((accumulatore, elemento) => accumulatore + elemento.quantità, 0);
    if (String(numero_prodotti).length == 2) {
        document.getElementById('numero_prodotti').style.fontSize = '16px';
    }
    else if (String(numero_prodotti).length == 3) {
        document.getElementById('numero_prodotti').style.fontSize = '13px';
    }
    document.getElementById('numero_prodotti').textContent = String(numero_prodotti);

    // Salvo i dati nel localStorage
    localStorage.setItem("carrello", JSON.stringify(oggetto_carrello));

    // Ripristino a quantità 1 il prodotto
    div_prodotto.querySelector('p.quantità').textContent = '1';
    div_prodotto.querySelector('p.prezzo_prodotto').textContent = `${String(prezzo_base).replace('.', ',')} €`;
}

// Funzione placeholder dinamico
function placeholder_dinamico() {
    id = setInterval(() => {
        input_cerca.style.border = '2px solid black';
        const indice_casuale = Math.floor(Math.random() * lista_categorie.length);
        input_cerca.placeholder = lista_categorie[indice_casuale];
    }, 3300);
}

// Funzione prezzo crescente o decrescente
function prezzo_crescente_decrescente(azione) {
    const prezzi_articoli_dom = document.querySelectorAll('p.prezzo_prodotto');
    const lista_prezzi_articoli = Array.from(prezzi_articoli_dom).map(elemento => {
        return parseFloat(elemento.textContent.replace(',', '.'))
    });

    if (azione == 'crescente') {
        crescente.classList.add('attivo');
        decrescente.classList.remove('attivo');
        lista_prezzi_articoli.sort((a, b) => a - b);
    }
    else {
        decrescente.classList.add('attivo');
        crescente.classList.remove('attivo');
        lista_prezzi_articoli.sort((a, b) => b - a);
    }

    const div_prodotti = Array.from(document.querySelectorAll('div.prodotto'));
    div_prodotti.forEach(elemento => elemento.remove());
    lista_prezzi_articoli.forEach((elemento, indice) => {
        const div_corrispondente = div_prodotti.find(div => {
            return parseFloat(div.querySelector("p.prezzo_prodotto").textContent.replace(',', '.')) == elemento
        });
        contenitore_prodotti.append(div_corrispondente);
        div_prodotti.splice(div_prodotti.indexOf(div_corrispondente), 1);
    });
}

// Funzione range prezzi
function range_prezzi(event) {
    // Svuoto range custom
    range_custom.value = '';

    // Ridimensiono contenitore_prodotti
    contenitore_prodotti.style.minHeight = 'fit-content';

    // Gestisco selezione
    if (event.target.classList.contains('attivo')) {
        event.target.classList.remove('attivo');
        const div_prodotti = Array.from(document.querySelectorAll('div.prodotto'));
        div_prodotti.forEach(elemento => elemento.style = 'flex');
        document.getElementById('prodotti_trovati').textContent = input_cerca.value != "" ? '5 prodotti trovati' : '60 prodotti trovati'
    }

    else {
        // Gestisco selezione
        lista_range_prezzi.forEach(elemento => elemento.classList.remove('attivo'));
        event.target.classList.add('attivo');
        document.getElementById('div_input_valuta').classList.remove('attivo');
        range_custom.classList.remove('attivo');

        // Prendo prezzo limite selezionato e creo lista dei paragrafi nel DOM
        const prezzo_limite = parseInt(event.target.textContent);

        // Prendo tutti i div.prodotto e mostro quelli oscurati in precedenza
        const div_prodotti = Array.from(document.querySelectorAll('div.prodotto'));
        div_prodotti.forEach(elemento => elemento.style = 'flex');

        // Faccio vedere a schermo solo i div sotto al range selezionato
        div_prodotti.forEach(div => {
            if (parseFloat(div.querySelector('p.prezzo_prodotto').textContent.replace(',', '.')) > prezzo_limite) {
                div.style.display = 'none';
            }
        });

        // Aggiorno i prodotti trovati
        const div_DOM = Array.from(document.querySelectorAll('div.prodotto'));
        const div_visibili = div_DOM.filter(div => window.getComputedStyle(div).display == 'flex');
        const lunghezza = div_visibili.length;
        if (lunghezza > 1 || lunghezza == 0) {
            prodotti_trovati_paragrafo.textContent = `${div_visibili.length} prodotti trovati`;
        }
        else {
            prodotti_trovati_paragrafo.textContent = `${div_visibili.length} prodotto trovato`;
        }
    }
}

// Funzione range_custom
function range_custom_fnc() {
    // Ridimensiono dimensione contenitore_prodotti
    contenitore_prodotti.style.minHeight = 'fit-content';

    // Limite massimo caratteri
    if (range_custom.value.length > 7) {
        range_custom.value = range_custom.value.slice(0, 7);
    }

    // Entra nell'if solo se è un numero valido
    if (!isNaN(parseFloat(range_custom.value))) {
        // Rendo tutti i div visibili
        const div_prodotti = Array.from(document.querySelectorAll('div.prodotto'));
        div_prodotti.forEach(elemento => elemento.style = 'flex');

        // Gestisco selezione
        lista_range_prezzi.forEach(elemento => elemento.classList.remove('attivo'));

        // Prendo prezzo limite selezionato e creo lista dei paragrafi nel DOM
        const prezzo_limite = parseFloat(range_custom.value);

        // Faccio vedere a schermo solo i div sotto al range selezionato
        div_prodotti.forEach(div => {
            if (parseFloat(div.querySelector('p.prezzo_prodotto').textContent.replace(',', '.')) > prezzo_limite) {
                div.style.display = 'none';
            }
        });

        // Aggiorno i prodotti trovati
        const div_DOM = Array.from(document.querySelectorAll('div.prodotto'));
        const div_visibili = div_DOM.filter(div => window.getComputedStyle(div).display == 'flex');
        const lunghezza = div_visibili.length;
        if (lunghezza > 1 || lunghezza == 0) {
            prodotti_trovati_paragrafo.textContent = `${div_visibili.length} prodotti trovati`;
        }
        else {
            prodotti_trovati_paragrafo.textContent = `${div_visibili.length} prodotto trovato`;
        }
    }
}

// Funzione ordine alfabetico
function ordine_alfabetico_fnc(ordine) {
    // Gestisco quale bottone è attivo
    if (ordine == 'az') {
        bottone_AZ.classList.add('attivo');
        bottone_ZA.classList.remove('attivo');
    }
    else {
        bottone_ZA.classList.add('attivo');
        bottone_AZ.classList.remove('attivo');
    }

    // Ottengo i titoli dei prodotti e li metto in una lista
    const titoli_prodotti = document.querySelectorAll('p.titolo_prodotto');
    const lista_titoli_prodotti = Array.from(titoli_prodotti).map(elemento => elemento.textContent);

    // Creo div_prodotti e pulisco il DOM per poterlo ricostruire ordinato alfabeticamente
    const div_prodotti = Array.from(document.querySelectorAll('div.prodotto'));
    div_prodotti.forEach(elemento => elemento.remove());

    if (ordine == 'az') {
        // Metto la lista in ordine alfabetico
        lista_titoli_prodotti.sort((a, b) => a.localeCompare(b));
    }
    else {
        // Metto la lista in ordine alfabetico contrario
        lista_titoli_prodotti.sort((a, b) => b.localeCompare(a));
    }

    // Aggiorno nel DOM i div.prodotto in ordine alfabetico A-Z o Z-A
    lista_titoli_prodotti.forEach((elemento, indice) => {
        const div_corrispondente = div_prodotti.find(div => {
            return div.querySelector("p.titolo_prodotto").textContent == elemento
        });
        contenitore_prodotti.append(div_corrispondente);
        div_prodotti.splice(div_prodotti.indexOf(div_corrispondente), 1);
    });
}

// Funzione reset filtri
function reset_filtri_fnc() {
    // Reset ordine alfabetico
    if (bottone_AZ.classList.contains('attivo') || bottone_ZA.classList.contains('attivo')) {
        // Tolgo stato attivo
        bottone_AZ.classList.remove('attivo');
        bottone_ZA.classList.remove('attivo');

        if (input_cerca.value != '') {
            ricerca_prodotti();
        }
        else {
            prodotti_iniziali();
        }
    }

    // Range custom
    if (range_custom.value != '') {
        range_custom.value = '';
        if (input_cerca.value != '') {
            ricerca_prodotti();
        }
        else {
            prodotti_iniziali();
        }
    }

    // Range prezzi
    lista_range_prezzi.forEach(elemento => elemento.classList.remove('attivo'));
    const div_prodotti = Array.from(document.querySelectorAll('div.prodotto'));
    div_prodotti.forEach(elemento => elemento.style = 'flex');

    // Reset prezzo crescente/decrescente
    if (crescente.classList.contains('attivo') || decrescente.classList.contains('attivo')) {
        // Tolgo stato attivo
        crescente.classList.remove('attivo');
        decrescente.classList.remove('attivo');

        if (input_cerca.value != '') {
            ricerca_prodotti();
        }
        else {
            prodotti_iniziali();
        }
    }

    // Aggiorno i prodotti trovati
    const div_visibili = div_prodotti.filter(div => window.getComputedStyle(div).display == 'flex');
    const lunghezza = div_visibili.length;
    if (lunghezza > 1 || lunghezza == 0) {
        prodotti_trovati_paragrafo.textContent = `${div_visibili.length} prodotti trovati`;
    }
    else {
        prodotti_trovati_paragrafo.textContent = `${div_visibili.length} prodotto trovato`;
    }
}

// Funzione aggiungi o sottrai quantità prodotto
function aggiungi_sottrai_quantità(operatore, event) {
    const elemento_prezzo = event.target.parentElement.previousElementSibling;
    const prezzo = Number(Array.from(elemento_prezzo.classList).at(-1));
    let quantità;

    if (operatore == 'più') {
        // Aggiorna numero quantità
        const elemento_quantità = event.target.previousElementSibling;
        quantità = Number(elemento_quantità.textContent);
        quantità += 1;
        elemento_quantità.textContent = String(quantità);
    }
    else {
        // Aggiorna numero quantità
        const elemento_quantità = event.target.nextElementSibling;
        quantità = Number(elemento_quantità.textContent);
        if (quantità > 1) {
            quantità -= 1;
        }
        elemento_quantità.textContent = String(quantità);
    }

    // Aggiorna prezzo
    let prezzo_aggiornato = (prezzo * quantità).toFixed(2);
    prezzo_aggiornato = prezzo_aggiornato.replace('.', ',');
    event.target.parentElement.previousElementSibling.textContent = `${prezzo_aggiornato} €`;
}

// Funzione prodotti apertura ecommerce e Tutte le categorie
function prodotti_iniziali() {
    try {
        prodotti()
        async function prodotti() {
            // Tolgo eventuali filtri
            crescente.classList.remove('attivo');
            decrescente.classList.remove('attivo');
            bottone_AZ.classList.remove('attivo');
            bottone_ZA.classList.remove('attivo');
            lista_range_prezzi.forEach(elemento => elemento.classList.remove('attivo'));
            range_custom.value = '';
            document.getElementById('div_input_valuta').classList.remove('attivo');
            range_custom.classList.remove('attivo');

            // 60 prodotti iniziali
            document.getElementById('prodotti_trovati').textContent = '60 prodotti trovati';

            // Creo un catalogo con ordine dei prodotti casuale
            let risposta = await fetch('../json/prodotti.json');
            let catalogo = await risposta.json();
            catalogo.sort(() => Math.random() - 0.5);

            // Pulisco il DOM da eventuali ricerche precedenti
            document.querySelectorAll('div.prodotto').forEach((contenitore) => contenitore.remove());

            // Creo i prodotti in modo dinamico
            catalogo.forEach((elemento, indice) => {
                // Contenitore
                const div_prodotto = document.createElement('div');
                div_prodotto.classList.add('prodotto');
                div_prodotto.style.display = 'none';

                // Immagine
                const img_prodotto = document.createElement('img');
                img_prodotto.classList.add('prodotto')
                img_prodotto.src = catalogo.at(indice).immagine;
                img_prodotto.alt = 'Immagine del prodotto';
                // Quando l'immagine è caricata, mostra il prodotto
                img_prodotto.addEventListener('load', () => {
                    div_prodotto.style.display = 'flex';
                });

                // Titolo
                const testo_prodotto = document.createElement('p');
                testo_prodotto.classList.add('titolo_prodotto');
                testo_prodotto.textContent = catalogo.at(indice).nome;

                // Descrizione
                const descrizione_prodotto = document.createElement('p');
                descrizione_prodotto.classList.add('descrizione_prodotto');
                descrizione_prodotto.textContent = catalogo.at(indice).descrizione;

                // Prezzo
                const prezzo_prodotto = document.createElement('p');
                prezzo_prodotto.textContent = `${String(catalogo.at(indice).prezzo).replace('.', ',')} €`;
                prezzo_prodotto.classList.add('prezzo_prodotto', String(catalogo.at(indice).prezzo));

                // Quantità prodotto
                const contenitore_prezzo_e_quantità = document.createElement('div');
                contenitore_prezzo_e_quantità.classList.add('contenitore_prezzo_e_quantità');
                const contenitore_quantità = document.createElement('div');
                contenitore_quantità.classList.add('contenitore_quantità');

                const meno = document.createElement('button');
                meno.classList.add('operatore');
                meno.textContent = '-';

                const quantità = document.createElement('p');
                quantità.classList.add('quantità');
                quantità.textContent = '1';

                const più = document.createElement('button');
                più.classList.add('operatore');
                più.textContent = '+';
                meno.addEventListener('click', (event) => {
                    aggiungi_sottrai_quantità('meno', event)
                });
                più.addEventListener('click', (event) => {
                    aggiungi_sottrai_quantità('più', event)
                });

                // Sezione quantità prodotti nel carrello
                const div_quantità_nel_carrello = document.createElement('div');
                div_quantità_nel_carrello.classList.add('div_quantità_nel_carrello');

                const svg = document.createElement("div");
                svg.innerHTML = `
                <svg id="svg_quantità_carrello" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="#2B2B2B" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 
                  41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 
                  38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 
                  53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 
                  23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 
                  24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 
                  54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 
                  0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 
                  0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
                `;

                const paragrafo_X = document.createElement('p');
                paragrafo_X.id = ('paragrafo_x');
                paragrafo_X.textContent = 'x';

                const paragrafo_quantità = document.createElement('p');
                paragrafo_quantità.id = ('paragrafo_quantità_nel_carrello');

                // Aggiungo gli elementi al div, inizialmente nascosto
                div_quantità_nel_carrello.append(svg, paragrafo_X, paragrafo_quantità);
                div_quantità_nel_carrello.style.display = 'none';

                contenitore_quantità.append(meno, quantità, più, div_quantità_nel_carrello);
                contenitore_prezzo_e_quantità.append(prezzo_prodotto, contenitore_quantità);

                // Aggiungi al carrello
                const bottone_aggiungi_carrello = document.createElement('button');
                bottone_aggiungi_carrello.textContent = 'Aggiungi al carrello';
                bottone_aggiungi_carrello.id = ('bottone_aggiungi_carrello');
                bottone_aggiungi_carrello.addEventListener('click', (event) => {
                    aggiungi_al_carrello_fnc(event);
                });

                // Creo la gerarchia
                div_prodotto.append(img_prodotto, testo_prodotto, descrizione_prodotto, contenitore_prezzo_e_quantità, bottone_aggiungi_carrello);
                contenitore_prodotti.append(div_prodotto);
            });

            if (localStorage.getItem("carrello") != null) {
                // Recupero il carello da localStorage ed aggiorno i dati
                oggetto_carrello = JSON.parse(localStorage.getItem("carrello"));

                // Aggiorno il numerino dei prodotti totali nel carrello, somma delle quantità
                const numero_prodotti = oggetto_carrello.reduce((accumulatore, elemento) => accumulatore + elemento.quantità, 0);
                if (String(numero_prodotti).length == 2) {
                    document.getElementById('numero_prodotti').style.fontSize = '16px';
                }
                else if (String(numero_prodotti).length == 3) {
                    document.getElementById('numero_prodotti').style.fontSize = '14px';
                }
                document.getElementById('numero_prodotti').textContent = numero_prodotti;

                // I prodotti nel carrello vengono aggiunti ai prodotti visibili nella pagina
                const div_prodotti_dom = Array.from(document.querySelectorAll('div.prodotto'));
                oggetto_carrello.forEach(oggetto => {
                    // Trovo ciascun div.prodotto che è già nel carrello
                    const div_nel_carrello = div_prodotti_dom.find(div => {
                        return div.querySelector('p.titolo_prodotto').textContent == oggetto.titolo;
                    });

                    // Per ciascun div.prodotto che è già nel carrello ne aggiorno i dati
                    const div_quantità_nel_carrello = div_nel_carrello.querySelector('div.div_quantità_nel_carrello');
                    div_quantità_nel_carrello.style.display = 'flex';
                    div_quantità_nel_carrello.querySelector('p#paragrafo_quantità_nel_carrello').textContent = String(oggetto.quantità);
                });
            }
            else {
                document.getElementById('numero_prodotti').textContent = 0;
            }
        }
    }
    catch (errore) {
        console.log(errore)
    }
}

// Funzione principale di ricerca prodotti
function ricerca_prodotti() {
    try {
        // Tolgo eventuali filtri
        crescente.classList.remove('attivo');
        decrescente.classList.remove('attivo');
        bottone_AZ.classList.remove('attivo');
        bottone_ZA.classList.remove('attivo');
        lista_range_prezzi.forEach(elemento => elemento.classList.remove('attivo'));
        range_custom.value = '';
        range_custom.classList.remove('attivo');
        document.getElementById('div_input_valuta').classList.remove('attivo');

        // Controllo input e ottengo prodotto
        let prodotto;
        if (input_cerca.value == '') {
            prodotto = input_cerca.placeholder;
        }
        else {
            prodotto = input_cerca.value.trim();
        }

        // Se utente clicca troppo presto, gestisco l'errore
        if (prodotto == 'Di cosa hai bisogno?') {
            throw new Error('Nessun prodotto trovato');
        }

        let prima_lettera = prodotto.at(0).toUpperCase();
        prodotto = prima_lettera + prodotto.slice(1);
        input_cerca.value = prodotto;
        prodotto = prodotto.toLowerCase();
        input_cerca.blur();

        // Controllo se il prodotto è presente ed ottengo i dati
        ottieni_dati_prodotto();
        async function ottieni_dati_prodotto() {
            try {
                // Simulo una richiesta reale con Fetch API ed ottengo i dati dal catalogo prodotti in formato JSON
                let risposta = await fetch('../json/prodotti.json');
                let catalogo = await risposta.json();
                let catalogo_filtrato = catalogo.filter(elemento => elemento.categoria.includes(prodotto));

                // Se non trovo il prodotto, il codice va nel catch
                if (catalogo_filtrato.length == 0) {
                    throw new Error('Nessun prodotto trovato');
                }

                // 5 prodotti iniziali per tutte le categorie
                document.getElementById('prodotti_trovati').textContent = '5 prodotti trovati';

                // Pulisco il DOM da eventuali ricerche precedenti
                document.querySelectorAll('div.prodotto').forEach(contenitore => contenitore.remove());

                // Creo i prodotti in base alla categoria scelta
                catalogo_filtrato.forEach((elemento, indice) => {
                    // Contenitore
                    const div_prodotto = document.createElement('div');
                    div_prodotto.classList.add('prodotto');
                    div_prodotto.style.display = 'none';

                    // Immagine
                    const img_prodotto = document.createElement('img');
                    img_prodotto.classList.add('prodotto')
                    img_prodotto.src = catalogo_filtrato.at(indice).immagine;
                    img_prodotto.alt = 'Immagine del prodotto';
                    // Quando l'immagine è caricata, mostra il prodotto
                    img_prodotto.addEventListener('load', () => {
                        div_prodotto.style.display = 'flex';
                    });

                    // Titolo
                    const testo_prodotto = document.createElement('p');
                    testo_prodotto.classList.add('titolo_prodotto');
                    testo_prodotto.textContent = catalogo_filtrato.at(indice).nome;

                    // Descrizione
                    const descrizione_prodotto = document.createElement('p');
                    descrizione_prodotto.classList.add('descrizione_prodotto');
                    descrizione_prodotto.textContent = catalogo_filtrato.at(indice).descrizione;

                    // Prezzo
                    const prezzo_prodotto = document.createElement('p');
                    prezzo_prodotto.textContent = `${String(catalogo_filtrato.at(indice).prezzo).replace('.', ',')} €`;
                    prezzo_prodotto.classList.add('prezzo_prodotto', String(catalogo_filtrato.at(indice).prezzo));

                    // Quantità prodotto
                    const contenitore_prezzo_e_quantità = document.createElement('div');
                    contenitore_prezzo_e_quantità.classList.add('contenitore_prezzo_e_quantità');
                    const contenitore_quantità = document.createElement('div');
                    contenitore_quantità.classList.add('contenitore_quantità');

                    const meno = document.createElement('button');
                    meno.classList.add('operatore');
                    meno.textContent = '-';

                    const quantità = document.createElement('p');
                    quantità.classList.add('quantità');
                    quantità.textContent = '1';

                    const più = document.createElement('button');
                    più.classList.add('operatore');
                    più.textContent = '+';
                    meno.addEventListener('click', (event) => {
                        aggiungi_sottrai_quantità('meno', event)
                    });
                    più.addEventListener('click', (event) => {
                        aggiungi_sottrai_quantità('più', event)
                    });

                    // Sezione quantità prodotti nel carrello
                    const div_quantità_nel_carrello = document.createElement('div');
                    div_quantità_nel_carrello.classList.add('div_quantità_nel_carrello');

                    const svg = document.createElement("div");
                    svg.innerHTML = `
                    <svg id="svg_quantità_carrello" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="#2B2B2B" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 
                      41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 
                      38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 
                      53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 
                      23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 
                      24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 
                      54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 
                      0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 
                      0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                    `;

                    const paragrafo_X = document.createElement('p');
                    paragrafo_X.id = ('paragrafo_x');
                    paragrafo_X.textContent = 'x';

                    const paragrafo_quantità = document.createElement('p');
                    paragrafo_quantità.id = ('paragrafo_quantità_nel_carrello');

                    // Aggiungo gli elementi al div, inizialmente nascosto
                    div_quantità_nel_carrello.append(svg, paragrafo_X, paragrafo_quantità);
                    div_quantità_nel_carrello.style.display = 'none';

                    contenitore_quantità.append(meno, quantità, più, div_quantità_nel_carrello);
                    contenitore_prezzo_e_quantità.append(prezzo_prodotto, contenitore_quantità);

                    // Aggiungi al carrello
                    const bottone_aggiungi_carrello = document.createElement('button');
                    bottone_aggiungi_carrello.textContent = 'Aggiungi al carrello';
                    bottone_aggiungi_carrello.id = ('bottone_aggiungi_carrello');
                    bottone_aggiungi_carrello.addEventListener('click', (event) => {
                        aggiungi_al_carrello_fnc(event);
                    });

                    // Creo la gerarchia
                    div_prodotto.append(img_prodotto, testo_prodotto, descrizione_prodotto, contenitore_prezzo_e_quantità, bottone_aggiungi_carrello);
                    contenitore_prodotti.append(div_prodotto);
                });

                if (localStorage.getItem("carrello") != null) {
                    // Recupero il carello da localStorage ed aggiorno i dati
                    oggetto_carrello = JSON.parse(localStorage.getItem("carrello"));

                    // Aggiorno il numerino dei prodotti totali nel carrello, somma delle quantità
                    const numero_prodotti = oggetto_carrello.reduce((accumulatore, elemento) => accumulatore + elemento.quantità, 0);
                    if (String(numero_prodotti).length == 2) {
                        document.getElementById('numero_prodotti').style.fontSize = '16px';
                    }
                    else if (String(numero_prodotti).length == 3) {
                        document.getElementById('numero_prodotti').style.fontSize = '13px';
                    }
                    document.getElementById('numero_prodotti').textContent = numero_prodotti;

                    // Aggiorno per ciascun prodotto nel carrello il numero di prodotti dentro al carrello
                    oggetto_carrello.forEach(oggetto => {
                        // Trovo ciascun div.prodotto che è già nel carrello
                        const div_nel_carrello = Array.from(document.querySelectorAll('div.prodotto')).find(div => {
                            return div.querySelector('p.titolo_prodotto').textContent == oggetto.titolo;
                        });

                        // Per ciascun div.prodotto che è già nel carrello ne aggiorno i dati
                        if (div_nel_carrello) {
                            const div_quantità_nel_carrello = div_nel_carrello.querySelector('div.div_quantità_nel_carrello');
                            div_quantità_nel_carrello.style.display = 'flex';
                            div_quantità_nel_carrello.querySelector('p#paragrafo_quantità_nel_carrello').textContent = String(oggetto.quantità);
                        }
                    });
                }

                else {
                    document.getElementById('numero_prodotti').textContent = 0;
                }
            }
            catch (errore) {
                // Errore nella ricerca del prodotto o nella raccolta dei dati
                console.log(errore)
                input_cerca.value = '';
                input_cerca.placeholder = 'Nessun prodotto trovato!';
                input_cerca.style.border = '2px solid red';
                clearInterval(id);
                placeholder_dinamico();
            }
        }
    }
    catch (errore) {
        // Errore nell'input utente
        console.log(errore);
        input_cerca.value = '';
        input_cerca.placeholder = 'Nessun prodotto trovato!';
        input_cerca.style.border = '2px solid red';
        clearInterval(id);
        placeholder_dinamico();
    }
}
settaggi_generali();
prodotti_iniziali();
placeholder_dinamico();
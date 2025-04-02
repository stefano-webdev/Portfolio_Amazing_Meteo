// Settaggi generali
function settaggi_generali() {
    let altezza_header = window.getComputedStyle(document.querySelector('header')).height;
    document.getElementById('contenitore_madre').style.marginTop = altezza_header;

    let altezza_input_cerca = Number(window.getComputedStyle(document.getElementById('input_cerca')).height.slice(0, -2)) - 4;
    document.querySelector('#div_ricerca button').style.height = `${altezza_input_cerca}px`;
}
window.addEventListener('resize', () => {
    settaggi_generali();
});


// Variabili
const bottone_cerca = document.getElementById('bottone_cerca');
const input_cerca = document.getElementById('input_cerca');
const contenitore_prodotti = document.getElementById('contenitore_prodotti');
const div_categorie = document.querySelectorAll('div.categoria');
const crescente = document.querySelector('#div_crescente_decrescente div:nth-child(1)');
const decrescente = document.querySelector('#div_crescente_decrescente div:nth-child(2)');
const lista_range_prezzi = document.querySelectorAll('#div_range_prezzi div.range_valore');
const range_custom = document.getElementById('range_custom');


// Assegnazione comandi
// Tasto cerca
bottone_cerca.addEventListener('click', () => {
    ricerca_prodotti();
});
input_cerca.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        ricerca_prodotti();
    }
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
    })
});

// Sezione filtri
// Prezzo
crescente.addEventListener('click', () => {
    prezzo_crescente_decrescente('crescente');
});
decrescente.addEventListener('click', () => {
    prezzo_crescente_decrescente('decrescente');
});

// Range prezzi
lista_range_prezzi.forEach(elemento => elemento.addEventListener('click', (event) => {
    range_prezzi(event);
}));

range_custom.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        range_custom.blur();
    }
});

range_custom.addEventListener('blur', (event) => {
    document.getElementById('div_input_valuta').classList.add('attivo');
    range_custom.classList.add('attivo');
    if (range_custom.value == '') {
        document.getElementById('div_input_valuta').classList.remove('attivo');
        range_custom.classList.remove('attivo');
        const div_prodotti = Array.from(document.querySelectorAll('div.prodotto'));
        div_prodotti.forEach(div => div.style.display = 'flex');
    }
});

range_custom.addEventListener('input', (event) => {
    range_custom_fnc(event);
});


// Comando bottone torna_su
document.getElementById('torna_su').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('torna_su').blur();
});


// Funzioni
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
    // Tolgo paragrafo avviso e ripristino min-height
    if (document.querySelector('p.paragrafo_avviso')) {
        document.querySelector('p.paragrafo_avviso').remove()
    }
    contenitore_prodotti.style.minHeight = '100svh';

    // Gestisco selezione
    if (event.target.classList.contains('attivo')) {
        event.target.classList.remove('attivo');
        const div_prodotti = Array.from(document.querySelectorAll('div.prodotto'));
        div_prodotti.forEach(elemento => elemento.style = 'flex');
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

        // Se nessun prodotto corrisponde al filtro
        if (div_prodotti.every(div => div.style.display == 'none') && document.querySelector('p.paragrafo_avviso') === null) {
            const paragrafo_avviso = document.createElement('p');
            paragrafo_avviso.textContent = 'Non sono presenti articoli corrispondenti ai filtri selezionati';
            paragrafo_avviso.classList.add('paragrafo_avviso');
            contenitore_prodotti.append(paragrafo_avviso);

            contenitore_prodotti.style.minHeight = 'fit-content';
        }
    }
}

// Funzione range_custom
function range_custom_fnc(event) {
    // Limite massimo caratteri
    if (range_custom.value.length > 7) {
        range_custom.value = range_custom.value.slice(0, 7);
    }

    console.log(range_custom.value)
    // Entra nell'if solo se è un numero valido
    if (!isNaN(parseFloat(range_custom.value))) {
        // Tolgo paragrafo avviso e ripristino min-height
        if (document.querySelector('p.paragrafo_avviso')) {
            document.querySelector('p.paragrafo_avviso').remove()
        }
        contenitore_prodotti.style.minHeight = '100svh';
    
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
    
        // Se nessun prodotto corrisponde al filtro
        if (div_prodotti.every(div => div.style.display == 'none') && document.querySelector('p.paragrafo_avviso') === null) {
            const paragrafo_avviso = document.createElement('p');
            paragrafo_avviso.textContent = 'Non sono presenti articoli corrispondenti ai filtri selezionati';
            paragrafo_avviso.classList.add('paragrafo_avviso');
            contenitore_prodotti.append(paragrafo_avviso);
            contenitore_prodotti.style.minHeight = 'fit-content';
        }
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
            // Tolgo eventuale stato "attivo"
            crescente.classList.remove('attivo');
            decrescente.classList.remove('attivo');
            lista_range_prezzi.forEach(elemento => elemento.classList.remove('attivo'));
            range_custom.value = '';
            document.getElementById('div_input_valuta').classList.remove('attivo');
            range_custom.classList.remove('attivo');

            // Tolgo paragrafo avviso e ripristino min-height
            if (document.querySelector('p.paragrafo_avviso')) {
                document.querySelector('p.paragrafo_avviso').remove()
            }
            contenitore_prodotti.style.minHeight = '100svh';

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
                contenitore_quantità.append(meno, quantità, più);
                contenitore_prezzo_e_quantità.append(prezzo_prodotto, contenitore_quantità);

                // Aggiungi al carrello
                const bottone_aggiungi_carrello = document.createElement('button');
                bottone_aggiungi_carrello.textContent = 'Aggiungi al carrello';
                bottone_aggiungi_carrello.id = ('bottone_aggiungi_carrello');

                // Creo la gerarchia
                div_prodotto.append(img_prodotto, testo_prodotto, descrizione_prodotto, contenitore_prezzo_e_quantità, bottone_aggiungi_carrello);
                contenitore_prodotti.append(div_prodotto);
            });
        }
    }
    catch (errore) {
        console.log(errore)
    }
}


// Funzione principale di ricerca prodotti
function ricerca_prodotti() {
    try {
        // Tolgo eventuale stato "attivo"
        crescente.classList.remove('attivo');
        decrescente.classList.remove('attivo');
        lista_range_prezzi.forEach(elemento => elemento.classList.remove('attivo'));
        range_custom.value = '';
        document.getElementById('div_input_valuta').classList.remove('attivo');
        range_custom.classList.remove('attivo');


        // Tolgo paragrafo avviso e ripristino min-height
        if (document.querySelector('p.paragrafo_avviso')) {
            document.querySelector('p.paragrafo_avviso').remove()
        }
        contenitore_prodotti.style.minHeight = '100svh';

        // Controllo input e ottengo prodotto
        let prodotto = input_cerca.value.trim();
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
                let catalogo_filtrato = catalogo.filter(elemento => elemento.categoria == prodotto);

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
                    contenitore_quantità.append(meno, quantità, più);
                    contenitore_prezzo_e_quantità.append(prezzo_prodotto, contenitore_quantità);

                    // Aggiungi al carrello
                    const bottone_aggiungi_carrello = document.createElement('button');
                    bottone_aggiungi_carrello.textContent = 'Aggiungi al carrello';
                    bottone_aggiungi_carrello.id = ('bottone_aggiungi_carrello');

                    // Creo la gerarchia
                    div_prodotto.append(img_prodotto, testo_prodotto, descrizione_prodotto, contenitore_prezzo_e_quantità, bottone_aggiungi_carrello);
                    contenitore_prodotti.append(div_prodotto);
                });
            }
            catch (errore) {
                // Errore nella ricerca del prodotto o nella raccolta dei dati
                console.log(errore)
            }

        }
    }
    catch (error) {
        // Errore nell'input utente
        console.log(error);
    }
}

settaggi_generali();
prodotti_iniziali();
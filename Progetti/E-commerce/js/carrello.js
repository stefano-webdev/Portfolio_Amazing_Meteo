// Variabili
let paragrafo_totale_carrello;
let articoli;

// Faccio vedere il body solo quando il caricamento è finito, per evitare il flickering/flash layout
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Home page Amazing
document.getElementById('logo').addEventListener('click', () => {
    window.location.href = "../html/e-commerce.html";
});
document.querySelector('#logo_contenitore svg').addEventListener('click', () => {
    window.location.href = "../html/e-commerce.html";
});

// Funzioni
// Settaggi generali
function settaggi_generali() {
    // Imposto dinamicamente il margin-top del contenitore madre
    let altezza_header = window.getComputedStyle(document.querySelector('header')).height;
    document.getElementById('contenitore_madre').style.marginTop = altezza_header;
}

// Calcolo la somma dei prezzi degli articoli e la aggiungo al paragrafo
function calcola_somma_articoli_fnc() {
    const lista_prezzi_articoli_DOM = Array.from(document.querySelectorAll('p.prezzo_totale_articolo'));
    const lista_prezzi_articoli = lista_prezzi_articoli_DOM.map(articolo => parseFloat(articolo.textContent.replace('.', '').replace(',', '.')));
    const somma_prezzi_articoli = lista_prezzi_articoli.reduce((accumulatore, prezzo_articolo) => accumulatore + prezzo_articolo, 0);
    paragrafo_totale_carrello.textContent = `${somma_prezzi_articoli.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

// Eliminare un articolo dal carrello
function elimina_prodotto_fnc(event) {
    // Prendo il titolo dell'articolo da eliminare
    const div_prodotto_eliminare = event.target.closest('.div_svg_elimina').parentElement;
    const titolo_articolo = div_prodotto_eliminare.querySelector('p.descrizione').textContent;

    // Trovo l'indice dell'articolo da eliminare e rimuovo l'articolo dalla lista articoli
    const indice = articoli.findIndex(prodotto => prodotto.titolo == titolo_articolo);
    articoli.splice(indice, 1);

    // Aggiorno localStorage, se l'array è vuoto elimino anche la chiave dal localStorage
    if (articoli.length == 0) {
        localStorage.removeItem("carrello");
    }
    else {
        localStorage.setItem("carrello", JSON.stringify(articoli));
    }

    // Somma delle quantità degli articoli nel carrello
    const totale_quantità_prodotti = articoli.reduce((accumulatore, elemento) => accumulatore + elemento.quantità, 0);
    
    // Aggiorno il numero di articoli nel carrello, se sono zero ricarico la pagina
    if (totale_quantità_prodotti > 1) {
        document.querySelector('p.numero_articoli').textContent = `${totale_quantità_prodotti} prodotti`;
        // Elimino l'articolo dal DOM
        event.target.closest('.div_svg_elimina').parentElement.remove();
    }
    else if (totale_quantità_prodotti == 1) {
        document.querySelector('p.numero_articoli').textContent = `${totale_quantità_prodotti} prodotto`;
        // Elimino l'articolo dal DOM
        event.target.closest('.div_svg_elimina').parentElement.remove();
    }
    else {
        location.reload();
    }

    // Aggiorno il prezzo totale del carrello se c'è almeno un articolo
    if (articoli.length > 0) {
        calcola_somma_articoli_fnc();
    }
}


// Inizio del caricamento della pagina
// Se il carrello è pieno va nell'if, se è vuoto va nell'else
if (localStorage.getItem("carrello") != null) {
    // Recupero gli articoli dal localStorage
    articoli = JSON.parse(localStorage.getItem("carrello"));

    // Creo layout per il carrello pieno
    // Titolo
    const titolo_carrello_pieno = document.createElement('h1');
    titolo_carrello_pieno.classList.add('carrello_pieno');
    titolo_carrello_pieno.textContent = "Nel tuo carrello:";

    // Numero articoli nel carrello
    const numero_articoli = document.createElement('p');
    numero_articoli.classList.add('numero_articoli');
    let totale_quantità_prodotti = articoli.reduce((accumulatore, elemento) => accumulatore + elemento.quantità, 0);
    if (totale_quantità_prodotti > 1) {
        numero_articoli.textContent = `${totale_quantità_prodotti} prodotti`;
    }
    else {
        numero_articoli.textContent = `${totale_quantità_prodotti} prodotto`;
    }

    // Creo contenitore per tutti gli articoli
    const div_tutti_articoli = document.createElement('div');
    div_tutti_articoli.id = 'div_tutti_articoli';

    // Creo gli articoli con un loop
    articoli.forEach(articolo => {
        // Creo il contenitore per l'articolo
        const articolo_div = document.createElement('div');
        articolo_div.classList.add('div_articolo');

        // Creo contenitore img, prezzo base, titolo ed elimina prodotto
        const div_img_prezzo_titolo = document.createElement('div');
        div_img_prezzo_titolo.classList.add('div_img_prezzo_titolo');

        // Creo div img e prezzo base
        const div_img_prezzo_base = document.createElement('div');
        div_img_prezzo_base.classList.add('div_img_prezzo_base');

        // Immagine e prezzo base
        const img = document.createElement('img');
        img.classList.add('img_articolo');
        img.src = articolo.img;
        img.alt = 'Immagine articolo nel carrello';
        const prezzo_base = document.createElement('p');
        prezzo_base.classList.add('prezzo_base');
        prezzo_base.textContent = `${String(articolo.prezzo_base).replace('.', ',')} €`;
        div_img_prezzo_base.append(img, prezzo_base);

        // Descrizione ed elimina prodotto
        const descrizione = document.createElement('p');
        descrizione.classList.add('descrizione');
        descrizione.textContent = articolo.titolo;

        div_img_prezzo_titolo.append(div_img_prezzo_base, descrizione);

        // Quantità articolo modificabile
        const div_quantita_prezzo_totale = document.createElement('div');
        div_quantita_prezzo_totale.classList.add('div_quantita_prezzo_totale');

        const div_quantità_input = document.createElement('div');
        div_quantità_input.classList.add('div_quantità_input');

        const p_quantità = document.createElement('p');
        p_quantità.classList.add('p_quantità');
        p_quantità.textContent = "Quantità:";

        const input_quantità = document.createElement('input');
        input_quantità.classList.add('input_quantità');
        input_quantità.type = 'text';
        input_quantità.maxLength = 2;
        input_quantità.setAttribute('autocomplete', 'off');
        input_quantità.addEventListener('input', () => {
            // Limito l'input a solo numeri interi
            input_quantità.value = input_quantità.value.replace(/\D/g, '');

            // Se inizia con 0 lo tolgo
            if (input_quantità.value.startsWith('0')) {
                input_quantità.value = input_quantità.value.slice(1);
            }

            // Aggiorno il prezzo totale dell'articolo se l'input non è vuoto
            if (input_quantità.value != "") {
                // Sommo tutte le quantità di tutti gli input delle quantità nella pagina
                const lista_input_quantità = Array.from(document.querySelectorAll('.input_quantità'));
                const lista_quantità = lista_input_quantità.map(input => parseInt(input.value));
                const somma_quantità = lista_quantità.reduce((accumulatore, quantità) => accumulatore + quantità, 0);
                
                // Controllo se la somma delle quantità non supera 999 prodotti nel carrello
                if (somma_quantità > 999) {
                    // Faccio somma della quantità di tutti gli input togliendo l'input corrente
                    lista_input_quantità.splice(lista_input_quantità.indexOf(input_quantità), 1);
                    const somma_quantità_senza_input_corrente = lista_input_quantità.reduce((accumulatore, quantità) => accumulatore + parseInt(quantità.value), 0);
                    const numero_articoli_disponibili = 999 - somma_quantità_senza_input_corrente;

                    // Imposto il valore dell'input corrente al valore massimo possibile per non superare 999, poi proseguo
                    input_quantità.value = numero_articoli_disponibili;
                    const prezzo_totale = (articolo.prezzo_base * input_quantità.value).toFixed(2);
                    p_prezzo_totale_articolo.textContent = `${parseFloat(prezzo_totale).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
                    calcola_somma_articoli_fnc();
    
                    // Aggiorno la quantità dell'articolo nell'array articoli e nella somma delle quantità prodotti
                    articolo.quantità = parseInt(input_quantità.value);
                    const indice = articoli.findIndex(prodotto => prodotto.titolo == articolo.titolo);
                    articoli[indice].quantità = articolo.quantità;
                    totale_quantità_prodotti = articoli.reduce((accumulatore, elemento) => accumulatore + elemento.quantità, 0);
                    if (totale_quantità_prodotti > 1) {
                        numero_articoli.textContent = `${totale_quantità_prodotti} prodotti`;
                    }
                    else {
                        numero_articoli.textContent = `${totale_quantità_prodotti} prodotto`;
                    }
    
                    // Aggiorno il localStorage
                    localStorage.setItem("carrello", JSON.stringify(articoli));

                    // Avviso all'utente ed uscita dalla funzione
                    alert('Attenzione, puoi inserire nel carrello fino a 999 prodotti!');
                    return;
                }

                const prezzo_totale = (articolo.prezzo_base * input_quantità.value).toFixed(2);
                p_prezzo_totale_articolo.textContent = `${parseFloat(prezzo_totale).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
                calcola_somma_articoli_fnc();

                // Aggiorno la quantità dell'articolo nell'array articoli e nella somma delle quantità prodotti
                articolo.quantità = parseInt(input_quantità.value);
                const indice = articoli.findIndex(prodotto => prodotto.titolo == articolo.titolo);
                articoli[indice].quantità = articolo.quantità;
                totale_quantità_prodotti = articoli.reduce((accumulatore, elemento) => accumulatore + elemento.quantità, 0);
                if (totale_quantità_prodotti > 1) {
                    numero_articoli.textContent = `${totale_quantità_prodotti} prodotti`;
                }
                else {
                    numero_articoli.textContent = `${totale_quantità_prodotti} prodotto`;
                }

                // Aggiorno il localStorage
                localStorage.setItem("carrello", JSON.stringify(articoli));
            }
        });
        input_quantità.addEventListener('change', () => {
            // Se l'input è vuoto lo riempio con 1
            if (input_quantità.value == "") {
                input_quantità.value = 1;
                // Aggiorno il prezzo totale dell'articolo
                const prezzo_totale = (articolo.prezzo_base * input_quantità.value).toFixed(2);
                p_prezzo_totale_articolo.textContent = `${parseFloat(prezzo_totale).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
                calcola_somma_articoli_fnc();

                // Aggiorno la quantità dell'articolo nell'array articoli e nel localStorage
                articolo.quantità = parseInt(input_quantità.value);
                const indice = articoli.findIndex(prodotto => prodotto.titolo == articolo.titolo);
                articoli[indice].quantità = articolo.quantità;
                totale_quantità_prodotti = articoli.reduce((accumulatore, elemento) => accumulatore + elemento.quantità, 0);
                if (totale_quantità_prodotti > 1) {
                    numero_articoli.textContent = `${totale_quantità_prodotti} prodotti`;
                }
                else {
                    numero_articoli.textContent = `${totale_quantità_prodotti} prodotto`;
                }

                // Aggiorno il localStorage
                localStorage.setItem("carrello", JSON.stringify(articoli));
            }
        });
        input_quantità.addEventListener('click', () => {
            input_quantità.setSelectionRange(0, 2);
        });
        input_quantità.value = articolo.quantità;
        div_quantità_input.append(p_quantità, input_quantità);

        // Prezzo totale articolo
        const p_prezzo_totale_articolo = document.createElement('p');
        p_prezzo_totale_articolo.classList.add('prezzo_totale_articolo');
        const prezzo_totale = (articolo.prezzo_base * input_quantità.value).toFixed(2);
        p_prezzo_totale_articolo.textContent = `${parseFloat(prezzo_totale).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
        div_quantita_prezzo_totale.append(div_quantità_input, p_prezzo_totale_articolo);

        // SVG cestino per eliminare articolo
        const div_svg_elimina = document.createElement('div');
        div_svg_elimina.classList.add('div_svg_elimina');
        div_svg_elimina.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="#6E6E6E" d="M135.2 17.7L128 32 32 32C14.3 
        32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 
        32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 
        0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 
        128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 
        0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        `;
        div_svg_elimina.addEventListener('click', (event) => {
            elimina_prodotto_fnc(event);
        })

        // Aggiungo gli elementi al contenitore dell'articolo e al div_tutti_articoli
        articolo_div.append(div_img_prezzo_titolo, div_quantita_prezzo_totale, div_svg_elimina);
        div_tutti_articoli.append(articolo_div);
    });

    // Aggiungo al DOM la parte iniziale e tutti i prodotti nel carrello
    document.querySelector('main').append(titolo_carrello_pieno, numero_articoli, div_tutti_articoli);

    // Totale dei prodotti nel carrello
    // Titolo totale prodotti
    const totale_prodotti = document.createElement('h3');
    totale_prodotti.classList.add('totale_prodotti');
    totale_prodotti.textContent = "Totale articoli:";
    // Paragrafo somma del totale carrello
    paragrafo_totale_carrello = document.createElement('p');
    paragrafo_totale_carrello.id = 'paragrafo_totale_carrello';
    // Calcolo la somma dei prezzi degli articoli e la aggiungo al paragrafo
    calcola_somma_articoli_fnc();

    // Paragrafo IVA inclusa
    const paragrafo_iva_inclusa = document.createElement('p');
    paragrafo_iva_inclusa.id = 'iva_inclusa';
    paragrafo_iva_inclusa.textContent = "IVA inclusa";

    // Bottone svuota carrello
    const div_svuota_carrello = document.createElement('div');
    div_svuota_carrello.classList.add('div_svuota_carrello');
    const svuota_carrello = document.createElement('button');
    svuota_carrello.id = 'svuota_carrello';
    svuota_carrello.textContent = "Svuota carrello";
    svuota_carrello.addEventListener('click', () => {
        // Elimino tutti i prodotti dalla lista articoli, aggiorno localStorage e ricarico la pagina
        localStorage.removeItem("carrello");
        location.reload();
    });
    div_svuota_carrello.append(svuota_carrello);

    // Aggiungo al DOM la somma totale dei prodotti nel carrello ed IVA inclusa
    document.querySelector('main').append(totale_prodotti, paragrafo_totale_carrello, paragrafo_iva_inclusa, div_svuota_carrello);

    // Label ed input per il codice sconto
    // Div
    const div_sconto = document.createElement('div');
    div_sconto.id = 'div_sconto';
    document.querySelector('footer').append(div_sconto);
    // Label e input
    const label_sconto = document.createElement('label');
    label_sconto.id = 'label_sconto';
    label_sconto.innerHTML = "Hai un codice sconto?<br>Inseriscilo qui!";
    label_sconto.setAttribute('for', 'input_sconto');
    const input_sconto = document.createElement('input');
    input_sconto.id = 'input_sconto';
    input_sconto.type = 'text';
    input_sconto.placeholder = "Codice sconto";
    input_sconto.maxLength = 19;
    input_sconto.setAttribute('autocomplete', 'off');
    input_sconto.addEventListener('input', () => {
        // Metto testo in maiuscolo
        input_sconto.value = input_sconto.value.toUpperCase();
    });
    // Aggiungo label e input al div
    div_sconto.append(label_sconto, input_sconto);

    // Spedizione gratuita sopra i 50€
    // Div
    const div_spedizione_gratuita = document.createElement('div');
    div_spedizione_gratuita.id = 'div_spedizione_gratuita';
    document.querySelector('footer').append(div_spedizione_gratuita);
    // SVG e paragrafo
    const svg_spedizione_gratuita = document.createElement('div');
    svg_spedizione_gratuita.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path fill="#28a745" d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 
    21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 
    96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 
    0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 
    96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 
    0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 
    48 48 0 1 1 0-96z"/></svg>
    `;
    const p_spedizione_gratuita = document.createElement('p');
    p_spedizione_gratuita.textContent = "Spedizione gratuita per ordini superiori a 50 €";
    // Aggiungo SVG e paragrafo al div
    div_spedizione_gratuita.append(svg_spedizione_gratuita, p_spedizione_gratuita);

    // Bottone procedi all'acquisto
    const div_procedi_acquisto = document.createElement('div');
    div_procedi_acquisto.id = 'div_procedi_acquisto';
    document.querySelector('footer').append(div_procedi_acquisto);
    const bottone_acquisto = document.createElement('button');
    bottone_acquisto.textContent = "Vai al pagamento";
    div_procedi_acquisto.append(bottone_acquisto);
}
else {
    // Creo layout per avvisare che il carrello è vuoto
    const titolo_carrello_vuoto = document.createElement('h1');
    titolo_carrello_vuoto.classList.add('carrello_vuoto');
    titolo_carrello_vuoto.textContent = "Il tuo carrello è vuoto";

    // SVG triste
    const div_svg = document.createElement('div');
    div_svg.classList.add('div_triste');
    div_svg.innerHTML = `
    <svg class="triste" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100">
    <path fill="#EF4444" d="M400 406.1L400 288c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152.6c-28.7 15-61.4 23.4-96 23.4s-67.3-8.5-96-23.4L160 288c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 118.1C72.6 368.2 48 315 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 59-24.6 112.2-64 150.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm166.6 9.7c5.5-5.8 14.8-9.7 25.4-9.7s19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C391.7 186.8 371 180 351.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9zM208 320l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48z"/>
    </svg>
    `;

    const paragrafo_ripensaci = document.createElement('p');
    paragrafo_ripensaci.classList.add('ripensaci');
    paragrafo_ripensaci.textContent = "Possiamo trovare sicuramente gli articoli più adatti a te!";

    const contenitore_link_home = document.createElement('div');
    contenitore_link_home.classList.add('contenitore_link_home');
    const link_home = document.createElement('a');
    link_home.classList.add('link_home');
    link_home.href = "./e-commerce.html";
    link_home.textContent = "Torna allo shop";
    contenitore_link_home.append(link_home);

    // Aggiungo il layout al DOM
    document.querySelector('main').append(titolo_carrello_vuoto, div_svg, paragrafo_ripensaci, contenitore_link_home);
}

settaggi_generali();

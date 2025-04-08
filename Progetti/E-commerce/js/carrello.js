// Variabili

// Faccio vedere il body solo quando il caricamento è finito, per evitare il flickering/flash layout
window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
});

// Funzioni
// Settaggi generali
function settaggi_generali() {
    // Imposto dinamicamente il margin-top del contenitore madre
    let altezza_header = window.getComputedStyle(document.querySelector('header')).height;
    document.getElementById('contenitore_madre').style.marginTop = altezza_header;
}
// Eliminare un articolo dal carrello
function elimina_prodotto_fnc(event) {
    // Elimino l'articolo dal DOM
    event.target.closest('.div_svg_elimina').parentElement.parentElement.parentElement.remove();

    // Elimino l'articolo dalla lista articoli
    const titolo_articolo = event.target.closest('.div_svg_elimina').previousElementSibling.textContent;

    // Trovo l'indice dell'articolo da eliminare e rimuovo l'articolo dalla lista articoli
    const indice = articoli.findIndex(prodotto => prodotto.titolo == titolo_articolo);
    articoli.splice(indice, 1);

    // Aggiorno il localStorage
    localStorage.setItem("carrello", JSON.stringify(articoli));

    // Aggiorno il numero di articoli nel carrello, se sono zero ricarico la pagina
    if (articoli.length > 1) {
        document.querySelector('h3').textContent = `${articoli.length} prodotti`;
    }
    else if (articoli.length == 1) {
        document.querySelector('h3').textContent = `${articoli.length} prodotto`;
    }
    else {
        location.reload();
    }
}

// Recupero gli articoli dal localStorage e prendo la lunghezza
const articoli = JSON.parse(localStorage.getItem("carrello"));

// Se il carrello è vuoto va nell'else
if (articoli.length > 0) {
    // Creo layout per il carrello pieno
    // Titolo
    const titolo_carrello_pieno = document.createElement('h1');
    titolo_carrello_pieno.classList.add('carrello_pieno');
    titolo_carrello_pieno.textContent = "Nel tuo carrello:";

    // Numero articoli nel carrello
    const numero_articoli = document.createElement('h3');
    numero_articoli.classList.add('numero_articoli');
    const lunghezza_articoli = articoli.length;
    if (lunghezza_articoli > 1) {
        numero_articoli.textContent = `${articoli.length} prodotti`;
    }
    else {
        numero_articoli.textContent = `${articoli.length} prodotto`;
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
        const div_img_prezzo_titolo_elimina = document.createElement('div');
        div_img_prezzo_titolo_elimina.classList.add('div_img_prezzo_titolo_elimina');

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
        const div_descrizione_elimina = document.createElement('div');
        div_descrizione_elimina.classList.add('div_descrizione_elimina');
        const descrizione = document.createElement('p');
        descrizione.classList.add('descrizione');
        descrizione.textContent = articolo.titolo;
        const div_svg_elimina = document.createElement('div');
        div_svg_elimina.classList.add('div_svg_elimina');
        div_svg_elimina.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="#e64c4c" d="M135.2 17.7L128 32 32 32C14.3 
        32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 
        32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 
        0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 
        128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 
        0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        `
        div_svg_elimina.addEventListener('click', (event) => {
            elimina_prodotto_fnc(event);
        })

        div_descrizione_elimina.append(descrizione, div_svg_elimina);
        div_img_prezzo_titolo_elimina.append(div_img_prezzo_base, div_descrizione_elimina);

        // Quantità editabile e prezzo totale
        const div_quantita_prezzo_totale = document.createElement('div');
        div_quantita_prezzo_totale.classList.add('div_quantita_prezzo_totale');

        const div_quantità_input = document.createElement('div');
        div_quantità_input.classList.add('div_quantità_input');

        const p_quantità = document.createElement('p');
        p_quantità.classList.add('p_quantità');
        p_quantità.textContent = "Quantità:";

        const input_quantità = document.createElement('input');
        input_quantità.type = 'number';
        input_quantità.addEventListener('input', () => {
            // Limito il numero a 2 cifre
            if (input_quantità.value.length > 2) {
                input_quantità.value = input_quantità.value.slice(0, 2);
            }
        });
        input_quantità.addEventListener('change', (event) => {
            // Se l'input è vuoto lo riempio con 1
            if (input_quantità.value == "") {
                input_quantità.value = 1;
            }

            // Se l'input è solo uno zero lo riempio con 1
            if (input_quantità.value == "0" || input_quantità.value == "00") {
                input_quantità.value = 1;
            }

            // Se l'input inizia con 0 lo tolgo
            if (input_quantità.value.startsWith('0')) {
                input_quantità.value = input_quantità.value.slice(1);
            }

            // Aggiorno il prezzo totale
            const prezzo_totale = (articolo.prezzo_base * input_quantità.value).toFixed(2);
            p_prezzo_totale_articolo.textContent = `${parseFloat(prezzo_totale).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
        });
        input_quantità.value = articolo.quantità;
        div_quantità_input.append(p_quantità, input_quantità);

        const p_prezzo_totale_articolo = document.createElement('p');
        p_prezzo_totale_articolo.classList.add('prezzo_totale_articolo');
        const prezzo_totale = (articolo.prezzo_base * input_quantità.value).toFixed(2);
        p_prezzo_totale_articolo.textContent = `${parseFloat(prezzo_totale).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
        div_quantita_prezzo_totale.append(div_quantità_input, p_prezzo_totale_articolo);

        // Aggiungo gli elementi al contenitore dell'articolo e al div_tutti_articoli
        articolo_div.append(div_img_prezzo_titolo_elimina, div_quantita_prezzo_totale);
        div_tutti_articoli.append(articolo_div);
    });

    // Aggiungo il layout al DOM
    document.querySelector('main').append(titolo_carrello_pieno, numero_articoli, div_tutti_articoli);
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
    link_home.textContent = "Scopri i prodotti";
    contenitore_link_home.append(link_home);

    // Aggiungo il layout al DOM
    document.querySelector('main').append(titolo_carrello_vuoto, div_svg, paragrafo_ripensaci, contenitore_link_home);
}

settaggi_generali();

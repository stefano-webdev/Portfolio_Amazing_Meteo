// Variabili
const bottone_cerca = document.getElementById('bottone_cerca');
const input_cerca = document.getElementById('input_cerca');
const paragrafo_paese = document.querySelector('div#dati_generali p:nth-child(1)');
const paragrafo_nazione = document.querySelector('div#dati_generali p:nth-child(2)');
const paragrafo_data = document.querySelector('div#dati_generali p:nth-child(3)');
const selettore_giorno = document.querySelector('div#selettore_giorno');
const ogg_traduci_città = {
    "Milano": "Milan",
    "Roma": "Rome",
    "Napoli": "Naples",
    "Firenze": "Florence",
    "Venezia": "Venice",
    "Torino": "Turin",
    "Genova": "Genoa",
};


// Assegnazione comandi
bottone_cerca.addEventListener('click', ricerca);
input_cerca.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        ricerca();
    }
})

// Funzione ricerca meteo paese
function ricerca() {
    // Il body ora può scrollare
    document.body.style.overflow = 'visible';

    // Aggiustamento paese
    let paese = input_cerca.value;
    let prima_lettera = paese.at(0).toUpperCase();
    paese = prima_lettera + paese.slice(1);
    input_cerca.value = paese;
    const paese_variabile = paese;

    // Conversione per città italiane importanti
    if (paese in ogg_traduci_città) {
        paese = ogg_traduci_città[paese];
    }

    async function dati_meteo() {
        // Previsione meteo ed aggiornamento DOM
        try {
            // Variabili locali
            const giorni = 4;
            const url_traduzione = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(paese)}&langpair=it|en`;

            // Traduci dall'italiano all'inglese, fetch
            const risposta_traduzione = await fetch(url_traduzione);
            const dati_traduzione = await risposta_traduzione.json();
            const parola_tradotta = dati_traduzione.responseData.translatedText;
            console.log(`Ok, l'API ha tradotto: ${parola_tradotta}`);

            // Richiesta dei dati meteo, fetch
            const url = `http://api.weatherapi.com/v1/forecast.json?key=${chiave}&q=${parola_tradotta}&days=${giorni}&hourly=1`;
            const risposta = await fetch(url);
            const dati = await risposta.json();

            // Dati generali
            const nome_paese = paese_variabile;
            let nome_nazione = dati.location.country;
            if (nome_nazione == 'Italy') {
                nome_nazione = 'Italia';
            }
            const data = new Date();
            const giorno = String(data.getDate());
            let mese = String(data.getMonth() + 1);
            if (mese.length == 1) {
                mese = '0' + mese;
            }
            const anno = String(data.getFullYear());
            const data_completa = `${giorno}/${mese}/${anno}`


            // Dati ora per ora
            // Prendo l'orario ed il codice
            const location = dati.location.tz_id;
            const fuso_orario = new Intl.DateTimeFormat('it-IT', {
                timeZone: location,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(new Date()).slice(0, 5);
            let ora = fuso_orario.slice(0, 2);
            if (ora.startsWith('0')) {
                ora = ora.slice(1);
            }
            

            // Aggiornamento dei dati nel DOM
            // Aggiornamento dati generali
            paragrafo_paese.textContent = nome_paese;
            paragrafo_nazione.textContent = nome_nazione;
            paragrafo_data.textContent = `Previsioni per il ${data_completa}`;

            // Aggiornamento fascie orarie rimanenti
            let ora_fascia = Number(ora);
            const div_totali_dom = Array.from(document.querySelectorAll('div.fascia_oraria'));
            const div_da_usare = Array.from(document.querySelectorAll('div.fascia_oraria')).toSpliced(-ora_fascia, ora_fascia);
            const div_da_nascondere_dom = Array.from(document.querySelectorAll('div.fascia_oraria')).splice(-ora_fascia, ora_fascia);
            // Pulizia dei div dai dati di ricerche precedenti
            div_totali_dom.forEach(div_da_pulire => {
                div_da_pulire.style.display = 'grid';
                div_da_pulire.querySelector('div.ora_e_condizioni p:nth-child(1)').textContent = '';
                div_da_pulire.querySelector('div.ora_e_condizioni p:nth-child(2)').textContent = '';
    
                div_da_pulire.querySelector('div.svg_e_gradi svg:nth-child(1)').outerHTML = `<svg></svg>`;
                div_da_pulire.querySelector('div.svg_e_gradi p:nth-of-type(1)').textContent = '';
    
                div_da_pulire.querySelector('div.quantita_e_vento p:nth-child(1)').textContent = '';
                div_da_pulire.querySelector('div.quantita_e_vento p:nth-child(2)').textContent = '';
            });

            // Ciclo ed aggiornamento di tutte le fascie orarie
            div_da_usare.forEach((div) => {
                const codice = dati.forecast.forecastday[0].hour[ora_fascia].condition.code;

                // Prendo la condizione
                const dati_codice = lista_condizioni.find(oggetto => oggetto.code == codice);
                const condizione = dati_codice.languages.day_text;
    
                // Prendo svg
                const stato = dati_codice.languages.condizione;
                const svg = stati_svg[stato]
    
                // Prendo la temperatura
                const temperatura = dati.forecast.forecastday[0].hour[ora_fascia].temp_c + '°';
    
                // Prendo quantità di pioggia, se c'è
                const mm_pioggia = dati.forecast.forecastday[0].hour[ora_fascia].precip_mm;
                const qnt_pioggia = Number(mm_pioggia) == 0 ? 'Assenti' : mm_pioggia + 'mm';
    
                // Prendo velocità vento in km/h
                const vento = dati.forecast.forecastday[0].hour[ora_fascia].wind_kph + ' km/h'
                
                div.querySelector('div.ora_e_condizioni p:nth-child(1)').textContent = String(ora_fascia).length == 1 ? '0' + String(ora_fascia) + ':00' : String(ora_fascia) + ':00';
                div.querySelector('div.ora_e_condizioni p:nth-child(2)').textContent = condizione;
    
                div.querySelector('div.svg_e_gradi svg:nth-child(1)').outerHTML = svg;
                div.querySelector('div.svg_e_gradi p:nth-of-type(1)').textContent = temperatura;
    
                div.querySelector('div.quantita_e_vento p:nth-child(1)').textContent = qnt_pioggia;
                div.querySelector('div.quantita_e_vento p:nth-child(2)').textContent = vento;
                ora_fascia += 1
            });

            selettore_giorno.style.display = 'flex';
            // Nascondo i div non utilizzati
            div_da_nascondere_dom.forEach(div => div.style.display = 'none');
        }
        catch (errore) {
            console.log(`Errore nella richiesta: ${errore}`);
        }
    }
    dati_meteo();
}

// let array = [1,2,3,4,5,6];
// let array2 = array.toSpliced(-2, 2);
// console.log(array); 
// console.log(array2); 

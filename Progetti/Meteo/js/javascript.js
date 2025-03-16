// Variabili
const bottone_cerca = document.getElementById('bottone_cerca');
const input_cerca = document.getElementById('input_cerca');
const ogg_traduci_città = {
    "Milano": "Milan",
    "Roma": "Rome",
    "Napoli": "Naples",
    "Firenze": "Florence",
    "Venezia": "Venice",
    "Torino": "Turin",
    "Genova": "Genoa",
};
const para_paese = document.querySelector('section#dati_generali p:nth-child(1)');
const para_nazione = document.querySelector('section#dati_generali p:nth-child(2)');
const para_data = document.querySelector('section#dati_generali p:nth-child(3)');
const lista_condizioni = [
    {
      "code": 1000,
      "day": "Sunny",
      "night": "Clear",
      "icon": 113,
      "languages": 
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Soleggiato",
          "condizione": "Sole",
          "night_text": "Sereno"
        }
    },
    {
      "code": 1003,
      "day": "Partly Cloudy",
      "night": "Partly Cloudy",
      "icon": 116,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Parzialmente nuvoloso",
          "condizione": "Nuvoloso",
          "night_text": "Parzialmente nuvoloso"
        }
    },
    {
      "code": 1006,
      "day": "Cloudy",
      "night": "Cloudy",
      "icon": 119,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Nuvoloso",
          "condizione": "Nuvoloso",
          "night_text": "Nuvoloso"
        }
    },
    {
      "code": 1009,
      "day": "Overcast",
      "night": "Overcast",
      "icon": 122,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Coperto",
          "condizione": "Nuvoloso",
          "night_text": "Coperto"
        }
    },
    {
      "code": 1030,
      "day": "Mist",
      "night": "Mist",
      "icon": 143,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Foschia",
          "condizione": "Nebbia",
          "night_text": "Foschia"
        }
    },
    {
      "code": 1063,
      "day": "Patchy rain nearby",
      "night": "Patchy rain nearby",
      "icon": 176,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia a tratti nelle vicinanze",
          "condizione": "Pioggia",
          "night_text": "Pioggia a tratti nelle vicinanze"
        }
    },
    {
      "code": 1066,
      "day": "Patchy snow nearby",
      "night": "Patchy snow nearby",
      "icon": 179,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Neve a tratti nelle vicinanze",
          "condizione": "Neve",
          "night_text": "Neve a tratti nelle vicinanze"
        }
    },
    {
      "code": 1069,
      "day": "Patchy sleet nearby",
      "night": "Patchy sleet nearby",
      "icon": 182,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Nevischio a tratti nelle vicinanze",
          "condizione": "Neve",
          "night_text": "Nevischio a tratti nelle vicinanze"
        }
    },
    {
      "code": 1072,
      "day": "Patchy freezing drizzle nearby",
      "night": "Patchy freezing drizzle nearby",
      "icon": 185,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioviggine congelante a tratti nelle vicinanze",
          "condizione": "Pioggia",
          "night_text": "Pioviggine congelante a tratti nelle vicinanze"
        }
    },
    {
      "code": 1087,
      "day": "Thundery outbreaks in nearby",
      "night": "Thundery outbreaks in nearby",
      "icon": 200,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni temporalesche nelle vicinanze",
          "condizione": "Temporale",
          "night_text": "Precipitazioni temporalesche nelle vicinanze"
        }

    },
    {
      "code": 1114,
      "day": "Blowing snow",
      "night": "Blowing snow",
      "icon": 227,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Turbinio di neve",
          "condizione": "Neve",
          "night_text": "Turbinio di neve"
        }
    },
    {
      "code": 1117,
      "day": "Blizzard",
      "night": "Blizzard",
      "icon": 230,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Blizzard",
          "condizione": "Neve",
          "night_text": "Blizzard"
        }
    },
    {
      "code": 1135,
      "day": "Fog",
      "night": "Fog",
      "icon": 248,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Nebbia",
          "condizione": "Nebbia",
          "night_text": "Nebbia"
        }
    },
    {
      "code": 1147,
      "day": "Freezing fog",
      "night": "Freezing fog",
      "icon": 260,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Nebbia congelante",
          "condizione": "Nebbia",
          "night_text": "Nebbia congelante"
        }
    },
    {
      "code": 1150,
      "day": "Patchy light drizzle",
      "night": "Patchy light drizzle",
      "icon": 263,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioviggine debole a tratti",
          "condizione": "Pioggia",
          "night_text": "Pioviggine debole a tratti"
        }
    },
    {
      "code": 1153,
      "day": "Light drizzle",
      "night": "Light drizzle",
      "icon": 266,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioviggine debole",
          "condizione": "Pioggia",
          "night_text": "Pioviggine debole"
        }
    },
    {
      "code": 1168,
      "day": "Freezing drizzle",
      "night": "Freezing drizzle",
      "icon": 281,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioviggine",
          "condizione": "Pioggia",
          "night_text": "Pioviggine congelante"
        }
    },
    {
      "code": 1171,
      "day": "Heavy freezing drizzle",
      "night": "Heavy freezing drizzle",
      "icon": 284,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioviggine congelante forte",
          "condizione": "Pioggia",
          "night_text": "Pioviggine congelante forte"
        }
    },
    {
      "code": 1180,
      "day": "Patchy light rain",
      "night": "Patchy light rain",
      "icon": 293,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia debole a tratti",
          "condizione": "Pioggia",
          "night_text": "Pioggia debole a tratti"
        }
    },
    {
      "code": 1183,
      "day": "Light rain",
      "night": "Light rain",
      "icon": 296,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia debole",
          "condizione": "Pioggia",
          "night_text": "Pioggia debole"
        }
    },
    {
      "code": 1186,
      "day": "Moderate rain at times",
      "night": "Moderate rain at times",
      "icon": 299,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia moderata a tratti",
          "condizione": "Pioggia",
          "night_text": "Pioggia moderata a tratti"
        }
    },
    {
      "code": 1189,
      "day": "Moderate rain",
      "night": "Moderate rain",
      "icon": 302,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia moderata",
          "condizione": "Pioggia",
          "night_text": "Pioggia moderata"
        }
    },
    {
      "code": 1192,
      "day": "Heavy rain at times",
      "night": "Heavy rain at times",
      "icon": 305,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia forte a tratti",
          "condizione": "Pioggia",
          "night_text": "Pioggia forte a tratti"
        }
    },
    {
      "code": 1195,
      "day": "Heavy rain",
      "night": "Heavy rain",
      "icon": 308,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia forte",
          "condizione": "Pioggia",
          "night_text": "Pioggia forte"
        }
    },
    {
      "code": 1198,
      "day": "Light freezing rain",
      "night": "Light freezing rain",
      "icon": 311,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia congelante debole",
          "condizione": "Pioggia",
          "night_text": "Pioggia congelante debole"
        }
    },
    {
      "code": 1201,
      "day": "Moderate or heavy freezing rain",
      "night": "Moderate or heavy freezing rain",
      "icon": 314,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia congelante moderata o forte",
          "condizione": "Pioggia",
          "night_text": "Pioggia congelante moderata o forte"
        }
    },
    {
      "code": 1204,
      "day": "Light sleet",
      "night": "Light sleet",
      "icon": 317,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Nevischio debole",
          "condizione": "Neve",
          "night_text": "Nevischio debole"
        }
    },
    {
      "code": 1207,
      "day": "Moderate or heavy sleet",
      "night": "Moderate or heavy sleet",
      "icon": 320,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Nevischio moderato o forte",
          "condizione": "Neve",
          "night_text": "Nevischio moderato o forte"
        }
    },
    {
      "code": 1210,
      "day": "Patchy light snow",
      "night": "Patchy light snow",
      "icon": 323,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Neve debole a tratti",
          "condizione": "Neve",
          "night_text": "Neve debole a tratti"
        }
    },
    {
      "code": 1213,
      "day": "Light snow",
      "night": "Light snow",
      "icon": 326,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Neve debole",
          "condizione": "Neve",
          "night_text": "Neve debole"
        }
    },
    {
      "code": 1216,
      "day": "Patchy moderate snow",
      "night": "Patchy moderate snow",
      "icon": 329,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Neve moderata a tratti",
          "condizione": "Neve",
          "night_text": "Neve moderata a tratti"
        }
    },
    {
      "code": 1219,
      "day": "Moderate snow",
      "night": "Moderate snow",
      "icon": 332,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Neve moderata",
          "condizione": "Neve",
          "night_text": "Neve moderata"
        }
    },
    {
      "code": 1222,
      "day": "Patchy heavy snow",
      "night": "Patchy heavy snow",
      "icon": 335,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Neve forte a tratti",
          "condizione": "Neve",
          "night_text": "Neve forte a tratti"
        }
    },
    {
      "code": 1225,
      "day": "Heavy snow",
      "night": "Heavy snow",
      "icon": 338,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Neve forte",
          "condizione": "Neve",
          "night_text": "Neve forte"
        }
    },
    {
      "code": 1237,
      "day": "Ice pellets",
      "night": "Ice pellets",
      "icon": 350,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia gelata",
          "condizione": "Pioggia",
          "night_text": "Pioggia gelata"
        }
    },
    {
      "code": 1240,
      "day": "Light rain shower",
      "night": "Light rain shower",
      "icon": 353,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni piovose deboli",
          "condizione": "Pioggia",
          "night_text": "Precipitazioni piovose deboli"
        }
    },
    {
      "code": 1243,
      "day": "Moderate or heavy rain shower",
      "night": "Moderate or heavy rain shower",
      "icon": 356,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni piovose moderate o forti",
          "condizione": "Pioggia",
          "night_text": "Precipitazioni piovose moderate o forti"
        }
    },
    {
      "code": 1246,
      "day": "Torrential rain shower",
      "night": "Torrential rain shower",
      "icon": 359,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni piovose torrenziali",
          "condizione": "Pioggia",
          "night_text": "Precipitazioni piovose torrenziali"
        }
    },
    {
      "code": 1249,
      "day": "Light sleet showers",
      "night": "Light sleet showers",
      "icon": 362,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni deboli di nevischio",
          "condizione": "Neve",
          "night_text": "Precipitazioni deboli di nevischio"
        }
    },
    {
      "code": 1252,
      "day": "Moderate or heavy sleet showers",
      "night": "Moderate or heavy sleet showers",
      "icon": 365,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni di nevischio moderate o forti",
          "condizione": "Neve",
          "night_text": "Precipitazioni di nevischio moderate o forti"
        }
    },
    {
      "code": 1255,
      "day": "Light snow showers",
      "night": "Light snow showers",
      "icon": 368,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni nevose leggere",
          "condizione": "Neve",
          "night_text": "Precipitazioni nevose leggere"
        }
    },
    {
      "code": 1258,
      "day": "Moderate or heavy snow showers",
      "night": "Moderate or heavy snow showers",
      "icon": 371,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni nevose moderate o leggere",
          "condizione": "Neve",
          "night_text": "Precipitazioni nevose moderate o leggere"
        }
    },
    {
      "code": 1261,
      "day": "Light showers of ice pellets",
      "night": "Light showers of ice pellets",
      "icon": 374,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni deboli di pioggia gelata",
          "condizione": "Pioggia",
          "night_text": "Precipitazioni deboli di pioggia gelata"
        }
    },
    {
      "code": 1264,
      "day": "Moderate or heavy showers of ice pellets",
      "night": "Moderate or heavy showers of ice pellets",
      "icon": 377,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Precipitazioni moderate o forti di pioggia gelata",
          "condizione": "Pioggia",
          "night_text": "Precipitazioni moderate o forti di pioggia gelata"
        }
    },
    {
      "code": 1273,
      "day": "Patchy light rain in area with thunder",
      "night": "Patchy light rain in area with thunder",
      "icon": 386,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia debole a tratti in zona e tuoni",
          "condizione": "Temporale",
          "night_text": "Pioggia debole a tratti in zona e tuoni"
        }
    },
    {
      "code": 1276,
      "day": "Moderate or heavy rain in area with thunder",
      "night": "Moderate or heavy rain in area with thunder",
      "icon": 389,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Pioggia moderata o forte in zona e tuoni",
          "condizione": "Temporale",
          "night_text": "Pioggia moderata o forte in zona e tuoni"
        }
    },
    {
      "code": 1279,
      "day": "Patchy light snow in area with thunder",
      "night": "Patchy light snow in area with thunder",
      "icon": 392,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Neve debole a tratti in zona e tuoni",
          "condizione": "Temporale",
          "night_text": "Neve debole a tratti in zona e tuoni"
        }
    },
    {
      "code": 1282,
      "day": "Moderate or heavy snow in area with thunder",
      "night": "Moderate or heavy snow in area with thunder",
      "icon": 395,
      "languages":
        {
          "lang_name": "Italian",
          "lang_iso": "it",
          "day_text": "Neve moderata o forte in zona e tuoni",
          "condizione": "Temporale",
          "night_text": "Neve moderata o forte in zona e tuoni"
        }
    }
  ];



// Assegnazione comandi
bottone_cerca.addEventListener('click', ricerca);
input_cerca.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        ricerca();
    }
})

// Funzione ricerca meteo paese
function ricerca() {
    // Aggiustamento paese
    let paese = input_cerca.value;
    let prima_lettera = paese.at(0).toUpperCase();
    paese = prima_lettera + paese.slice(1);
    input_cerca.value = paese;

    // Conversione per città italiane importanti
    if (paese in ogg_traduci_città) {
        paese = ogg_traduci_città[paese];
    }
    const giorni = 1;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${chiave}&q=${paese}&days=${giorni}`;

    async function dati_meteo() {
        try {
            const risposta = await fetch(url);
            const dati = await risposta.json();

            // Prelievo dei dati

            // Dati generali
            const nome_paese = dati.location.name;
            let nome_nazione = dati.location.country;
            if(nome_nazione == 'Italy') {
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
            

            // Dati condizione
            const codice = dati.current.condition.code;
            const dati_codice = lista_condizioni.find(oggetto => oggetto.code == codice);
            const condizione = dati_codice.languages.day_text;

            // Aggiornamento dei dati nel DOM
            para_paese.textContent = nome_paese;
            para_nazione.textContent = nome_nazione;
            para_data.textContent = `Previsioni per il ${data_completa}`;
            console.log(dati_codice);
            console.log(condizione);
            console.log(dati);
        }

        catch (errore) {
            console.log(`Errore nella richiesta: ${errore}`);
        }
    }

    dati_meteo();
}

// const coso = lista_condizioni.find(oggetto => oggetto.code == 1183);
// console.log(coso);
// console.log(coso.languages.day_text);
// console.log(coso.languages.night_text);
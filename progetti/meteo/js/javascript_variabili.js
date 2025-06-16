const stati_svg = {
    "Goccia": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path fill="#74C0FC" d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 
        166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 
        57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 
        7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 
        0-80-35.8-80-80z" />
    </svg>`,

    "Vento": `<svg class="svg_quantita_e_vento" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#74C0FC" d="M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 
        0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 
        32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 
        32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 
        512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 
        0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
    </svg>`,

    "Sole": `<svg class="sole animation size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="#FECB01" width="25px">
        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 
      1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 
      6.166a.75.75 0 0 0-1.06-1.06l-1.591 
      1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 
      1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 
      18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 
      1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 
      0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 
      1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 
      1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 
      0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
    </svg>`,

    "Luna": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="#FFD878" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 
    6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 
    89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`,

    "Nuvoloso": `<svg class="nuvoloso" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path fill="#FECB01" d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l14.1 84.7 84.7 14.1c5.4 .9 
    10 4.5 12.1 9.6s1.5 10.9-1.6 15.4l-38.5 55c-2.2-.1-4.4-.2-6.7-.2c-23.3 0-45.1 6.2-64 
    17.1l0-1.1c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c8.1 0 15.9-1 23.4-2.9c-36.6 
    18.1-63.3 53.1-69.8 94.9l-24.4 17c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 
    317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 
    137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 
    4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM144 
    208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
        <path fill="#C8C8C8" d="M639.9 431.9c0 44.2-35.8 80-80 80l-271.9 
    0c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 
    65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 
    11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z" />
    </svg>`,

    "Nebbia": `<svg class="nebbia" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path fill="#C8C8C8" d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 
      128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 
      6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 
      16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 
      2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
    </svg>`,

    "Pioggia": `<svg class="pioggia" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 
  126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 
  60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 
  16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zm-6.8 52c1.3-2.5 
  3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 
  48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 
  6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 
  48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 
  3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 
  48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3z" /></svg>`,

    "Neve": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#74C0FC" d="M224 0c17.7 0 32 14.3 32 32l0 30.1 15-15c9.4-9.4 
  24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49 0 70.3 61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 
  29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 
  43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 
  256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 
  8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 
  29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7l0 70.3 49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 
  9.4-33.9 0l-15-15 0 30.1c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-30.1-15 15c-9.4 9.4-24.6 
  9.4-33.9 0s-9.4-24.6 0-33.9l49-49 0-70.3-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 
  17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 
  11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 
  18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 
  171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 
  4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3l0-70.3L143 81c-9.4-9.4-9.4-24.6 
  0-33.9s24.6-9.4 33.9 0l15 15L192 32c0-17.7 14.3-32 32-32z" /></svg>`,

    "Temporale": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#C8C8C8" d="M0 224c0 53 43 96 96 96l47.2 0L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 
    12.8 58.8L333.7 320l18.3 0 64 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 
    1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 
    176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224z" />
        <path fill="#FECB01" d="M330.1 227.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 
    11.4-5.1 17.8s8.3 10.7 15.1 10.7l70.1 0L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 
    4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 
    52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z" />
    </svg>`
}




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
            "day_text": "Sereno",
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
            "day_text": "Pioggia a tratti",
            "condizione": "Pioggia",
            "night_text": "Pioggia a tratti"
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
            "day_text": "Neve a tratti",
            "condizione": "Neve",
            "night_text": "Neve a tratti"
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
            "day_text": "Nevischio a tratti",
            "condizione": "Neve",
            "night_text": "Nevischio a tratti"
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
            "day_text": "Pioviggine congelante",
            "condizione": "Pioggia",
            "night_text": "Pioviggine congelante"
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
            "day_text": "Precipitazioni temporalesche",
            "condizione": "Temporale",
            "night_text": "Precipitazioni temporalesche"
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
            "night_text": "Pioviggine"
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
            "day_text": "Pioggia congelante moderata/forte",
            "condizione": "Pioggia",
            "night_text": "Pioggia congelante moderata/forte"
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
            "day_text": "Nevischio moderato/forte",
            "condizione": "Neve",
            "night_text": "Nevischio moderato/forte"
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
            "day_text": "Precipitazioni piovose moderate",
            "condizione": "Pioggia",
            "night_text": "Precipitazioni piovose moderate"
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
            "day_text": "Precipitazioni di nevischio moderate",
            "condizione": "Neve",
            "night_text": "Precipitazioni di nevischio moderate"
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
            "day_text": "Precipitazioni nevose moderate",
            "condizione": "Neve",
            "night_text": "Precipitazioni nevose moderate"
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
            "day_text": "Precipitazioni di pioggia gelata",
            "condizione": "Pioggia",
            "night_text": "Precipitazioni di pioggia gelata"
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
            "day_text": "Precipitazioni moderate di pioggia",
            "condizione": "Pioggia",
            "night_text": "Precipitazioni moderate di pioggia"
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
            "day_text": "Pioggia debole e tuoni",
            "condizione": "Temporale",
            "night_text": "Pioggia debole e tuoni"
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
            "day_text": "Pioggia moderata e tuoni",
            "condizione": "Temporale",
            "night_text": "Pioggia moderata e tuoni"
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
            "day_text": "Neve debole e tuoni",
            "condizione": "Temporale",
            "night_text": "Neve debole e tuoni"
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
            "day_text": "Neve moderata e tuoni",
            "condizione": "Temporale",
            "night_text": "Neve moderata e tuoni"
        }
    }
];
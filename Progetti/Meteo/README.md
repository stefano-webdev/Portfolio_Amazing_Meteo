# Meteo
Questo progetto è stato ideato e sviluppato tramite HTML, CSS e JavaScript con l'intento di dimostrare le mie conoscenze come sviluppatore web con un focus primario su JavaScript. Anche se la pagina web in sè può sembrare semplice come risultato nel suo utilizzo, sono stati usati concetti chiave ed importanti per il suo sviluppo come:

1) Utilizzo e gestione di API:
Vengono usate due API che comunicano fra loro e rendono la pagina web dinamica, ovvero la prima che traduce l'input utente della località in inglese per una maggior precisione, dopodichè questo dato viene comunicato alla seconda API la quale fa le vere e proprie chiamate per raccogliere i dati meteo usando Fetch API per ricevere i dati ora per ora, per 3 giorni consecutivi. Il tutto viene ovviamente gestito con try e catch per individuare e gestire eventuali errori nel caso in cui l'utente lascia il campo vuoto per errore oppure la località non viene trovata.

2) Manipolazione del DOM:
Il file HTML di base è molto semplice e leggero con poco contenuto, tutte le fasce orarie necessarie vengono create con JavaScript basandosi sull'orario reale al momento della chiamata delle API dopodichè vengono inserite nel DOM, tenendo anche conto del fuso orario per città estere. Questo permette di avere un file HTML piccolo e facilmente gestibile per eventuali modifiche, ma allo stesso tempo dal contenuto molto dinamico e vario grazie a JavaScript. Nello specifico vengono usati metodi come querySelectorAll, forEach(), document.createElement, document.Append, classList.add ecc...

3) Async e Await:
Per ottenere i dati meteo utilizzo una chiamata API che restituisce una Promise. Per una gestione più chiara, efficace e semplice del codice asincrono ho scelto di usare async/await con la Fetch API, evitando l'uso della catena di metodi .then() e .catch() in modo da scrivere codice più moderno, leggibile e mantenibile.

4) Grid e Flexbox per il layout:
Per disporre in modo efficiente i dati raccolti ho usato i moderni metodi Grid e Flex. L'utilizzo di queste due tecniche mi ha permesso di creare dei layout piuttosto molto organizzati e ben definiti, in modo da disporre tutti i contenuti efficacemente anche per dispositivi piuttosto piccoli come smartphone compatti, mantenendo sempre una buona struttura.

5) Positioning:
È stato usato anche il Positioning per disporre in maniera ottimale elementi come il bottone di ricerca (lente di ingrandimento) ed il bottone per tornare su partendo da qualsiasi posizione nella pagina web, faciliando la navigazione e l'utilizzo.

6) Accessibilità ed ARIA labels:
È stata data importanza anche all'accessibilità garantendo un buon contrasto colori e facendo in modo che qualsias elemento interagibile può essere raggiunto tramite il tasto TAB. Inoltre per fornire maggior informazioni agli screen reader e garantire un miglior SEO sono stati usate alcune aria-labels, in modo da dare una chiara descrizione sull'utilità dei vari elementi HTML.

7) Media queries:
Infine per garantire una completa compatibilità e responsività sono state usate delle media queries, in modo da adattare i vari elementi e le loro dimensioni anche per layout più grandi, partendo dal mobile-first fino agli schermi più grandi come quelli desktop/ultrawide. Le media queries sono state usate anche per il Portfolio base in maniera più specifica ed approfondita, andando a modificare più elementi nel layout.

NOTA:
Le informazioni sui dati meteo e le ricerche delle località tramite API in questo progetto potrebbero non essere sempre precise al 100%. L'obiettivo principale non è creare un vero e proprio sito di previsioni meteo, ma dimostrare le mie competenze nello sviluppo web attraverso una possibile applicazione realistica.
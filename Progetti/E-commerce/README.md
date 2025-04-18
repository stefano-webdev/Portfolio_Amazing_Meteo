# E-commerce

Questo progetto è stato sviluppato tramite **HTML**, **CSS** e **JavaScript** con l’intento di dimostrare le mie conoscenze come sviluppatore web, con un focus primario su **JavaScript**.  
Il progetto presenta un finto e-commerce realistico, specializzato nella vendita di articoli legati all’elettronica, tra cui computer, mouse, tablet, smartphone, cuffie ecc.

Sono presenti in totale **60 articoli**, suddivisi in **5 categorie**, ognuna delle quali contiene 5 prodotti diversi.

L’utente può:
- Effettuare una rapida **ricerca** digitando nel campo apposito
- Cliccare sulle varie **categorie** disponibili
- Applicare diversi **filtri**: prezzo crescente/decrescente, limite di prezzo personalizzabile, ordine alfabetico

---

## Concetti chiave utilizzati

### 1. Fetch API

A differenza del progetto sulle previsioni meteo, qui non sono state utilizzate API reali.  
Viene fatta una **simulazione** di richiesta dati tramite l’API del browser `fetch()`, per ricevere tutti i dati dei prodotti da visualizzare sulla pagina, proprio come accadrebbe in un e-commerce reale.  
Sono stati utilizzati anche `try` e `catch` per gestire eventuali errori, ad esempio nel caso in cui un articolo richiesto non sia disponibile.

---

### 2. JSON (JavaScript Object Notation)

Il **catalogo prodotti** è gestito in un file `.json`, che funge da archivio strutturato e simula un semplice database.  
I dati vengono recuperati da questo file tramite `fetch()` e poi **manipolati** ed elaborati per creare una struttura ordinata e completa.

---

### 3. Grid e Flexbox

Gli elementi del layout sono disposti tramite **CSS Grid** e **Flexbox**.

- Il layout principale è gestito da **CSS Grid** con `auto-fit` in `grid-template-columns`, che rende la griglia completamente **responsiva**
- **Flexbox** è stato usato per organizzare contenuti interni, controllare spazi con `gap`, e allineare con `justify-content`, `align-items`, e `flex-wrap`

---

### 4. Manipolazione del DOM

Il progetto fa largo uso della **manipolazione del DOM** tramite JavaScript.  
Durante la ricerca, i filtri, le modifiche al carrello, ecc., gli elementi della pagina vengono **aggiornati dinamicamente**.

Sono stati utilizzati:
- `querySelectorAll()` per selezionare elementi come con i selettori CSS
- Metodi sugli array come `reduce()`, `find()`, `filter()` per elaborare i dati

---

### 5. LocalStorage e creazione carrello

L’**API LocalStorage** viene usata per salvare in modo **permanente** i dati del carrello nel browser.  
Anche ricaricando la pagina o chiudendo il browser, gli articoli vengono mantenuti.

Funzionalità incluse:
- Aumentare la **quantità** di ciascun articolo
- **Rimuovere** un articolo singolarmente
- **Svuotare** l’intero carrello con un click

Ogni azione aggiorna il localStorage **in tempo reale**, e grazie alla gestione dell’evento `pageshow`, il carrello resta sincronizzato anche tornando alla homepage.

---

### 6. Accessibilità

È stata data importanza all’**accessibilità**, garantendo:
- Buon **contrasto** tra i colori
- Navigazione tramite **tasto TAB**
- Uso di **`aria-label`** per screen reader e SEO

---

### 7. Media Queries

Sono state utilizzate **CSS Media Queries** per rendere il layout compatibile con diversi dispositivi:

- Mobile verticale
- Mobile orizzontale
- Tablet verticale
- Tablet orizzontale
- Desktop

È stato adottato l’approccio **mobile-first**, progettando il layout per dispositivi mobili e poi adattandolo a schermi più grandi.  
Questo migliora le prestazioni e la compatibilità.

---

## ℹ️ Nota

Nel carrello, il pulsante **“Vai al pagamento”** non porta a nessuna pagina, trattandosi di un **progetto dimostrativo**.  
È stato inserito solo per **motivi estetici e realistici**.

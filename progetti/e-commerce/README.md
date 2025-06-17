# Amazing 🛒

**Amazing** è un progetto e-commerce sviluppato in **React** con supporto alla navigazione tramite **React Router**. Simula il comportamento di un vero e-commerce, includendo la visualizzazione di prodotti, la ricerca, i filtri e la gestione del carrello.

## 🔧 Tecnologie utilizzate

- **React** (con Hooks come `useState`, `useEffect`, `useRef`, `useOutletContext`)
- **React Router** con <Link /> per la navigazione tra le pagine
- **JavaScript moderno**: utilizzo di `map()`, `filter()`, `reduce()`, destructuring e best practices

## Funzionalità principali

- **Homepage** con elenco prodotti
- **Filtro per categoria** e **ricerca per nome prodotto**
- **Filtro avanzato per fascia di prezzo o valore personalizzabile**
- **Gestione carrello** con:
  - Aggiunta/Rimozione dei prodotti singoli
  - Quantità dei prodotti modificabile
  - Pulizia completa del carrello
  - Totale della spesa calcolato automaticamente ad ogni modifica
  - **Persistenza nel localStorage**
- **Navigazione SPA** con routing verso:
  - Home (`/`)
  - Carrello (`/cart`)
  - Form (`/form`)
- **Gestione dello stato centralizzata** tramite i componenti React e passaggio dei dati tramite props e contesti

## Principi seguiti

Durante lo sviluppo sono stati seguiti i principi fondamentali di React:

- Creazione di **componenti puri e riutilizzabili**
- **Aggiornamento dello stato** come unico mezzo per riflettere cambiamenti nel DOM
- Utilizzo dei **React Hooks** per la gestione del ciclo di vita dei componenti ovvero montaggio, aggiornamento e smontaggio di un componente

## 📁 Struttura del progetto

La struttura segue uno stile modulare, suddividendo componenti, logica e dati in cartelle dedicate come `components`, `pages`, `styles`, `utils`, ecc...

## Bundler / Build tool

Il progetto è gestito tramite Vite.

---

> ⚠️ Questo progetto è stato sviluppato solo a scopo dimostrativo, non utilizza un backend reale. Perciò i bottoni come "Vai al pagamento" e "Accedi" sono stati inseriti per simulare un contesto reale, ma non sono volutamente funzionanti.

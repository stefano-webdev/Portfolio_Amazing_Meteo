import { useState, useEffect } from "react";

export default function Prodotto({ datiProdotto, setQuantitàCarrelloOutlet }) {
    //  Variabili di stato
    // Quantità prodotti selezionata
    const [quantità, setQuantità] = useState(1);

    // Prezzo e stato del prodotto
    const [prezzoVisibile, setPrezzoVisibile] = useState(datiProdotto.prezzoVirgola);
    const [displayProdotto, setDisplayProdotto] = useState('none');
    const [quantitàCarrello, setQuantitàCarrello] = useState(0);

    // Funzioni
    // Gestisco l'evento di click sui bottoni per incrementare o decrementare la quantità
    function handleNumberProducts(e) {
        if (e.target.textContent === '+') {
            // Incrementa la quantità
            setQuantità(quantità + 1);

            // Aggiorna il prezzo visibile, moltiplicando il prezzo unitario per la quantità
            setPrezzoVisibile(String((parseFloat(datiProdotto.prezzo) * (quantità + 1)).toFixed(2)).replace('.', ','));
        } else {
            // Decrementa la quantità solo se è maggiore di 1
            if (quantità > 1) {
                setQuantità(quantità - 1);

                // Aggiorna il prezzo visibile, moltiplicando il prezzo unitario per la quantità
                setPrezzoVisibile(String((parseFloat(datiProdotto.prezzo) * (quantità - 1)).toFixed(2)).replace('.', ','));
            }
        }
    }

    // Gestisco l'evento di click sul bottone "Aggiungi al carrello"
    function handleAddToCart() {
        // Operazioni sul singolo prodotto nella pagina
        setQuantitàCarrello(quantitàCarrello + quantità);
        setDisplayProdotto('flex');
        setQuantità(1);
        setPrezzoVisibile(datiProdotto.prezzoVirgola);

        // Operazioni sul carrello
        // Recupera il carrello esistente dal localStorage (se c'è)
        const carrelloEsistente = JSON.parse(localStorage.getItem('carrello')) || [];

        // Controlla se il prodotto è già nel carrello
        const prodottoEsistente = carrelloEsistente.find(
            item => item.id === datiProdotto.id
        );

        if (prodottoEsistente) {
            // Se c'è già, aggiorna la quantità
            prodottoEsistente.quantità += quantità;
        } else {
            // Se non c'è, aggiungilo con la quantità selezionata
            carrelloEsistente.push({ ...datiProdotto, quantità });
        }

        // Salva l'array aggiornato nel localStorage
        setQuantitàCarrelloOutlet(carrelloEsistente.reduce((acc, item) => acc + item.quantità, 0));
        localStorage.setItem('carrello', JSON.stringify(carrelloEsistente));
    }
    
    useEffect(() => {
        // Recupero il localStorage e aggiorno i prodotti che sono già nel carrello
        const carrello = JSON.parse(localStorage.getItem('carrello'));
        if (carrello) {
            const prodottoNelCarrello = carrello.find(item => item.id === datiProdotto.id);
            if (prodottoNelCarrello) {
                setQuantitàCarrello(prodottoNelCarrello.quantità);
                setDisplayProdotto('flex');
            }
        }
    }, [])
    return (
        <div className="prodotto">
            <img className="prodotto" src={datiProdotto.immagine} alt="Immagine del prodotto" />
            <p className="titolo_prodotto">{datiProdotto.nome}</p>
            <p className="descrizione_prodotto">{datiProdotto.descrizione}</p>
            <div className="contenitore_prezzo_e_quantità">
                <p className={`prezzo_prodotto ${datiProdotto.prezzo}`}>{prezzoVisibile}</p>
                <div className="contenitore_quantità">
                    <button className="operatore" onClick={handleNumberProducts}>-</button>
                    <p className="quantità">{quantità}</p>
                    <button className="operatore" onClick={handleNumberProducts}>+</button>
                    <div className="div_quantità_nel_carrello" style={{ display: displayProdotto }}>
                        <svg id="svg_quantità_carrello" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="#2B2B2B" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 
                                    41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 
                                    38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 
                                    53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 
                                    23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 
                                    24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 
                                    54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 
                                    0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 
                                    0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z">
                            </path>
                        </svg>
                        <p id="paragrafo_x">x</p>
                        <p id="paragrafo_quantità_nel_carrello">{quantitàCarrello}</p>
                    </div>
                </div>
            </div>
            <button id="bottone_aggiungi_carrello" onClick={handleAddToCart}>Aggiungi al carrello</button>
        </div>
    );
}
import { useState } from "react";

export default function ProdottoCarrello({ datiProdotto, setQuantitàCarrelloOutlet, setCarrelloPienoVuoto, setProdottiPagina, setNumeroProdotti, setTotaleSpesaCarrello }) {
    // Calcolo il valore iniziale del prezzo totale dell'articolo
    const prezzoIniziale = Number((datiProdotto.prezzo * datiProdotto.quantità)
        .toFixed(2))
        .toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Variabili di stato
    const [inputValue, setInputValue] = useState(datiProdotto.quantità);
    const [prezzoTotaleArticolo, setPrezzoTotaleArticolo] = useState(`${prezzoIniziale} €`);

    // Funzioni
    function handleChangeInput(e) {
        // Ottengo e pulisco il valore
        let valore = e.target.value;
        valore = valore.replace(/\D/g, '');
        setInputValue(valore);

        // Recupero il carrello e aggiorno la quantità del prodotto
        if (valore !== '') {
            const carrelloEsistente = JSON.parse(localStorage.getItem('carrello'));
            const nuovoCarrello = carrelloEsistente.map(item => {
                if (item.id === datiProdotto.id) {
                    return { ...item, quantità: Number(valore) };
                }
                return item;
            });

            // Salvo l'array aggiornato nel localStorage
            localStorage.setItem('carrello', JSON.stringify(nuovoCarrello));
            const totaleQuantità = nuovoCarrello.reduce((acc, item) => acc + item.quantità, 0);
            const totaleSpesa = nuovoCarrello
                .reduce((acc, item) => acc + (item.prezzo * item.quantità), 0)
                .toFixed(2);
            const totaleArticolo = Number((datiProdotto.prezzo * Number(valore)).toFixed(2))
                .toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            setQuantitàCarrelloOutlet(totaleQuantità);
            setNumeroProdotti(totaleQuantità);
            setPrezzoTotaleArticolo(`${totaleArticolo} €`);
            setTotaleSpesaCarrello(`${Number(totaleSpesa).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`);
        }
    }

    // Se l'input è vuoto, lo imposto a 1
    function handleBlurInput(e) {
        let valore = e.target.value;
        if (valore === '') {
            valore = 1;
            setInputValue(valore);
            const carrelloEsistente = JSON.parse(localStorage.getItem('carrello'));
            const nuovoCarrello = carrelloEsistente.map(item => {
                if (item.id === datiProdotto.id) {
                    return { ...item, quantità: Number(valore) };
                }
                return item;
            });

            // Salvo l'array aggiornato nel localStorage
            localStorage.setItem('carrello', JSON.stringify(nuovoCarrello));
            const totaleQuantità = nuovoCarrello.reduce((acc, item) => acc + item.quantità, 0);
            const totaleSpesa = nuovoCarrello
                .reduce((acc, item) => acc + (item.prezzo * item.quantità), 0)
                .toFixed(2);
            const totaleArticolo = Number((datiProdotto.prezzo * Number(valore)).toFixed(2))
                .toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            setQuantitàCarrelloOutlet(totaleQuantità);
            setNumeroProdotti(totaleQuantità);
            setPrezzoTotaleArticolo(`${totaleArticolo} €`);
            setTotaleSpesaCarrello(`${Number(totaleSpesa).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`);
        }
    }

    function handleEliminaProdotto() {
        // Recupera il carrello esistente dal localStorage
        const carrelloEsistente = JSON.parse(localStorage.getItem('carrello'));

        // Filtra il prodotto da eliminare
        const nuovoCarrello = carrelloEsistente.filter(item => item.id !== datiProdotto.id);

        // Calcolo il totale della spesa del carrello aggiornato
        const totaleSpesa = nuovoCarrello
            .reduce((acc, item) => acc + (item.prezzo * item.quantità), 0)
            .toFixed(2);

        // Salva l'array aggiornato nel localStorage, se è vuoto lo rimuovo del tutto
        if (nuovoCarrello.length === 0) {
            localStorage.removeItem('carrello');
            setCarrelloPienoVuoto(null);
            setQuantitàCarrelloOutlet(0);
        } else {
            localStorage.setItem('carrello', JSON.stringify(nuovoCarrello));
            const totaleQuantità = nuovoCarrello.reduce((acc, item) => acc + item.quantità, 0);
            setQuantitàCarrelloOutlet(totaleQuantità);
            setNumeroProdotti(totaleQuantità);
            setProdottiPagina(nuovoCarrello);
            setTotaleSpesaCarrello(`${Number(totaleSpesa).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`);
        }
    }

    function handleKeyEliminaProdotto(e) {
        // Gestisco l'evento di pressione del tasto "Invio" per eliminare il prodotto
        if (e.key === 'Enter') {
            handleEliminaProdotto();
        }
    }

    return (
        <>
            <div className="div_articolo">
                <div className="div_img_prezzo_titolo">
                    <div className="div_img_prezzo_base">
                        <img className="img_articolo" src={datiProdotto.immagine} alt="Immagine articolo nel carrello" />
                        <p className="prezzo_base">{datiProdotto.prezzoVirgola} €</p>
                    </div>
                    <p className="descrizione">{datiProdotto.nome}</p>
                </div>
                <div className="div_quantita_prezzo_totale">
                    <div className="div_quantità_input">
                        <label className="label_quantità" htmlFor={`input_${datiProdotto.id}`}>Quantità:</label>
                        <input id={`input_${datiProdotto.id}`} className="input_quantità_carrello" type="text"
                            onChange={handleChangeInput} onBlur={handleBlurInput} value={inputValue} maxLength="2" autoComplete="off" />
                    </div>
                    <p className="prezzo_totale_articolo">{prezzoTotaleArticolo}</p>
                </div>
                <div className="div_svg_elimina">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" tabIndex='0'
                        role="button" aria-label="Elimina prodotto" onClick={handleEliminaProdotto} onKeyDown={handleKeyEliminaProdotto}>
                        <path fill="#6E6E6E" d="M135.2 17.7L128 32 32 32C14.3 
                        32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 
                        32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 
                        0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 
                        128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 
                        0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                </div>
            </div>
        </>
    );
}
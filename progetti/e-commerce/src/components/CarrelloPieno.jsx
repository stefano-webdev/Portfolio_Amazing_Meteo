import { useState, useEffect } from "react";
import ProdottoCarrello from "./ProdottoCarrello.jsx";
import Footer from "./Footer.jsx";

export default function CarrelloPieno({ setQuantitàCarrelloOutlet, setCarrelloPienoVuoto }) {
    // Variabili di stato
    const [prodottiPagina, setProdottiPagina] = useState(JSON.parse(localStorage.getItem('carrello')));
    const [numeroProdotti, setNumeroProdotti] = useState(0);
    const [totaleSpesaCarrello, setTotaleSpesaCarrello] = useState('');

    // Funzioni
    // Gestisco l'evento di click sul bottone "Svuota carrello"
    function handleSvuotaCarrello() {
        // Rimuovo il carrello dal localStorage
        localStorage.removeItem('carrello');

        // Ricarico la pagina per mostrare il carrello vuoto
        setCarrelloPienoVuoto(null);
        setQuantitàCarrelloOutlet(0);
    }

    useEffect(() => {
        // Recupero i dati del carrello dal localStorage e scrivo quantità dei prodotti
        const carrello = JSON.parse(localStorage.getItem('carrello'));
        const totaleQuantità = carrello.reduce((acc, item) => acc + item.quantità, 0);
        setNumeroProdotti(totaleQuantità);

        // Calcolo il totale della spesa del carrello
        const totaleSpesa = carrello
            .reduce((acc, item) => acc + (item.prezzo * item.quantità), 0)
            .toFixed(2);
        setTotaleSpesaCarrello(`${Number(totaleSpesa).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`);

    }, []);

    return (
        <>
            {/* Creo il layout per il carrello */}
            <h1 className="carrello">Nel tuo carrello:</h1>
            <p className="numero_articoli">{numeroProdotti} {numeroProdotti > 1 || numeroProdotti === 0 ? 'prodotti' : 'prodotto'}</p>
            <div id="div_tutti_articoli">
                {/* Recupero e mostro gli articoli del carrello dal localStorage */}
                {prodottiPagina.map(prodotto => (
                    <ProdottoCarrello key={prodotto.id}
                        datiProdotto={prodotto}
                        setQuantitàCarrelloOutlet={setQuantitàCarrelloOutlet}
                        setCarrelloPienoVuoto={setCarrelloPienoVuoto}
                        setProdottiPagina={setProdottiPagina}
                        setNumeroProdotti={setNumeroProdotti}
                        setTotaleSpesaCarrello={setTotaleSpesaCarrello} />
                ))}
            </div>
            <h3 className="totale_prodotti">Totale articoli:</h3>
            <p id="paragrafo_totale_carrello">{totaleSpesaCarrello}</p>
            <p id="iva_inclusa">IVA inclusa</p>
            <div id="div_procedi_acquisto">
                <button>Vai al pagamento</button>
            </div>
            <div id="div_sconto">
                <label id="label_sconto" htmlFor="input_sconto">
                    Hai un codice sconto?
                    <br />
                    Inseriscilo qui!
                </label>
                <input id="input_sconto" type="text" placeholder="Codice sconto" maxLength='19' autoComplete="off" />
            </div>
            <div id="div_spedizione_gratuita">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="#28a745" d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 
                        21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 
                        96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 
                        0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 
                        96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 
                        0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 
                        48 48 0 1 1 0-96z"/>
                </svg>
                <p>Spedizione gratuita per ordini superiori a 50 €</p>
            </div>
            <div className="div_svuota_carrello">
                <button id="svuota_carrello" onClick={handleSvuotaCarrello}>Svuota carrello</button>
            </div>
        </>
    );
}
// Import di tutte e 60 le immagini
import mouse1 from '../assets/mouse/mouse_1.webp';
import mouse2 from '../assets/mouse/mouse_2.webp';
import mouse3 from '../assets/mouse/mouse_3.webp';
import mouse4 from '../assets/mouse/mouse_4.webp';
import mouse5 from '../assets/mouse/mouse_5.webp';
import altoparlante1 from '../assets/altoparlanti/altoparlante_1.webp';
import altoparlante2 from '../assets/altoparlanti/altoparlante_2.webp';
import altoparlante3 from '../assets/altoparlanti/altoparlante_3.webp';
import altoparlante4 from '../assets/altoparlanti/altoparlante_4.webp';
import altoparlante5 from '../assets/altoparlanti/altoparlante_5.webp';
import laptop1 from '../assets/laptop/laptop_1.webp';
import laptop2 from '../assets/laptop/laptop_2.webp';
import laptop3 from '../assets/laptop/laptop_3.webp';
import laptop4 from '../assets/laptop/laptop_4.webp';
import laptop5 from '../assets/laptop/laptop_5.webp';
import tastiera1 from '../assets/tastiere/keyboard_1.webp';
import tastiera2 from '../assets/tastiere/keyboard_2.webp';
import tastiera3 from '../assets/tastiere/keyboard_3.webp';
import tastiera4 from '../assets/tastiere/keyboard_4.webp';
import tastiera5 from '../assets/tastiere/keyboard_5.webp';
import cuffie1 from '../assets/cuffie/cuffie_1.webp';
import cuffie2 from '../assets/cuffie/cuffie_2.webp';
import cuffie3 from '../assets/cuffie/cuffie_3.webp';
import cuffie4 from '../assets/cuffie/cuffie_4.webp';
import cuffie5 from '../assets/cuffie/cuffie_5.webp';
import smartphone1 from '../assets/smartphone/smartphone_1.webp';
import smartphone2 from '../assets/smartphone/smartphone_2.webp';
import smartphone3 from '../assets/smartphone/smartphone_3.webp';
import smartphone4 from '../assets/smartphone/smartphone_4.webp';
import smartphone5 from '../assets/smartphone/smartphone_5.webp';
import tablet1 from '../assets/tablet/tablet_1.webp';
import tablet2 from '../assets/tablet/tablet_2.webp';
import tablet3 from '../assets/tablet/tablet_3.webp';
import tablet4 from '../assets/tablet/tablet_4.webp';
import tablet5 from '../assets/tablet/tablet_5.webp';
import smartwatch1 from '../assets/smartwatch/smartwatch_1.webp';
import smartwatch2 from '../assets/smartwatch/smartwatch_2.webp';
import smartwatch3 from '../assets/smartwatch/smartwatch_3.webp';
import smartwatch4 from '../assets/smartwatch/smartwatch_4.webp';
import smartwatch5 from '../assets/smartwatch/smartwatch_5.webp';
import microfono1 from '../assets/microfoni/microfono_1.webp';
import microfono2 from '../assets/microfoni/microfono_2.webp';
import microfono3 from '../assets/microfoni/microfono_3.webp';
import microfono4 from '../assets/microfoni/microfono_4.webp';
import microfono5 from '../assets/microfoni/microfono_5.webp';
import router1 from '../assets/router/router_1.webp';
import router2 from '../assets/router/router_2.webp';
import router3 from '../assets/router/router_3.webp';
import router4 from '../assets/router/router_4.webp';
import router5 from '../assets/router/router_5.webp';
import webcam1 from '../assets/webcam/webcam_1.webp';
import webcam2 from '../assets/webcam/webcam_2.webp';
import webcam3 from '../assets/webcam/webcam_3.webp';
import webcam4 from '../assets/webcam/webcam_4.webp';
import webcam5 from '../assets/webcam/webcam_5.webp';
import fotocamera1 from '../assets/fotocamere/fotocamera_1.webp';
import fotocamera2 from '../assets/fotocamere/fotocamera_2.webp';
import fotocamera3 from '../assets/fotocamere/fotocamera_3.webp';
import fotocamera4 from '../assets/fotocamere/fotocamera_4.webp';
import fotocamera5 from '../assets/fotocamere/fotocamera_5.webp';

const immagini = {
    mouse1, mouse2, mouse3, mouse4, mouse5, altoparlante1, altoparlante2, altoparlante3, altoparlante4, altoparlante5,
    laptop1, laptop2, laptop3, laptop4, laptop5, tastiera1, tastiera2, tastiera3, tastiera4, tastiera5,
    cuffie1, cuffie2, cuffie3, cuffie4, cuffie5, smartphone1, smartphone2, smartphone3, smartphone4, smartphone5,
    tablet1, tablet2, tablet3, tablet4, tablet5, smartwatch1, smartwatch2, smartwatch3, smartwatch4, smartwatch5,
    microfono1, microfono2, microfono3, microfono4, microfono5, router1, router2, router3, router4, router5,
    webcam1, webcam2, webcam3, webcam4, webcam5, fotocamera1, fotocamera2, fotocamera3, fotocamera4, fotocamera5
};

const lista_categorie = ["Mouse", "Accessori", "Altoparlante", "Assistenti vocali",
    "Speaker", "Smart home", "Laptop", "Notebook", "Computer portatile", "Portatile",
    "Computer", "PC", "PC Portatile", "Tastiere", "Keyboard", "Digitazione", "Cuffie",
    "Cuffie over-ear", "Cuffie wireless", "Audio", "Headphones", "Smartphone", "Telefoni",
    "Telefono cellulare", "Cellulare", "Dispositivo mobile", "Tablet", "Smartwatch",
    "Orologio intelligente", "Fitness tracker", "Fitness", "Smart wearable", "Orologi", "Microfoni",
    "Microphone", "Router", "Router mesh", "Modem", "Dispositivo di rete", "Wi-Fi", "Router Wi-Fi",
    "Webcam", "Webcam full hd", "Webcam 1080p", "Videocamere", "Videocamera web",
    "Videochiamate", "Streaming", "Videoconferenze", "Fotocamere", "Fotocamera reflex", "Fotocamera digitale",
    "Fotocamera professionale", "Fotocamera mirrorless", "Fotografia", "Fotografia digitale", "Mirrorless",
    "Reflex", "Camera", "Macchina fotografica"];

// Importo gli Hooks e il catalogo prodotti 
import { useState, useEffect, useRef } from "react";
import { useOutletContext } from 'react-router-dom';
import prodotti from "../data/prodotti.json";

// Importo i componenti
import Prodotto from "../components/Prodotto.jsx";
import BottoneCerca from "../components/BottoneCerca.jsx";

// Importo le funzioni
import { ricercaProdotti } from '../utils/ricercaProdotti.js';

export default function HomePage() {
    // Variabili
    const [isLoaded, setIsLoaded] = useState(false);
    const [prodottiPagina, setProdottiPagina] = useState([]);
    const [marginTop, setMarginTop] = useState('0px');
    const [heightBottoneCerca, setHeightBottoneCerca] = useState('0');
    const inputRef = useRef(null);
    const [testoInputCerca, setTestoInputCerca] = useState('');
    const [placeholder, setPlaceholder] = useState('Di cosa hai bisogno?');
    const [numeroArticoliTrovati, setNumeroArticoliTrovati] = useState('60');
    const fotoProdottiRef = useRef(null);
    const [filtroAttivoOrdine, setFiltroAttivoOrdine] = useState('');
    const [filtroAttivoRange, setFiltroAttivoRange] = useState('');
    const [filtroAttivoRangeCustom, setFiltroAttivoRangeCustom] = useState('');
    const [inputRangeCustom, setInputRangeCustom] = useState('');
    const [filtroAttivoAlfabeto, setFiltroAttivoAlfabeto] = useState('');

    const setQuantitàCarrelloOutlet = useOutletContext();

    // Funzioni
    // Input cerca gestito dallo stato
    function handleInputSearch(e) {
        setTestoInputCerca(e.target.value)
    }

    // Se l'utente preme il tasto Invio, eseguo la ricerca
    function handleInputKey(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleRicerca();
        }
    }

    // Faccio partire la ricerca dei prodotti passando i parametri necessari
    function handleRicerca() {
        const params = {
            inputRef,
            setTestoInputCerca,
            setNumeroArticoliTrovati,
            setProdottiPagina,
            prodotti,
            immagini
        }
        // Resetto i filtri
        setFiltroAttivoOrdine('');
        setFiltroAttivoRange('');
        setFiltroAttivoRangeCustom('');
        setFiltroAttivoAlfabeto('');
        setInputRangeCustom('');
        fotoProdottiRef.current = null;

        // Chiamo la funzione di ricerca prodotti, passando i parametri
        ricercaProdotti(params);
    }

    // Gestisco il click sulle categorie disponibili
    function handleClickCategoria(e) {
        const categoria = e.target.textContent;
        if (categoria === 'Tutte le categorie') {
            setTestoInputCerca('');
            const prodottiShuffle = [...prodotti].map(prod => ({
                ...prod,
                immagine: immagini[prod.immagine]
            }));
            prodottiShuffle.sort(() => Math.random() - 0.5);
            setProdottiPagina(prodottiShuffle);
            setNumeroArticoliTrovati(String(prodottiShuffle.length));
            setFiltroAttivoOrdine('');
            setFiltroAttivoRange('');
            setFiltroAttivoAlfabeto('');
            fotoProdottiRef.current = null;
        }
        else {
            setTestoInputCerca(categoria);
            const params = {
                inputRef,
                setTestoInputCerca,
                setNumeroArticoliTrovati,
                setProdottiPagina,
                prodotti,
                immagini,
                categoria
            };

            // Resetto i filtri
            setFiltroAttivoOrdine('');
            setFiltroAttivoRange('');
            setFiltroAttivoRangeCustom('');
            setFiltroAttivoAlfabeto('');
            setInputRangeCustom('');
            fotoProdottiRef.current = null;

            // Chiamo la funzione di ricerca prodotti, passando i parametri
            ricercaProdotti(params);
        }
    }

    // Gestisco la pressione del tasto Invio sulle categorie
    function handleEnterCategoria(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClickCategoria(e);
        }
    }

    // Filtri
    // Crescente/decrescente e range valore
    function handleFiltriOrdineRange(e) {
        if (e.target.closest('.ordine')?.textContent === 'Crescente') {
            const prodottiCrescente = [...prodottiPagina].sort((a, b) => a.prezzo - b.prezzo);
            setProdottiPagina(prodottiCrescente);
            setFiltroAttivoOrdine('crescente');
        } else if (e.target.closest('.ordine')?.textContent === 'Decrescente') {
            const prodottiDecrescente = [...prodottiPagina].sort((a, b) => b.prezzo - a.prezzo);
            setProdottiPagina(prodottiDecrescente);
            setFiltroAttivoOrdine('decrescente');
        } else if (e.target.classList.contains('range_valore')) {
            // Se l'input range personalizzato è attivo, lo disattivo
            setFiltroAttivoRangeCustom('');
            setInputRangeCustom('');
            const valore = e.target.textContent.slice(0, -2); // Rimuovo l'€ finale
            const valoreClasse = valore;
            // Fai la foto ai prodotti nella pagina corrente
            if (!fotoProdottiRef.current) {
                fotoProdottiRef.current = [...prodottiPagina];
            }
            const prodottiFiltrati = fotoProdottiRef.current.filter(prod => prod.prezzo <= Number(valore));
            // Se il filtro crescente o descrescente è attivo, lo applico in automatico ai prodotti filtrati
            if (filtroAttivoOrdine === 'crescente') {
                prodottiFiltrati.sort((a, b) => a.prezzo - b.prezzo);
            } else if (filtroAttivoOrdine === 'decrescente') {
                prodottiFiltrati.sort((a, b) => b.prezzo - a.prezzo);
            }
            // Se il filtro alfabeto è attivo, lo applico in automatico ai prodotti filtrati
            if (filtroAttivoAlfabeto === 'az') {
                prodottiFiltrati.sort((a, b) => a.nome.localeCompare(b.nome));
            } else if (filtroAttivoAlfabeto === 'za') {
                prodottiFiltrati.sort((a, b) => b.nome.localeCompare(a.nome));
            }
            setProdottiPagina(prodottiFiltrati);
            setNumeroArticoliTrovati(String(prodottiFiltrati.length));
            setFiltroAttivoRange(`range${valoreClasse}`);
        }
    }

    // Gestisco l'input range personalizzato
    function handleInputRangeCustom(e) {
        let valore = e.target.value;

        valore = e.target.value.replace(/[^0-9.,]/g, '');
        valore = valore.replace(',','.');

        // Limito a 7 caratteri
        if (valore.length > 7) {
            valore = valore.slice(0, 7);
        }
        setInputRangeCustom(valore);
        setFiltroAttivoRange('');
        setFiltroAttivoRangeCustom('custom');
        // Fai la foto ai prodotti nella pagina corrente
        if (!fotoProdottiRef.current) {
            fotoProdottiRef.current = [...prodottiPagina];
        }
        if (valore !== '') {
            const prodottiFiltrati = fotoProdottiRef.current.filter(prod => prod.prezzo <= Number(valore));

            // Se il filtro crescente o descrescente è attivo, lo applico in automatico ai prodotti filtrati
            if (filtroAttivoOrdine === 'crescente') {
                prodottiFiltrati.sort((a, b) => a.prezzo - b.prezzo);
            } else if (filtroAttivoOrdine === 'decrescente') {
                prodottiFiltrati.sort((a, b) => b.prezzo - a.prezzo);
            }
            // Se il filtro alfabeto è attivo, lo applico in automatico ai prodotti filtrati
            if (filtroAttivoAlfabeto === 'az') {
                prodottiFiltrati.sort((a, b) => a.nome.localeCompare(b.nome));
            } else if (filtroAttivoAlfabeto === 'za') {
                prodottiFiltrati.sort((a, b) => b.nome.localeCompare(a.nome));
            }
            setProdottiPagina(prodottiFiltrati);
            setNumeroArticoliTrovati(String(prodottiFiltrati.length));
        } else {
            // Se l'input range è vuoto, ripristino i prodotti originali
            setFiltroAttivoRangeCustom('');
            setProdottiPagina(fotoProdottiRef.current);
            setNumeroArticoliTrovati(String(fotoProdottiRef.current.length));
        }
    }

    // Gestisco il filtro alfabetico
    function handleFiltroAlfabeto(e) {
        const ordine = e.target.textContent === 'A - Z' ? 'az' : 'za';
        setFiltroAttivoAlfabeto(ordine);
        const prodottiOrdinati = [...prodottiPagina].sort((a, b) => {
            if (ordine === 'az') {
                return a.nome.localeCompare(b.nome);
            } else {
                return b.nome.localeCompare(a.nome);
            }
        });
        setProdottiPagina(prodottiOrdinati);
    }

    // Gestisco il reset dei filtri
    function handleResetFiltri() {
        setFiltroAttivoOrdine('');
        setFiltroAttivoRange('');
        setFiltroAttivoRangeCustom('');
        setFiltroAttivoAlfabeto('');
        setInputRangeCustom('');
        setTestoInputCerca('');
        fotoProdottiRef.current = null;
        const prodottiShuffle = [...prodotti].map(prod => ({
            ...prod,
            immagine: immagini[prod.immagine]
        }));
        prodottiShuffle.sort(() => Math.random() - 0.5);
        setProdottiPagina(prodottiShuffle);
        setNumeroArticoliTrovati(String(prodottiShuffle.length));
    }

    // Disabilito lo scroll della rotellina del mouse sull'input range personalizzato
    function handleWheel(e) {
        e.target.blur();
    }

    // Gestisco il tasto invio sui filtri
    function handleClickFilters(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (e.target.closest('.ordine')) {
                handleFiltriOrdineRange(e);
            } else if (e.target.classList.contains('range_valore')) {
                handleFiltriOrdineRange(e);
            }
        }
    }

    // Gestisco click suk bottone "Torna su"
    function handleTornaSu(e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        e.target.blur();
    }

    // Effetto
    useEffect(() => {
        document.title = "Amazing";
        window.scrollTo(0, 0);
        // Faccio vedere la pagina solo quando tutti i prodotti sono caricati
        setIsLoaded(true);

        // Imposto margini
        const altezza_header = window.getComputedStyle(document.querySelector('header')).height;
        const altezza_input_cerca = Number(window.getComputedStyle(document.getElementById('input_cerca')).height.slice(0, -2)) - 4;
        setMarginTop(altezza_header);
        setHeightBottoneCerca(altezza_input_cerca);

        // Placeholder dinamico
        const id = setInterval(() => {
            const indice = Math.floor(Math.random() * lista_categorie.length);
            setPlaceholder(lista_categorie[indice]);
        }, 3300);

        // Sostituisco la stringa immagine con la vera immagine e creo prodotti casuali al primo avvio dell'App
        const prodottiShuffle = [...prodotti].map(prod => ({
            ...prod,
            immagine: immagini[prod.immagine]
        }));
        prodottiShuffle.sort(() => Math.random() - 0.5);
        setProdottiPagina(prodottiShuffle);

        // Funzione di pulizia/cleanup
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <>
            <div id="contenitore_madre" style={{ marginTop: marginTop, opacity: isLoaded ? 1 : 0 }}>
                {/* Main */}
                <main>
                    <a id="torna_portfolio" href="https://stefanodev.it/">Torna al portfolio</a>
                    {/* Barra di ricerca */}
                    <div id="div_ricerca">
                        <input id="input_cerca" ref={inputRef} value={testoInputCerca} onChange={handleInputSearch}
                            onKeyDown={handleInputKey} type="text" placeholder={placeholder} autoComplete="off" />
                        <BottoneCerca height={heightBottoneCerca} onClick={handleRicerca} />
                    </div>

                    {/* Categorie */}
                    <div id="contenitore_madre_categorie">
                        <p>Categorie disponibili:</p>
                        <div id="contenitore_categorie">
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Altoparlanti</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Cuffie</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Fotocamere</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Laptop</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Microfoni</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Mouse</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Router</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Smartphone</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Smartwatch</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Tablet</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Tastiere</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Webcam</button>
                            <button className="categoria" onClick={handleClickCategoria} onKeyDown={handleEnterCategoria}>Tutte le categorie</button>
                        </div>
                    </div>

                    {/* Filtri */}
                    <div id="contenitore_madre_filtri">
                        <details>
                            <summary>Filtri</summary>
                            <div id="filtro_madre_prezzo">
                                <p className="paragrafo_filtro">Prezzo</p>
                                {/* Crescente/decrescente */}
                                <div id="div_crescente_decrescente">
                                    <div className={`div_crescente_decrescente_e_svg ordine focus filtro ${filtroAttivoOrdine === 'crescente' ? 'attivo' : ''}`.trim()}
                                        onClick={handleFiltriOrdineRange} onKeyDown={handleClickFilters} tabIndex="0">
                                        <button id="button_crescente" tabIndex="-1">Crescente</button>
                                        <svg className="svg_prezzo svg_crescente" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path fill="#35475f" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 
                                        160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 
                                        0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 
                                        32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 
                                        0s12.5-32.8 0-45.3l-160-160z" />
                                        </svg>
                                    </div>
                                    <div className={`div_crescente_decrescente_e_svg ordine focus filtro ${filtroAttivoOrdine === 'decrescente' ? 'attivo' : ''}`.trim()}
                                        onClick={handleFiltriOrdineRange} onKeyDown={handleClickFilters} tabIndex="0">
                                        <button id="button_decrescente" tabIndex="-1">Decrescente</button>
                                        <svg className="svg_prezzo svg_decrescente" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path fill="#35475f" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 
                                        12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 
                                        64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 
                                        265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 
                                        45.3l160 160z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Range prezzi */}
                                <p className="paragrafo_range">Fino a</p>
                                <div id="div_range_prezzi">
                                    <div className={`range_valore focus filtro ${filtroAttivoRange === 'range20' ? 'attivo' : ''}`.trim()}
                                        onClick={handleFiltriOrdineRange} onKeyDown={handleClickFilters} tabIndex='0'>20 €</div>
                                    <div className={`range_valore focus filtro ${filtroAttivoRange === 'range50' ? 'attivo' : ''}`.trim()}
                                        onClick={handleFiltriOrdineRange} onKeyDown={handleClickFilters} tabIndex='0'>50 €</div>
                                    <div className={`range_valore focus filtro ${filtroAttivoRange === 'range200' ? 'attivo' : ''}`.trim()}
                                        onClick={handleFiltriOrdineRange} onKeyDown={handleClickFilters} tabIndex='0'>200 €</div>
                                    <div className={`range_valore focus filtro ${filtroAttivoRange === 'range500' ? 'attivo' : ''}`.trim()}
                                        onClick={handleFiltriOrdineRange} onKeyDown={handleClickFilters} tabIndex='0'>500 €</div>
                                    <div className={`range_valore focus filtro ${filtroAttivoRange === 'range1000' ? 'attivo' : ''}`.trim()}
                                        onClick={handleFiltriOrdineRange} onKeyDown={handleClickFilters} tabIndex='0'>1000 €</div>
                                    <div id="div_input_valuta" className={`filtro rangeContenitore ${filtroAttivoRangeCustom === 'custom' ? 'attivo' : ''}`.trim()}>
                                        <input className={`input_range ${filtroAttivoRangeCustom === 'custom' ? 'attivo' : ''}`.trim()}
                                            type="text" inputMode="decimal" name="range_custom" id="range_custom"
                                            value={inputRangeCustom} onChange={handleInputRangeCustom} onWheel={handleWheel} placeholder="Valore"
                                            autoComplete="off" />
                                        <p>€</p>
                                    </div>
                                </div>
                            </div>

                            {/* Ordine alfabetico */}
                            <div id="filtro_madre_alfabeto">
                                <p className="paragrafo_filtro">Ordine alfabetico</p>
                                <div id="div_ordine_alfabetico">
                                    <button className={`focus filtro alfabetico ${filtroAttivoAlfabeto === 'az' ? 'attivo' : ''}`.trim()} onClick={handleFiltroAlfabeto}>A - Z</button>
                                    <button className={`focus filtro alfabetico ${filtroAttivoAlfabeto === 'za' ? 'attivo' : ''}`.trim()} onClick={handleFiltroAlfabeto}>Z - A</button>
                                </div>
                            </div>

                            {/* Azzera filtri */}
                            <button id="reset_filtri" className='focus filtro reset' onClick={handleResetFiltri}>Reset filtri</button>
                        </details>
                    </div>

                    {/* Risultati della ricerca */}
                    <p id="prodotti_trovati">{numeroArticoliTrovati} {Number(numeroArticoliTrovati) > 1 || Number(numeroArticoliTrovati) === 0 ?
                        'prodotti trovati' : 'prodotto trovato'}</p>
                    <div className='torna_home' style={{ display: numeroArticoliTrovati === '0' ? 'flex' : 'none' }}>
                        <a className='link_home' href='/'>Torna alla home</a>
                    </div>

                    <div id="contenitore_prodotti" aria-label="Elenco dei prodotti disponibili">
                        {prodottiPagina.map(prod => (
                            <Prodotto key={prod.id} datiProdotto={prod} setQuantitàCarrelloOutlet={setQuantitàCarrelloOutlet} />
                        ))}
                    </div>

                    {/* Torna in cima alla pagina */}
                    <button id="torna_su" aria-label="Torna in cima alla pagina" onClick={handleTornaSu} style={{ display: numeroArticoliTrovati === '0' ? 'none' : 'inline-block' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="#264d5f" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 
                        45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 
                        246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                        </svg>
                    </button>
                </main>

                {/* Footer */}
                <footer id='footerHomePage'>
                    <p>© 2025 Stefano Quaranta</p>
                    <p>Progetto realizzato con React e React Router</p>
                    <div className="contenitore_github" aria-label="Link al progetto GitHub">
                        <div>
                            <svg id="github_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="#000000" d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 
                                        69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 
                                        15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 
                                        21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 
                                        0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 
                                        41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 
                                        16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 
                                        33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 
                                        383.5 8 244.8 8z" />
                            </svg>
                            <p>GitHub (codice sorgente)</p>
                        </div>
                        <a href="https://github.com/stefano-webdev/Portfolio/tree/main/progetti/e-commerce" target="_blank"
                            aria-label="Vai al progetto GitHub">
                            github.com/stefano-webdev/e-commerce
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
}
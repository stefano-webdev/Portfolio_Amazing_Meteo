import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CarrelloVuoto from "../components/CarrelloVuoto.jsx";
import CarrelloPieno from "../components/CarrelloPieno.jsx";

export default function Carrello() {
    // Variabili di stato
    const [isLoaded, setIsLoaded] = useState(false);
    const [marginTop, setMarginTop] = useState('0');
    const [carrelloPienoVuoto, setCarrelloPienoVuoto] = useState(localStorage.getItem('carrello'));
    const setQuantitàCarrelloOutlet = useOutletContext();

    useEffect(() => {
        document.title = "Carrello";
        window.scrollTo(0, 0);
        // Faccio vedere la pagina solo quanto tutti i prodotti sono caricati
        setIsLoaded(true);


        // Imposto margini
        const altezza_header = window.getComputedStyle(document.querySelector('header')).height;
        setMarginTop(altezza_header);
    }, []);

    return (
        <>
            <div id="contenitore_madre" style={{ marginTop: marginTop, opacity: isLoaded ? 1 : 0 }}>
                {/* Se il carrello è vuoto faccio vedere un componente, altrimenti ne faccio vedere un altro */}
                <main>
                    {carrelloPienoVuoto ? (
                        <CarrelloPieno
                            setQuantitàCarrelloOutlet={setQuantitàCarrelloOutlet}
                            setCarrelloPienoVuoto={setCarrelloPienoVuoto} />
                    ) : (
                        <CarrelloVuoto />
                    )}
                </main>
            </div>
        </>
    );
}
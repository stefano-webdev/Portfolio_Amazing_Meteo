export function ricercaProdotti(params) {
    if (params.inputRef.current.placeholder !== 'Di cosa hai bisogno?' || params.inputRef.current.value !== '' || params.categoria) {
        let prodotto;
        if (params.categoria) {
            prodotto = params.categoria;
        }
        else if (params.inputRef.current.value == '') {
            prodotto = params.inputRef.current.placeholder;
        }
        else {
            prodotto = params.inputRef.current.value.trim();
        }
        prodotto = prodotto.at(0).toUpperCase() + prodotto.slice(1);
        params.setTestoInputCerca(prodotto);
        prodotto = prodotto.toLowerCase();
        params.inputRef.current.blur();

        // Filtro prodotti corrispondenti alla ricerca
        let catalogo_filtrato = params.prodotti.filter(elemento => elemento.categoria.includes(prodotto));

        // Aggiorno la pagina
        catalogo_filtrato = catalogo_filtrato.map(prod => ({
            ...prod,
            immagine: params.immagini[prod.immagine]
        }));
        params.setNumeroArticoliTrovati(String(catalogo_filtrato.length));
        params.setProdottiPagina(catalogo_filtrato);
    }
}
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


export default function App() {
  // Variabili di stato
  const [isLoaded, setIsLoaded] = useState(false);
  const [quantitàCarrelloOutlet, setQuantitàCarrelloOutlet] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    // Recupera la quantità di prodotti nel carrello dal localStorage
    const carrello = JSON.parse(localStorage.getItem('carrello'));
    // Calcolo la somma delle quantità dei prodotti nel carrello
    if (carrello) {
      const totaleQuantità = carrello.reduce((acc, item) => acc + item.quantità, 0);
      setQuantitàCarrelloOutlet(totaleQuantità);
    }

  }, []);

  return (
    <>
      <header style={{ opacity: isLoaded ? 1 : 0 }}>
        <nav>
          {/* Form di registrazione simulato */}
          <div id="formContainer">
            <Link to='/form'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" id="formLinkSvg">
                <path fill="#ff6200" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 
                    304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 
                    0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 
                    24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 
                    24s-24-10.7-24-24z" />
              </svg>
            </Link>
          </div>

          {/* Logo */}
          <div id="logo_contenitore">
            <Link id="logo" to='/'>Amazing</Link>
            <svg xmlns="http://www.w3.org/2000/svg" id="borsaSvg" viewBox="0 0 24 24" fill="#FF6200" className="size-6">
              <path fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 
              4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 
              4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 
              1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd" />
            </svg>
          </div>

          {/* Carrello */}
          <Link to="/cart">
            <div id="carrello_contenitore">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" id="svg_carrello">
                <path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 
                            41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 
                            38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 
                            53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 
                            23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 
                            24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 
                            54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 
                            0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 
                            0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <div id="prodotti_nel_carrello">
                <p id="numero_prodotti" style={{ fontSize: quantitàCarrelloOutlet > 99 ? '14px' : '17px' }}>
                  {quantitàCarrelloOutlet}
                </p>
              </div>
            </div>
          </Link>
        </nav>
      </header>

      <Outlet context={setQuantitàCarrelloOutlet} />
    </>
  );
}
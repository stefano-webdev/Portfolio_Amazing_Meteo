import { useState, useEffect, useRef } from "react";

export default function Form() {
    // Variabili di stato
    const [isLoaded, setIsLoaded] = useState(false);
    const [marginTop, setMarginTop] = useState('0');
    const passwordRef = useRef(null);
    const passwordConfermaRef = useRef(null);
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [passwordOk1, setPasswordOk1] = useState(false);
    const [passwordOk2, setPasswordOk2] = useState(false);
    const [passwordOk3, setPasswordOk3] = useState(false);
    const passwordControllata = useRef(false);
    const [avviso, setAvviso] = useState(false);
    const [dati, setDati] = useState({
        nome: '',
        email: '',
        password: '',
        confermaPassword: '',
        indirizzo: ''
    });
    const svgRef = useRef(<svg xmlns="http://www.w3.org/2000/svg" id="passwordSvg" viewBox="0 0 384 512"><path fill="#ff3b3b"
        d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 
        39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 
        468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>);

    // Funzioni
    // Gestisco l'invio del form
    function handleRegistrati(e) {
        e.preventDefault();
        const passwordInput = passwordRef.current.value;
        const passwordInput2 = passwordConfermaRef.current.value;
        if (passwordInput !== passwordInput2) {
            setAvviso(svgRef.current)
        } else if (passwordControllata.current) {
            setAvviso(false);
            alert('I dati sono stati validati correttamente. Grazie per aver visitato Amazing!');
        }
    }

    // Aggiorno il valore degli input
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setDati(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        });

        // Controllo della password
        if (name === 'password' && value !== '') {
            const controllo1 = value.length >= 6;
            const controllo2 = /[A-Z]/.test(value);
            const controllo3 = /[^A-Za-z0-9]/.test(value);
            setPasswordCheck(true);
            setPasswordOk1(controllo1);
            setPasswordOk2(controllo2);
            setPasswordOk3(controllo3);
            const passwordInput = passwordRef.current.value;
            const passwordInput2 = passwordConfermaRef.current.value;
            if (passwordInput === passwordInput2) {
                setAvviso(false);
            }
            if (controllo1 && controllo2 && controllo3) {
                passwordControllata.current = true;
            }
        } else if (name === 'password' && value === '') {
            setPasswordCheck(false);
        } else if (name === 'confermaPassword') {
            const passwordInput = passwordRef.current.value;
            const passwordInput2 = passwordConfermaRef.current.value;
            if (passwordInput === passwordInput2) {
                setAvviso(false);
            }
        }
    }

    function handleKeyCheckbox(e) {
        if (e.key === 'Enter') {
            e.target.checked = !e.target.checked;
        }
    }

    useEffect(() => {
        document.title = "Form di registrazione";
        window.scrollTo(0, 0);
        // Faccio vedere la pagina solo quanto tutti i prodotti sono caricati
        setIsLoaded(true);

        // Imposto margini
        const altezza_header = window.getComputedStyle(document.querySelector('header')).height;
        setMarginTop(altezza_header);
    }, []);

    return (
        <div id="contenitore_madre" className="contenitoreGenerale" style={{ marginTop: marginTop, opacity: isLoaded ? 1 : 0 }}>
            <h1 className="form">Crea il tuo account</h1>
            <h2 className="form">e completa gli acquisti in pochi click!</h2>

            {/* Campi di input testo */}
            <form onSubmit={handleRegistrati}>
                <div id="inputTestoContenitore">
                    <label className="labelTesto">
                        Nome
                        <input className="inputTesto" onChange={handleChange} value={dati.nome} type="text" name="nome" required autoComplete="off" />
                    </label>

                    <label className="labelTesto">
                        Email
                        <input className="inputTesto" onChange={handleChange} value={dati.email} type="email" name="email" pattern=".+@.+\..+" required autoComplete="off" />
                    </label>

                    <label className="labelTesto">
                        <div className="errorePasswordContenitore">
                            Password {avviso}
                        </div>
                        <input className="inputTesto" placeholder="Almeno 6 caratteri" onChange={handleChange} value={dati.password} type="password" name="password" minLength={6} required ref={passwordRef} autoComplete="off" />
                    </label>

                    <label className="labelTesto">
                        <div className="errorePasswordContenitore">
                            Conferma password {avviso}
                        </div>
                        <input className="inputTesto" onChange={handleChange} value={dati.confermaPassword} type="password" name="confermaPassword" minLength={6} required ref={passwordConfermaRef} autoComplete="off" />
                    </label>

                    <label className="labelTesto">
                        Indirizzo
                        <input className="inputTesto" onChange={handleChange} value={dati.indirizzo} type="text" name="indirizzo" required autoComplete="off" />
                    </label>
                </div>

                {/* Controlli sulla password */}
                <div id="controlliPasswordContenitore">
                    <p style={{
                        opacity: passwordCheck ? '1' : '0',
                        color: passwordOk1 ? '#159a34' : 'rgb(255, 18, 18)'
                    }}>Minimo 6 caratteri</p>

                    <p style={{
                        opacity: passwordCheck ? '1' : '0',
                        color: passwordOk2 ? '#159a34' : 'rgb(255, 18, 18)'
                    }}>Almeno una lettera maiuscola</p>

                    <p style={{
                        opacity: passwordCheck ? '1' : '0',
                        color: passwordOk3 ? '#159a34' : 'rgb(255, 18, 18)'
                    }}>Almeno un carattere speciale</p>
                </div>

                {/* Checkbox e opzioni aggiuntive */}
                <div id="inputCheckContenitore">
                    <label className="inputCheck">
                        <input type="checkbox" name="newsletter" defaultChecked onKeyDown={handleKeyCheckbox} />
                        Iscrivimi alla newsletter
                    </label>

                    <label className="inputCheck">
                        <input type="checkbox" name="offertePersonalizzate" onKeyDown={handleKeyCheckbox} />
                        Consento il trattamento dei dati a fini commerciali
                    </label>

                    <label className="inputCheck">
                        <input type="checkbox" name="accettoTermini" onKeyDown={handleKeyCheckbox} required />
                        Accetto i termini e le condizioni
                    </label>
                </div>

                {/* Botton per il submit/registrazione */}
                <div id="buttonSubmitContainer">
                    <button id="submitButton" type="submit">Registrati</button>
                </div>
            </form>

            {/* Accedi se hai già un account */}
            <div id="loginContenitore">
                <p className="login">Hai già un account?</p>
                <a className="login" tabIndex='0'>Accedi</a>
            </div>
        </div>
    );
}
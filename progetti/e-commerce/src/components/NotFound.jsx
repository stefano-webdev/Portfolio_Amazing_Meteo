import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="notfoundContainer">
            <h1>404</h1>
            <p>La pagina che cerchi non esiste.</p>
            <Link to="/" className="backHome">Torna alla Home</Link>
        </div>
    );
}

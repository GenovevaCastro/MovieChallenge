import './BotonInfo.css'
import { Link } from 'react-router-dom'

function BotonInfo() {
    return (
        <center>
            <div className="botonContenedor">
            <Link to="/InfoPelicula">
            <button >Información</button>
            </Link>
            </div>
        </center>
    )
}

export default BotonInfo
import { Link } from 'react-router-dom'
import './BotonRegresar.css'

function BotonRegresar() {
    return (
        <center>
            <div className="ButtonRegresar">
            <Link to = "/">
            <button>Regresar</button>
            </Link>

            </div>
        </center>
       
    )
}

export default BotonRegresar
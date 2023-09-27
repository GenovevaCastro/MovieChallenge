import './ContenedorPeli.css'
import BotonInfo from '../botonContenedor/BotonInfo'

function ContenedorPeli(){
    return(
        <div className="contenedorPeli">
            <section>
                <img src="src/poster.jpg" alt="imgPeli"/>
                <BotonInfo/>
                </section>
        </div>
    )
}

export default ContenedorPeli
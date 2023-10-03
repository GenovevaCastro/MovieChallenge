

import './ContenedorPeli.css'
import BotonInfo from '../botonContenedor/BotonInfo'

function ContenedorPeli(props) {
    console.log(props.peli.original_title)
    return (

        <div className="contenedorPeli">

            <section>
                <img src={'https://image.tmdb.org/t/p/w500/' + props.peli.poster_path} />
                <center><h2>{props.peli.title}</h2></center>
                <BotonInfo />

            </section>
        </div>
    )
}

export default ContenedorPeli
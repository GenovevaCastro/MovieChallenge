
import './ContenedorPeli.css'
import BotonInfo from '../botonContenedor/BotonInfo'

function ContenedorPeli(props) {
    console.log(props.peli.original_title)
    return (
       
        <div className="contenedorPeli">
            <center>
            <section>
                <div className='Info'>
                <img src={'https://image.tmdb.org/t/p/w500/' + props.peli.poster_path} />
                <center><h2>{props.peli.title}</h2></center>
                <BotonInfo />
                </div>
            </section>
            </center>
        </div>
      
    )
}

export default ContenedorPeli
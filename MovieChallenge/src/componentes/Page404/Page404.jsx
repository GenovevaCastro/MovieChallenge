import Footer from '../Footer/Footer';
import BotonRegresar from '../BotonRegresar/BotonRegresar';
import './Page404.css'

function Page404(){
    return( 
   <header className='Page404'>
    <section> 
        <BotonRegresar/>
        </section>
        <div>
        <h1>
            Lo sentimos,
            esta página no existe  
        </h1>
    <img src="src/Imagenes/tristeza.png" id="tristeza" alt="img404"/>
    </div>
    <Footer/>
    </header>
    )
    
}
export default Page404
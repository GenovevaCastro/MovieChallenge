import Footer from '../Footer/Footer';
import './Page404.css'

function Page404(){
    return( 
   <header className='Page404'>
    <div>
        <h1>
            Lo sentimos,
            esta página no existe  
        </h1>
    <img src="src/Imagenes/tristeza.png" alt="img404"/>
    </div>
    <Footer/>
    </header>
    )
    
}
export default Page404
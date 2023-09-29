import Header from './componentes/header/header';
import Buscador from './componentes/Buscador/Buscador';
import ContenedorPeli from './componentes/ContenedorPeli/ContenedorPeli';
import ButtonVerMas from './componentes/BotonVerMas/BotonVerMas';
import Footer from './componentes/Footer/Footer';

function Home (){
    return(
        <div>
            <Header/>
            <Buscador/>
            <ContenedorPeli/>
            <ButtonVerMas/>
            <Footer/>
        </div>
    )
}

export default Home
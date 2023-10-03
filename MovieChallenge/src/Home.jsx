import Header from './componentes/header/header';
import Buscador from './componentes/Buscador/Buscador';
import ContenedorPeli from './componentes/ContenedorPeli/ContenedorPeli';
import ButtonVerMas from './componentes/BotonVerMas/BotonVerMas';
import Footer from './componentes/Footer/Footer';
import UseFetch from './componentes/pruebaFetch';



function Home() {

    const { data } = UseFetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=0f875f32ac8a65b4fd3a02bfb7772ce2")
 
    return (     
        <div>
            <Header />
            <Buscador />
            <div className="Contenedor">

                <div>
                    {data?.results.map((peli) => (
                         <ContenedorPeli peli={peli} key={peli.id}></ContenedorPeli> 
                    ))};
                </div>
            </div>
            <div>
               
             
                <ButtonVerMas />
                <Footer />
            </div>
        </div>
    )
}

export default Home
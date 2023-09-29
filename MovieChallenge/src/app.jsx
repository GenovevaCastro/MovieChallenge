import Home from './Home'
import InfoPelicula from './InfoPelicula'
import Page404 from './componentes/Page404/Page404';

//importacion para rutas con libreria react-router-dom
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'; 


 export function App (){ 
    const location = window.location.pathname
    console.log(location);
    return(
         <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/InfoPelicula' element={<InfoPelicula/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        
         </Router>
       
    )
}




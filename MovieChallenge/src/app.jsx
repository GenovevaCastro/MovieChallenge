import Home from './Home'
import InfoPelicula from './InfoPelicula'

 export function App (){

    const location = window.location
    console.log(location);

    return(
            <Home/>,
            <InfoPelicula/>
            
    )
}




import Home from './Home'
import InfoPelicula from './InfoPelicula'

 export function App (){

//constante para window location pathname 
    const location = window.location.pathname
    console.log(location);

    const Router = () =>{
        //si location se encuentra en "/" abre el Home
        if(location === "/"){
            return <Home/>
            //de lo contrario retorname InfoPelicula
        }else{
            return <InfoPelicula/>
        }
    }

    return(
         <>
          {Router()}
         </>
       
    )
}




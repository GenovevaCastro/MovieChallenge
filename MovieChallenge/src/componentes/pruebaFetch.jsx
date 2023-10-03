import { useState,useEffect } from 'react';

 function UseFetch(url){
    
    //La data y la funcion que da los datos
    const [data, setData] = useState(null);

    //Va a permitir hacer la peticion http
    useEffect(() => {
        fetch(url, {method:"GET"})
        .then(response => response.json())
        .then(data => setData(data));
    },[]);
    return{data}
}

export default UseFetch

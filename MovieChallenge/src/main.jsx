//punto de entrada de nuestra aplicación 
import React from 'react'
//nos ayuda a trabajar con react y el dom
import ReactDOM from 'react-dom/client'
import { App} from './app'



//interacción con elementos html
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<App/>
)

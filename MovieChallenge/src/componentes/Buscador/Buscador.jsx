import './Buscador.css'

function Buscador(){
    return(
        <section className="buscador">
            <input placeholder="Busca tu película">
        </input>
        <input id='lupa' type="image" src="src/lupa.png" alt="lupa"></input>
        </section>
    )
}

export default Buscador


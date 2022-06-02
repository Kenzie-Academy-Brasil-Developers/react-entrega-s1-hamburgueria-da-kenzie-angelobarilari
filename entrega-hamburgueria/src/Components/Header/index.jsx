import { useState } from "react"
import "./style.css"

function Header( { showProducts } ) {
    const [searchValue, setSearchValue] = useState("")

    return (
        <header id="pageHeader">
            <div className="logoContainer">
                <span id="logoBurguer">
                    Burguer
                </span>

                <span id="logoKenzie">
                    Kenzie
                </span>
            </div>

            <div id="searchArea">
                <input id="searchBar" 
                       type="text" 
                       placeholder="Pesquise por nome"
                       onChange={(event) => setSearchValue(event.target.value)}
                       value={searchValue}/>

                <button onClick={() => showProducts(searchValue)}>
                    Pesquisar
                </button>
            </div>
        </header>
    )
}

export default Header
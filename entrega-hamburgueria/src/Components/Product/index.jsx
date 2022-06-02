import "./style.css"
import { useState } from "react"

function Product( { id, name, category, price, img, handleClick } ) {
    return (
        <div className="card" >
            <img src={img} alt={name}/>

            <div className="productInfos">
                <h2 className="productName">
                    {name}
                </h2>

                <p className="productCategory">
                    {category}
                </p>

                <p className="productPrice">
                    R${price}
                </p>

            <button id={id} onClick={(event) => handleClick(Number(event.target.id))}>
                Adicionar
            </button>
            </div>
        </div>
    )
}

export default Product
import "./style.css"

function CartProduct ( {img, name, category, price} ) {
    return (
        <div className="cartItem">
            <div>
                <img src={img} alt={name}/>
                <div className="cartProductInfos">
                    <span className="cartProductName">
                        {name}
                    </span>

                    <span className="cartProductCategory">
                        {category}
                    </span>

                    <span className="cartProductPrice">
                        R$ {price}
                    </span>
                </div>
            </div>
            <button>remover</button>
        </div>
    )
}

export default CartProduct
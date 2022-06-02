import "./style.css"

function CartTotal(  { sumPrice, clearCart } ) {

    return (
        <div id="cart-footer">
            <div id="total-area">
                Total: <span>R$ {parseInt(sumPrice())}</span>
            </div>

            <button id="cart-remove-all" onClick={() => clearCart()}>Remover todos</button>
        </div>
    )
}

export default CartTotal
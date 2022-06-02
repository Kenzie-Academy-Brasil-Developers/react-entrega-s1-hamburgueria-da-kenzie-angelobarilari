import CartHeader from "../CartHeader"
import CartProduct from "../CartProduct"
import CartTotal from "../CartTotal"
import EmptyCart from "../EmptyCart"
import "./style.css"

function Cart( { currentSale, handleClick, clearCart} ) {
    function sumPrice() {
        const accumulator = currentSale.reduce(
            (previousValue, currentValue) => previousValue + currentValue.price, 0);
            return accumulator
    }

    return (
        <div id="cart">
            <CartHeader />

                <div id="cart-body">
                    {currentSale.length > 0 ? (
                            currentSale.map((cartItem, index) => 
                            <CartProduct key={index}
                                         id={cartItem.id}
                                         img={cartItem.img}
                                         name={cartItem.name}
                                         category={cartItem.category}
                                         price={cartItem.price}
                                         handleClick={handleClick}/>)
                            ) : (
                                <EmptyCart />
                            )}
                </div>

            {currentSale.length > 0 ? (
                <CartTotal sumPrice={sumPrice} clearCart={clearCart}/>
                ) : (
                    null
                )}
        </div>
    )
}

/*<CartTotal sumPrice={sumPrice}/>*/

export default Cart
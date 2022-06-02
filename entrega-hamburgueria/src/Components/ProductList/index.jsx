import Product from "../Product"

function ProductList( { products, handleClick } ) {
    return (
        <>  
            {products.map((element, index) => 
                <Product key={index}
                         id={element.id}
                         name={element.name}
                         category={element.category}
                         price={element.price}
                         img={element.img}
                         handleClick={handleClick}
                />
            )}
        </>
        
    )
}

export default ProductList
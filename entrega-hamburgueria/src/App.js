import './App.css';
import './reset.css'
import { createRef, useEffect, useState } from 'react'
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import Cart from './Components/Cart';

function App() {
  const baseURL = "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  
  useEffect(() => {
    fetch(baseURL)
      .then(res => res.json())
      .then(res => {
        setProducts(res)
        setFilteredProducts(res)
      })
      .catch(err => err)
  }, [])

  function showProducts(searchItem) {
    if (searchItem.length > 0) {
      const product = products.filter(item => {
        if (item.name === searchItem) {
          return item
        }
      })
      return setFilteredProducts(product)
    }
    return setFilteredProducts(products)
  }
  
  const handleClick = (productId) => {
    const product = products.find(element => element.id === productId)

    if (currentSale.length === 0) {
      setCurrentSale(currentSale.concat(product))
    }

    if (currentSale.length > 0) {
          const checkAvailability = currentSale.some(element => element.name === product.name)
          if (checkAvailability === false) {
            setCurrentSale(currentSale.concat(product))
          }
      }
    }

  function clearCart() {
    setCurrentSale([])
  }
  
  return (
      <div className="App">
        <Header showProducts={showProducts}/>

        <div className="main-content">
          <div className="productsContainer">
            <ProductList products={filteredProducts} handleClick={handleClick} />
          </div>

          <Cart currentSale={currentSale} clearCart={clearCart}/>
        </div>
      </div>
    );
}

export default App;

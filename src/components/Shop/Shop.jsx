import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
 
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);  

    useEffect(()=> {
        // fetch('products.json')
        // .then(res => res.json())
        // .then(data => setProducts(data))
        const loadData = async() => {
            const res = await fetch('products.json')
            const data = await res.json()
            setProducts(data);
        }
        loadData()

    }, [])

    const handleAddToCart = (product) => {
      
        let newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop__container'>
             <div className='product__container'>
                {
                    products.map(product => <Product
                         key={product.id}
                         product={product}
                         cartbutton = {handleAddToCart}
                         ></Product>)
                }
             </div>
             <div className='cart__container'>
                <Cart cart={cart}></Cart>
             </div>
        </div>
    );
};

export default Shop;
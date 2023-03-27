import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
 
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])

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

    return (
        <div className='shop__container'>
             <div className='product__container'>
                {
                    products.map(product => <Product
                         key={product.id}
                         product={product}
                         ></Product>)
                }
             </div>
             <div className='cart__container'>
                <h2>Cart for Products</h2>
             </div>
        </div>
    );
};

export default Shop;
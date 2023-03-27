import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id, img, price, name, ratings, seller, category} = props.product;
    console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product__info'>
                <h3 className='product__name'>{name}</h3>
                <h3 className='product__price'><b>Price: ${price}</b></h3>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='product-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;
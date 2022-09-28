import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name, seller, price, ratings} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="product-img" />
            <div className="product-main-info">
                <p className='product-name'>{name}</p>
                <p className="price">Price: ${price}</p>
            </div>
            <div className="product-additional-info">
                <p className="seller">Manufacturer: {seller}</p>
                <p className="ratings">Rating: {ratings}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon className='cart-icon' icon={faCartShopping}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;
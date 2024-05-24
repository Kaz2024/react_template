import React from "react";
import './Product.css';

const Product = (props) => {
    return (
        <div>
            <h4 id="product_name">{props.product_name}</h4>
            <p id="description">{props.description}</p>
            <p id="price">{props.price}</p>
        </div>
    )
}

export default Product;
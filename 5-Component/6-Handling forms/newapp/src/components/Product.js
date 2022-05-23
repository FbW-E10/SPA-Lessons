import React from "react";

export default function Product(props) {
    
  return (
    <div className="productCard">

      <h2>{props.product.productName}</h2>
      <img className="photo" src={props.product.photo} alt={props.product.productName} />
      <h3>{props.product.price}</h3>

    </div>
  );
}

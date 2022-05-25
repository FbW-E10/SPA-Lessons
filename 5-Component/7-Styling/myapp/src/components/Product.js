import React from "react";

export default function Product(props) {
  // return (
  //   <div className="productCard">
  //     <h2>{props.product.productName}</h2>
  //     <img
  //       className="photo"
  //       src={props.product.photo}
  //       alt={props.product.productName}
  //     />
  //     <h3>{props.product.price}</h3>

  //     <button onClick={() => props.sold(props.index)}>Sold</button>

  //     <div>{"Sold? " + (props.product.sold ? "Yes" : "No")}</div>

  //     <button onClick={() => props.delete(props.index)}>Delete</button>

  //   </div>
  // );

  return (
   
    <div className="card" style={{width: '18rem'}}>
    <img src={props.product.photo} className="card-img-top photo" alt={props.product.productName}/>
    <div className="card-body">
      <h5 className="card-title">{props.product.productName}</h5>
      <p className="card-text">{props.product.price}</p>
      <p className="card-text">{"Sold? " + (props.product.sold ? "Yes" : "No")}</p>
      <button className="btn btn-danger" onClick={() => props.delete(props.index)}>Delete</button>
      <button className="btn btn-success" onClick={() => props.sold(props.index)}>Sold</button>
    </div>
  </div>
  
  )
}

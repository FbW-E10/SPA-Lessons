import React, { useState } from "react";
import ShowProducts from "./ShowProducts";

export default function AddProduct() {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    setProducts(prev=>[...prev, product])
    
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Product name:</div>
        <input type={"text"} name="productName" onChange={handleChange} />
        <div>Photo link:</div>
        <input type={"text"} name="photo" onChange={handleChange} />
        <div>Price:</div>
        <input type={"text"} name="price" onChange={handleChange} />
        <br />
        <button>Add</button>
      </form>
      <button onClick={()=>console.log(products)}>show array</button>
  
      <ShowProducts products={products}/>
    </div>
  );
}

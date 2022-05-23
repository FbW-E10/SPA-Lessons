import React, { useState } from "react";
import ShowProducts from "./ShowProducts";

export default function AddProduct() {
  const [product, setProduct] = useState({ sold: false });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);

   const checkArr= products.filter(item=>item.productName===product.productName);

   checkArr.length==0 && setProducts(prev=> [...prev, product])
    
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((item, i) => index !== i);
    
    setProducts(updatedProducts);
  };
 
  const handleSold = (index) => {
    const updatedProducts = products.map((item, i) =>
      index == i ? {...item, sold : !item.sold} : item
    );
    setProducts(updatedProducts);
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
      <button onClick={() => console.log(products)}>show array</button>

      <ShowProducts sold={handleSold} delete={handleDelete} products={products} />
    </div>
  );
}

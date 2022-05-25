import React, { useState } from "react";
import ShowProducts from "./ShowProducts";

export default function AddProduct() {
  const [product, setProduct] = useState({ sold: false });
  const [products, setProducts] = useState([
    {
      productName: "xbox",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg",
      price: "450$",
    },
    {
      productName: "Playstation",
      photo:
        "https://www.tvmovie.de/bilder/758/2020/06/12/77329-ps5-das-ist-das-finale-design-der-playstation-5.jpg?itok=nauph4gp",
      price: "500$",
    },
    {
      productName: "iPhone",
      photo:
        "https://media.cdn.kaufland.de/product-images/1024x1024/539adaff2e57ca05984e433fe38cebfb.jpg",
      price: "750$",
    },
    {
      productName: "MacBook",
      photo: "https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg",
      price: "900$",
    },
    {
      productName: "xbox",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg",
      price: "450$",
    },
    {
      productName: "Playstation",
      photo:
        "https://www.tvmovie.de/bilder/758/2020/06/12/77329-ps5-das-ist-das-finale-design-der-playstation-5.jpg?itok=nauph4gp",
      price: "500$",
    },
    {
      productName: "iPhone",
      photo:
        "https://media.cdn.kaufland.de/product-images/1024x1024/539adaff2e57ca05984e433fe38cebfb.jpg",
      price: "750$",
    },
    {
      productName: "MacBook",
      photo: "https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg",
      price: "900$",
    },
  ]);

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);

    const checkArr = products.filter(
      (item) => item.productName === product.productName
    );

    checkArr.length == 0 && setProducts((prev) => [...prev, product]);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((item, i) => index !== i);

    setProducts(updatedProducts);
  };

  const handleSold = (index) => {
    const updatedProducts = products.map((item, i) =>
      index === i ? { ...item, sold: !item.sold } : item
    );
    setProducts(updatedProducts);
  };
  const style1 = {
    borderRadius: "20px",
    boxShadow: "3px 5px 8px",
    padding: "5px",
    display: "flex",
    border: "1px solid #000",
    flexDirection: "column",
    alignItems: "center",
    height: "300px",
    width: "50%",
    margin: "20px 25%",
  };


  return (
    <div>
      <form style={style1} onSubmit={handleSubmit}>
        <h1>Add a product</h1>
        <div>Product name:</div>
        <input type={"text"} name="productName" onChange={handleChange} />
        <div>Photo link:</div>
        <input type={"text"} name="photo" onChange={handleChange} />
        <div>Price:</div>
        <input type={"text"} name="price" onChange={handleChange} />
        <br />
        <button style={{ width: "50px" }}>Add</button>
      </form>
      <h1>Our products</h1>
      <ShowProducts
        sold={handleSold}
        delete={handleDelete}
        products={products}
      />
    </div>
  );
}

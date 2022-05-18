function Car({ brand, model, imageData }){
return (
    <div className ="car" >
       <h3> Brand : {brand}</h3>
      <h3> Car Model: {model}</h3>
      <img src={imageData} alt={brand} />
    </div>

)
}
export default Car

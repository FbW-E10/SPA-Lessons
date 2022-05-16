function Car(props){
return (
    <div className ="car" >
        <h3> Brand : {props.brand}</h3>
        <h3> Car Model: {props.model}</h3>
        <img src={props.img}  />
    </div>

)
}
export default Car
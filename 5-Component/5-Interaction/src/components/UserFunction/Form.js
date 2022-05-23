function Form(props) {
  return (
    <form>
      <div>
        Name :
        <input
          type="text"
          name="name"
          required
          onChange={props.changeHandler}
        />
      </div>
      <div>
        Email:{" "}
        <input
          type="email"
          name="email"
          required
          onChange={props.changeHandler}
        />
      </div>
      <div>
        Address :
        <input type="text" name="address" onChange={props.changeHandler} />
      </div>
    </form>
  );
}

export default Form;

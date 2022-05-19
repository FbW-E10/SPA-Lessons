import { Component } from "react";
import Form from "./Form";
import UserData from "./UserData";

class UserClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      address: "",
    };
  }

  changeHandler = (e) => {
    console.log(e.target.name);

    this.setState({
      ...this.state, //copy all the previous values
      [e.target.name]: e.target.value, // new key : value
    });
  };

  render() {
    return (
      <section className="border">
        <h2> User with Class component</h2>
        <Form changeHandler={this.changeHandler} />
        <UserData user={this.state} />
      </section>
    );
  }
}

export default UserClass;

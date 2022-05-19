import { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <div>
          Name :
          <input
            type="text"
            name="name"
            required
            onChange={this.props.changeHandler}
          />
        </div>
        <div>
          Email:{" "}
          <input
            type="email"
            name="email"
            required
            onChange={this.props.changeHandler}
          />
        </div>
        <div>
          Address :
          <input
            type="text"
            name="address"
            onChange={this.props.changeHandler}
          />
        </div>
      </form>
    );
  }
}

export default Form;

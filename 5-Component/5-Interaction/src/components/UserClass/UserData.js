import { Component } from "react";

class UserData extends Component {
  render() {
    return (
      <>
        <h4>User Date:</h4>
        <div>
          User Name: <span className="text-red">{this.props.user.name}</span>
        </div>
        <div>
          User Email:<span className="text-red">{this.props.user.email}</span>
        </div>
        <div>
          User Address:
          <span className="text-red">{this.props.user.address}</span>
        </div>
      </>
    );
  }
}

export default UserData;

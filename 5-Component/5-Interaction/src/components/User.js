import React from "react";

export default function User(props) {
  return (
    <div>
      <h3>User Date:</h3>
      <div>
        User Name: <span className="text-red">{props.user.name}</span>
      </div>
      <div>
        User Email:<span className="text-red">{props.user.email}</span>
      </div>
      <div>
        User Address:<span className="text-red">{props.user.address}</span>
      </div>
    </div>
  );
}

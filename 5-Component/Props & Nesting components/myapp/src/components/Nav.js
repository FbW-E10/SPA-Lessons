import React from "react";

export default function Nav(props) {
  return (
    <ul >
    <i>{props.username}</i>
      <i>About</i>
      <i>Projects</i>
      <i>Contacts</i>
    </ul>
  );
}

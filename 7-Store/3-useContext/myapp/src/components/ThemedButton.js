import React from "react";

function ThemedButton({ ...props }) {
  return <button className={props.theme} {...props} />;
}

export default ThemedButton;

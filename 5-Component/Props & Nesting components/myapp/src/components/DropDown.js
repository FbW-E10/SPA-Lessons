import React from 'react'

export default function DropDown({myToggle}) {
  return (
    <div
    className={myToggle ? "dark" : "light"}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            padding: "10px",
          }}
        >
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </div>
  )
}

import React from 'react'

export default function Contacts() {
  return (
    <div>
    <h1 id='contacts'> Contact us:</h1>
    <form>
    <input type={'text'} placeholder='title'/>
    <br/>
    <textarea rows="4" cols="50" placeholder='your message' />
    <br/>
    <button>Submit</button>
    </form>
    </div>
  )
}

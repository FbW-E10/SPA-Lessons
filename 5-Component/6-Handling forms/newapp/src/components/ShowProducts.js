import React from 'react'
import Product from './Product'

export default function ShowProducts(props) {
  return (
    <div className='container'>
    {props.products.map((item,i)=><Product product={item} key={i}/>)}
    </div>
  )
}

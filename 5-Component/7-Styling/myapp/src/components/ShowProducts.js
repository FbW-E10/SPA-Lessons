import React from 'react'
import Product from './Product'

export default function ShowProducts(props) {
  return (
    <div className='container' id='products'>
    {props.products.map((item,i)=> <Product sold={props.sold} delete={props.delete} index={i} product={item} key={i}/> )}
    </div>
  )
}

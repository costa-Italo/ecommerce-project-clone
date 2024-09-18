import React from 'react'
import Casaco from "../../assets/casaco.png"
import Price from './Price'
import Color from './Color'
import Size from './Size'
import Amount from './Amount'
import Delivery from './Delivery'

const ProductDetails = () => {
  return (
    <div className='flex flex-row justify-center items center gap-10'>
        <div>
            <img src={Casaco.src} alt=""  className=''/>
        </div>
        <div className='flex flex-col'>
          <Price />
          <Color />
          <Size />
          <Amount />
          <Delivery />
        </div>
    </div>
  )
}

export default ProductDetails

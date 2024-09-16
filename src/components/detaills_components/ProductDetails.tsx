import React from 'react'
import Casaco from "../../assets/casaco.png"
import Price from './Price'

const ProductDetails = () => {
  return (
    <div className='flex flex-row justify-center items center gap-10'>
        <div>
            <img src={Casaco.src} alt=""  className=''/>
        </div>
        <div className='flex flex-col'>
          <Price />
        </div>
    </div>
  )
}

export default ProductDetails

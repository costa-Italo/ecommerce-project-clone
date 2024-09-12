import React from 'react'
import Casaco from "../../assets/casaco.png"

const ProductDetails = () => {
  return (
    <div className='flex flex-row justify-center items center gap-10'>
        <div>
            <img src={Casaco.src} alt=""  className=''/>
        </div>
        <div><h1>cores | tamanho e etc</h1></div>
    </div>
  )
}

export default ProductDetails

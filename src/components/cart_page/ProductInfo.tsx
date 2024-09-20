import React from 'react'
import Product from "../../assets/05.png"

const ProductInfo = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-3 bg-white p-3 rounded-lg'>
      <img src={Product.src} alt="" className='w-24 rounded-lg' />
      <div className='flex flex-col justify-start'>
        <p>Nome do produto</p>
        <p className='font-bold'>R$ 99,90</p>
        <button className='text-red-600 text-xs mt-5'>Excluir</button>
      </div>
    </div>
  )
}

export default ProductInfo

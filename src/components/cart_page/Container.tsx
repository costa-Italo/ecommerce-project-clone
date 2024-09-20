import React from 'react'
import ProductInfo from './ProductInfo'

const Container = () => {
  return (
    <div className='bg-blue-50 p-5 gap-3 flex flex-col'>
      <ProductInfo />
      <ProductInfo />
    </div>
  )
}

export default Container

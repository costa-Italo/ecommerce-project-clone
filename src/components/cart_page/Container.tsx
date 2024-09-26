import React from 'react'
import ProductInfo from './ProductInfo'
import PaymentDetails from './PaymentDetails'
import BuyButton from './BuyButton'

const Container = () => {
  return (
    <div className='bg-blue-50 p-10 gap-3 flex flex-col'>
      <ProductInfo />
      <ProductInfo />
      <PaymentDetails />
      <BuyButton />
    </div>
  )
}

export default Container

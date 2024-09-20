import CardInfo from '@/components/cart_page/CardInfo'
import Container from '@/components/cart_page/Container'
import TitlePage from '@/components/cart_page/TitlePage'
import Header from '@/components/detaills_components/Header'
import ProductDetails from '@/components/detaills_components/ProductDetails'
import React from 'react'

function cartPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <div className='flex flex-row justify-center items center gap-10 mt-5'>
        <div> 
          <TitlePage />
          <CardInfo />
        </div>      
        <Container />
      </div>
    </div>
  )
}

export default cartPage

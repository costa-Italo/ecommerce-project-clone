import Banner from '@/components/Banner'
import Brand from '@/components/Brand'
import Footer from '@/components/Footer'
import FooterCards from '@/components/FooterCards'
import Gridproducts from '@/components/Gridproducts'
import HotCategory from '@/components/HotCategory'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import SlideProducts from '@/components/SlideProducts'
import Topmain from '@/components/Topmain'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar />
      <Topmain />
      <Brand />
      <HotCategory />
      <Gridproducts />
      <Banner />
      <SlideProducts />
      <NewsLetter />
      <Footer />
      <FooterCards />
    </div>
  )
}

export default index

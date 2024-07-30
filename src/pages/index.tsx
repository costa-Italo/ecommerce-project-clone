import Banner from '@/components/Banner'
import Brand from '@/components/Brand'
import Gridproducts from '@/components/Gridproducts'
import HotCategory from '@/components/HotCategory'
import Navbar from '@/components/Navbar'
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
    </div>
  )
}

export default index

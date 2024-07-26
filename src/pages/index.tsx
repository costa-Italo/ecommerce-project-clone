import Brand from '@/components/Brand'
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
    </div>
  )
}

export default index

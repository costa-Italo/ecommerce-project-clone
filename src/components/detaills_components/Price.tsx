import React from 'react'
import { useRouter } from 'next/router'

const Price = () => {
  const router = useRouter()
  const { productPrice } = router.query
  return (
    <div className='flex flex-row items-center gap-10'>
      <h1 className='text-xl font-bold text-red-600'>{productPrice as string}</h1>
      <button className='bg-red-600 p-1 rounded font-bold text-white'>50%</button>
    </div>
  )
}

export default Price

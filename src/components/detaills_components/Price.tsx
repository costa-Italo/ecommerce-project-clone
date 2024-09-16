import React from 'react'

const Price = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-10'>
      <h1 className='text-xl font-bold text-red-600'>R$ 99,90</h1>
      <button className='bg-red-600 p-1 rounded font-bold text-white'>50%</button>
    </div>
  )
}

export default Price

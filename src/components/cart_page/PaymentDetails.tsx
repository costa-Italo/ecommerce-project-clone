import React from 'react'

const PaymentDetails = () => {
  return (
    <div className='flex flex-col justify-start  gap-3 bg-white p-5 rounded-lg mt-10'>
        <p className='text-sm text-gray-500 font-bold'>Detalhes da Compra</p>
        <div className='flex gap-10 text-sm text-gray-500 justify-between mt-5'>
            <p>Nome do produto</p>
            <p>R$ 99,90</p>
        </div>
        <div className='flex gap-10 text-sm text-gray-500 justify-between'>
            <p>Entrega</p>
            <p>R$ 00,00</p>
        </div>
        <div className='flex gap-10 text-sm text-gray-500 justify-between mt-5 font-bold'>
            <p>Total</p>
            <p>R$ 99,90</p>
        </div>
        
    </div>
  )
}

export default PaymentDetails

import React from 'react'
import ProductPrice from './ProductPrice'
import SizeOptions from './SizeOptions'

const ProductDetails = () => {
    return (
        <div className='flex flex-col'>
            <ProductPrice />
            <SizeOptions />
        </div>
    )
}

export default ProductDetails

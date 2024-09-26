import React from 'react'
import ImageComponent from './ImageComponent'

const SlideProducts = () => {
    return (
        <div className='flex flex-col mt-10 justify-center items-center p-10'> 
            <div> 
                <h1 className='text-black font-semibold text-6xl'>Best Sellers</h1>
            </div>
            <div className='flex flex-row justify-between w-full items-center mt-5'>               
                </div> 
                <div>              
                    <ImageComponent />                 
                </div>                
        </div>      
    )
}

export default SlideProducts

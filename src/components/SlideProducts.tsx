import React from 'react'
import ImageComponent from './ImageComponent'

const SlideProducts = () => {
    return (
        <div className='flex flex-col mt-10 justify-center items-center p-10'> 
            <div> 
                <h1 className='text-black font-semibold text-6xl'>Best Sellers</h1>
            </div>
            <div className='flex flex-row justify-between w-full items-center mt-5'>             
                <ul className='flex flex-row ml-24 gap-5 text-black'>
                    <li className="py-1.5 text-black list-none hover:font-semibold cursor-pointer">All products</li>
                    <li className="py-1.5 text-black list-none hover:font-semibold cursor-pointer">T-shirt</li>
                    <li className="py-1.5 text-black list-none hover:font-semibold cursor-pointer">Hoodies</li>
                    <li className="py-1.5 text-black list-none hover:font-semibold cursor-pointer">Jackets</li>
                </ul>    
                    <div className='mr-28'>
                        <button className='bg-slate-800 h-10 w-24 text-white cursor-pointer'>
                            Show All
                        </button>
                    </div>
                </div> 
                <div>              
                    <ImageComponent />                 
                </div>                
        </div>      
    )
}

export default SlideProducts

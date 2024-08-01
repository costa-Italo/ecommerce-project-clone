import React from 'react'
import ImageComponent from './ImageComponent'

const SlideProducts = () => {
    return (

        // ---------- CONTAINER ----------     
        <div className='flex flex-col mt-10 justify-center items-center p-10'> 

            {/* ---------- BEST SELLERS ---------- */}
            <div> 
                <h1 className='text-black font-semibold text-6xl'>Best Sellers</h1>
            </div>

            {/* ---------- NAVEGAÇÃO ---------- */}
            <div className='flex flex-row justify-between w-full items-center mt-5'>             
                <ul className='flex flex-row ml-24 gap-5 text-black font-semibold'>
                    <li>All products</li>
                    <li>T-shirt</li>
                    <li>Hoodies</li>
                    <li>Jackets</li>
                </ul>    

                    {/* ---------- SHOW ALL ---------- */}
                    <div className='mr-28'>
                        <button className='bg-slate-800 h-10 w-24 text-white'>
                            Show All
                        </button>
                    </div>
                </div> 

                 {/* ---------- CONTAINER IMAGEM ---------- */}                
                <div>              
                    <ImageComponent />                 
                </div>                
        </div>      
    )
}

export default SlideProducts

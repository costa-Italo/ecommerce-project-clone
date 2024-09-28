import React from 'react'
import Img11 from "../assets/11.png"
import Img14 from "../assets/14.png"
import Img04 from "../assets/04.png"
import Img12 from "../assets/12.png"

const ImageComponent = () => {
    return (

        // ---------- CONTAINER ----------
        <div className='flex flex-row gap-5 p-24 '>
            
            {/* ---------- IMAGE 01 ---------- */}
            <div className='flex flex-col gap-3 '>
                <img src={Img11.src} alt=""  className='w-96 transition-transform transform hover:scale-105 rounded-lg'/> 
                    <p className='text-black font-semibold'>
                    Vestido verde longo
                    </p>
                        <div className='flex flex-row justify-between'>
                            <p className='text-slate-600'>Vestido</p>
                            <p className='text-black font-semibold'>R$149,90</p>
                        </div>
            </div>
            
            {/* ---------- IMAGE 02 ---------- */}
            <div className='flex flex-col gap-3'>
                <img src={Img14.src} alt=""  className='w-96 transition-transform transform hover:scale-105 rounded-lg'/> 
                    <p className='text-black font-semibold'>
                    Mochila nike feminina rosa
                    </p>
                        <div className='flex flex-row justify-between'>
                            <p className='text-slate-600'>Mochila</p>
                            <p className='text-black font-semibold'>R$129,90</p>
                        </div>
            </div>

               {/* ---------- IMAGE 03 ---------- */}         
                <div className='flex flex-col gap-3'>
                    <img src={Img04.src} alt=""  className='w-96 transition-transform transform hover:scale-105 rounded-lg'/> 
                        <p className='text-black font-semibold'>Casaco masculino amarelo
                    </p>
                        <div className='flex flex-row justify-between'>
                            <p className='text-slate-600'>Casaco</p>
                                <div className='flex flex-row gap-2 items-center'>
                                    <p className='text-slate-600 font-normal text-sm line-through'>R$ 149,90</p>
                                    <p className='text-black font-semibold text-red-500'>R$ 149,00</p>
                            </div>                    
                        </div>
                </div>

            {/* ---------- IMAGE 04 ---------- */}
            <div className='flex flex-col gap-3'>
                    <img src={Img12.src} alt=""  className='w-96 transition-transform transform hover:scale-105 rounded-lg'/> 
                        <p className='text-black font-semibold'>Tênis Nike Air Zoom Pegasus
                    </p>
                        <div className='flex flex-row justify-between'>
                            <p className='text-slate-600'>Tênis</p>
                                <div className='flex flex-row gap-2 items-center'>
                                    <p className='text-slate-600 font-normal text-sm line-through'>R$159,90</p>
                                    <p className='text-black font-semibold text-red-500'>R$129,90</p>
                            </div>                    
                        </div>
                </div>
        </div>
    )
}

export default ImageComponent

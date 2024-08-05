import React from 'react'
import Img06 from "../assets/06.png"
import Img07 from "../assets/07.png"
import Img09 from "../assets/09.png"
import Img05 from "../assets/05.png"
import Img08 from "../assets/08.png"
import Img10 from "../assets/10.png"

const InstagramImages = () => {
    return (
        <div className='flex flex-row w-44 justify-center items-center mt-5 gap-5'>
            <img src={Img06.src} alt="" />
            <img src={Img07.src} alt="" />
            <img src={Img09.src} alt="" />
            <img src={Img05.src} alt="" />
            <img src={Img08.src} alt="" />
            <img src={Img10.src} alt="" />
        </div>
    )
}

export default InstagramImages

import React from 'react'
import BannerImg from "../assets/zara-banner.png"
import ZaraLogo01 from "../assets/zara-logo1.svg" 
import ZaraLogo02 from "../assets/zara-logo2.svg" 

const Banner = () => {
    return (
        <div className="flex relative flex-col items-end pt-12 capitalize min-h-[776px] max-md:pl-5">
            <img src={BannerImg.src} alt="" />
            <div className="absolute flex flex-row">
            <img src={ZaraLogo02.src} alt="" />
                <img src={ZaraLogo01.src} alt="" />
            </div>
        </div>
        
    )
}

export default Banner

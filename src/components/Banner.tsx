import React from 'react'
import BannerImg from "../assets/zara-banner.png"

const Banner = () => {
    return (
        <div className="flex relative flex-col items-end pt-12 capitalize min-h-[776px] max-md:pl-5">
            <img src={BannerImg.src} alt="" />
        </div>
    )
}

export default Banner

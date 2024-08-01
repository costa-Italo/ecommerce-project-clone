import React from 'react';
import BannerImg from "../assets/zara-banner.png";
import ZaraLogo01 from "../assets/zara-logo1.svg";
import ZaraLogo02 from "../assets/zara-logo2.svg";

const Banner = () => {
    return (
        <div className="relative flex flex-col items-end pt-12 capitalize min-h-[776px] max-md:pl-5">
            <img src={BannerImg.src} alt="Banner" className='w-full'/>
            <div className="absolute flex flex-row justify-end top-0 right-0">
                <img src={ZaraLogo02.src} alt="Zara Logo 2" className="mt-48"/>
                <img src={ZaraLogo01.src} alt="Zara Logo 1" className="mt-10"/>
            </div>
            <div className="absolute bottom-48 left-2/3 transform -translate-x-1/2 text-white text-3xl z-10 flex flex-col font-light gap-10">
                Lustrous yet understated. The new evening wear collection exclusively offere at the reopened Giorgio Armani boutique in Los Angeles.
                <button className='bg-white text-black w-56 h-24 '>
                    See Collection
                </button>
            </div>
        </div>
    );
}

export default Banner;

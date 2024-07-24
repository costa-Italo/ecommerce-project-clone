import React from 'react'
import iconSearch from "../assets/icon-search.svg"
import iconUser from "../assets/icon-user.svg"
import iconBag from "../assets/icon-bag.svg"


const Navbar = () => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-5 justify-between items-center px-5 mt-1 w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto text-xl font-black text-center text-gray-800 border border-white border-solid">
                    <img src={iconSearch.src} alt="" />
                </div>
                <div className="flex gap-3 items-center self-stretch px-0.5 my-auto text-3xl text-black">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/96abb6135807d3ea4e8f1548da7b428a5c8b1514285cb3d79c7b62d9d6925b3c?apiKey=08c8ffbbe2ad46d1b8f6625cd721289e&&apiKey=08c8ffbbe2ad46d1b8f6625cd721289e" 
                        alt="Imagem 01" 
                        className="shrink-0 self-stretch my-auto aspect-[2.08] w-[31px]"
                    />
                    <div className="self-stretch">CORAL</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/96abb6135807d3ea4e8f1548da7b428a5c8b1514285cb3d79c7b62d9d6925b3c?apiKey=08c8ffbbe2ad46d1b8f6625cd721289e&&apiKey=08c8ffbbe2ad46d1b8f6625cd721289e" 
                        alt="Imagem 01" 
                        className="shrink-0 self-stretch my-auto aspect-[2.08] w-[31px]"
                    />
                </div>
                <div className="flex gap-5 justify-center self-stretch">
                    <div className="flex gap-2 justify-between px-1 py-0.5 bg-white">
                        <div className="text-xl font-black text-center text-gray-800">
                            <img src={iconUser.src} alt="" />
                        </div>
                        <div className="text-base font-semibold text-gray-800 capitalize">
                            Account
                        </div>
                    </div>
                    <div className="flex gap-2 justify-between px-1 py-0.5 text-gray-800">
                        <div className="text-xl font-black text-center">
                            <img src={iconBag.src} alt="" />
                        </div>
                        <div className="text-lg capitalize">Shopping</div>
                    </div>
                </div>
            </div>
            <div className="mt-7 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[1px] max-md:max-w-full" />
            <div className="flex gap-5 justify-between px-5 mt-8 w-full text-base leading-6 text-black capitalize max-md:flex-wrap max-md:max-w-full">
                <div>Jewerly & Accessories</div>
                <div>Clothing & Shoes</div>
                <div>Home & Living</div>
                <div>Wedding & Party</div>
                <div>Toys & Entertainment</div>
                <div>Art & Collectibles</div>
                <div>Craft Supplies & Tools</div>
            </div>
        </div>
    )
}

export default Navbar

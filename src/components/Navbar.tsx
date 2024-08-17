import iconSearch from "../assets/icon-search.svg"
import iconUser from "../assets/icon-user.svg"
import iconBag from "../assets/icon-bag.svg"
import Logo from "../assets/logo.svg"


const Navbar = () => {
    return (
        <div className="flex flex-col  bg-gray-800 bg-opacity-10">
            <div className="flex gap-5 justify-between items-center px-5 mt-1 w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto text-xl font-black text-center text-gray-800">
                    <img src={iconSearch.src} alt="" />
                </div>
                <div className="flex gap-3 items-center self-stretch px-0.5 my-auto text-3xl text-black">
                    <img src={Logo.src} alt="" />
                </div>
                <div className="flex gap-5 justify-center self-stretch">
                    <div className="flex gap-2 justify-between px-1 py-0.5">
                        <div className="text-xl font-black text-center text-gray-800">
                            <img src={iconUser.src} alt="" />
                        </div>
                        <p className="text-base font-semibold text-gray-800 capitalize cursor-pointer">
                            Account
                        </p>
                    </div>
                    <div className="flex gap-2 justify-between px-1 py-0.5 text-gray-800">
                        <div className="text-xl font-black text-center">
                            <img src={iconBag.src} alt="" />
                        </div>
                        <p className="text-base font-semibold text-gray-800 capitalize cursor-pointer">Shopping</p>
                    </div>
                </div>
            </div>
            <div className="mt-7 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[1px] max-md:max-w-full" />
            <ul className="flex gap-5 justify-between px-5 mt-8 w-full text-base leading-6 text-black capitalize max-md:flex-wrap max-md:max-w-full">
                <li className="cursor-pointer hover:font-semibold ">Jewerly & Accessories</li>
                <li className="cursor-pointer hover:font-semibold ">Clothing & Shoes</li>
                <li className="cursor-pointer hover:font-semibold ">Home & Living</li>
                <li className="cursor-pointer hover:font-semibold ">Wedding & Party</li>
                <li className="cursor-pointer hover:font-semibold ">Toys & Entertainment</li>
                <li className="cursor-pointer hover:font-semibold ">Art & Collectibles</li>
                <li className="cursor-pointer hover:font-semibold ">Craft Supplies & Tools</li>
            </ul>
        </div>
    )
}

export default Navbar

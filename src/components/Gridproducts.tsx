import filterWhite from "../assets/filterWhite.svg"
import Img15 from "../assets/15.png"
import Img14 from "../assets/14.png"
import Img13 from "../assets/13.png"
import Img04 from "../assets/04.png"
import Img11 from "../assets/11.png"
import Img12 from "../assets/12.png"
import Img17 from "../assets/17.png"
import Img16 from "../assets/16.png"

const Gridproducts = () => {
    return (
        <div className="flex flex-col p-10">
            <h1 className="self-center text-5xl font-medium text-center text-black capitalize max-md:max-w-ful max-md:text-4xl">
                Or subscribe to the newsletter
            </h1>
            
            <div className="flex ga-5 justify-between mt-9 w-full max-md:flex-wrap max-md:max-w-full">
                <nav className="flex gap-5 justify-between px-5 my-auto text-base capitalize text-black text-opacity-50">
                    <ul className="flex flex-row gap-10">
                        <li className="py-1.5 text-black list-none hover:font-semibold">all products</li>
                        <li className="py-1.5 whitespace-nowrap list-none hover:font-semibold">t-shirt</li>
                        <li className="py-1.5 whitespace-nowrap list-none hover:font-semibold">hoodies</li>
                        <li className="py-1.5 whitespace-nowrap list-none hover:font-semibold">jacket</li>
                    </ul>                    
                </nav>
                <div className="flex gap-1 justify-between px-4 py1.5 text-white whitenospace-nowrap bg-gray-800 mr-5 items-center">
                    <div className="my-auto text-sm font-black text-center">
                        <img src={filterWhite.src} alt="" />
                    </div>
                    <div className="text-base capitalize">filter</div>
                </div>
            </div>
            <div className="px-5 mt-9 w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
                            <img 
                                src={Img15.src} 
                                alt=""
                                className="w-full aspect-[0.78]" 
                            />
                            <p className="mt-6 font-semibold text-black">
                                Adicolor Classics Joggers
                            </p>
                            <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                                <p className="text-gray-600">Dress</p>
                                <p className="font-semibold text-right text-black">
                                    $63.85
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow py-px text-base capitalize max-md:mt-6">
                            <img 
                                    src={Img14.src} 
                                    alt=""
                                    className="w-full aspect=[0.78]" 
                                />
                                <p className="mt-6 font-semibold text-black">
                                    Nike Sportswear Futura Luxe
                                </p>
                                <div className="flex gap-5 justify-between mt-6 whitenospace-nowrap">
                                    <p className="text-gray-600">Bag</p>
                                    <p className="font-semibold text-right text-black">
                                        $130.00
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow py05 text-base capitalize max-md:mt-6">
                            <img 
                                src={Img13.src} 
                                alt="" 
                                className="w-full aspect-[0-78]"
                                />
                                <p className="mt-6 font-semibold text-black">
                                    Geometric print Scarf
                                </p>
                                <div className="flex gap-5 justify-between mt-7 whitespace-nowrap">
                                    <p className="text-gray-600">scarf</p>
                                    <p className="font-semibold text-right text-black">
                                        $53.00
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md-full">
                        <div className="flex flex-col grow py-0.5 capitalize max-md:mt-6">
                            <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                                <img 
                                    src={Img04.src} 
                                    alt=""
                                    className="object-cover absolute inset-0 size-full"
                                />

                                <p className="relative px-3 py-2 mb-52 bg-gray-800 mx-md:mb-10">
                                    sale
                                </p>
                            </div>

                            <p className="mt-6 text-base font-semibold text-text">
                                Yellow Reserved Hoodie
                            </p>

                            <div className="flex gap-5 justify-between mt-7 w-full whitespace-nowrap">
                                <p className="text-gray-600">
                                    Dress
                                </p>
                                <div className="flex gap-3.5 font-semi-bold text-right">
                                    <p className="text-gray-600 font-semibold text-base line-through">
                                        $364.00
                                    </p>
                                    <p className="text-base text-red-400 text-black">$155.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 mt-6 w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
                            <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-x font-semibold text-center text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                                <img 
                                    src={Img11.src} 
                                    alt=""
                                    className="object-cover absolute inset-0 size-full"
                                />
                                <p className="relative px-3 5 py-2 mb-52 bg-red-400 max-md:mb-10">
                                    hot
                                </p>
                            </div>
                            <p className="mt-6 font-semibold text-black">
                                Basic Dress Green
                            </p>
                            <div className="flex gap-5 justify-between mt-7 whitespace-nowrap">
                                <p className="text-black text-opacity-100">Dress</p>
                                <p className="font-semibold text-right text-black">
                                    $236.00
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md-full">
                        <div className="flex flex-col grow py-0.5 capitalize max-md:mt-6">
                            <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                                <img 
                                    src={Img12.src} 
                                    alt=""
                                    className="object-cover absolute inset-0 size-full"
                                />

                                <p className="relative px-3 py-2 mb-52 bg-gray-800 mx-md:mb-10">
                                    sale
                                </p>
                            </div>

                            <p className="mt-6 text-base font-semibold text-text">
                                Yellow Reserved Hoodie
                            </p>

                            <div className="flex gap-5 justify-between mt-7 w-full whitespace-nowrap">
                                <p className="text-base text-black text-opacity-50">
                                    Dress
                                </p>
                                <div className="flex gap-3.5 font-semi-bold text-right">
                                    <p className="text-gray-600 font-semibold text-base line-through">
                                        $220.00
                                    </p>
                                    <p className="text-base text-red-400 text-black">$198.00</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
                            <img 
                                src={Img17.src} 
                                alt=""
                                className="w-full aspect-[0.78]" 
                            />
                            <p className="mt-6 font-semibold text-black">
                                Nike Repel Miler
                            </p>
                            <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                                <p className="text-black text-opacity-50">Dress</p>
                                <p className="font-semibold text-right text-black">
                                    $120.50
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full w-3/12">
                        <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
                            <img 
                                src={Img16.src} 
                                alt=""
                                className="w-full aspect-[0.78]" 
                            />
                            <p className="mt-6 font-semibold text-black">
                                Nike Sportswear Futura Luxe
                            </p>
                            <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                                <p className="text-black text-opacity-50">Glasses</p>
                                <p className="font-semibold text-right text-black">
                                    $160.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gridproducts

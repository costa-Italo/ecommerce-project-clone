    import Img18  from "../assets/18.png" 
    import Img01  from "../assets/01.png" 
    import Img03  from "../assets/03.png" 
    import Img02  from "../assets/02.png" 
    import Img20  from "../assets/20.png" 

    const HotCategory = () => {
    return (
        <div className="mt-10 p-16">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img 
                        src={Img18.src} 
                        alt="" 
                        className="grouw w-full max-md:mt-6 max-md:max-w-full cursor-pointer"
                    />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                        <div className="max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <img 
                                        src={Img01.src} 
                                        alt="" 
                                        className="w-full aspect-square max-md:mt-6 cursor-pointer"
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col justify-center text-xs font-semibold text-white uppercase whitespace-nowrap max-md:mt-6">
                                        <div className="flex relative flex-col items-start pt-6 pb-20 w-full aspect-square max-md:pr-5">
                                            <img src={Img03.src} alt="" className="object-cover absolute inset-0 size-full cursor-pointer"
                                            />
                                                <span className="relative px-3 py-2 mb-32 bg-gray-800 max-md:mb-10">
                                                sale
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <img src={Img02.src} alt=""  className="w-full aspect-square max-md:mt-6 cursor-pointer"/>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <img src={Img20.src} alt="" className="w-full aspect-square max-md:mt-6 cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default HotCategory

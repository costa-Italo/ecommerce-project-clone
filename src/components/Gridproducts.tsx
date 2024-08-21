    import filterWhite from "../assets/filterWhite.svg";
    import Img15 from "../assets/15.png";
    import Img14 from "../assets/14.png";
    import Img13 from "../assets/13.png";
    import Img04 from "../assets/04.png";
    import Img11 from "../assets/11.png";
    import Img12 from "../assets/12.png";
    import Img17 from "../assets/17.png";
    import Img16 from "../assets/16.png";
    import { useHoverBuyButton } from "../hooks";

    interface ProductCardProps {
    imageSrc: string;
    productName: string;
    productCategory: string;
    productPrice: string;
    }

    const ProductCard: React.FC<ProductCardProps> = ({
    imageSrc,
    productName,
    productCategory,
    productPrice,
    }) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverBuyButton();

    return (
        <div
        className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <div className="relative group">
            <img
            src={imageSrc}
            alt={productName}
            className="w-full aspect-[0.78] cursor-pointer transition-transform transform hover:scale-105"
            />
            {isHovered && (
            <button className="absolute bottom-0 left-0 w-full bg-orange-500 text-white py-2 text-center transition-opacity">
                Comprar
            </button>
            )}
        </div>
        <p className="mt-6 font-semibold text-black">{productName}</p>
        <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
            <p className="text-gray-600">{productCategory}</p>
            <p className="font-semibold text-right text-black">{productPrice}</p>
        </div>
        </div>
    );
    };

    const Gridproducts = () => {
    return (
        <div className="flex flex-col p-10">
        <h1 className="self-center text-5xl font-medium text-center text-black capitalize max-md:max-w-ful max-md:text-4xl">
            Or subscribe to the newsletter
        </h1>

        <div className="flex ga-5 justify-between mt-9 w-full max-md:flex-wrap max-md:max-w-full">
            <nav className="flex gap-5 justify-between px-5 my-auto text-base capitalize text-black text-opacity-50">
            <ul className="flex flex-row gap-10">
                <li className="py-1.5 text-black list-none hover:font-semibold cursor-pointer">
                All Products
                </li>
                <li className="py-1.5 text-black list-none hover:font-semibold cursor-pointer">
                T-Shirt
                </li>
                <li className="py-1.5 text-black list-none hover:font-semibold cursor-pointer">
                Hoodies
                </li>
                <li className="py-1.5 text-black list-none hover:font-semibold cursor-pointer">
                Jacket
                </li>
            </ul>
            </nav>
            <div className="flex gap-1 justify-between px-4 py1.5 text-white whitenospace-nowrap bg-gray-800 mr-5 items-center">
            <div className="my-auto text-sm font-black text-center cursor-pointer">
                <img src={filterWhite.src} alt="" />
            </div>
            <div className="text-base capitalize">filter</div>
            </div>
        </div>
        <div className="px-5 mt-9 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img15.src}
                    productName="Adicolor Classics Joggers"
                    productCategory="Dress"
                    productPrice="$R$ 69,90"
                />
                </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-px text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img14.src}
                    productName="Nike Sportswear Futura Luxe"
                    productCategory="Bag"
                    productPrice="R$129,90"
                />
                </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py05 text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img13.src}
                    productName="Geometric print Scarf"
                    productCategory="scarf"
                    productPrice="R$89,90"
                />
                </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py05 text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img11.src}
                    productName="Yellow Reserved Hoodie"
                    productCategory="Dress"
                    productPrice="R$89,90"
                />
                </div>
            </div>
            </div>
        </div>

        <div className="px-5 mt-6 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
                <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-x font-semibold text-center text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                    <ProductCard
                    imageSrc={Img12.src}
                    productName="Nike Air Zoom Pegasus"
                    productCategory="shoe"
                    productPrice="R$129,90"
                    />
                </div>
                </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md-full">
                <div className="flex flex-col grow py-0.5 capitalize max-md:mt-6">
                <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                    <ProductCard
                    imageSrc={Img04.src}
                    productName="Yellow Reserved Hoodie"
                    productCategory="Dress"
                    productPrice="$155.00"
                    />
                </div>
                </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md-full">
                <div className="flex flex-col grow py-0.5 capitalize max-md:mt-6">
                <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                    <ProductCard
                    imageSrc={Img17.src}
                    productName="Nike Repel Miler"
                    productCategory="Dress"
                    productPrice="R$119,90"
                    />
                </div>
                </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md-full">
                <div className="flex flex-col grow py-0.5 capitalize max-md:mt-6">
                <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                    <ProductCard
                    imageSrc={Img16.src}
                    productName="Nike Sportswear Futura Luxe"
                    productCategory="Glasses"
                    productPrice="R$149,90"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };
    export default Gridproducts;

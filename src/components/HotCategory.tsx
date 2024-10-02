    import Img18 from "../assets/18.png";
    import Img01 from "../assets/01.png";
    import Img03 from "../assets/03.png";
    import Img02 from "../assets/02.png";
    import Img20 from "../assets/20.png";
    import { useHoverBuyButton } from "../hooks";

    interface ProductCardProps {
    imageSrc: string;
    }

    const ProductCard: React.FC<ProductCardProps> = ({ imageSrc }) => {
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
            className="w-full aspect-[0.78] cursor-pointer transition-transform transform hover:scale-105 rounded-lg"
            />
            {isHovered && (
            <button className="absolute bottom-0 left-0 w-full bg-orange-500 text-white py-2 text-center transition-opacity">
                Comprar
            </button>
            )}
        </div>
        <div className="flex gap-5 justify-between mt-6 whitespace-nowrap"></div>
        </div>
    );
    };

    const HotCategory = () => {
    return (
        <div className="flex justify-center items-center gap-56 mt-10">
        <div className="">
            <ProductCard imageSrc={Img18.src} />
        </div>
        <div className="flex flex-col w-96 justify-center items-center">
            <div className="flex flex-row gap-10">
                <ProductCard imageSrc={Img01.src} />
                <ProductCard imageSrc={Img03.src} />
            </div>
            <div className="flex flex-row gap-10">
                <ProductCard imageSrc={Img02.src} />
                <ProductCard imageSrc={Img20.src} />
            </div>
        </div>
        </div>
    );
    };

    export default HotCategory;

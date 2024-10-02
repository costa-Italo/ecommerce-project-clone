    import React from "react";
    import Img11 from "../assets/11.png";
    import Img14 from "../assets/14.png";
    import Img04 from "../assets/04.png";
    import Img12 from "../assets/12.png";
    import { useHoverBuyButton } from "@/hooks";

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
            className="w-full aspect-[0.78] cursor-pointer transition-transform transform hover:scale-105 rounded-lg"
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

    const ImageComponent = () => {
    return (

        <div className="flex flex-row gap-5 p-24 ">
        <div className="flex flex-col gap-3 ">
            <ProductCard
            imageSrc={Img11.src}
            productName="Vestido verde longo"
            productCategory="Vestido"
            productPrice="R$149,90"
            />
        </div>

        <div className="flex flex-col gap-3">
            <ProductCard
            imageSrc={Img14.src}
            productName="Mochila nike feminina rosa"
            productCategory="Mochila"
            productPrice="R$129,90"
            />
        </div>

        <div className="flex flex-col gap-3">
            <ProductCard
            imageSrc={Img04.src}
            productName="Casaco masculino amarelo"
            productCategory="Casaco"
            productPrice="R$ 149,90"
            />
        </div>

        <div className="flex flex-col gap-3">
            <ProductCard
            imageSrc={Img12.src}
            productName="Têsnis Nike Air Zoom Pegasus"
            productCategory="Tênis"
            productPrice="R$ 129,90"
            />
        </div>
        </div>
    );
    };

    export default ImageComponent;

import SearchIcon from "../assets/icon-search.svg";
import Logo from "../assets/logo.svg";
import IconUser from "../assets/icon-user.svg";
import IconBag from "../assets/icon-bag.svg";
import Line from "../assets/line.svg";
import ImageProduct from "../assets/19.png";
import IconBagWhite from "../assets/icon-bag-white.svg";
import Rectangle from "../assets/Rectangle.svg";
import Flower from "../assets/flower.svg";
import Frame from "../assets/Frame.svg";
const TopMain = () => {
    return (
        <div className="bg-#f4f4f5 w-full h-847px">
            <header className="flex items-center justify-between p-4  max-w-[1320px] mx-auto mt-5">
                <div className="flex items-center">
                    <img src={SearchIcon.src} alt="Ícone de pesquisa" />
                </div>
                <div className="flex-1 flex justify-center ml-5">
                    <img src={Logo.src} alt="Logo Coral" />
                </div>
                <div className="flex items-center gap-9">
                    <div className="flex flex-row gap-2">
                        <img src={IconUser.src} alt="Usuário"/> <p className="text-#1E2832">Account</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img src={IconBag.src} alt="Compras" /> <p className="text-#1E2832">Shopping</p>
                    </div>           
                </div>
            </header>

            <div className="flex items-center justify-center mt-5">
                <img src={Line.src} alt="" />
            </div>

            <div className="flex">
                <ul className="flex justify-center flex-1 gap-16 mt-5">
                    <li>Jewelry & Accessories</li>
                    <li>Clothing & Shoes</li>
                    <li>Home & Living</li>
                    <li>Wedding & Party</li>
                    <li>Toys & Entertaiment</li>
                    <li>Art & Collectibles</li>
                    <li>Craft Supplies & Tools</li>
                </ul>
            </div>

            <div className="flex flex-row justify-between mt-28 items-center">
                <div>
                    <img className="mt-96" src={Frame.src} alt="" />
                </div>
                <div className="">
                    <h1 className="text-6xl font-light text-#1E2832">Collections</h1>
                    <p className="mt-10 font-medium">You Can Explore And Shop Many Different Collection</p>
                    <p className="mt-10 font-medium">From Various Barands Here.</p>
                    <button className=" flex flex-row justify-evenly items-center mt-10 bg-colorButtom text-white w-40 h-14">
                        <img src={IconBagWhite.src} alt="" />
                        Shop Now</button>
                </div>
                <div className="relative flex items-center">
    <img className="relative z-10 rounded-custom-1 w-72 top-10 h-96" src={ImageProduct.src} alt="ImageProduct" />
    <img className=" absolute top-14 left-4 w-72 h-96" src={Rectangle.src} alt="Rectangle" />
</div>
<div>
    <img className="" src={Flower.src} alt="" />
</div>

            </div>
        </div>
    )
}

export default TopMain;

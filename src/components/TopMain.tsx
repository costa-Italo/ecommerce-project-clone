import SearchIcon from "../assets/icon-search.svg";
import Logo from "../assets/logo.svg";
import IconUser from "../assets/icon-user.svg";
import IconBag from "../assets/icon-bag.svg";
import Line from "../assets/line.svg";

const TopMain = () => {
    return (
        <div className="bg-#f4f4f5 w-full h-847px">
            <header className="flex items-center justify-between p-4  max-w-[1320px] mx-auto mt-5">
                <div className="flex items-center">
                    <img src={SearchIcon.src} alt="Ícone de pesquisa" />
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={Logo.src} alt="Logo Coral" />
                </div>
                <div className="flex items-center gap-9">
                    <div className="flex flex-row gap-2">
                        <img src={IconUser.src} alt="Usuário"/> <p className=" text-#1E2832">Account</p>
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
        </div>
    )
}

export default TopMain;

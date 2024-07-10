import SearchIcon from "../assets/icon-search.svg";
import Logo from "../assets/logo.svg";
import IconUser from "../assets/icon-user.svg";
import IconBag from "../assets/icon-bag.svg";

const TopMain = () => {
    return (
        <div className="bg-#f4f4f5 w-full h-847px">
            <header className="flex items-center justify-between p-4  max-w-[1320px] mx-auto">
                <div className="flex items-center">
                    <img src={SearchIcon.src} alt="Ícone de pesquisa" />
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={Logo.src} alt="Logo Coral" />
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex flex-row gap-2">
                        <img src={IconUser.src} alt="Usuário"/> <p className=" text-#1E2832">Account</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img src={IconBag.src} alt="Compras" /> <p className="text-#1E2832">Shopping</p>
                    </div>           
                </div>
            </header>
        </div>
    )
}

export default TopMain;

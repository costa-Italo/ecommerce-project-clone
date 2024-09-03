import LogoStore from "../../assets/logo-store.svg"
import userIcon from "../../assets/userProduct.svg"
import HeartIcon from "../../assets/heartIcon.svg"
import CartIcon from "../../assets/iconCart.svg"
import SearchInput from "./SearchInput"


const Header = () => {
  return (
    <header className='flex flex-wrap gap-5 justify-between px-20 pt-6 w-full bg-white max-md:px-5 max-md:max-w-full'>
        <nav className='flex gap-10 items-start text-base leading-tight text-center uppercase whitespace-nowrap text-zinc-900 items-center'>
            <img src={LogoStore.src} alt="Logo da loja" className="object-contain shrink-0 aspect-square w-[41px]"/>
            <div className="flex overflow-hidden items-center">
                <ul className="flex flex-row gap-5">
                    <li className="cursor-pointer hover:font-bold">Feminino</li>
                    <li className="cursor-pointer hover:font-bold">Masculino</li>
                    <li className="cursor-pointer hover:font-bold">Infantil</li>
                </ul>
            </div>
        </nav>
        <div className="flex flex-wrap gap-10 items-center self-start text-sm leading-relaxed text-zinc-500">
            <SearchInput />
            <img src={userIcon.src} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square cursor-pointer"/>
            <img src={HeartIcon.src} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square cursor-pointer"/>
            <img src={CartIcon.src} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square cursor-pointer"/>
        </div>
    </header>
  )
}

export default Header

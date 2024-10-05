import carrinho from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface AmountProps {
  productName: string;
  productPrice: string;
}

const Amount: React.FC<AmountProps> = ({ productName, productPrice }) => {
  const router = useRouter();

  const handleAddToCart = () => {
    // Redireciona para a página do carrinho com o nome do produto e o preço como parâmetros
    router.push(`/cart-page?productName=${encodeURIComponent(productName)}&productPrice=${encodeURIComponent(productPrice)}`);
  };

  return (
    <div className='mt-5 flex flex-row gap-3'>
      <form action="">
        <input type="number" className='border border-gray-400 p-3 w-14 text-center rounded-sm focus:outline-none' />
      </form>

      <button
        className='p-3 bg-green-900 text-white font-semibold rounded-sm flex justify-center items-center gap-2'
        onClick={handleAddToCart}
      >
        <img src={carrinho.src} alt="" />
        Adicionar ao carrinho
      </button>

      <button className='p-3 bg-transparent text-green-900 font-semibold rounded-sm flex justify-center items-center gap-2 border border-green-900'>
        <img src={heart.src} alt="" />
        Favoritar
      </button>
    </div>
  );
};

export default Amount;

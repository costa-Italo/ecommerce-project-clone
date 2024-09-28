const NewsletterForm = () => {
    return (
        <div className='flex justify-between gap-10 items-center'>
            <form className="flex overflow-hidden px-12 py-5 text-center rounded-xl border border-black border-solid font-[231] justify-center mt-2">
                <input 
                    type="text"
                    id="storeName"
                    placeholder="Cadastre seu email gratuitamente"
                    className="bg-transparent outline-none w-96 text-center"
                />           
        </form>
        <button className="px-7 py-5 text-white bg-gray-950 max-md:px-5 transition-transform transform hover:scale-105 w-44 h-14 flex items-center justify-center text-gray-50 rounded-lg">
                    Enviar
        </button>
    </div>
    )
}

export default NewsletterForm

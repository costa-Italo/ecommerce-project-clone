const NewsletterForm = () => {
    return (
        <div className='flex justify-between'>
        <form className="flex mt-20 e max-md:flex-wrap justify-center w-full gap-48">
            <div className="flex flex-col grow shrink-0  font-semibold basis-0 text-gray-800 text-opacity-50 w-fit ">
                <label htmlFor="emailInput" className="sr-only">Email address</label>
        <input
            id="emailInput"
            type="email"
            placeholder="Email address..."
            className="self-start ml-4 max-md:ml-2.5 bg-transparent border-none"
            aria-label="Email address"
        />
            <div className="mt-4 h-0.5 bg-black border-2 border-black border-solid w-96" />
        </div>
        <button type="submit" className="">
            <span className="px-4 bg-transparent">SUBMIT</span>
            <div className="mt-4 h-0.5 bg-black border-2 border-black border-solid w-24" />
        </button>
    </form>
    </div>
    )
}

export default NewsletterForm

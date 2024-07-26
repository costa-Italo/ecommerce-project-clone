import imageProduct from "../assets/image-product.png"
import bagIcon from "../assets/icon-bag-white.svg"

const Topmain = () => {
  return (
    <div className="flex justify-center items-center px-16 py-16 shadow-sm bg-gray-800 bg-opacity-10 max-md:px-5">
      <div className="mt-36 max-w-full max-md:mt-10 w-full[1226px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col max-md:ml-0 max-md:w-full w-[61%]">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt10 max-md:max-w-full">
              <div className="text-7xl font-light captalize max-md:max-w-full max-md:text-4xl leadind-[54.76px]">
                Collections
              </div>
              <div className="mt-16 text-3xl captalize max-md:mt-10 max-md:max-w-full leadind-[55px]">
              you can explore ans shop many differnt collection
              <br />
              from various barands here.
              </div>
              <div className="flex gap-2 justify-between self-start px-7 py-5 mt-20 text-white bg-gray-800 max-md:px-5 max-md:mt-10">
                <div className="my-auto text-2xl font-black text-center">
                  <img src={bagIcon.src} alt="" /></div>
                <div className="text-3xl captalize">shop now</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
            <img 
              src={imageProduct.src}
              alt="Image product" 
              className="grow w-full aspect-[0.79] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
      )
}

export default Topmain

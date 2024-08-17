import LogoCoral from "../assets/logo.svg"
import Facebook from "../assets/facebookIcon.svg"
import Twitter from "../assets/twitterIcon.svg"
import Linkedin from "../assets/linkedinIcon.svg"
import Instagram from "../assets/instagramIcon.svg"

const Footer = () => {
    return (
        <div className='bg-white flex justify-center items-center h-96 p-36 ml-20'>
            <div className='flex flex-row items-center justify-center w-full'>
                <div className="w-96">
                    <img src={LogoCoral.src} alt="" />
                    <p className="mt-5">Moda Autêntica para Todos os Momentos, Viva o Estilo Coral.</p>
                    <div className="flex flex-row mt-5 justify-start gap-10">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook.src} alt="facebook" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <img src={Twitter.src} alt="twitter" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin.src} alt="Linkedin" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">                     
                        <img src={Instagram.src} alt="Instagram" />
                    </a>                                               
                    </div>                   
                </div>
                <div className="w-96 ml-5">
                    <h1 className="font-bold" >CATALOG</h1>                  
                    <ul className="mt-5">
                        <li className="text-gray-600 cursor-pointer hover:font-semibold ">Necklaces</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Hoodies</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Jewerly Box</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">T-Shirt</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Jacket</li>
                    </ul>      
                </div>
                <div className="w-96">
                <h1 className="font-bold" >ABOUT US</h1>                  
                    <ul>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Our Producers</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Sitemap</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">FAQ</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">About Us</li>
                        <li className="mt-2 text-gray-600 cursor-pointerhover:font-semibold ">Terms & Conditions</li>
                    </ul>      
                </div>
                <div className="w-96">
                <h1 className="font-bold" >COSTUMER SERVICES</h1>                  
                    <ul>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Contact Us</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Track Your Order</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Product CAre & Repair</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Book An Appoiment</li>
                        <li className="mt-2 text-gray-600 cursor-pointer hover:font-semibold ">Shipping & Returns</li>
                    </ul>      
                </div>
            </div>      
        </div>
    )
}

export default Footer

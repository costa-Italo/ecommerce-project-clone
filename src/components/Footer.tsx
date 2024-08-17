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
                        <li className="text-gray-600 cursor-pointer">Necklaces</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">Hoodies</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">Jewerly Box</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">T-Shirt</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">Jacket</li>
                    </ul>      
                </div>
                <div className="w-96">
                <h1 className="font-bold" >ABOUT US</h1>                  
                    <ul>
                        <li className="mt-2 text-gray-600 cursor-pointer">Our Producers</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">Sitemap</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">FAQ</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">About Us</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">Terms & Conditions</li>
                    </ul>      
                </div>
                <div className="w-96">
                <h1 className="font-bold" >COSTUMER SERVICES</h1>                  
                    <ul>
                        <li className="mt-2 text-gray-600 cursor-pointer">Contact Us</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">Track Your Order</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">Product CAre & Repair</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">Book An Appoiment</li>
                        <li className="mt-2 text-gray-600 cursor-pointer">Shipping & Returns</li>
                    </ul>      
                </div>
            </div>      
        </div>
    )
}

export default Footer

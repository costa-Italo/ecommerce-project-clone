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
                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua</p>
                    <div className="flex flex-row mt-5 justify-start gap-10">
                        <img src={Facebook.src} alt="" />
                        <img src={Twitter.src} alt="" />
                        <img src={Linkedin.src} alt="" />
                        <img src={Instagram.src} alt="" />
                    </div>                   
                </div>
                <div className="w-96 ml-5">
                    <h1 className="font-bold" >CATALOG</h1>                  
                    <ul className="mt-5">
                        <li className="text-gray-600">Necklaces</li>
                        <li className="mt-2 text-gray-600">Hoodies</li>
                        <li className="mt-2 text-gray-600">Jewerly Box</li>
                        <li className="mt-2 text-gray-600">T-Shirt</li>
                        <li className="mt-2 text-gray-600">Jacket</li>
                    </ul>      
                </div>
                <div className="w-96">
                <h1 className="font-bold" >ABOUT US</h1>                  
                    <ul>
                        <li className="mt-2 text-gray-600">Our Producers</li>
                        <li className="mt-2 text-gray-600">Sitemap</li>
                        <li className="mt-2 text-gray-600">FAQ</li>
                        <li className="mt-2 text-gray-600">About Us</li>
                        <li className="mt-2 text-gray-600">Terms & Conditions</li>
                    </ul>      
                </div>
                <div className="w-96">
                <h1 className="font-bold" >COSTUMER SERVICES</h1>                  
                    <ul>
                        <li className="mt-2 text-gray-600">Contact Us</li>
                        <li className="mt-2 text-gray-600">Track Your Order</li>
                        <li className="mt-2 text-gray-600">Product CAre & Repair</li>
                        <li className="mt-2 text-gray-600">Book An Appoiment</li>
                        <li className="mt-2 text-gray-600">Shipping & Returns</li>
                    </ul>      
                </div>
            </div>      
        </div>
    )
}

export default Footer

import Img18 from "../assets/18.png"
import Img01 from "../assets/01.png"
import Img03 from "../assets/03.png"
import Img02 from "../assets/02.png"
import Img20 from "../assets/20.png"

const HotCategory = () => {
    return (
        <div className="flex flex-row  items-center mr-36">

            <div className="-rotate-90">
                <h1 className="text-xl mt-80 w-96">EXPLORE NEW AND POPULAR STYLES</h1>
            </div>

            <div className="flex flex-row gap-3">
                <div className="flex-col">
                    <img src={Img18.src} alt="" className=""/>
                </div>

                <div className="flex flex-row gap-5">
                    <div className="">
                        <img src={Img01.src} alt="" className="w-80" />
                        <img src={Img02.src} alt="" className="w-80 mt-2"/>
                    </div>
                    <div className="">
                        <img src={Img03.src} alt="" className="w-80"/>
                        <img src={Img20.src} alt="" className="w-80 mt-2"/>
                    </div>
                </div>
            </div> 
        </div>
    )
    }

export default HotCategory

    import Divider from "@/components/detaills_components/Divider";
import ImageProduct from "@/components/detaills_components/ImageProduct";
import ProductName from "@/components/detaills_components/ProductName";
    import React from "react";

    const details = () => {
    return (
        <div className="flex flex-col p-14">

            <div className="">
                <ProductName />
            </div>

            <div>
                <Divider />
            </div>

            <div className="flex flex-row gap-5 justify-center items-center">
                <ImageProduct />
                <div>OUTRAS INFOS</div>
            </div>

        </div>
    );
    };

    export default details;

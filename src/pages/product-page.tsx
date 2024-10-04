import Header from "@/components/detaills_components/Header";
import NavigationTabs from "@/components/detaills_components/NavigationTabs";
import ProductName from "@/components/detaills_components/ProductName";
import DividerDetails from "../assets/divider.svg"
import ProductDetails from "@/components/detaills_components/ProductDetails";

    const ProductPage = () => {
    return (
        <div className="flex overflow-hidden flex-col bg-white">
            <ProductName />
            <NavigationTabs />
            <img src={DividerDetails.src} alt="" className="p-16"/>
            <ProductDetails />
            
        </div>
    );
    };

    export default ProductPage;

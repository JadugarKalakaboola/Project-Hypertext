import react from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContainerBlock({ children }){
    return(
        <div className="min-h-screen bg-[#ebeef1] dark:bg-[#1E293B] my-0">
            <div className="my-0 mx-auto">
                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
    )
}
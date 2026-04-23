import { useState } from "react";

import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import ApplicationForm from "../Components/ApplicationForm";
import ApplicationPreview from "../Components/ApplicationPreview";
import Feature from "../Components/Feature";
import { useRef } from "react";


const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [applicationPreview, setApplicationPreview] = useState("")
    const formRef = useRef(null);

    const handleScroll = () => {
        setTimeout(() => {
            formRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };

    return (
        <>

            <Navbar />
            <div ref={formRef} className={`relative ${applicationPreview ? "h-210" : isFormOpen ? "h-180" : "h-100"} pb-10`}>
                <Hero handleScroll={handleScroll} setIsFormOpen={setIsFormOpen} />

                <ApplicationForm isFormOpen={isFormOpen} setApplicationPreview={setApplicationPreview} setIsFormOpen={setIsFormOpen} />
                <ApplicationPreview setIsFormOpen={setIsFormOpen} applicationPreview={applicationPreview} setApplicationPreview={setApplicationPreview} />
                <Feature />
            </div>


        </>
    )
}

export default Home;
import { useState, useEffect } from "react";

import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import ApplicationForm from "../Components/ApplicationForm";
import ApplicationPreview from "../Components/ApplicationPreview";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
import { useRef } from "react";


const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [applicationPreview, setApplicationPreview] = useState("")
    const formRef = useRef(null);
    const previewRef = useRef(null);

    const handleScroll = () => {
        setTimeout(() => {
            formRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };
    useEffect(() => {
        if (applicationPreview) {
            previewRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [applicationPreview]);

    return (
        <>

            <Navbar />
            <div ref={formRef} className={`relative ${applicationPreview ? "h-220" : isFormOpen ? "h-180" : "h-auto"} pb-10`}>
                <Hero handleScroll={handleScroll} setIsFormOpen={setIsFormOpen} />

                <ApplicationForm handleScroll={handleScroll} isFormOpen={isFormOpen} setApplicationPreview={setApplicationPreview} setIsFormOpen={setIsFormOpen} />
                <div ref={previewRef}>
                    <ApplicationPreview handleScroll={handleScroll} setIsFormOpen={setIsFormOpen} applicationPreview={applicationPreview} setApplicationPreview={setApplicationPreview} />
                </div>
                <Feature />

            </div>
            <Footer applicationPreview={applicationPreview} />


        </>
    )
}

export default Home;
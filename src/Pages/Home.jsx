import { useState } from "react";

import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import ApplicationForm from "../Components/ApplicationForm";

const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    return (
        <>

            <Navbar />
            <div className="relative h-180 pb-10">
                <Hero setIsFormOpen={setIsFormOpen} />

                <ApplicationForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
            </div>
        </>
    )
}

export default Home;
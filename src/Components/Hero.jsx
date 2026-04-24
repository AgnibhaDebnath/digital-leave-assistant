

const Hero = ({ setIsFormOpen, handleScroll }) => {

    return (

        <section className="mt-30 md:mt-50 flex justify-center flex-col items-center ">
            <div className="py-2 px-1">
                <h1 className="max-[384px]:text-[1.35rem] text-[1.45rem] min-[490px]:text-3xl min-[600px]:text-4xl min-[900px]:text-5xl font-bold font-[Inter] tracking-wide text-gray-900">Easy Leave Application Generator</h1>
            </div>
            <div className="flex flex-col gap-3  items-center">
                <div className="flex justify-center mt-4">
                    <h2 className=" text-sm min-[507px]:text-[1rem] min-[570px]:text-lg text-gray-600 font-[inter] text-center">
                        Create professional leave applications instantly for Anganwadi workers
                    </h2>
                </div>
                <div>
                    <button onClick={() => {
                        setIsFormOpen(true)
                        handleScroll()
                    }} className="px-10 py-1.5 rounded-lg hover:bg-green-600  bg-green-500 text-white cursor-pointer hover:scale-105 transition text-[1.1rem] duration-200 font-medium font-[Inter]">Start Now</button>
                </div>
            </div>
        </section>
    )
}


export default Hero;
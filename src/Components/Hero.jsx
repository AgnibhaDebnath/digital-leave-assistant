const Hero = ({ setIsFormOpen }) => {
    return (
        <section className="mt-30 flex justify-center flex-col items-center ">
            <div className="py-2 px-1">
                <h1 className="max-[374px]:text-[1.4rem] text-[1.45rem] min-[490px]:text-3xl min-[600px]:text-4xl min-[900px]:text-5xl font-bold font-[Inter] tracking-wide text-gray-900">Easy Leave Application Generator</h1>
            </div>
            <div className="flex flex-col gap-3  items-center">
                <div>
                    <p className="text-lg font-[Inter] tracking-wide text-gray-500 ">For Anganwadi Workers</p>
                </div>
                <div>
                    <button onClick={() => setIsFormOpen(true)} className="px-2.5 py-1 rounded-md bg-green-100 hover:bg-green-200 text-green-500 cursor-pointer hover:scale-105 transition duration-200 font-medium font-[Inter]">Start now</button>
                </div>
            </div>
        </section>
    )
}


export default Hero;
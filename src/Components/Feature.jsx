import { FaBolt, FaCheckCircle, FaSmile } from "react-icons/fa";

const Feature = () => {
    return (
        <section className="pt-20 md:pt-30 pb-10 bg-white">

            <div className="flex flex-col gap-3">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold font-[inter] pb-3">Why Use This App?</h1>
                </div>
                <div className="flex flex-wrap items-center min-[814px]:flex-row justify-center gap-8 min-[830px]:gap-10 min-[1000px]:gap-14 mx-1">
                    <div className="relative shadow-xl p-5 flex items-center flex-col w-72 rounded-2xl font-[inter]">
                        <h3 className="font-semibold text-lg">Fast</h3>
                        <p className="text-gray-500">Generate applications in seconds</p>
                        <FaBolt className="absolute top-0 text-green-500 text-2xl" />
                    </div>

                    <div className="relative shadow-xl p-5 flex items-center flex-col w-72 rounded-2xl font-[inter]">
                        <h3 className="font-semibold text-lg ">Accurate</h3>
                        <p className="text-gray-500">Proper format every time</p>
                        <FaCheckCircle className="absolute top-0 text-2xl text-blue-500" />
                    </div>

                    <div className="relative shadow-xl p-5 flex items-center flex-col w-72 rounded-2xl font-[inter]">
                        <h3 className="font-semibold text-lg">Easy</h3>
                        <p className="text-gray-500">Simple form for everyone</p>
                        < FaSmile className="absolute top-0 text-2xl text-yellow-500" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Feature;
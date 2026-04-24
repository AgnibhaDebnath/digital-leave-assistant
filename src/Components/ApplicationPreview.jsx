import { useState } from "react"
import { FaEdit, FaCopy } from "react-icons/fa";
const ApplicationPreview = ({ applicationPreview, setIsFormOpen, setApplicationPreview, handleScroll }) => {
    const [copied, setCopied] = useState(false)
    const handleCopy = () => {
        const fullApplication = `Date: ${application_date}\n\n${applicationPreview}`;
        navigator.clipboard.writeText(fullApplication);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    }

    const application_date = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    return (
        <>
            {applicationPreview && <div className="w-86 z-50 min-[430px]:w-100 min-[513px]:w-120 min-[600px]:w-140 min-[683px]:w-160 min-[770px]:w-180 mx-auto mt-3  p-6 bg-white shadow-xl rounded-xl text-sm leading-relaxed absolute max-[416px]:top-25 top-21 min-[570px]:top-23 min-[600px]:top-25 left-1/2 transform -translate-x-1/2">

                <h3 className="text-2xl font-semibold text-center mb-3 font-[inter]">
                    Application Preview
                </h3>
                <div className="flex justify-end ">
                    <p className="font-[inter]">Date:{application_date}</p>
                </div>
                <pre className="whitespace-pre-wrap font-[inter] mt-1">

                    {applicationPreview}
                </pre>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => {
                            setApplicationPreview("");
                            setIsFormOpen(true);
                            handleScroll();
                        }}

                        className=" bg-gray-400 font-[inter] font-medium text-white px-4 py-1.5 rounded-lg cursor-pointer text-base "
                    >
                        <FaEdit className="inline mb-1" />  Edit Application
                    </button>

                    <button onClick={handleCopy} className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1.5 rounded-xl font-[inter] cursor-pointer"><FaCopy className="inline mb-1 mr-1" />{!copied ? "Copy" : "Copied"}
                    </button>

                </div>
            </div >}
        </>
    )
}

export default ApplicationPreview
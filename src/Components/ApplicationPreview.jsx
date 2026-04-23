
const ApplicationPreview = ({ applicationPreview, setIsFormOpen, setApplicationPreview }) => {
    const application_date = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    return (
        <>
            {applicationPreview && <div className="w-86 z-50 min-[430px]w-100 min-[513px]:w-120 min-[600px]:w-140 min-[683px]:w-160 min-[770px]:w-180 mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl text-sm leading-relaxed absolute top-16 min-[600px]:top-18 left-1/2 transform -translate-x-1/2">

                <h3 className="text-2xl font-semibold text-center mb-3 font-[inter]">
                    Application Preview
                </h3>
                <div className="flex justify-end ">
                    <p className="font-[inter]">Date:{application_date}</p>
                </div>
                <pre className="whitespace-pre-wrap font-[inter]">

                    {applicationPreview}
                </pre>
                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            setApplicationPreview("");
                            setIsFormOpen(true);
                        }}

                        className="mt-4 bg-gray-400 font-[inter] font-medium text-white px-4 py-2 rounded-lg cursor-pointer text-base"
                    >
                        Edit Application
                    </button>
                </div>
            </div >}
        </>
    )
}

export default ApplicationPreview
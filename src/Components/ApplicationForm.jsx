import { useState } from "react";
import { RxCross2 } from "react-icons/rx"
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css"
import { generateApplication } from "../utils/applicationTemplate";
const ApplicationForm = ({ isFormOpen, setIsFormOpen, setApplicationPreview }) => {
    const [fullName, setFullName] = useState("")
    const [centerNo, setCenterNo] = useState("")
    const [reasonForLeave, setReasonForLeave] = useState("")
    const [reasonDetails, setReasonDetails] = useState("");
    const [application, setApplication] = useState("");
    const [startDate, setStartDate] = useState(null)
    const [errors, setErrors] = useState({})
    const [endDate, setEndDate] = useState(null)

    const [village, setVillage] = useState("")
    const [gramPanchayat, setGramPanchayat] = useState("")

    const validate = () => {
        let newErrors = {};

        if (!fullName.trim()) {
            newErrors.NameError = "Name is required";
        }
        if (!centerNo.trim()) {
            newErrors.CenterNoError = "Center number is required";
        }
        if (reasonForLeave == "other" && (!reasonDetails.trim())) {
            newErrors.ReasonDetailsError = "Please write reason details";
        }

        if (!startDate) {
            newErrors.StartDateError = "Start date is required";
        }

        if (!endDate) {
            newErrors.EndDateError = "End date is required";
        }

        if (!reasonForLeave.trim()) {
            newErrors.ReasonError = "Reason for leave is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleGenerate = (e) => {
        e.preventDefault();

        if (!validate()) return

        const text = generateApplication({ fullName, centerNo, village, gramPanchayat, startDate, endDate, reasonForLeave, reasonDetails });
        setApplicationPreview(text)

        setIsFormOpen(false)
    };


    return (
        <>
            {isFormOpen && <div className="z-50 w-85 min-[490px]:w-100 min-[1000px]:w-120 absolute max-[416px]:top-27 top-24 min-[600px]:top-28 xl:top-29 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl p-4 rounded-2xl ">
                <div className="flex justify-end px-2 ">
                    <button onClick={() => {
                        setIsFormOpen(false)
                        setCenterNo("")
                        setFullName("")
                        setErrors({});
                        setReasonForLeave("")
                        setReasonDetails("")
                        setStartDate(null)
                        setEndDate(null)
                    }

                    } className="cursor-pointer"><RxCross2 size={25} strokeWidth={1} /></button>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-center font-[Inter]  ">
                    Leave Application Form
                </h2>
                <form className="flex flex-col w-full items-center gap-3 ">
                    <div className="w-70 min-[490px]:w-80">
                        <input
                            placeholder="Full name"
                            value={fullName}
                            onChange={(e) => {
                                const only_letter = /^[A-Za-z\s]*$/;
                                const value = e.target.value
                                if (only_letter.test(value)) {
                                    setFullName(value)
                                    setErrors(prev => ({ ...prev, NameError: "" }))
                                }
                            }}
                            className="border border-gray-500 shadow-sm px-2 pl-4 font-medium py-1.5 rounded-2xl  w-full font-[Inter] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.NameError && <p className="text-red-500 pl-3 w-70 min-[410px]:w-80">{errors.NameError}</p>}
                    </div>
                    <div className="w-70 min-[490px]:w-80">
                        <input
                            value={centerNo}
                            placeholder="Center No"
                            onChange={(e) => {
                                const only_number = /^[0-9]*$/
                                const value = e.target.value;
                                if (only_number.test(value)) {
                                    setCenterNo(value)
                                    setErrors(prev => ({ ...prev, CenterNoError: "" }))
                                }

                            }}
                            className="border border-gray-500 shadow-sm px-2 py-1.5 pl-4 font-medium rounded-2xl w-full font-[Inter] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.CenterNoError && <p className="text-red-500 pl-3 w-70 min-[410px]:w-80">{errors.CenterNoError}</p>}
                    </div>

                    <div className="w-70 min-[490px]:w-80 relative ">
                        <DatePicker
                            selected={startDate}
                            dateFormat="dd MMMM yyyy"
                            minDate={Date.now()}
                            isClearable={true}
                            onChange={(date) => {
                                setStartDate(date)
                                setErrors(prev => ({ ...prev, StartDateError: "" }))
                            }}
                            placeholderText="Select start date"
                            className="border border-gray-500 shadow-sm px-2 py-1.5 pl-4 font-medium rounded-2xl w-full font-[Inter] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
                        />

                        <FaCalendarDays className="absolute right-4 text-gray-600 top-2.5 pointer-events-none" />
                        {errors.StartDateError && <p className="text-red-500 pl-3 w-70 min-[410px]:w-80">{errors.StartDateError}</p>}
                    </div>
                    <div className="w-70 min-[490px]:w-80 relative">
                        <DatePicker
                            selected={endDate}
                            dateFormat="dd MMMM yyyy"
                            minDate={Date.now()}
                            isClearable={true}
                            onChange={(date) => {
                                setEndDate(date)
                                setErrors(prev => ({ ...prev, EndDateError: "" }))
                            }
                            }
                            placeholderText="Select end date"
                            className="border border-gray-500 shadow-sm px-2 py-1.5 pl-4 font-medium rounded-2xl w-full font-[Inter] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
                        />
                        {errors.EndDateError && <p className="text-red-500 pl-3 w-70 min-[410px]:w-80">{errors.EndDateError}</p>}
                        <FaCalendarDays className="absolute right-4 top-2.5 text-gray-600 pointer-events-none" />
                    </div>
                    <div className="w-70 min-[490px]:w-80 relative">
                        <select value={reasonForLeave} onChange={(e) => {
                            setReasonForLeave(e.target.value)
                            if (!reasonForLeave) {
                                setErrors(prev => ({ ...prev, ReasonError: "" }))
                            }
                        }} className="border border-gray-500 shadow-sm px-2 py-[0.4rem] pl-4 font-medium rounded-2xl w-full font-[Inter] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer appearance-none text-gray-500">

                            <option value="" >Select Reason</option>
                            <option value="illness">Illness</option>
                            <option value="personal work">Personal Work</option>
                            <option value="family emergency">Family Emergency</option>
                            <option value="child care">Child Care</option>
                            <option value="family function">Family Function</option>
                            <option value="medical appointment">Medical Appointment</option>
                            <option value="travel">Travel</option>
                            <option value="other">Other</option>
                        </select>
                        <IoIosArrowDown className="absolute top-2.5  right-3 pointer-events-none text-gray-600" size={22} strokeWidth={5} />
                        {errors.ReasonError && <p className="text-red-500 pl-3 w-70 min-[410px]:w-80">{errors.ReasonError}</p>}
                    </div>
                    {reasonForLeave == "other" && <div className="w-70 min-[490px]:w-80">
                        <textarea value={reasonDetails} onChange={(e) => {
                            const only_letter = /^[A-Za-z\s]*$/;
                            const value = e.target.value
                            if (only_letter.test(value)) {
                                setReasonDetails(value)
                                setErrors(prev => ({ ...prev, ReasonDetailsError: "" }))
                            }
                        }} className="border border-gray-500 shadow-sm px-2 pl-4 font-medium py-1.5 rounded-2xl w-full text-gray-600 font-[Inter] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Reason for leave">

                        </textarea>
                        {errors.ReasonDetailsError && <p className="text-red-500 pl-3 w-70 min-[410px]:w-80">{errors.ReasonDetailsError}</p>}
                    </div>}
                    <div className="w-70 min-[490px]:w-80">
                        <input
                            placeholder="Village (Optional)"
                            value={village}
                            onChange={(e) => {
                                const only_letter = /^[A-Za-z\s]*$/;
                                const value = e.target.value;
                                if (only_letter.test(value)) {
                                    setVillage(value)

                                }
                            }}
                            className="border border-gray-500 shadow-sm px-2 py-1.5 pl-4 font-medium rounded-2xl w-full font-[Inter] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="w-70 min-[490px]:w-80">
                        <input
                            value={gramPanchayat}
                            onChange={e => {
                                const only_letter = /^[A-Za-z\s]*$/;
                                const value = e.target.value;
                                if (only_letter.test(value)) {
                                    setGramPanchayat(value)
                                }
                            }}
                            className="border border-gray-500 shadow-sm px-2 py-1.5 pl-4 font-medium rounded-2xl w-full font-[Inter] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Gram Panchayat (Optional)"
                        />
                    </div>
                    <button

                        type="submit"
                        onClick={handleGenerate}
                        className=" bg-green-100 text-green-500 md:bg-green-500 md:hover:bg-green-600 cursor-pointer font-[Inter] tracking-wide md:text-white py-1.5 rounded-md px-3 font-medium "
                    >
                        Generate Application
                    </button>
                </form>
            </div >}
        </>
    );
}

export default ApplicationForm;
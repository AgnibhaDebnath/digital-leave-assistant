import { FaFileAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full px-5 bg-blue-500  z-50">
            <div className="w-full flex items-center gap-2.5 min-[450px]:gap-4  py-5">
                <div className="flex items-center">
                    <FaFileAlt className="text-white text-3xl min-[565px]:text-4xl" />
                </div>
                <div className="flex items-center">
                    <h1 className="text-white font-bold font-[Inter] text-2xl min-[565px]:text-3xl">Digital Leave Assistant</h1>
                </div>
            </div>
        </nav>
    )

}
export default Navbar;

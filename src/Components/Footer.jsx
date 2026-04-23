const Footer = ({ applicationPreview }) => {
    return (
        <footer className={`bg-gray-900 text-white mt-10 py-1`}>

            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center gap-2 font-[inter]">

                <h2 className="text-lg font-semibold">
                    Digital Leave Assistant
                </h2>

                <p className="text-gray-400 text-sm">
                    Helping Anganwadi workers create leave applications easily
                </p>

                <p className="text-gray-500 text-xs mt-2">
                    © {new Date().getFullYear()} All rights reserved
                </p>

            </div>

        </footer>
    );
};

export default Footer;
export default function MobileHeader({
    setShowMenu
}: {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>,
}) {
    return (
        <>
            {/* Nav Links */}
            <ul
                onClick={() => setShowMenu((prevData) => !prevData)}
                className="flex flex-col absolute top-14 text-base font-inter md:hidden bg-[#f7f7fe] w-full pl-1.5 pr-5">
                <li className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
                    <a href="#">Home</a>
                </li>
                <li className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
                    <a href="#skills">Skills</a>
                </li>
                <li className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md mx-1 duration-300 ease-out hover:cursor-pointer">
                    <a href="#projects">Projects</a>
                </li>
                {/* CTA */}
                <li className="text-white text-sm w-full flex justify-center items-center my-2 px-4 py-2 rounded-xl mx-2 duration-300 ease-out hover:cursor-pointer hover:brightness-95 bg-linear-to-r from-[#7c3bed] to-[#3c83f6]">
                    <a href="#contact">Hire Me</a>
                </li>
            </ul>
        </>
    );
};
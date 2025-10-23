import SocialHandles from "./SocialHandles";

export default function Footer() {
    return (
        <>
            <footer className="w-full border-t border-[#e4e4e7] bg-[#fdfdfd]">
                <div className="flex flex-col md:flex-row items-center justify-between mx-auto py-8 md:py-10 pb-5 md:pb-8 px-4 border-b border-[#e4e4e7] w-full xl:max-w-7xl">
                    <div className="max-w-xs lg:max-w-sm text-center md:text-left mb-5 md:mb-0">
                        <h6 className="font-bold text-xl">Suraj Chauhan</h6>
                        <p className="text-[#7c706a] mt-2 text-sm">Full Stack Web Developer</p>
                    </div>
                    <SocialHandles />
                </div>
                <div className="flex flex-col justify-center items-center py-8 px-5">
                    <div className="text-sm text-[#7c706a] font-medium text-center flex flex-col items-center">
                        <span>Made with ❤️ by TigerxInsights &copy; 2025</span>
                        <span>Your insights, our priority</span>
                    </div>
                </div>
            </footer>
        </>
    );
};
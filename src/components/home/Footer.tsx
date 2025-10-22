import GithubIcon from "../icons/Github";
import YoutubeIcon from "../icons/Youtube";
import LinkedInIcon from "../icons/LinkedIn";
import TwitterXIcon from "../icons/TwitterX";

export default function Footer() {
    return (
        <>
            <footer className="w-full border-t border-[#e4e4e7] bg-[#fdfdfd]">
                <div className="flex flex-col md:flex-row items-center justify-between mx-auto py-8 md:py-10 pb-0 md:pb-8 px-4 border-b border-[#e4e4e7] w-full xl:max-w-7xl">
                    <div className="max-w-xs lg:max-w-sm text-center md:text-left">
                        <h6 className="font-bold text-xl">Suraj Chauhan</h6>
                        <p className="text-[#7c706a] mt-2 text-sm">Full Stack Web Developer</p>
                    </div>
                    <ul className="text-[#7c706a] my-5 w-fit md:my-auto flex">
                        <li className="m-2 duration-300 ease-out bg-white border border-[#e4e4e7] rounded-full p-2 hover:cursor-pointer hover:border-[#7c3bed] hover:bg-[#7c3bed]/10 shadow-sm">
                            <a href={"#"}>
                                <div className="size-5">
                                    <GithubIcon />
                                </div>
                            </a>
                        </li>
                        <li className="m-2 duration-300 ease-out bg-white border border-[#e4e4e7] rounded-full p-2 hover:cursor-pointer hover:border-[#3c83f6] hover:bg-[#3c83f6]/10 shadow-sm">
                            <a href={"#"}>
                                <div className="size-5">
                                    <LinkedInIcon />
                                </div>
                            </a>
                        </li>
                        <li className="m-2 duration-300 ease-out bg-white border border-[#e4e4e7] rounded-full p-2.5 hover:cursor-pointer hover:border-[#7c3bed] hover:bg-[#7c3bed]/10 shadow-sm">
                            <a href={"#"}>
                                <div className="size-4">
                                    <TwitterXIcon />
                                </div>
                            </a>
                        </li>
                        <li className="m-2 duration-300 ease-out bg-white border border-[#e4e4e7] rounded-full p-2 hover:cursor-pointer hover:border-[#fb6f92] hover:bg-[#fb6f92]/10 shadow-sm">
                            <a href={"#"}>
                                <div className="size-5">
                                    <YoutubeIcon />
                                </div>
                            </a>
                        </li>
                    </ul>
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
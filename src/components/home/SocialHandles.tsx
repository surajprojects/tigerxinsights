import GithubIcon from "../icons/Github";
import YoutubeIcon from "../icons/Youtube";
import LinkedInIcon from "../icons/LinkedIn";
import TwitterXIcon from "../icons/TwitterX";

export default function SocialHandles() {
    return (
        <>
            <ul className="text-[#7c706a] w-fit md:my-auto flex">
                <li className="m-2 duration-300 ease-out bg-white border border-[#e4e4e7] rounded-full p-2 hover:cursor-pointer hover:border-[#7c3bed] hover:bg-[#7c3bed]/10 shadow-sm">
                    <a href="https://github.com/surajprojects" target="_blank">
                        <div className="size-5">
                            <GithubIcon />
                        </div>
                    </a>
                </li>
                <li className="m-2 duration-300 ease-out bg-white border border-[#e4e4e7] rounded-full p-2 hover:cursor-pointer hover:border-[#3c83f6] hover:bg-[#3c83f6]/10 shadow-sm">
                    <a href="https://www.linkedin.com/in/surajchauhan23/" target="_blank">
                        <div className="size-5">
                            <LinkedInIcon />
                        </div>
                    </a>
                </li>
                <li className="m-2 duration-300 ease-out bg-white border border-[#e4e4e7] rounded-full p-2.5 hover:cursor-pointer hover:border-[#7c3bed] hover:bg-[#7c3bed]/10 shadow-sm">
                    <a href="https://x.com/tigerxinsights" target="_blank">
                        <div className="size-4">
                            <TwitterXIcon />
                        </div>
                    </a>
                </li>
                <li className="m-2 duration-300 ease-out bg-white border border-[#e4e4e7] rounded-full p-2 hover:cursor-pointer hover:border-[#fb6f92] hover:bg-[#fb6f92]/10 shadow-sm">
                    <a href="https://www.youtube.com/@tigerxinsights" target="_blank">
                        <div className="size-5">
                            <YoutubeIcon />
                        </div>
                    </a>
                </li>
            </ul>
        </>
    );
};
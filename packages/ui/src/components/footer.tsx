import { DiscordIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "../icons";

export function Footer() {
    return (
        <>
            <footer className="w-full h-32 sm:h-52 flex justify-center">
                <div className="w-4/5 flex flex-col justify-center items-center">
                    <div className="w-4/5 sm:w-2/3 lg:w-1/3 mb-0 sm:mb-5 pb-3 sm:pb-0 flex justify-around">
                        <div className="size-6 sm:size-10">
                            <a href="https://discord.gg/2PXzqvKwGv" target="_blank">
                                <DiscordIcon />
                            </a>
                        </div>
                        <div className="size-6 sm:size-10">
                            <a href="https://facebook.com/profile.php?id=100010479736909" target="_blank">
                                <FacebookIcon />
                            </a>
                        </div>
                        <div className="size-6 sm:size-10">
                            <a href="https://github.com/surajprojects" target="_blank">
                                <GithubIcon />
                            </a>
                        </div>
                        <div className="size-6 sm:size-10">
                            <a href="https://instagram.com/tigerxinsights" target="_blank">
                                <InstagramIcon />
                            </a>
                        </div>
                        <div className="size-6 sm:size-10">
                            <a href="https://www.linkedin.com/in/surajchauhan23" target="_blank">
                                <LinkedinIcon />
                            </a>
                        </div>
                        <div className="size-5 sm:size-8 pt-1">
                            <a href="https://twitter.com/tigerxinsights" target="_blank">
                                <TwitterIcon />
                            </a>
                        </div>
                        <div className="size-6 sm:size-10">
                            <a href="https://www.youtube.com/@tigerxinsights" target="_blank">
                                <YoutubeIcon />
                            </a>
                        </div>
                    </div>
                    <div className="text-sm sm:text-base text-black font-medium text-center flex flex-col items-center">
                        <span>Made with ❤️ by TigerxInsights &copy; 2025</span>
                        <span>Your insights, our priority</span>
                    </div>
                </div>
            </footer>
        </>
    );
};
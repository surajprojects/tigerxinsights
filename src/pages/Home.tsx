import Hero from "../components/home/Hero";
import GetInTouch from "../components/home/getInTouch";
import FeaturedProjects from "../components/home/featuredProjects";
import SkillsAndExpertise from "../components/home/skillsAndExpertise";

export default function Home() {
  return (
    <>
      <div className="w-full">
        {/* Hero section */}
        <section
          id="hero"
          className="bg-linear-to-br from-[#f8f5fe] to-[#f6f9fe] w-full py-36 md:py-44 pb-12 md:pb-20 flex justify-center"
        >
          <Hero />
        </section>
        {/* Skills & Expertise */}
        <SkillsAndExpertise />
        {/* Featured Projects */}
        <FeaturedProjects />
        {/* Get in touch */}
        <GetInTouch />
      </div>
    </>
  );
}

import SectionHeader from "./SectionHeader";
import ProjectCard from "../cards/ProjectCard";
import { featuredProjectsData } from "../../utils/featuredProjectsData";

export default function FeaturedProjects() {
  return (
    <>
      <section
        id="projects"
        className="scroll-mt-20 flex flex-col justify-center items-center w-full xl:max-w-7xl mx-auto py-4 md:py-8 pb-5 md:pb-8 px-4"
      >
        {/* Header */}
        <SectionHeader
          title1="Featured "
          title2="Projects"
          description="A selection of my recent work showcasing different technologies and approaches"
        />
        {/* Body */}
        <div className="my-8 md:my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center w-full xl:w-6xl">
          {featuredProjectsData.map((item, idx) => (
            <ProjectCard
              key={idx}
              title={item.title}
              description={item.description}
              techStack={item.techStack}
              liveLink={item.liveLink}
              codeLink={item.codeLink}
              imageLink={item.imageLink}
            />
          ))}
        </div>
      </section>
    </>
  );
}

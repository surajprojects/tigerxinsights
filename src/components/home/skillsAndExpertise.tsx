import SkillCard from "../cards/SkillCard";
import SectionHeader from "./SectionHeader";
import { skillsData, skillsDataIcons } from "../../utils/skillsData";

export default function SkillsAndExpertise() {
  return (
    <>
      <section
        id="skills"
        className="scroll-mt-20 flex flex-col justify-center items-center my-14 md:my-20 w-full xl:max-w-7xl mx-auto py-8 md:py-10 pb-5 md:pb-8 px-4"
      >
        {/* Header */}
        <SectionHeader
          title1="Skills & "
          title2="Expertise"
          description="A blend of technical proficiency and creative design thinking"
        />
        {/* Body */}
        <div className="my-8 md:my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full sm:w-xl lg:w-4xl xl:w-6xl">
          {skillsData.map((item, idx) => (
            <SkillCard
              key={idx}
              title={item.title}
              description={item.description}
              primaryColor={item.primaryColor}
              secondaryColor={item.secondaryColor}
            >
              {skillsDataIcons[idx]}
            </SkillCard>
          ))}
        </div>
      </section>
    </>
  );
}

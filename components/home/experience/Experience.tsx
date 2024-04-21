import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceSection } from "@/interfaces/hygraph.interface";

export const Experience = ({ experienceSection }: { experienceSection: ExperienceSection | null }) => {

  if (!experienceSection) {
    return <div>Loading...</div>;
  }
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={experienceSection.title} dir="l" />
      {experienceSection.experienceItems.map((item) => (
        <ExperienceItem key={item.companyName} {...item} />
      ))}
    </section>
  );
};


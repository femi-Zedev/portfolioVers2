import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AboutSection } from "@/interfaces/hygraph.interface";
import { RichText } from "@graphcms/rich-text-react-renderer";

export const About = ({ aboutSection }: { aboutSection: AboutSection | null }) => {
  if (!aboutSection) {
    return <div>Loading...</div>;
  }
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title={aboutSection?.title} dir="l" />
      <div className="grid grid-cols-[1fr_300px] gap-6 md:grid-cols-1">
        <div>
          <Reveal>
            <RichText content={aboutSection.aboutParagraph.raw}
              renderers={{
                p: ({ children }) => (
                  <p className="mb-6 font-extralight [&:first-child:first-letter]:bg-background-light [&:first-child:first-letter]:p-4 [&:first-child:first-letter]:rounded [&:first-child:first-letter]:text-md [&:first-child:first-letter]:font-bold [&:first-child:first-letter]:mr-2 [&:first-child:first-letter]:float-left">
                    {children}
                  </p>)
              }} />
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 textC-sm text-brand">
                <span>{aboutSection.useFullLinks}</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats usedStacks={aboutSection.usedStacks} />
      </div>
    </section>
  );
};

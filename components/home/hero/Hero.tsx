import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { IntroSection } from "@/interfaces/hygraph.interface";
import { SectionHeader } from "@/components/utils/SectionHeader";

export const Hero = ({ introSection }: { introSection: IntroSection | null }) => {
  if (!introSection) {
    return <div>Loading...</div>;
  }

  return (
    <section className="section-wrapper mb-24 md:mb-12">
      <div className="relative z-10 w-fit my-12">
        <Reveal>
          <h1 className="textC-bigXl font-black leading-[1.1]">
            {introSection.title}
          </h1>
        </Reveal>
        <Reveal>
          <RichText content={introSection.careerRole.raw}
            renderers={{
              h1: ({ children }) => (
                <h1 className="textC-lg leading-[1.1] mt-4 font-extralight bold-text">
                  {children}
                </h1>)
            }} />
        </Reveal>
        <Reveal>
          <RichText content={introSection.introParagraph.raw}
            renderers={{
              p: ({ children }) => (
                <p className="my-6 max-w-[700px] font-extralight">
                  {children}
                </p>)
            }} />
        </Reveal>
        <Reveal>
          <StandardButton onClick={() => document.getElementById("contact")?.scrollIntoView()}>
            {introSection.contact_me.label}
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};

import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
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
      <div className={styles.about}>
        <div className={styles.aboutWrapper} >
          <Reveal>
            <RichText content={aboutSection.aboutParagraph.raw}
              renderers={{
                p: ({ children }) => (
                  <p className={`${styles.aboutText}`}>
                    {children}
                  </p>)
              }} />
          </Reveal>

          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>{aboutSection.useFullLinks}</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats usedStacks={aboutSection.usedStacks}  />
      </div>
    </section>
  );
};

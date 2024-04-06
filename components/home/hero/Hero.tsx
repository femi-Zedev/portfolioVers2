import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { IntroSection } from "@/interfaces/hygraph.interface";
import { SectionHeader } from "@/components/utils/SectionHeader";

export const Hero = ({ introSection }: { introSection: IntroSection | null }) => {
  if (!introSection) {
    return <div>Loading...</div>;
  }

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            {introSection.title}
          </h1>
        </Reveal>
        <Reveal>
          <RichText content={introSection.careerRole.raw}
            renderers={{
              h1: ({ children }) => (
                <h1 className={styles.subTitle}>
                  {children}
                </h1>)
            }} />
        </Reveal>
        <Reveal>
          <RichText content={introSection.introParagraph.raw}
            renderers={{
              p: ({ children }) => (
                <p className={styles.aboutCopy}>
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

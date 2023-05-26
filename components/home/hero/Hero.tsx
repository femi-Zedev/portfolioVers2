import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { Trans } from '@lingui/macro'

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            <Trans id="hero-hi">
            Hey, I&apos;m Femi<span>.</span>
            </Trans>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
          <Trans id="hero-role">I&apos;m a <span>Frontend Developer</span></Trans>  
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
          <Trans id="">
             I&apos;ve spent the last 4 years building and scaling software for
            some pretty cool companies. I&apos;m also a great advocate of good user experience and good looking app screens 📱.
            that&apos;s why I help startups and individuals to come up with a prototype of their ideas with the help of figma.
            Let&apos;s connect!
          </Trans>
          </p>
        </Reveal>
        <Reveal>
          <StandardButton onClick={() => document.getElementById("contact")?.scrollIntoView()}>
            <Trans id="hero-cta">Contact me</Trans>
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};

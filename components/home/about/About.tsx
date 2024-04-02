import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="A propos" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              A nouveau, bienvenue ! Femi Arnaud AKOTONOU est mon nom complet.
              Je suis un jeune dévelopeur frontend avec maintenant un peu plus de 04 ans d'expérience.
              J'ai consacré ces dernières années à me perfectionner sur les stacks basées sur Javascript.
              J'ai des connaissances en dévelopement backend, mais je préfère me tourner vers les solutions BaaS (Backend as a Service) tels que Supabase ou Firebase quand il s'agit de concevoir mes propre backends (histoire d'aller vite :)
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              J'ai de l'expérience dans le développement mobile, avec les frameworks Ionic et NativeScript.
              J'ai également eu à collaborer sur un projet React Native sur une courte période.
              Je prévois reprendre cette année le développement mobile avec Flutter et ReactNative, car ce sont les frameworks de dévelopement d'applications mobiles les plus en vogues sur le marché aujourd'hui.
            </p>
          </Reveal>
          {/* <Reveal>
            <p className={styles.aboutText}>
                I&apos;m passively looking for new positions where I can merge my
                love for code with my love for good looking screens. If you think
                you&apos;ve got an opening that I might like, let&apos;s connect
                🔗
            </p>
          </Reveal> */}
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Liens utiles</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

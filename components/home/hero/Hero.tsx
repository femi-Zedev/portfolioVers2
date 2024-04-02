import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
          Hello, Je m'appelle Femi
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
          Je suis Dévelopeur Frontend
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
          J'ai passé les 04 dernières années à développer et faire évoluer des applications pour des entreprise plutôt cool. 
          04 années riches d'expérience tant techniques, qu'humaines. Je suis également un fervant défenseur du User Experience sur les produits technologiques 📱. 
          C'est d'ailleur pour cette raison que j'aide les startups et les particuliers à concevoir les UIs, le UX et les prototypes de leurs produits avec FIGMA. Prenons contact !
          </p>
        </Reveal>
        <Reveal>
          <StandardButton onClick={() => document.getElementById("contact")?.scrollIntoView()}>
            Prenons contact
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};

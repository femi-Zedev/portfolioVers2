import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import { Trans } from "@lingui/macro";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span><Trans>Use at work</Trans></span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Python</span>            
            <span className="chip">NextJs</span>
            <span className="chip">Mui</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span><Trans>Use for fun</Trans></span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">Tailwind Css</span>
            <span className="chip">Mantine UI</span>
            <span className="chip">Figma</span>
            <span className="chip">Framer Motion</span>
            <span className="chip">Supabase</span>
            <span className="chip">ContentFull</span>
            <span className="chip">CodeSandbox</span>
            <span className="chip">Vercel</span>
            <span className="chip">Netlify</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

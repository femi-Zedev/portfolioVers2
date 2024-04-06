import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import { AboutSection } from "@/interfaces/hygraph.interface";

export const Stats = ({ usedStacks }: { usedStacks: AboutSection['usedStacks'] }) => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>

          {usedStacks.map((item) => (
            <>
              <h4 key={item.title}>
                <AiFillCode size="2.4rem" color="var(--brand)" />
                <span>{item.title}</span>
              </h4>
              <div className={styles.statGrid}>
                {item.stack.map((subItem) => (
                  <span key={subItem} className="chip">{subItem}</span>
                ))}
              </div>
            </>
          ))}

        </div>
      </Reveal>

    </div>
  );
};

import { ReactNode } from "react";
import styles from "./header.module.scss";
import { Reveal } from "./Reveal";

interface Props {
  title: ReactNode;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div className={styles.sectionHeader} style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }} >
      <div className={styles.line} />
      <h3>
        <span style={{ width: "max-content", display:'block' }}>
          <Reveal>
            <span className={styles.title}>
              {title}
              <span>.</span>
            </span>
          </Reveal>
        </span>

      </h3>
    </div>
  );
};

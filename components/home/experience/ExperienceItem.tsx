import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";
import { IExperienceItem } from "@/interfaces/hygraph.interface";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
}

export const ExperienceItem = ({
 companyName,
 period,
 role,
 roleDescription,
 techSkills
}: IExperienceItem) => {
  // const { i18n } = useLingui();
  
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{companyName}</span>
        </Reveal>
        <Reveal>
          <span>{period}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{role}</span>
        </Reveal>
        {/* <Reveal>
          <span>{location}</span>
        </Reveal> */}
      </div>
      <Reveal>
        <p className={styles.description}>{roleDescription}</p>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {techSkills.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

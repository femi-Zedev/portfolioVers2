import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project, ProjectType } from "./Project";
import styles from "./projects.module.scss";
import { LOCALES } from "@/components/nav/Heading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Projects = () => {
  const router = useRouter()
  const [locale, setLocale] = useState<LOCALES>(router.locale!.split('-')[0] as LOCALES)

  useEffect(() => {
  }, [locale])
  
  
  const projects: ProjectType[] = [];

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projets" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};



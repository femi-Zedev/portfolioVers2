import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { LOCALES } from "@/components/nav/Heading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProjectSection } from "@/interfaces/hygraph.interface";

export const Projects = ({ projectSection }: { projectSection: ProjectSection | null }) => {
  const router = useRouter()
  // const [locale, setLocale] = useState<LOCALES>(router.locale!.split('-')[0] as LOCALES)

  // useEffect(() => {
  // }, [locale])

  if (!projectSection) {
    return <div>Loading...</div>;
  }
  

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={projectSection.title} dir="r" />

      <div className={styles.projects}>
        {projectSection.projectItems.map((project) => {
          return <Project key={project.name} {...project} />
        })}
      </div>
    </section>
  );
};



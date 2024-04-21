import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import { AboutSection, ContactSection, ExperienceSection, IntroSection, Page, ProjectSection } from "@/interfaces/hygraph.interface";



export const Home = ({pageData}:{pageData: Page}) => {
  
  function getDynamicSection(dynamicData: Page['dynamicZone'], __typename: string)  {
    const section = dynamicData.find(section => section.__typename === __typename);
    return section || null;
  }

  return (
    <>
      <div className={styles.home}>
        <SideBar links={pageData.navBar.ctas} />
        <main>
          <Heading />
          <Hero introSection={getDynamicSection(pageData.dynamicZone, 'IntroSection') as IntroSection} />
          <About aboutSection={getDynamicSection(pageData.dynamicZone, 'AboutSection') as AboutSection} />
          <Projects projectSection={getDynamicSection(pageData.dynamicZone, 'ProjectSection') as ProjectSection}  />
          <Experience experienceSection={getDynamicSection(pageData.dynamicZone, 'ExperienceSection') as ExperienceSection} />
          <Contact contactSection={getDynamicSection(pageData.dynamicZone, 'ContactSection') as ContactSection}/>
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};

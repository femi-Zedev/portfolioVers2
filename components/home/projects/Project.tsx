import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";
import { ProjectItem } from "@/interfaces/hygraph.interface";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { CustomNextImage } from "@/components/utils/CustomNextImage";



export const Project = ({
  name,
  summary,
  fullDescription,
  projectBanner,
  githubLink,
  demoLink,
  techStack,
}: ProjectItem) => {

  console.log(projectBanner)

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <CustomNextImage
            props={{
              src: projectBanner.url,
              alt: `An image of the ${name} project.`,
              style: {  borderRadius: '4px', objectFit: "cover"}
            }}
            whileHover={{ scale: 1.08, rotate: 2, transition: { duration: 0.1} }}
            styles={{
              height: "100%",
              width: "85%",
            }} />
        
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{name}</h4>
              <div className={styles.projectTitleLine} />

              {githubLink && <Link href={githubLink} target="_blank" rel="nofollow">
                <AiFillGithub size="2.8rem" />
              </Link>}

              <Link href={demoLink} target="_blank" rel="nofollow">
                <AiOutlineExport size="2.8rem" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{techStack.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <>
              <RichText content={summary.raw}
                renderers={{
                  p: ({ children }) => (
                    <p className={`${styles.projectDescription}`}>
                      {children}
                    </p>)
                }} />
              <p className={styles.projectDescription}>
                <span onClick={() => setIsOpen(true)}>En savoir plus {">"}</span>
              </p>
            </>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={
          <RichText content={fullDescription.raw}
            renderers={{
              p: ({ children }) => (
                <p>
                  {children}
                </p>)
            }} />}
        projectLink={demoLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={projectBanner.url}
        title={name}
        code={githubLink}
        tech={techStack}
      />
    </>
  );
};

import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";
import { CTA } from "@/interfaces/hygraph.interface";

export const SideBar = ({ links }: { links: CTA[] }) => {
  const [selected, setSelected] = useState("");
  const breakpoint = useBreakpoint()

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      {
        (breakpoint == 'sm' || breakpoint == 'xs') ?
          <></>
          :
          <motion.nav initial={{ x: -70 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className={styles.sideBar} >
            <span className={styles.logo}> F<span>.</span> </span>
            {links.map((item) => (
              <motion.a 
              key={item.link}
              initial={{ x: -70 }} 
              animate={{ x: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              href={item.link} onClick={() => { setSelected(item.link.replace("#", "")) }} className={selected === item.link.replace("#", "") ? styles.selected : ""}>
               {item.label}
              </motion.a>
            ))}
          </motion.nav>
      }
    </>

  );
};

import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useBreakpoint from "@/hooks/useBreakpoint";
import { AnimatePresence, motion } from "framer-motion";


export type LOCALES = 'en' | 'fr' | 'pseudo'

export const Heading = () => {
  const router = useRouter()
  // const [locale, setLocale] = useState<LOCALES>(router.locale!.split('-')[0] as LOCALES)
  const breakpoint = useBreakpoint()
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState("");

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

  function handleMenuClick(menu: string) {
    setSelected(menu)
    setMenuOpen(false)
  }



  // useEffect(() => {
  //   router.push(router.pathname, router.pathname, { locale })
  // }, [locale])




  function handleLangChange() {
    if(router.locale == 'en') {
      router.push({ pathname: '/fr', } )
    } else {
      router.push({ pathname: '/en', } )
    }
  }

  // function openResumeViewer() {
  //   router.locale === 'en' ? window.open("/resume_en.pdf") : window.open("/resume_fr.pdf")
  // }

  return (
    <header className={styles.heading}>

      <div className={styles.flexSpaced_wrapper} >
        {!(breakpoint == 'sm' || breakpoint == 'xs') && <MyLinks />}

        {
          (breakpoint == 'sm' || breakpoint == 'xs') &&
          <button className={`${styles.navIcon} ${menuOpen && styles.navOpen}`} onClick={() => { setMenuOpen(!menuOpen) }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        }

        <div className={styles.flex_wrapper}>


          <button className={styles.switcherButton} onClick={handleLangChange}>
            {router.locale == 'en' ? 'Fr': 'En'}
          </button>
{/* 
          {
            !(breakpoint == 'sm' || breakpoint == 'xs') &&
            <OutlineButton onClick={openResumeViewer}>
              Mon CV
            </OutlineButton>
          } */}
        </div>
      </div>

      {/* mobile nav */}

      <AnimatePresence>
        {(breakpoint == 'sm' || breakpoint == 'xs') && menuOpen &&

          <motion.nav initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.5 }} className={styles.sideBar} >

            <motion.a initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }} href="#about" onClick={() => { handleMenuClick("about") }} className={selected === "about" ? styles.selected : ""}>
              A propos
            </motion.a>

            <motion.a initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }} href="#projects" onClick={() => handleMenuClick("projects")} className={selected === "projects" ? styles.selected : ""}>
              Projets
            </motion.a>

            <motion.a initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }} href="#experience" onClick={() => handleMenuClick("experience")} className={selected === "experience" ? styles.selected : ""}>
              Exp.
            </motion.a>

            <motion.a initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }} href="#contact" onClick={() => handleMenuClick("contact")} className={selected === "contact" ? styles.selected : ""}>
              Contact
            </motion.a>

            {/* <motion.button initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }} className={styles.switcherButton} onClick={openResumeViewer}>
              Mon cv
            </motion.button> */}

          </motion.nav>
        }

      </AnimatePresence>

    </header>
  );
};

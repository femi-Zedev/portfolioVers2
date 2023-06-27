import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import { Trans } from '@lingui/macro'

type LOCALES = 'en' | 'fr' | 'pseudo'

export const Heading = () => {
  const router = useRouter()
  const [locale, setLocale] = useState<LOCALES>( router.locale!.split('-')[0] as LOCALES )

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale })
  }, [locale])
  

 

  function handleLangChange() {  
    locale == 'en' ? setLocale('fr') : setLocale('en')
  }

  function openResumeViewer(){
    router.locale === 'en' ? window.open("/resume_en.pdf") : window.open("/resume_fr.pdf")
  }

  return (
    <header className={styles.heading}>
      <MyLinks />

      <div className={styles.flex_wrapper}>
        <button className={styles.switcherButton} onClick={handleLangChange}>
          {locale}
        </button>
        <OutlineButton onClick={openResumeViewer}>
          <Trans id="heading-resume-btn">My resume</Trans>
        </OutlineButton>
      </div>
    </header>
  );
};

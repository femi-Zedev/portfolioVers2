import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { useRouter } from 'next/router'
import { useState } from 'react'
import { t } from '@lingui/macro'
import { Trans } from '@lingui/macro'

type LOCALES = 'en' | 'fr' | 'pseudo'

export const Heading = () => {
  const router = useRouter()
  const [locale, setLocale] = useState<LOCALES>(
    router.locale!.split('-')[0] as LOCALES
  )

 

  function handleLangChange() {
    locale == 'en' ? setLocale('fr') : setLocale('en')
    router.push(router.pathname, router.pathname, { locale })
  }

  return (
    <header className={styles.heading}>
      <MyLinks />

      <div className={styles.flex_wrapper}>
        <button className={styles.switcherButton} onClick={handleLangChange}>
          {locale}
        </button>
        <OutlineButton onClick={() => window.open("/resume_en.pdf")}>
          <Trans id="heading-resume-btn">My resume</Trans>
        </OutlineButton>
      </div>
    </header>
  );
};

import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { Trans } from "@lingui/macro";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
          <Trans>Shoot me an email if you want to connect! You can also find me on</Trans>{" "}
            
            <Link
              href="https://www.linkedin.com/in/femi-akotonou-3b8882183/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            <Trans>or</Trans>{" "}
            <Link href="https://discordapp.com/users/femi_akt#6685" target="_blank" rel="nofollow">
              Discord
            </Link>{" "}
            <Trans>if that&apos;s more your speed.</Trans>
            
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:akotonouarnaudfemi@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>akotonouarnaudfemi@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

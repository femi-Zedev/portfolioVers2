import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { ContactSection } from "@/interfaces/hygraph.interface";
import { RichText } from "@graphcms/rich-text-react-renderer";

export const Contact = ({ contactSection }: { contactSection: ContactSection | null }) => {
  if (!contactSection) {
    return <div>Loading...</div>;
  }
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            {contactSection?.title}<span>.</span>
          </h4>
        </Reveal>

        <Reveal width="100%">
          <RichText content={contactSection.contactMeParagraph.raw}
            renderers={{
              p: ({ children }) => (
                <p className={`${styles.contactCopy}`}>
                  {children}
                </p>)
            }} />
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

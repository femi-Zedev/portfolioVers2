import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

interface MyLinksProps {
  only?: ("linkedin" | "github" | "discord" | "twitter")[];
}

export const MyLinks = ({ only }: MyLinksProps) => {
  const links = [
    {
      key: "linkedin",
      url: "https://www.linkedin.com/in/femi-akotonou-3b8882183/",
      icon: <AiFillLinkedin size="2.4rem" />,
    },
    {
      key: "github",
      url: "https://github.com/femi-Zedev",
      icon: <AiFillGithub size="2.4rem" />,
    },
    {
      key: "discord",
      url: "https://discordapp.com/users/femi_akt#6685",
      icon: <SiDiscord size="2.4rem" />,
    },
    // Uncomment if you want Twitter
    // {
    //   key: "twitter",
    //   url: "https://twitter.com/yourusername",
    //   icon: <AiFillTwitterCircle size="2.4rem" />,
    // },
  ];

  const filtered = only ? links.filter((l) => only.includes(l.key as any)) : links;

  return (
    <div className={styles.links}>
      {filtered.map((link, i) => (
        <motion.span
          key={link.key}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
        >
          <Link href={link.url} target="_blank" rel="nofollow">
            {link.icon}
          </Link>
        </motion.span>
      ))}
    </div>
  );
};

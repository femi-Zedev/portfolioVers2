import { motion } from 'framer-motion';
import React from 'react';

interface UnderlineLinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

const UnderlineLink: React.FC<UnderlineLinkProps> = ({ href, target = '_self', children }) => {
  return (
    <motion.a
      href={href}
      target={target}
      style={{
        position: 'relative',
        textDecoration: 'none',
        color: 'inherit',
        display: 'inline-block',
      }}
      whileHover={"hover"}
    >
      {children}
      <motion.span
        style={{
          position: 'absolute',  // absolute
          left: '0',             // left-0
          bottom: '0',           // bottom-0
          width: '100%',         // w-full
          height: '2px',         // h-0.5 (0.5 in Tailwind corresponds to 2px)
          backgroundColor: '#C4FA70',
        }}
        initial={{ scaleX: 0 }}
        variants={{
          hover: {
            scaleX: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut"
            }
          }
        }}
      />
    </motion.a>
  );
};

export default UnderlineLink;
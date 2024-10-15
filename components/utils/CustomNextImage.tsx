"use client";
import useSize from "@/hooks/useSize";
import Image, { ImageProps as NextImageProps } from "next/image";
import { ComponentProps, CSSProperties } from "react";
import { motion } from "framer-motion";


interface CustomNextImageProps extends ComponentProps<typeof motion.div> {
  styles?: CSSProperties,
  props: NextImageProps
  className?: string
}


export function CustomNextImage ({ styles, className, props,  ...motionProps  }: CustomNextImageProps) {
  const { ref, width, height } = useSize();

  return (
    <motion.div  ref={ref} style={styles} className={className} {...motionProps}>
      <Image
        width={width}
        height={height}
        {...props}
      />
    </motion.div>
  )
}
  
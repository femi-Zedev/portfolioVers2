"use client";
import useSize from "@/hooks/useSize";
import Image, { ImageProps as NextImageProps } from "next/image";
import { CSSProperties } from "react";

interface CustomNextImageProps {
  styles?: CSSProperties,
  props: NextImageProps
  className?: string
}


export function CustomNextImage ({ styles, className, props }: CustomNextImageProps) {
  const { ref, width, height } = useSize();

  return (
    <div ref={ref} style={styles} className={className} >
      <Image
        width={width}
        height={height}
        {...props}
      />
    </div>
  )
}
  
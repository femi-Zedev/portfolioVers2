import { useState, useEffect, useRef } from "react";

interface Size {
  width: number;
  height: number;
}

interface UseSizeProps {
  ref: React.RefObject<HTMLDivElement>;
  width: number;
  height: number;
}

const useSize = (): UseSizeProps => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight
        });
      }
    };

    handleResize(); // Call initially to set the size

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ref, width: size.width, height: size.height };
};

export default useSize;
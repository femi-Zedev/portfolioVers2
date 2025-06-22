import { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  title: ReactNode;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div className={`flex items-center gap-6 mb-6 ${dir === "l" ? "flex-row-reverse" : "flex-row"}`}>
      <div className="w-full h-px bg-text opacity-30" />
      <h3>
        <span className="w-max block">
          <Reveal>
            <span className="textC-xl font-black text-right">
              {title}
              <span className="text-brand">.</span>
            </span>
          </Reveal>
        </span>
      </h3>
    </div>
  );
};

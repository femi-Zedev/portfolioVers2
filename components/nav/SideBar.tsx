import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";
import { CTA } from "@/interfaces/hygraph.interface";
import { MyLinks } from "./components/MyLinks";
import { useRouter } from "next/router";

export const SideBar = ({ links }: { links: CTA[] }) => {
  const [selected, setSelected] = useState("");
  const breakpoint = useBreakpoint();
  const router = useRouter();

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");
    const options = { threshold: 0.3 };
    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));
  }, []);

  function handleLangChange() {
    if (router.locale == 'en') {
      router.push({ pathname: '/fr', })
    } else {
      router.push({ pathname: '/en', })
    }
  }

  return (
    <aside className="flex flex-col gap-24 bg-background-dark w-[300px] min-w-[240px] h-screen p-6 box-border overflow-hidden">
      {/* Top Section: Avatar and Info */}
      <div className="flex items-center gap-4 mb-6">
        <span className="flex-shrink-0 text-2xl font-extrabold w-[45px] h-[45px] flex items-center justify-center bg-[#111] rounded-md my-7">
          F<span className="text-[#C4FA70]">.</span>
        </span>
        <div className="flex flex-col">
          <h1 className="text-2xl  font-bold text-white m-0">Femi AKOTONOU</h1>
          <p className="text-xl text-gray-400 m-0">Software Developer</p>
        </div>
      </div>

      {/* Middle Section: Navigation */}
      <nav className="flex flex-col gap-3 mb-6">
        {links.map((item) => (
          <motion.a
            key={item.link}
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href={item.link}
            onClick={() => setSelected(item.link.replace("#", ""))}
            className={`px-3 py-2 rounded-md textC-sm  font-medium transition-colors ${selected === item.link.replace("#", "")
              ? "bg-[#23272a] text-[#C4FA70] opacity-100"
              : "text-gray-200 hover:bg-[#23272a] hover:text-[#C4FA70] opacity-80"
              }`}
          >
            {item.label}
          </motion.a>
        ))}
      </nav>

      {/* Writing and Language Switcher */}
      <div className="flex flex-col gap-3 mb-6 items-start mt-6">
        <a
          href="/writing"
          className="text-brand text-[1.05rem] font-semibold px-3 py-2 rounded-md transition-colors bg-transparent block hover:bg-background-light hover:text-white"
        >
          Writing
        </a>
        <button
          className="px-3 py-2 rounded-md font-extrabold bg-white/5 uppercase text-xs text-white hover:bg-brand hover:text-background-dark transition-colors"
          onClick={handleLangChange}
        >
          {router.locale == "en" ? "Fr" : "En"}
        </button>
      </div>

      {/* Bottom Section: Social Links */}
      <div className="flex flex-row justify-center gap-6 mt-6">
        <MyLinks only={["linkedin", "github", "discord"]} />
      </div>
    </aside>
  );
};

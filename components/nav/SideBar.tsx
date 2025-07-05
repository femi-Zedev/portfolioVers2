import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";
import { CTA } from "@/interfaces/hygraph.interface";
import { useRouter } from "next/router";
import styles from "./sidebar.module.scss";
import {
  PencilLine,
  Briefcase,
  Mail,
  Sparkles,
  LibraryBig,
  LucideIcon,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Globe,
  ChevronDown,
  Diamond,
  Menu,
  X as CloseIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const SideBar = ({ links }: { links: CTA[] }) => {
  const [selected, setSelected] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const router = useRouter();

  function getIcon(label: string): LucideIcon {
    switch (label.toLowerCase()) {
      case "about":
        return Sparkles;
      case "writing":
        return PencilLine;
      case "projects":
        return LibraryBig;
      case "experience":
        return Briefcase;
      case "contact":
        return Mail;
      case "home":
        return Sparkles;
      default:
        return Sparkles; // fallback icon
    }
  }

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
    return () => observer.disconnect();
  }, []);

  const handleLangChange = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  // Smooth scroll and hash update
  const handleNavClick = (e: any, link: string) => {
    e.preventDefault();
    setSelected(link.replace("#", ""));
    setMenuOpen(false);
    const id = link.replace("#", "");
    if (id === "home") {
      const section = document.getElementById("home");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#home");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "#home");
      }
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", link);
      }
    }
  };

  // Responsive rendering
  const isMobile = breakpoint === "xs" || breakpoint === "sm";

  return (
    <>
      {/* Hamburger menu and brand for mobile */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full flex items-center justify-between z-[100] backdrop-blur-lg bg-background-dark/20 p-6">
          <span className="flex-shrink-0 text-2xl font-extrabold w-[40px] h-[40px] flex items-center justify-center bg-background-light rounded-lg">
            F<span className="text-brand">.</span>
          </span>
          {/* <button
            className="bg-background-light p-2 rounded-lg shadow-lg"
            onClick={() => setMenuOpen(true)}
            aria-label="Open sidebar menu"
          >
            <Menu size={28} />
          </button> */}

          <button className={`${styles.navIcon} ${menuOpen && styles.navOpen}`} onClick={() => { setMenuOpen(!menuOpen) }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      )}
      {/* Sidebar for desktop or mobile overlay */}
      <AnimatePresence>
        {(!isMobile || menuOpen) && (
          <motion.aside
            key="sidebar"
            initial={isMobile ? { x: -320, opacity: 0 } : { x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={isMobile ? { x: -320, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col gap-12 w-[300px] min-w-[240px] h-screen p-6 box-border overflow-hidden z-[101] ${isMobile ? "fixed top-0 left-0 backdrop-blur-lg bg-background-dark/70 border-r border-white/10" : "sticky top-0 left-0 bg-background-dark"}`}
          >

            {/* Top Section: Avatar and Info */}
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 text-2xl font-extrabold w-[45px] h-[45px] flex items-center justify-center bg-background-light rounded-lg my-7">
                F<span className="text-brand">.</span>
              </span>
              <div className="flex flex-col">
                <h1 className="text-2xl  font-bold text-white m-0">Femi AKOTONOU</h1>
                <p className="text-xl text-gray-400 m-0">Software Developer</p>
              </div>
            </div>
            {/* Middle Section: Navigation */}
            <nav className="flex flex-col gap-3 mb-6">
              {links.map((item) => {
                const Icon = getIcon(item.link.replace("#", ""));
                return (
                  <motion.a
                    key={item.link}
                    initial={{ x: -70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    href={item.link}
                    onClick={(e) => handleNavClick(e, item.link)}
                    className={`flex items-center gap-4 px-4 py-2 rounded-lg textC-sm font-medium transition-colors ${selected === item.link.replace("#", "")
                      ? "bg-[#23272a] text-brand opacity-100"
                      : "text-gray-200 hover:bg-[#23272a] hover:text-brand opacity-80"
                      }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>
            <hr className="w-full border-white/10" />
            {/* Bottom Section: Social Links */}
            <div className="flex flex-col gap-4 w-full ">
              <span className="ml-3 text-base text-muted-foreground font-semibold">
                Online
              </span>
              {[
                {
                  label: "GitHub",
                  url: "https://github.com/femi-Zedev",
                  icon: Github,
                },
                {
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/in/femi-akotonou-3b8882183/",
                  icon: Linkedin,
                },
                {
                  label: "Twitter (X)",
                  url: "https://x.com/FemiAkt",
                  icon: Twitter,
                },
                {
                  label: "Hashnode",
                  url: "https://hashnode.com/@femiZedev",
                  icon: Diamond,
                },
                {
                  label: "Email",
                  url: "mailto:akotonouarnaudfemi@gmail.com",
                  icon: Mail,
                },
              ].map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="flex items-center hover:bg-white/5 w-full justify-between text-white/90 hover:text-brand px-4 py-2 rounded-lg textC-sm font-medium transition-colors"
                  >
                    <span className="flex items-center gap-4">
                      <Icon size={16} />
                      {link.label}
                    </span>
                    <ArrowUpRight size={14} />
                  </motion.a>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 mb-6 items-start mt-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center w-full justify-between px-4 py-2 rounded-lg bg-white/5 textC-sm text-white hover:bg-brand hover:text-background-dark transition-colors">
                    <div className="flex items-center gap-4">
                      <Globe size={20} />
                      {router.locale === "en" ? "English" : "Français"}
                    </div>
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  sideOffset={10}
                  className="min-w-[var(--radix-popper-anchor-width)]  bg-background-dark text-white border-white/10 w-full rounded-lg p-2 z-[200]">
                  <DropdownMenuItem
                    onClick={() => handleLangChange("en")}
                    className="cursor-pointer text-2xl p-4 data-[highlighted]:bg-white/10 data-[highlighted]:text-brand transition-colors rounded-lg"
                  >
                    English (US)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleLangChange("fr")}
                    className="cursor-pointer text-2xl p-4 data-[highlighted]:bg-white/10 data-[highlighted]:text-brand transition-colors rounded-lg"
                  >
                    Français (FR)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      {/* Backdrop overlay for mobile */}
      {isMobile && menuOpen && (
        <motion.div
          key="sidebar-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-[100]"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

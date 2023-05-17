import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "ERUGIS Consulting",
    position: "Frontend Developer",
    time: "2021 - 2023",
    location: "Calavi, Benin Republic",
    description:
      "I help build modules of Uptimise SaaS web app for human resources and payroll management. I worked on employees signup process with their contracts and seniority, on salary advance and paid leaves modules. I also build Uptimise's landing page",
    tech: [
      "React",
      "Next Js",
      "TypeScript",
      "Git",
      "GitLab",
      "Tailwind",
      "Mui",
    ],
  },
  {
    title: "Dialectai Technologies",
    position: "Angular Developer",
    time: "2020 - 2021",
    location: "Cotonou, Benin Republic",
    description:
      "I help build a mobile app with Ionic market place for connecting customers and craftsmen. I also built a web app from scratch with Angular to train Dialectai's AI voice models ",
    tech: ["Angular", "Ionic", "TypeScript", "ASP.NET RESTful API", "Figma"],
  },
  {
    title: "Nautilus Technologies",
    position: "Angular Developer",
    time: "2019 - 2020",
    location: "Cotonou, Benin Republic",
    description:
      "Built MyFeda mobile app with NativeScript. Performed security tests on helped resolve bugs on Fedapay plugins ",
    tech: ["Angular", "NativeScript", "TypeScript", "Laravel API"],
  },
];

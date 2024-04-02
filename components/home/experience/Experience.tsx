import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {

const experience = [
  {
    title: "ERUGIS Consulting",
    position: "Dévelopeur Frontend",
    time: "2021 - 2023",
    location: `Calavi, République du Bénin` ,
    description: `
    J'ai conduit le dévelopement frontend des modules de l'application web Uptimise SaaS de concert avec l'équipe backend. Uptimise est un progiciel de gestion des ressources humaines et de la paie. J'ai intégré et développé, à partir de maquettes, le processus d'enrollement des employés avec leurs contrats et leur ancienneté. J'ai ensuite travaillé sur les modules d'avance sur salaire et de congés payés. J'ai également développé le site de présentation d'Uptimise.`,
    tech: [
      "React + Vite",
      "Mui",
      "TypeScript",
      "Git",
      "GitLab",
      "Tailwind",
    ],
  },
  {
    title: "Dialectai Technologies",
    position: "Dévelopeur Angular",
    time: "2020 - 2021",
    location: `Cotonou, République du Bénin`,
    description: `
    J'ai dévelopé sous le mentorat d'un expert Angular, Hotuba une application mobile en utilisant le framework Ionic. Hotuba est une application servant de place de marché qui met en relation les artisants et ceux qui ont besoin de leurs services. J'ai également développé une application web de bout en bout avec Angular pour entraîner les modèles vocaux des IA de Dialectai.`,
    tech: ["Angular", "Ionic", "TypeScript", "ASP.NET RESTfull API", "Figma"],
  },
  {
    title: "Nautilus Technologies",
    position: "Dévelopeur Angular",
    time: "2019 - 2020",
    location: `Cotonou, République du Bénin`,
    description: `
    J'ai assuré l'intégration des UIs de l'application mobile MyFeda avec NativeScript. J'ai également réalisé des tests de sécurité et aidé à la résolution de bugs sur les plugins Fedapay`,
    tech: ["Angular", "NativeScript", "TypeScript", "Laravel API"],
  },
];
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Projets" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};


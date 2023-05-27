import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { Trans, msg } from '@lingui/macro';
import { useLingui } from "@lingui/react";

export const Experience = () => {
  const { i18n } = useLingui();

const experience = [
  {
    title: "ERUGIS Consulting",
    position: msg({id: 'works.role_1'}),
    time: "2021 - 2023",
    location: `Calavi, ${i18n._(msg({id: 'countryName'})) }` ,
    description: msg({id: 'desc.erugis', }),
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
    position: msg({id: 'works.role_2'}),
    time: "2020 - 2021",
    location: `Cotonou, ${i18n._(msg({id: 'countryName'})) }`,
    description: msg({id: 'desc.dialectai'}),
    tech: ["Angular", "Ionic", "TypeScript", "ASP.NET RESTfull API", "Figma"],
  },
  {
    title: "Nautilus Technologies",
    position: msg({id: 'works.role_2'}),
    time: "2019 - 2020",
    location: `Cotonou, ${i18n._(msg({id: 'countryName'})) }`,
    description: msg({id: 'desc.nautilus'}),
    tech: ["Angular", "NativeScript", "TypeScript", "Laravel API"],
  },
];
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={<Trans id="experience.title">Projects</Trans>} dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};


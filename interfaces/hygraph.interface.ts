import { RichTextContent } from "@graphcms/rich-text-types";

export interface Logo {
  url: string;
}

export interface CTA {
  label: string;
  link: string;
}


export interface IntroSection {
  __typename: 'IntroSection';
  title: string;
  careerRole: {
    raw: RichTextContent
  };
  introParagraph: {
    raw: RichTextContent
  };
  contact_me: CTA;
}

export interface AboutSection {
  __typename: 'AboutSection';
  title: string;
  aboutParagraph: {
    raw: RichTextContent
  };
  useFullLinks: boolean;
  usedStacks: Stack[]
}

export interface Stack {
  title: string,
  stack: string[]
}

export interface IExperienceItem {
  companyName: string,
  role: string,
  period: string
  roleDescription: string,
  techSkills: string[],
}

export interface ProjectItem {
  name: string,
  githubLink: string,
  demoLink: string,
  techStack: string[],
  summary: {
    raw: RichTextContent
  };
  fullDescription: {
    raw: RichTextContent
  };
  projectBanner: {
    url: string
  }
}

export interface ProjectSection {
  __typename: 'ProjectSection';
  title: string;
  projectItems: ProjectItem[]
}

export interface ExperienceSection {
  __typename: 'ExperienceSection';
  title: string;
  experienceItems: IExperienceItem[]
}

export interface ContactSection {
  __typename: 'ContactSection';
  title: string;
  contactMeParagraph: {
    raw: RichTextContent
  };
}

export interface Meta {
  title: string,
  desc: string,
  siteName: string,
  ogSiteName: string,
  ogDesc: string,
   __typename: string
}

export interface Page {
  meta : Meta,
  navBar: {
    logo: Logo;
    ctas: CTA[];
  };
  dynamicZone: (
    | IntroSection
    | AboutSection
    | ProjectSection
    | ExperienceSection
    | ContactSection
  )[];
}
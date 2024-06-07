import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Cuervolu",
  DESCRIPTION: "¡Bienvenidos al portafolio de Cuervolu! Soy un estudiante de la carrera de Ingeniería en Informática proveniente de Chile. En este sitio web,  encontrarán información sobre mis habilidades y proyectos personales, además de algunas de mis experiencias laborales y un pequeño blog donde comparto lo que voy aprendiendo día tras dia.",
  EMAIL: "cuervolu@protonmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "¡Bienvenidos al portafolio de Cuervolu! Soy un estudiante de la carrera de Ingeniería en Informatica proveniente de Chile. En este sitio web,  encontrarán información sobre mis habilidades y proyectos personales, además de algunas de mis experiencias laborales y un pequeño blog donde comparto lo que voy aprendiendo día tras dia.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Una colección de artículos sobre temas que me apasionan."
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Una colección de mis proyectos con enlaces a repositorios y demos en directo.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Twitter",
    HREF: "https://twitter.com/cuervolu29",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/cuervolu",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/ancuervo",
  },
];

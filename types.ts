
export type Language = 'en' | 'ar';

export interface TranslationStrings {
  navHome: string;
  navAbout: string;
  navSkills: string;
  navProjects: string;
  navExperience: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string[];
  heroIntro: string;
  resumeBtn: string;
  projectsBtn: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  skillsTitle: string;
  experienceTitle: string;
  projectsTitle: string;
  aiTitle: string;
  aiSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
  location: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

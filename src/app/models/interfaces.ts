export interface ICvData {
  activeSection: string;
  formation: IFormation[];
  languages: ISkill[];
  experiences: IExperienceInfo[];
  skills: ISkill[];
  personalWorks: IPersonalWorks[];
}

export interface IFormation {
  name: string;
  entity: string;
  date: string;
}

export interface IExperienceInfo {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string;
  urlImage: string;
  technologies: string[];
}

export interface ISkill {
  name: string;
  percentage: number;
}

export interface IPersonalWorks {
  title: string;
  description: string;
  urlImage: string;
  link: string;
}

export interface ISection {
  name: string;
  icon: string;
  active: boolean;
}

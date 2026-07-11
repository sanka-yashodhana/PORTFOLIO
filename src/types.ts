export interface Project {
  id: string;
  number: string;
  category: string;
  name: string;
  col1_1: string;
  col1_2: string;
  col2: string;
  liveUrl?: string;
  liveUr2?: string;
  liveUr3?: string;
  detailedDescription?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

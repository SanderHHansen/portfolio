export type TimelineEntryType = "education" | "work";

export interface TimelineEntry {
  period: string;
  type: TimelineEntryType;
  title: string;
  place: string;
  description?: string;
}

export interface Publication {
  title: string;
  url: string;
  description?: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
}

export interface IntroLink {
  label: string;
  href: string;
}

export interface Intro {
  name: string;
  role: string;
  description: string;
  location: string;
  links: IntroLink[];
}

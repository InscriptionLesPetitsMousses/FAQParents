export type NoticeTone = 'alert' | 'info' | 'rappel';

export interface Notice {
  id: string;
  tone: NoticeTone;
  title: string;
  date: string;
  body: string;
  featured?: boolean;
}

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  fileType: string;
  size: string;
  updated: string;
  url: string;
}

export interface DocumentGroup {
  id: string;
  label: string;
  items: DocumentItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export type InstallationEmblem = 'phare' | 'voilier' | 'ancre' | 'crabe';

export interface Installation {
  id: string;
  name: string;
  emblem: InstallationEmblem;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  hours: string;
  contact: string;
}
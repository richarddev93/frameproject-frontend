export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  client?: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  image?: string;
}

export interface DirectusPost {
  id: number;
  status: string;
  date_created?: string;
  Titulo?: string;
  title?: string;
  body?: string;
  excerpt?: string;
  read_time?: number;
  category?: string;
  imagem?: string;
}

export interface AnalyticsEvent {
  eventName: string;
  category: string;
  label?: string;
  value?: number;
}

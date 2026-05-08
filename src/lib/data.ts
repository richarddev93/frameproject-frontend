import { Project, Service, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Brand Reveal',
    description: 'Uma experiência visual única para o lançamento de marca premium',
    category: 'Branding',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Premium Brand Co.',
    year: '2026'
  },
  {
    id: '2',
    title: 'Product Launch',
    description: 'Campanha audiovisual para lançamento de produto tech',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Tech Innovations',
    year: '2025'
  },
  {
    id: '3',
    title: 'Documentary Short',
    description: 'Mini-documentário sobre empreendedorismo criativo',
    category: 'Documentary',
    thumbnailUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    year: '2025'
  },
  {
    id: '4',
    title: 'Event Coverage',
    description: 'Cobertura completa de festival de música',
    category: 'Evento',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Music Fest',
    year: '2026'
  },
  {
    id: '5',
    title: 'Fashion Film',
    description: 'Narrativa visual para coleção de moda sustentável',
    category: 'Fashion',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Eco Fashion',
    year: '2025'
  },
  {
    id: '6',
    title: 'Corporate Video',
    description: 'Vídeo institucional para startup de tecnologia',
    category: 'Corporativo',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'StartupCo',
    year: '2026'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Produção de Vídeo',
    description: 'Criação de conteúdo audiovisual do conceito à entrega final',
    icon: 'Video'
  },
  {
    id: '2',
    title: 'Edição & Pós-produção',
    description: 'Edição profissional, color grading e motion graphics',
    icon: 'Film'
  },
  {
    id: '3',
    title: 'Direção Criativa',
    description: 'Desenvolvimento de conceito e direção visual de projetos',
    icon: 'Lightbulb'
  },
  {
    id: '4',
    title: 'Storytelling',
    description: 'Narrativas autênticas que conectam marcas e pessoas',
    icon: 'BookOpen'
  },
  {
    id: '5',
    title: 'Cobertura de Eventos',
    description: 'Registro profissional de eventos corporativos e sociais',
    icon: 'Camera'
  },
  {
    id: '6',
    title: 'Consultoria Audiovisual',
    description: 'Estratégia de conteúdo e orientação de projetos',
    icon: 'Users'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Silva',
    role: 'Marketing Director',
    company: 'Premium Brand Co.',
    content: 'Trabalho excepcional! A visão criativa e atenção aos detalhes transformaram nossa campanha.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    role: 'CEO',
    company: 'Tech Innovations',
    content: 'Profissionalismo e criatividade em cada frame. Superou todas as expectativas.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: '3',
    name: 'Marina Costa',
    role: 'Founder',
    company: 'Eco Fashion',
    content: 'Capturou perfeitamente a essência da nossa marca. Um parceiro criativo incrível.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  }
];

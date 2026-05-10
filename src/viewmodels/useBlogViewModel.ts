import { useEffect, useMemo, useState } from 'react';
import { cmsClient } from '../services/cmsClient';
import { BlogPost, DirectusPost } from '../models/types';

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Como Criar Vídeos Profissionais com Orçamento Limitado',
    excerpt: 'Descubra técnicas práticas para produzir conteúdo audiovisual de alta qualidade mesmo com recursos limitados. Aprenda sobre equipamentos acessíveis e estratégias de produção eficientes.',
    date: '2024-01-15',
    readTime: 5,
    category: 'Produção',
    image: 'https://images.unsplash.com/photo-1576506295286-ad1a1a456f42?w=500&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Tendências em Edição de Vídeo para 2024',
    excerpt: 'Explore as últimas tendências em edição de vídeo, desde IA generativa até técnicas de color grading avançadas. Mantenha-se à frente da curva no mercado audiovisual.',
    date: '2024-01-10',
    readTime: 7,
    category: 'Edição',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Marketing de Conteúdo: Como os Vídeos Aumentam o Engajamento',
    excerpt: 'Análise de como o conteúdo audiovisual pode transformar sua estratégia de marketing digital. Casos de sucesso e métricas que comprovam o impacto dos vídeos.',
    date: '2024-01-05',
    readTime: 6,
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
];

const getImagePlaceholder = (id: number): string => {
  const placeholders = [
    'https://images.unsplash.com/photo-1576506295286-ad1a1a456f42?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  ];
  return placeholders[id % placeholders.length];
};

const mapDirectusToBlogPost = (item: DirectusPost): BlogPost => ({
  id: item.id,
  title: item.Titulo || item.title || 'Sem título',
  excerpt: item.body || item.excerpt || 'Sem descrição',
  date: item.date_created || new Date().toISOString().split('T')[0],
  readTime: item.read_time ?? 5,
  category: item.category ?? 'Sem categoria',
  image: item.imagem || getImagePlaceholder(item.id),
});

export const useBlogViewModel = () => {
  const [posts, setPosts] = useState<BlogPost[]>(defaultPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await cmsClient.getCollection<DirectusPost>('posts', {
          fields: 'id,status,date_created,Titulo,title,body,excerpt,read_time,category,imagem',
          sort: '-date_created',
          limit: 50,
        });

        if (response?.data?.length) {
          const publishedPosts = response.data
            .filter((post) => post.status === 'published')
            .map(mapDirectusToBlogPost);
          setPosts(publishedPosts);
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('Erro ao carregar posts do Directus:', {
          error: errorMsg,
          stack: err instanceof Error ? err.stack : undefined,
        });
        setError(`Erro ao carregar posts: ${errorMsg}`);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts]
  );

  const filteredPosts = useMemo(
    () =>
      selectedCategory === 'Todos'
        ? posts
        : posts.filter((post) => post.category === selectedCategory),
    [posts, selectedCategory]
  );

  return {
    posts,
    loading,
    error,
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredPosts,
  };
};

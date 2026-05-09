import { useState, useEffect } from 'react';
import { cmsClient } from '../services/cmsClient';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  image?: string;
}

interface DirectusPost {
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
  date: item.date || new Date().toISOString().split('T')[0],
  readTime: item.read_time ?? 5,
  category: item.category ?? 'Sem categoria',
  image: item.imagem || getImagePlaceholder(item.id),
});

export default function Blog() {
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

  const categories = ['Todos', ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts = selectedCategory === 'Todos'
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog FrameProject
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutoriais e tendências do mundo da produção audiovisual profissional
          </p>
        </div>

        {loading && (
          <div className="mb-8 text-center text-gray-300">Carregando posts do blog...</div>
        )}

        {error && (
          <div className="mb-8 rounded-2xl border border-red-500 bg-red-950/40 px-6 py-4 text-red-200">
            {error}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getImagePlaceholder(post.id);
                  }}
                />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full mb-3">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min de leitura</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4">
                  <span className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                    Ler mais →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Fique por Dentro</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Receba os melhores conteúdos sobre produção audiovisual diretamente no seu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 bg-black bg-opacity-50 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

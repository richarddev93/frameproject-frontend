"use client";

import { useBlogViewModel } from '../viewmodels/useBlogViewModel';

const getImagePlaceholder = (id: number): string => {
  const placeholders = [
    'https://images.unsplash.com/photo-1576506295286-ad1a1a456f42?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  ];
  return placeholders[id % placeholders.length];
};

export default function Blog() {
  const {
    filteredPosts,
    loading,
    error,
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useBlogViewModel();

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

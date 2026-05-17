export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Blog Post: {params.slug}</h1>
        <div className="prose prose-invert max-w-none">
          <p>Conteúdo do post será carregado aqui...</p>
        </div>
      </div>
    </div>
  );
}
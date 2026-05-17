type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Blog Post: {slug}</h1>
        <div className="prose prose-invert max-w-none">
          <p>Conteúdo do post será carregado aqui...</p>
        </div>
      </div>
    </div>
  );
}

import { client, urlFor } from "@/sanity/client";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

// Definição do Tipo do Post
interface Post {
  _id: string;
  title: string;
  description: string;
  category: string;
  slug: { current: string };
  publishedAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage: any;
}

// 👇 QUERY CORRETA: Busca TODOS os posts (sem filtro de slug)
async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    description,
    category,
    slug,
    publishedAt,
    mainImage
  }`;
  
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export const metadata = {
  title: "Blog Xô Xixi | Dicas de Limpeza e Pets",
  description: "Confira nossos artigos sobre como manter sua casa limpa e cheirosa mesmo com pets.",
};

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Cabeçalho da Página */}
      <section className="bg-white border-b border-slate-100 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-4 block">
            Central de Conhecimento
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Blog do Xô Xixi
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Dicas práticas, guias de limpeza e tudo o que você precisa saber para conviver em harmonia com seu pet (e sem odores!).
          </p>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-16 container mx-auto px-4 flex-grow">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post) => (
              <Link 
                key={post._id} 
                href={`/blog/${post.slug.current}`}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Imagem */}
                <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-slate-200 mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400">
                      Sem imagem
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">
                        {post.category || "Geral"}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-medium text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {post.publishedAt 
                            ? new Date(post.publishedAt).toLocaleDateString("pt-BR")
                            : "Recente"}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {post.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <span className="text-slate-900 font-semibold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform border-b border-transparent group-hover:border-orange-600 w-fit pb-0.5">
                        Ler completo <ArrowRight className="w-4 h-4 text-orange-600" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <p className="text-xl mb-4">Ainda não temos posts publicados.</p>
            <Link href="/">
                <button className="text-orange-600 font-bold hover:underline">Voltar para a Home</button>
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
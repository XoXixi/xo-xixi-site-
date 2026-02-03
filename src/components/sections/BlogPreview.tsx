import { client, urlFor } from "@/sanity/client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
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

export async function BlogPreview() {
  const posts: Post[] = await getPosts(); 

  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
              Blog Xô Xixi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Dicas de Especialista
            </h2>
          </div>
          <Link href="/blog" className="hidden md:flex">
             <Button variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:text-orange-600 hover:border-orange-200 bg-white">
                Ver todos os artigos <ArrowRight className="w-4 h-4" />
             </Button>
          </Link>
        </div>

        {/* Grid de Posts */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map((post) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug.current}`}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Imagem Limpa (Sem etiqueta em cima) */}
              <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-slate-200 mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-slate-400">Sem Imagem</div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col flex-grow">
                {/* 👇 AQUI ESTÁ A MUDANÇA: Categoria acima do título */}
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
                
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
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
      </div>
    </section>
  );
}
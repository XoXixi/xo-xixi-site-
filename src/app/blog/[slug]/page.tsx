import { client, urlFor } from "@/sanity/client";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// 👇 Configuração para renderizar imagens DENTRO do texto
const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-64 md:h-96 my-8 rounded-2xl overflow-hidden shadow-md">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Imagem do post"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};

async function getPost(slug: string) {
  // 👇 Adicionei 'readingTime' na busca
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    description,
    category,
    publishedAt,
    readingTime,
    mainImage,
    body
  }`;
  return await client.fetch(query, { slug }, { next: { revalidate: 0 } });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return <div>Post não encontrado</div>;

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      <article className="pt-12 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <Link 
            href="/" 
            className="group inline-flex items-center text-slate-500 hover:text-orange-600 mb-8 transition-colors text-sm font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 group-hover:bg-orange-100 transition-colors">
                <ArrowLeft className="w-4 h-4" /> 
            </div>
            Voltar para Home
          </Link>

          {/* Cabeçalho */}
          <header className="text-center mb-12">
             {post.category && (
                <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                    {post.category}
                </span>
             )}
             
             <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                {post.title}
             </h1>

             <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-6">
                {post.description}
             </p>

             <div className="flex items-center justify-center gap-6 text-slate-400 text-sm border-y border-slate-100 py-4 max-w-lg mx-auto">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("pt-BR", { day: 'numeric', month: 'long', year: 'numeric' }) : "Data não disponível"}
                </div>
                {/* 👇 Campo Dinâmico de Tempo de Leitura */}
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{post.readingTime || "5 min de leitura"}</span>
                </div>
             </div>
          </header>

          {/* Imagem Principal */}
          {post.mainImage && (
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl ring-1 ring-slate-900/5">
                <Image 
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                    priority
                />
            </div>
          )}

          {/* Corpo do Texto */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-strong:text-slate-900 prose-li:marker:text-orange-500">
                {/* 👇 Aqui passamos os componentes customizados */}
                <PortableText value={post.body} components={ptComponents} />
            </div>

            
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
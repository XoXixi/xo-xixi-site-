import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function BlogPreview() {
  const posts = [
    {
      category: "Dicas de Limpeza",
      title: "Como tirar cheiro de xixi do tapete definitivamente",
      excerpt: "Parece impossível, mas com a técnica certa você salva seu tapete sem precisar lavar.",
      readTime: "5 min de leitura",
      gradient: "from-orange-400 to-red-500", // Cor do placeholder da imagem
    },
    {
      category: "Comportamento",
      title: "Seu cachorro faz xixi no lugar errado? Entenda o porquê",
      excerpt: "Muitas vezes não é teimosia, é um sinal que ele está tentando te passar.",
      readTime: "7 min de leitura",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      category: "Saúde Pet",
      title: "A cor do xixi do seu pet diz muito sobre a saúde dele",
      excerpt: "Aprenda a identificar sinais de alerta apenas observando a cor e o cheiro.",
      readTime: "4 min de leitura",
      gradient: "from-green-400 to-emerald-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">
              Blog Xô Xixi
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Dicas para uma casa limpa e um <span className="text-orange-600">pet feliz</span>
            </h3>
          </div>
          
          <Button variant="outline" className="hidden md:flex gap-2 border-orange-200 text-orange-700 hover:bg-orange-50">
            Ver todos os artigos <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link key={index} href="#" className="group">
              <article className="flex flex-col h-full">
                {/* Imagem (Placeholder com Gradiente) */}
                <div className={`h-48 rounded-2xl bg-gradient-to-br ${post.gradient} mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 shadow-sm`}>
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="font-bold flex items-center gap-2">Ler Artigo <ArrowRight className="w-4 h-4"/></span>
                    </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                        <span className="text-orange-600">{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {post.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                    </p>
                    <span className="text-sm font-bold text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ler completo <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
             <Button variant="outline" className="w-full gap-2 border-orange-200 text-orange-700">
                Ver todos os artigos <ArrowRight className="w-4 h-4" />
            </Button>
        </div>

      </div>
    </section>
  );
}
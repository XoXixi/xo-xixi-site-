import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, ShieldCheck, Droplet } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // 1. Importar Link

const CAMINHO_DA_FOTO_FRASCO = "/Frasco.png"; 
const USAR_FOTO_FRASCO_REAL = true; 

// Imagem da Sala Aconchegante
const IMAGEM_DE_FUNDO = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop";

export function Hero() {
  return (
    // 1. AJUSTE DE ESPAÇAMENTO: Reduzi de pb-32/48 para pb-12/20 para colar na próxima seção
    <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={IMAGEM_DE_FUNDO}
          alt="Ambiente limpo e aconchegante"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay de Luz (Mantive o blur leve que você pediu) */}
      <div className="absolute inset-0 z-0 bg-white/75 backdrop-blur-[2px]"></div>
      
      {/* Gradiente inferior menor para não empurrar muito a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-0"></div>

      {/* --- CONTEÚDO --- */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* --- LADO ESQUERDO (Texto) --- */}
          <div className="flex-1 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-6 drop-shadow-sm">
              Xixi no tapete? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Resolvido em segundos.
              </span>
            </h1>

            <p className="text-xl text-slate-800 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
              Transforme o xixi em pó e acabe com o mau cheiro em segundos. 
              Sem gastar água e sem sujar panos: é só aplicar, esperar secar e varrer.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/#produtos">
              <Button size="lg" className="h-14 px-10 text-lg font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-600/25 hover:shadow-orange-600/40 hover:-translate-y-1 transition-all rounded-full w-full sm:w-auto">
                Quero experimentar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 px-4 py-2 rounded-full hover:bg-white/60 transition-colors cursor-pointer border border-transparent hover:border-slate-200">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                Garantia total de satisfação
              </div>
            </div>

            {/* REMOVIDO: Seção de Estrelas e Avatares foi retirada daqui */}

          </div>

          {/* --- LADO DIREITO (Produto Hero) --- */}
          <div className="flex-1 w-full relative flex justify-center z-10 mt-8 lg:mt-0">
            
            {/* Halo de luz atrás do produto */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-white via-orange-50/50 to-transparent rounded-full blur-3xl opacity-70 -z-10"></div>

            {/* CARD FLUTUANTE 1 (Tempo) 
               Design: Borda Laranja + Ícone Laranja (Identidade da Marca)
            */}
            <div className="absolute top-8 right-0 lg:right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border-2 border-orange-100 hover:border-orange-300 animate-in fade-in zoom-in duration-700 delay-200 flex items-center gap-3 group transition-colors">
                <div className="bg-orange-100 p-2.5 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Clock className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider group-hover:text-orange-600">Tempo</p>
                    <p className="text-sm font-bold text-slate-900">Ação Imediata</p>
                </div>
            </div>

            {/* CARD FLUTUANTE 2 (Economia) 
               Design: Borda Laranja + Ícone Laranja
            */}
            <div className="absolute bottom-16 left-0 lg:left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border-2 border-orange-100 hover:border-orange-300 animate-in fade-in zoom-in duration-700 delay-400 flex items-center gap-3 z-20 group transition-colors">
                <div className="bg-orange-100 p-2.5 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Droplet className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider group-hover:text-orange-600">Economia</p>
                    <p className="text-sm font-bold text-slate-900">Sem Água ou Panos</p>
                </div>
            </div>

            {/* IMAGEM DO PRODUTO */}
            <div className="relative w-[280px] h-[280px] lg:w-[480px] lg:h-[480px] hover:scale-[1.02] transition-transform duration-500">
               {USAR_FOTO_FRASCO_REAL ? (
                   <>
                     <Image 
                       src={CAMINHO_DA_FOTO_FRASCO} 
                       alt="Frasco Xô Xixi" 
                       fill 
                       className="object-contain drop-shadow-2xl relative z-10"
                       priority 
                     />
                     <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[65%] h-[25px] bg-black/15 blur-2xl rounded-[100%] z-0"></div>
                   </>
               ) : (
                   <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-full text-4xl">📦</div>
               )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
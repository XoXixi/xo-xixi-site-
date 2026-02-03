"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
// Removi Input, Truck, MapPin pois não usamos mais
import {
  ShieldCheck, Check, ArrowRight,
  Clock, ThumbsUp, ChevronDown, Trash2
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export default function ProductPage() {
  const addItem = useCartStore((state) => state.addItem);  
  const [selectedKit, setSelectedKit] = useState(1);
  
  // ⚠️ SEU NÚMERO
  const WHATSAPP_NUMBER = "5519983640053";

  const kits = [
    {
      id: 0,
      name: "Xô Xixi 250g - Unidade",
      tag: "Para Conhecer",
      quantity: 1,
      price: 19.90,
      oldPrice: 24.90,
      discount: "20% OFF",
      image: "/Frasco.png",
      bestSeller: false,
      features: [
        "Limpeza 100% a seco",
        "Dispensa uso de água e pano",
        "Aplicação em 30 segundos"
      ]
    },
    {
      id: 1,
      name: "Kit 3 Frascos Xô Xixi",
      tag: "O Favorito",
      quantity: 3,
      price: 57.90,
      oldPrice: 74.70,
      discount: "22% OFF",
      image: "/frasco-com-3.webp",
      bestSeller: true,
      features: [
        "Ideal para apartamentos",
        "Durabilidade média de 3 meses",
        "Desconto progressivo aplicado"
      ]
    },
    {
      id: 2,
      name: "Kit 6 Frascos Xô Xixi",
      tag: "Super Econômico",
      quantity: 6,
      price: 108.00,
      oldPrice: 149.40,
      discount: "30% OFF",
      image: "/frasco-com-6.jpg",
      bestSeller: false,
      features: [
        "Frete Grátis (Sul/Sudeste)",
        "Estoque garantido por 6 meses",
        "Maior economia por frasco"
      ]
    },
  ];

  const currentKit = kits[selectedKit];

  const openWhatsApp = (msg: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />

      {/* --- SEÇÃO DO PRODUTO (TOPO) --- */}
      <div className="container mx-auto px-4 py-10 lg:py-16">

        <nav className="text-xs font-medium text-slate-400 mb-8 uppercase tracking-wider">
            Início / Produtos / <span className="text-orange-600 font-bold">{currentKit.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* COLUNA ESQUERDA: FOTOS */}
          <div className="space-y-6">
            <div className="relative h-[500px] bg-slate-50 rounded-[2.5rem] flex items-center justify-center p-8 overflow-hidden border border-slate-100">
                <div className="absolute top-6 left-6 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10 uppercase tracking-widest">
                    {currentKit.discount}
                </div>      

                <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl opacity-60"></div>

                <Image 
                    src={currentKit.image} 
                    alt={currentKit.name}
                    width={500}
                    height={500}
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 h-full w-auto relative z-10"
                    priority
                />
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-400 cursor-pointer transition-all flex items-center justify-center relative overflow-hidden p-2">
                       <Image src="/Frasco.png" alt="Thumb" width={60} height={60} className="object-contain opacity-80 hover:opacity-100" />
                    </div>
                ))}
            </div>
          </div>

          {/* COLUNA DIREITA: COMPRA */}
          <div className="flex flex-col h-full pt-4">

            <div className="mb-6 border-b border-slate-100 pb-6">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                    {currentKit.name.split("Xô Xixi")[0]}
                    <span className="text-orange-600">Xô Xixi</span>
                    {currentKit.name.split("Xô Xixi")[1]}
                </h1>
                <p className="text-slate-500 leading-relaxed font-medium text-lg">
                    Aposente o balde e o pano. A solução a seco que limpa em segundos e economiza água.
                </p>
            </div>

            {/* SELETOR DE KITS */}
            <div className="space-y-3 mb-8">
                <p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Escolha seu pacote:</p>
                {kits.map((kit, index) => (
                    <div 
                        key={kit.id}
                        onClick={() => setSelectedKit(index)}
                        className={`
                            relative p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between group
                            ${selectedKit === index 
                                ? "border-orange-500 bg-orange-50/30 shadow-md ring-1 ring-orange-500/20" 
                                : "border-slate-200 bg-white hover:border-orange-200 hover:shadow-sm"
                            }
                        `}
                    >
                        {kit.bestSeller && (
                            <span className="absolute -top-2.5 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                                Mais Vendido
                            </span>
                        )}

                        <div className="flex items-center gap-4">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedKit === index ? "border-orange-600" : "border-slate-300 group-hover:border-orange-400"}`}>
                                {selectedKit === index && <div className="w-2.5 h-2.5 rounded-full bg-orange-600" />}
                            </div>
                            
                            <div>
                                <span className="block font-bold text-slate-900 text-sm md:text-base">{kit.name}</span>
                                <span className="text-xs text-slate-500 font-medium">{kit.tag}</span>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-slate-400 line-through font-medium">R$ {kit.oldPrice.toFixed(2)}</p>
                            <p className="font-extrabold text-slate-900">R$ {kit.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* BENEFÍCIOS DO KIT SELECIONADO */}
            <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-100">
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Vantagens deste kit:</h4>
                 <ul className="space-y-2">
                    {currentKit.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 animate-in fade-in slide-in-from-left-2 duration-300">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="font-medium">{feature}</span>
                        </li>
                    ))}
                 </ul>
            </div>

            {/* PREÇO E BOTÕES DE AÇÃO */}
            <div className="mt-auto">
                <div className="flex items-end gap-3 mb-4">
                    <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">
                        R$ {currentKit.price.toFixed(2).replace('.', ',')}
                    </span>
                    <div className="mb-2">
                        <span className="block text-xs text-slate-400 line-through">De R$ {currentKit.oldPrice.toFixed(2)}</span>
                        {/* Removi o texto verde de "Economia/Parcelas" daqui */}
                    </div>
                </div>

                {/* BOTÃO PRINCIPAL */}
                <Button 
                    onClick={() => {
                        addItem({
                            id: currentKit.id,
                            name: currentKit.name,
                            price: currentKit.price,
                            image: currentKit.image,
                            quantity: 1
                        });
                    }}
                    className="w-full h-16 text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-xl shadow-green-200 hover:shadow-green-300 hover:-translate-y-1 transition-all mb-3"
                >
                    COMPRAR AGORA
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                {/* BOTÃO SECUNDÁRIO WHATSAPP */}
                <Button 
                    variant="ghost" 
                    className="w-full text-green-600 hover:text-green-700 hover:bg-green-50 font-bold gap-2 mb-6"
                    onClick={() => openWhatsApp(`Olá! Estou vendo o ${currentKit.name} no site e tenho uma dúvida.`)}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Dúvidas? Compre pelo WhatsApp
                </Button>
            </div>

          </div>
        </div>
      </div>

      {/* --- SEÇÃO TÉCNICA (MANTIDA) --- */}
      <section className="bg-orange-50/80 py-12 text-slate-900 border-y border-orange-100/50">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                      <h3 className="text-3xl font-extrabold mb-6 tracking-tight">Simples, Rápido e Seguro.</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/60 border border-orange-100/50 shadow-sm">
                              <ShieldCheck className="w-6 h-6 text-green-600 shrink-0" />
                              <div>
                                  <h4 className="font-bold text-slate-900 text-base">100% Atóxico</h4>
                                  <p className="text-sm text-slate-600 leading-tight">Seguro para pets e família.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/60 border border-orange-100/50 shadow-sm">
                              <Trash2 className="w-6 h-6 text-blue-600 shrink-0" />
                              <div>
                                  <h4 className="font-bold text-slate-900 text-base">Descarte Simples</h4>
                                  <p className="text-sm text-slate-600 leading-tight">Lixo comum ou vaso sanitário.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/60 border border-orange-100/50 shadow-sm">
                              <Clock className="w-6 h-6 text-orange-600 shrink-0" />
                              <div>
                                  <h4 className="font-bold text-slate-900 text-base">Ação em 30 seg.</h4>
                                  <p className="text-sm text-slate-600 leading-tight">Aplicou, secou, varreu.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/60 border border-orange-100/50 shadow-sm">
                              <ThumbsUp className="w-6 h-6 text-purple-600 shrink-0" />
                              <div>
                                  <h4 className="font-bold text-slate-900 text-base">Não Mancha</h4>
                                  <p className="text-sm text-slate-600 leading-tight">Seguro para tecidos e pisos.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="relative h-[350px] bg-white rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-orange-100/50">
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      >
                        <source src="/xo-xixi.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos.
                      </video>
                  </div>
              </div>
          </div>
      </section>

      {/* --- SEÇÃO FAQ (MANTIDA) --- */}
      <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Dúvidas Frequentes</h2>
                  <p className="text-slate-500">Tudo o que você precisa saber antes de comprar.</p>
              </div>

              <div className="space-y-4">
                  <details className="group bg-slate-50 p-4 rounded-xl border border-slate-100 open:border-orange-200 open:bg-orange-50/30 transition-all cursor-pointer">
                      <summary className="flex items-center justify-between font-bold text-slate-900 list-none">
                          O Xô Xixi mancha o piso ou tapete?
                          <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="text-slate-600 mt-3 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1">
                          Não! Nossa fórmula é 100% natural e segura. Pode ser usada em porcelanato, madeira, laminados, tapetes e até no sofá. Ele age apenas na urina, transformando-a em pó.
                      </p>
                  </details>

                  <details className="group bg-slate-50 p-4 rounded-xl border border-slate-100 open:border-orange-200 open:bg-orange-50/30 transition-all cursor-pointer">
                      <summary className="flex items-center justify-between font-bold text-slate-900 list-none">
                          Faz mal para o meu cachorro ou gato?
                          <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="text-slate-600 mt-3 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1">
                          Absolutamente não. O produto é atóxico. Mesmo que seu pet cheire ou lamba o local após a limpeza, ele não corre riscos. A segurança deles é nossa prioridade.
                      </p>
                  </details>

                  <details className="group bg-slate-50 p-4 rounded-xl border border-slate-100 open:border-orange-200 open:bg-orange-50/30 transition-all cursor-pointer">
                      <summary className="flex items-center justify-between font-bold text-slate-900 list-none">
                          Como recebo o produto?
                          <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="text-slate-600 mt-3 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1">
                          Enviamos para todo o Brasil via Correios ou Transportadora. Assim que seu pedido for despachado, você recebe o código de rastreio no seu WhatsApp e E-mail.
                      </p>
                  </details>
                  
                  <details className="group bg-slate-50 p-4 rounded-xl border border-slate-100 open:border-orange-200 open:bg-orange-50/30 transition-all cursor-pointer">
                      <summary className="flex items-center justify-between font-bold text-slate-900 list-none">
                          Posso comprar pelo WhatsApp?
                          <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="text-slate-600 mt-3 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1">
                          Com certeza! Se você preferir um atendimento humano ou pagar via PIX direto, basta clicar no botão do WhatsApp no canto da tela.
                      </p>
                  </details>
              </div>
          </div>
      </section>
      
      <Footer />

      {/* --- BOTÃO FLUTUANTE WHATSAPP --- */}
      <a 
        onClick={() => openWhatsApp("Olá! Estou no site e gostaria de comprar o Xô Xixi.")}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-110 animate-bounce-slow flex items-center justify-center group cursor-pointer"
      >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold group-hover:ml-2">
              Comprar no WhatsApp
          </span>
      </a>
    </main>
  );
}  
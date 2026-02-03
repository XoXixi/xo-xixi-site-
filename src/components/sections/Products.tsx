"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";

// 👇 DADOS ATUALIZADOS COM PISO DE R$ 18,00
const products = [
  {
    id: 1,
    slug: "kit-pratico",
    name: "Kit Prático (6 Frascos)",
    description: "Ideal para experimentar. A casa fica limpa e você paga o preço justo.",
    price: 129.90,      // R$ 21,65/un (Margem Alta)
    originalPrice: 149.40, // Base R$ 24,90
    image: "/kit-uma-caixa.png", 
    badge: "MAIS POPULAR",
    economize: "R$ 20 OFF",
    features: ["6 Frascos de 250g", "Ideal para Aptos", "Secagem Instantânea"],
    popular: true, // Coloquei o destaque aqui pois o ticket de 129 é mais fácil de vender
  },
  {
    id: 2,
    slug: "kit-familia",
    name: "Pack Família (12 Frascos)",
    description: "Garanta proteção total por meses pagando menos de R$ 20 por frasco.",
    price: 239.90,     // R$ 19,99/un
    originalPrice: 298.80, 
    image: "/kit-duas-caixas.png", 
    badge: "MELHOR ESCOLHA",
    economize: "20% OFF",
    features: ["12 Frascos de 250g", "Estoque garantido", "Custo-benefício"],
    popular: false, 
  },
  {
    id: 3,
    slug: "mega-estoque",
    name: "Mega Estoque (18 Frascos)",
    description: "Solução definitiva para canis, ONGs ou quem tem muitos pets.",
    price: 329.90,     // R$ 18,32/un (Seu Piso Protegido)
    originalPrice: 448.20, 
    image: "/kit-tres-caixas.png", 
    badge: "ATACADO",
    economize: "R$ 118 OFF",
    features: ["18 Frascos de 250g", "Preço Mínimo Garantido", "Frete grátis Sul/Suldeste"],
    popular: false,
  },
];

export function Products() {
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    openCart(); 
  };

  return (
    <section id="produtos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
            Ofertas Especiais
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Escolha o Kit ideal para sua casa
          </h2>
          <p className="text-slate-500 text-lg">
            Leve mais e pague menos. Solução definitiva com as <span className="text-orange-600 font-bold">melhores condições</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`relative bg-white rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col
                ${product.popular ? 'border-2 border-orange-500 ring-4 ring-orange-500/10 scale-105 z-10' : 'border border-slate-100'}
              `}
            >
              
              {product.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-50">
                  <span className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> Destaque
                  </span>
                </div>
              )}

              <div className="absolute top-4 right-4 z-40">
                 <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-lg">
                    {product.economize}
                 </span>
              </div>

              <div className="p-8 pb-0 flex justify-center relative h-64 w-full group overflow-hidden">
                    <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-110 z-0" 
                    />
              </div>

              <div className="p-8 pt-4 flex flex-col flex-grow relative z-10 bg-white rounded-b-3xl">
                <div className="mb-4">
                    <span className="text-orange-600 text-xs font-bold uppercase tracking-wide bg-orange-50 px-2 py-1 rounded">
                        {product.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2 leading-tight">
                        {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex flex-col mb-6">
                    <span className="text-slate-400 text-sm line-through">
                      De {product.originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-slate-900">
                        {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                        <span className="text-sm text-slate-500 font-medium">/kit</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className={`w-full h-12 text-base font-bold rounded-xl shadow-lg transition-all active:scale-95
                        ${product.popular 
                            ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-500/25 hover:shadow-orange-500/40' 
                            : 'bg-slate-900 hover:bg-slate-800 text-white'}
                    `}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Comprar Agora
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
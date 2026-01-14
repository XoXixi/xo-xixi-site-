"use client";

import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 
import { useCartStore } from "@/store/useCartStore"; 

const FOTO_KIT = "/Frasco.png"; 

// 1. 👇 CRIAMOS A TIPAGEM AQUI (O "MOLDE" DO PRODUTO)
interface ProductType {
  id: number;
  slug: string;
  name: string;
  description: string;
  units: string;
  price: number;
  oldPrice: number;
  savings?: string; // A '?' significa que é opcional
  popular: boolean;
  features: string[];
}

export function Products() {
  const addItem = useCartStore((state) => state.addItem);

  const products: ProductType[] = [ // Tipamos o array também
    {
      id: 0, 
      slug: "unidade-avulsa",
      name: "Unidade Avulsa",
      description: "Para experimentar",
      units: "1 Frasco (250g)",
      price: 19.90,
      oldPrice: 24.90,
      popular: false,
      features: ["Tira o odor na hora", "Rende até 70 aplicações"],
    },
    {
      id: 1,
      slug: "kit-essencial",
      name: "Kit Essencial",
      description: "O favorito dos donos de pets",
      units: "3 Frascos",
      price: 57.90,
      oldPrice: 74.70,
      savings: "Economize 22%",
      popular: true, 
      features: ["Desconto progressivo", "Maior durabilidade"],
    },
    {
      id: 2,
      slug: "kit-super-economico",
      name: "Kit Super Econômico",
      description: "Para quem tem mais de um pet",
      units: "6 Frascos",
      price: 108.00,
      oldPrice: 149.40,
      savings: "Economize 30%",
      popular: false,
      features: ["Frete Grátis (Sul/Sudeste)", "Maior desconto da loja", "Estoque garantido"],
    },
  ];

  // 2. 👇 CORRIGIMOS AQUI: EM VEZ DE 'any', USAMOS 'ProductType'
  const handleAddToCart = (e: React.MouseEvent, product: ProductType) => {
    e.preventDefault(); 
    e.stopPropagation(); 

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: FOTO_KIT,
      quantity: 1,
    });
  };

  return (
    <section id="produtos" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">
            Nossos Kits
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Escolha a melhor opção para <span className="text-orange-600">sua casa</span>
          </h3>
          <p className="text-lg text-slate-600">
            Aproveite os descontos progressivos e leve mais por menos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {products.map((product) => (
            <Link 
              href={`/produto/${product.slug}`} 
              key={product.id}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col group cursor-pointer
                ${product.popular 
                  ? "border-orange-500 shadow-2xl shadow-orange-200 scale-105 z-10" 
                  : "border-slate-100 shadow-lg hover:border-orange-200 hover:shadow-xl" 
                }
              `}
            >
              {product.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <Star className="w-4 h-4 fill-current" /> MAIS VENDIDO
                </div>
              )}

              {product.savings && (
                <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                  {product.savings}
                </div>
              )}

              <div className="relative w-40 h-40 mx-auto mb-6">
                 <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-orange-50 rounded-full blur-2xl opacity-50"></div>
                    <Image 
                        src={FOTO_KIT} 
                        alt={product.name} 
                        fill 
                        className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                 </div>
              </div>

              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-slate-900">{product.name}</h4>
                <p className="text-slate-500 text-sm mb-2">{product.units}</p>
                
                <div className="flex items-center justify-center gap-2 mb-1">
                   <span className="text-slate-400 line-through text-sm">R$ {product.oldPrice.toFixed(2)}</span>
                </div>
                <div className="text-4xl font-extrabold text-slate-900">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-orange-600 text-xs font-bold mt-1 uppercase tracking-wide">
                  À vista no PIX
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                size="lg" 
                onClick={(e) => handleAddToCart(e, product)}
                className={`w-full font-bold text-lg h-14 rounded-xl transition-all relative z-20
                  ${product.popular 
                    ? "bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-200 hover:-translate-y-1" 
                    : "bg-slate-900 hover:bg-slate-800"
                  }
                `}
              >
                {product.popular ? "Comprar Agora" : "Adicionar ao Carrinho"}
                <ShoppingCart className="ml-2 w-5 h-5" />
              </Button>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // <--- 1. Importar useState
import { ShoppingCart, Menu, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { MobileMenu } from "./MobileMenu"; // <--- 2. Importar o componente novo

// 👇 CONFIGURAÇÃO
const USAR_LOGO_IMAGEM = true; 
const CAMINHO_DA_LOGO = "/logo.png"; 

export function Navbar() {
  const { toggleCart, items } = useCartStore();
  
  // 3. Criar o estado para controlar o Menu Mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          
          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative h-12 flex items-center justify-start">
              {USAR_LOGO_IMAGEM ? (
                <div className="relative h-16 w-48">
                  <Image 
                      src={CAMINHO_DA_LOGO} 
                      alt="Logo Xô Xixi" 
                      fill 
                      className="object-contain object-left"
                      priority
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 text-blue-600">
                    <PawPrint className="h-8 w-8" />
                    <span className="text-2xl font-extrabold tracking-tighter">Xô Xixi</span>
                </div>
              )}
            </div>
          </Link>

          {/* --- MENU DESKTOP (Escondido no Mobile) --- */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 uppercase tracking-wide">
            <Link href="/" className="hover:text-orange-600 px-3 py-2 transition-colors">Home</Link>
            <Link href="/#produtos" className="hover:text-orange-600 px-3 py-2 transition-colors">Produtos</Link>
            <Link href="/#sobre" className="hover:text-orange-600 px-3 py-2 transition-colors">Sobre</Link>
            <Link href="/#contato" className="hover:text-orange-600 px-3 py-2 transition-colors">Contato</Link>
          </nav>

          {/* --- AÇÕES --- */}
          <div className="flex items-center gap-4">
            
            {/* BOTÃO DO CARRINHO */}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleCart}
              className="relative border-slate-200 hover:bg-slate-50 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white animate-in zoom-in duration-300">
                  {items.length}
                </span>
              )}
            </Button>

            {/* BOTÃO MENU MOBILE (Só aparece no Mobile) */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-slate-700"
              onClick={() => setIsMobileMenuOpen(true)} // <--- 4. Ação de Abrir
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

        </div>
      </header>

      {/* 5. Inserir o Componente MobileMenu aqui fora do header */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
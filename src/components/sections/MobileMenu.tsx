"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* 1. O FUNDO ESCURO (OVERLAY) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[90] transition-opacity duration-300 backdrop-blur-sm md:hidden
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose} // Clicar fora fecha o menu
      />

      {/* 2. A GAVETA LATERAL (Vem da ESQUERDA) */}
      <div 
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out border-r border-slate-100 flex flex-col md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        
        {/* CABEÇALHO DO MENU */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
          {/* Logo Pequena */}
          <div className="relative h-10 w-32">
             <Image 
                src="/logo.png" 
                alt="Logo" 
                fill 
                className="object-contain object-left" 
             />
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav className="flex-1 p-6 flex flex-col gap-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Menu</p>
            
            <Link 
                href="/" 
                onClick={onClose}
                className="text-lg font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 p-3 rounded-xl transition-all flex items-center gap-3"
            >
                Início
            </Link>
            <Link 
                href="/#produtos" 
                onClick={onClose}
                className="text-lg font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 p-3 rounded-xl transition-all flex items-center gap-3"
            >
                Nossos Kits
            </Link>
            <Link 
                href="/#faq" 
                onClick={onClose}
                className="text-lg font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 p-3 rounded-xl transition-all flex items-center gap-3"
            >
                Dúvidas (FAQ)
            </Link>
            <Link 
                href="/#contato" 
                onClick={onClose}
                className="text-lg font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 p-3 rounded-xl transition-all flex items-center gap-3"
            >
                Fale Conosco
            </Link>
        </nav>

        {/* RODAPÉ DO MENU (REDES SOCIAIS) */}
        <div className="p-6 border-t border-slate-100 bg-slate-50">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Siga-nos</p>
            <div className="flex justify-center gap-4">
                <Button size="icon" variant="outline" className="rounded-full border-slate-300 text-slate-600 hover:text-pink-600 hover:border-pink-200">
                    <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-200">
                    <Facebook className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-slate-300 text-slate-600 hover:text-green-600 hover:border-green-200">
                    <MessageCircle className="w-5 h-5" />
                </Button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-6">
                © 2024 Xô Xixi. Todos os direitos reservados.
            </p>
        </div>

      </div>
    </>
  );
}
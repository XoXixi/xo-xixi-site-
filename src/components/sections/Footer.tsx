import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Sobre a Marca */}
          <div>
            <div className="relative h-12 w-32 mb-6">
                 {/* Certifique-se que a logo branca existe ou use a normal */}
                 <Image 
                    src="/logo.png" 
                    alt="Xô Xixi" 
                    fill 
                    className="object-contain object-left" 
                 />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              A solução definitiva para odores e sujeira do seu pet. Tecnologia, carinho e limpeza para o seu lar em Três Corações e todo o Brasil.
            </p>
            <div className="flex gap-4">
              {/* 👇 COLOQUE SEUS LINKS REAIS AQUI */}
              <a 
                href="https://www.instagram.com/xoxixi.pet/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/XoXixi.PET/?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. Navegação Rápida */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Navegação</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Início</Link></li>
              <li><Link href="/#produtos" className="hover:text-orange-500 transition-colors">Nossos Kits</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition-colors">Blog Xô Xixi</Link></li>
              <li><Link href="/#sobre" className="hover:text-orange-500 transition-colors">Como Funciona</Link></li>
            </ul>
          </div>

          {/* 3. Institucional (Ajuda) */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Institucional</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/politica-troca" className="hover:text-orange-500 transition-colors">Política de Troca</Link></li>
              <li><Link href="/politica-privacidade" className="hover:text-orange-500 transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos-uso" className="hover:text-orange-500 transition-colors">Termos de Uso</Link></li>
              <li><Link href="/fale-conosco" className="hover:text-orange-500 transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* 4. Atendimento */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Atendimento</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-600 shrink-0" />
                <a href="mailto:vendas@xoxixi.com.br" className="hover:text-orange-500 transition-colors">vendas@xoxixi.com.br</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                <a href="https://wa.me/5519983640053" target="_blank" className="hover:text-orange-500 transition-colors">
                    (19) 98364-0053
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Três Corações / MG - Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Xô Xixi Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
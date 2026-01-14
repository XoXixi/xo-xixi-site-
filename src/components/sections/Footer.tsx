import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    // AJUSTE 1: Aumentei de py-10 para py-12 para dar mais respiro
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Coluna 1: Marca e Sobre */}
          <div>
            {/* Logo container */}
            <div className="mb-4 relative h-10 w-32">
               <Image 
                 src="/logo.png" 
                 alt="Xô Xixi" 
                 fill
                 className="object-contain object-left"
               />
            </div>

            <p className="text-slate-400 leading-relaxed mb-4 text-xs max-w-xs">
              A solução definitiva para odores e sujeira do seu pet. 
              Tecnologia, carinho e limpeza para o seu lar.
            </p>
            
            <div className="flex gap-3">
              <Link href="#" className="bg-slate-900 p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all border border-slate-800 hover:border-orange-500">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="bg-slate-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all border border-slate-800 hover:border-blue-500">
                <Facebook className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Início</Link></li>
              <li><Link href="#produtos" className="hover:text-orange-500 transition-colors">Nossos Kits</Link></li>
              <li><Link href="#como-funciona" className="hover:text-orange-500 transition-colors">Como Funciona</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Minha Conta</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Ajuda</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Rastrear Pedido</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Política de Troca</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Atendimento</h4>
            <ul className="space-y-3 text-slate-400 text-xs">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <span>vendas@xoxixi.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <span>(19) 98364-0053</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Três Corações/ MG - Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra Inferior Compacta */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Xô Xixi Ltda. CNPJ 00.000.000/0001-00. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-3">
             <span className="text-[10px] text-slate-600 uppercase font-bold tracking-widest hidden sm:block">Pagamento Seguro</span>
             
             {/* AJUSTE 2: Aumentei os containers de h-6 w-10 para h-7 w-11 */}
             <div className="flex gap-2 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="bg-white p-1 rounded h-7 w-11 flex items-center justify-center">
                    <Image src="/visa.png" alt="Visa" width={30} height={18} className="object-contain" />
                </div>
                <div className="bg-white p-1 rounded h-7 w-11 flex items-center justify-center">
                    <Image src="/master.png" alt="Mastercard" width={30} height={18} className="object-contain" />
                </div>
                <div className="bg-white p-1 rounded h-7 w-11 flex items-center justify-center">
                    <Image src="/pix.png" alt="Pix" width={25} height={15} className="object-contain" />
                </div>
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
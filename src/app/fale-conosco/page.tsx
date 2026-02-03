import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FaleConoscoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl flex-grow">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6 text-center">Fale Conosco</h1>
        <p className="text-center text-slate-500 mb-12 max-w-lg mx-auto">
            Tem alguma dúvida sobre os kits ou sobre seu pedido? Nossa equipe de Três Corações está pronta para te atender!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Cartão Whatsapp */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center hover:border-orange-200 transition-all">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-500 mb-6">Resposta rápida para suas dúvidas.</p>
                <a href="https://wa.me/5519983640053" target="_blank" className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Chamar no Zap</Button>
                </a>
            </div>

            {/* Cartão E-mail */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center hover:border-orange-200 transition-all">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">E-mail</h3>
                <p className="text-slate-500 mb-6">Para assuntos mais detalhados.</p>
                <a href="mailto:vendas@xoxixi.com.br" className="w-full">
                    <Button variant="outline" className="w-full border-slate-300">vendas@xoxixi.com.br</Button>
                </a>
            </div>
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-2xl border border-slate-100">
             <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-slate-400" />
                <h3 className="font-bold text-slate-900">Onde estamos</h3>
                <p className="text-slate-500">Três Corações / MG - Enviamos para todo o Brasil 🇧🇷</p>
             </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
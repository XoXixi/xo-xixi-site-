import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function TermosPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate prose-headings:text-slate-900">
        <h1>Termos de Uso</h1>
        <p>Bem-vindo ao site do Xô Xixi.</p>
        <h3>1. Aceitação</h3>
        <p>Ao acessar e comprar em nosso site, você concorda com estes termos de uso e com nossa política de privacidade.</p>
        <h3>2. Produtos</h3>
        <p>Nos esforçamos para exibir as cores e características dos produtos com a maior precisão possível. No entanto, pequenas variações de embalagem podem ocorrer.</p>
        <h3>3. Preços</h3>
        <p>Os preços estão sujeitos a alteração sem aviso prévio. O preço válido é aquele exibido no momento da finalização da compra no checkout.</p>
      </div>
      <Footer />
    </main>
  );
}
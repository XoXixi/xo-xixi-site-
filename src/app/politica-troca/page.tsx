import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function TrocaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate prose-headings:text-slate-900 prose-a:text-orange-600">
        <h1>Política de Troca e Devolução</h1>
        <p>Queremos que você e seu pet fiquem felizes com o Xô Xixi. Se algo deu errado, estamos aqui para resolver.</p>
        <h3>1. Prazo para Troca</h3>
        <p>Você tem até 7 dias corridos após o recebimento do produto para solicitar a troca ou devolução por arrependimento, conforme o Código de Defesa do Consumidor.</p>
        <h3>2. Defeito no Produto</h3>
        <p>Caso o produto chegue vazando ou com defeito na embalagem, entre em contato imediatamente pelo WhatsApp ou e-mail enviando fotos. Faremos a reposição sem custos.</p>
        <h3>3. Como Solicitar</h3>
        <p>Envie um e-mail para <strong>vendas@xoxixi.com.br</strong> ou chame no WhatsApp informando o número do pedido.</p>
      </div>
      <Footer />
    </main>
  );
}
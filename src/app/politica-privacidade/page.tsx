import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate prose-headings:text-slate-900">
        <h1>Política de Privacidade</h1>
        <p>No Xô Xixi, levamos sua privacidade a sério.</p>
        <h3>1. Coleta de Dados</h3>
        <p>Coletamos apenas os dados necessários para o envio do seu pedido (Nome, Endereço, CPF e Telefone).</p>
        <h3>2. Uso das Informações</h3>
        <p>Seus dados são usados exclusivamente para processar sua compra e enviar atualizações sobre o status do pedido. Não vendemos suas informações para terceiros.</p>
        <h3>3. Segurança</h3>
        <p>Todo o tráfego de dados em nosso site é criptografado (SSL), garantindo que suas informações estejam seguras.</p>
      </div>
      <Footer />
    </main>
  );
}
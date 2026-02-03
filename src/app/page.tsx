import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Products } from "@/components/sections/Products";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth relative"> 
      <Navbar />
      <Hero />
      
      <section id="sobre">
        <HowItWorks />
      </section>
      
      <Products />
      
      {/* 👇 AGORA SIM: Removi o comentário, o componente está ativo! */}
      <BlogPreview />
      
      <section id="faq">
         <FAQ />
      </section>

      <section id="contato">
        <Footer />
      </section>

      <FloatingWhatsApp message="Olá! Vim pela Home do site e quero saber mais sobre o Xô Xixi." />
    </main>
  );
}
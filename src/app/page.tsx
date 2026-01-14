import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Products } from "@/components/sections/Products";
// import { Testimonials } from "@/components/sections/Testimonials"; // <-- Removemos esse
import { BlogPreview } from "@/components/sections/BlogPreview"; // <-- Novo
import { FAQ } from "@/components/sections/FAQ"; // <-- Novo
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen"> 
      <Navbar />
      <Hero />
      <HowItWorks />
      <Products />
      
      {/* NOVAS SEÇÕES */}
      <BlogPreview />
      <FAQ />
      <Footer />
    </main>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
// 👇 1. Importar o componente do Carrinho
import { CartSidebar } from "@/components/cart/CartSidebar"; 

const inter = Inter({ subsets: ["latin"] });

// 👇 CONFIGURAÇÃO DE SEO GLOBAL
export const metadata: Metadata = {
  title: {
    default: "Xô Xixi | Eliminador de Odores Pet",
    template: "%s | Xô Xixi", 
  },
  description: "A solução definitiva para odores e sujeira do seu pet. Tecnologia, carinho e limpeza para o seu lar em Três Corações e todo o Brasil.",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Xô Xixi | Sua casa limpa, seu pet feliz",
    description: "Conheça o eliminador de odores que funciona de verdade.",
    url: "https://www.xoxixi.com.br", 
    siteName: "Xô Xixi",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        
        {/* 👇 2. O CARRINHO TEM QUE ESTAR AQUI PARA FUNCIONAR */}
        <CartSidebar /> 
      </body>
    </html>
  );
}
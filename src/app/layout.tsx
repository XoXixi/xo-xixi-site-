import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartSidebar } from "@/components/cart/CartSidebar"; // <--- IMPORTAR

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xô Xixi Premium | Removedor de Odores",
  description: "O melhor removedor de odores para pets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartSidebar /> {/* <--- ADICIONAR AQUI! 🛒 */}
        {children}
      </body>
    </html>
  );
}
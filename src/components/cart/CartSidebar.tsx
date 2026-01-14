"use client";

import { useCartStore } from "@/store/useCartStore";
import { X, Minus, Plus, Trash, ShoppingBag, Send } from "lucide-react"; // Adicionei o ícone Send
import Image from "next/image";
import { Button } from "@/components/ui/button";

// 👇 SEU NÚMERO DE VENDAS AQUI (Apenas números, com DDD)
const WHATSAPP_NUMBER = "5519983640053"; 

export function CartSidebar() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    isOpen, 
    toggleCart, 
    getCartTotal 
  } = useCartStore();

  // --- FUNÇÃO MÁGICA DE CHECKOUT ---
  const handleCheckout = () => {
    // 1. Monta o cabeçalho da mensagem
    let message = "*Olá! Gostaria de finalizar meu pedido no site:*\n\n";

    // 2. Lista os itens com formatação
    items.forEach((item) => {
      message += `📦 *${item.quantity}x ${item.name}*\n`;
      // Se quiser adicionar detalhes do kit, pode concatenar aqui
      message += `   (R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')})\n`;
    });

    // 3. Adiciona o Total
    const total = getCartTotal().toFixed(2).replace('.', ',');
    message += `\n💰 *Total: R$ ${total}*`;
    
    // 4. Rodapé da mensagem
    message += `\n\n------------------------------`;
    message += `\nAguardo as instruções de pagamento!`;

    // 5. Cria o link e abre em nova aba
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(url, "_blank");
  };

  return (
    <>
      {/* 1. O FUNDO ESCURO (OVERLAY) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[90] transition-opacity duration-300 backdrop-blur-sm
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={toggleCart} // Clicar no fundo fecha o carrinho
      />

      {/* 2. A GAVETA LATERAL (SIDEBAR) */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-slate-100 flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        
        {/* CABEÇALHO */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-orange-600" />
            <h2 className="font-bold text-lg text-slate-900">Seu Carrinho</h2>
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">
              {items.length} itens
            </span>
          </div>
          <button 
            onClick={toggleCart}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* LISTA DE PRODUTOS (SCROLL) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <ShoppingBag className="w-16 h-16 text-slate-300" />
              <p className="text-slate-500 font-medium">Seu carrinho está vazio.</p>
              <Button variant="outline" onClick={toggleCart}>
                Continuar Comprando
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 animate-in slide-in-from-right-4 duration-500">
                {/* Imagem do Produto */}
                <div className="relative w-20 h-20 bg-slate-50 rounded-lg border border-slate-100 shrink-0 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-contain p-1"
                  />
                </div>

                {/* Detalhes */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{item.name}</h3>
                    <p className="text-slate-500 text-xs mt-0.5">Xô Xixi Premium</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-slate-200 rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-slate-50 text-slate-500"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-6 text-center text-slate-900">
                        {item.quantity}
                      </span>
                      <button 
                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
                         className="p-1.5 hover:bg-slate-50 text-slate-500"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-bold text-slate-900 text-sm">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                {/* Botão Remover */}
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-slate-300 hover:text-red-500 transition-colors self-start p-1"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* RODAPÉ (TOTAL E BOTÃO WHATSAPP) */}
        {items.length > 0 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 text-sm">Subtotal</span>
              <span className="text-xl font-extrabold text-slate-900">
                R$ {getCartTotal().toFixed(2).replace('.', ',')}
              </span>
            </div>

            <Button 
              className="w-full h-14 text-lg font-bold bg-green-600 hover:bg-green-700 shadow-lg shadow-green-200 flex items-center gap-2"
              onClick={handleCheckout} // <--- CHAMA A FUNÇÃO WHATSAPP
            >
              FINALIZAR PELO WHATSAPP
              <Send className="w-5 h-5" />
            </Button>
            
            <p className="text-[10px] text-center text-slate-400">
              Você será redirecionado para falar com um atendente.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
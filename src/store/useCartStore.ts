import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// 1. Definindo o formato do nosso Produto no carrinho
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  kitName?: string; // Ex: "Kit Essencial"
}

// 2. Definindo as ações da nossa "Mochila"
interface CartState {
  items: CartItem[];
  isOpen: boolean; // Para controlar se o carrinho lateral está aberto ou fechado
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  toggleCart: () => void; // Abre/Fecha o carrinho
  clearCart: () => void;
  getCartTotal: () => number;
}

// 3. Criando a Store com a mágica do Zustand
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (newItem) => {
        const { items } = get();
        // Verifica se o item já existe no carrinho
        const existingItem = items.find((item) => item.id === newItem.id);

        if (existingItem) {
          // Se já existe, só aumenta a quantidade
          set({
            items: items.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
            ),
            isOpen: true, // Abre o carrinho automaticamente ao adicionar
          });
        } else {
          // Se não existe, adiciona na lista
          set({ items: [...items, newItem], isOpen: true });
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          // Se diminuir pra 0, remove o item
          get().removeItem(id);
        } else {
          set({
            items: get().items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          });
        }
      },

      toggleCart: () => set({ isOpen: !get().isOpen }),
      
      clearCart: () => set({ items: [] }),

      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'xo-xixi-cart-storage', // Nome único para salvar no LocalStorage
      storage: createJSONStorage(() => localStorage), // Usa o LocalStorage do navegador
    }
  )
);
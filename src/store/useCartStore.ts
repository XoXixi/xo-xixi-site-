import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// 1. Definindo o formato do nosso Produto no carrinho
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  kitName?: string;
}

// 2. Definindo as ações da nossa "Mochila"
interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  toggleCart: () => void;
  // 👇 ADICIONEI ESSAS DUAS:
  openCart: () => void; 
  closeCart: () => void;
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
        const existingItem = items.find((item) => item.id === newItem.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
            ),
            isOpen: true, // Tenta abrir aqui
          });
        } else {
          set({ items: [...items, newItem], isOpen: true }); // Tenta abrir aqui também
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
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

      // 👇 AS NOVAS FUNÇÕES EXPLICITAS:
      openCart: () => set({ isOpen: true }),   // Força abrir
      closeCart: () => set({ isOpen: false }), // Força fechar
      
      clearCart: () => set({ items: [] }),

      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'xo-xixi-cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
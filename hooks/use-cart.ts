import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  name: string
  price: number
  images: string[]
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set) => ({
      items: [],
      addItem: (item) => 
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          
          if (existingItem) {
            // If item exists, increase quantity
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            }
          }
          
          // If item doesn't exist, add it with quantity 1
          return {
            items: [...state.items, { ...item, quantity: 1 }],
          }
        }),
      removeItem: (itemId) => 
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId)
        })),
      updateQuantity: (itemId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ).filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
) 
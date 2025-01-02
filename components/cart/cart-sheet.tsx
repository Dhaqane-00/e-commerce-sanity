"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart, Minus, Plus } from "lucide-react"
import { Badge } from "../ui/badge"
import { useCart } from "@/hooks/use-cart"
import { Button } from "../ui/button"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from '@/components/ui/separator'

export function CartSheet() {
  const { items, removeItem, updateQuantity } = useCart()
  
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative hover:text-primary p-0">
          <ShoppingCart className="h-6 w-6" />
          {items.length > 0 && (
            <Badge
              variant="destructive"
              className="absolute -right-2 -top-2 h-5 w-4 rounded-full text-xs"
            >
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Cart ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="h-[70vh] py-4">
          {items.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">No items in cart</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
        
        {items.length > 0 && (
          <div className="space-y-4 pt-4">
            <Separator />
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <Button className="w-full">Checkout</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
} 
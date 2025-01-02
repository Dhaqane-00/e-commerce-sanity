"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { featuredProducts } from "@/config/products"

export function ProductCarousel() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      images: [product.image]
    })
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  return (
    <section className="py-12">
      <div className="container relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5"
              >
                <div className="flex flex-col gap-3 group">
                  <div className="relative aspect-square">
                    <div className="absolute inset-0">
                      <div className="relative h-full w-full overflow-hidden rounded-lg border">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        {/* Add to Cart Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button
                            onClick={() => handleAddToCart(product)}
                            variant="secondary"
                            className="gap-2"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                      <Card className="flex h-8 w-12 items-center justify-center bg-background shadow-lg">
                        <span className="text-sm font-medium">
                          {product.inventory}
                        </span>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Product details */}
                  <div className="text-center">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.color} • {product.type}</p>
                    <p className="font-semibold mt-1">${product.price}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  )
}


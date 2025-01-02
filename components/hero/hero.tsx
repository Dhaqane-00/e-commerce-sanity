"use client"

import Image from "next/image"
import heroImage from "@/public/images/Main.png"
import { ProductCarousel } from "./product-carousel"
import ProductGrid from "./product"

export function Hero() {
  return (
    <section>
      {/* Image container */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Product carousel section */}
      <div className="w-full py-8">
        <ProductCarousel />
        <div className="flex flex-col items-center gap-8">
          <button className="px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            See all products
          </button>
          {/* <ProductGrid/> */}
        </div>
      </div>
    </section>
  )
}

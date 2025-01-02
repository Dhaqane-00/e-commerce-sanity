import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import prodImg  from "@/public/images/catetory-31.jpg.svg"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  isHot?: boolean
  discount?: number
}

const calculateDiscountedPrice = (price: number, discount?: number): number => {
  if (!discount) return price;
  return price * (1 - discount / 100);
};

const products: Product[] = [
  {
    id: 1,
    name: "Rick's Gym Tank Top",
    price: 29.99,
    image: prodImg,
  },
  {
    id: 2,
    name: "Live Wonder T-Shirt",
    price: 24.99,
    image: prodImg,
  },
  {
    id: 3,
    name: "New Tank Top",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=300",
    isHot: true,
  },
  {
    id: 4,
    name: "Happy Tank Top",
    price: 28.00,
    originalPrice: 31.00,
    image: prodImg,
    isHot: true,
    discount: 10,
  },
  {
    id: 4,
    name: "Happy Tank Top",
    price: 28.00,
    originalPrice: 31.00,
    image: prodImg,
    isHot: true,
    discount: 10,
  },
]

export default function ProductGrid() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-screen-2xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="overflow-hidden h-full">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {product.isHot && (
                      <Badge className="bg-orange-500 hover:bg-orange-600">
                        Hot
                      </Badge>
                    )}
                    {product.discount && (
                      <Badge className="bg-emerald-500 hover:bg-emerald-600">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-3 md:p-4">
                  <h3 className="font-semibold text-base md:text-lg truncate">{product.name}</h3>
                </CardContent>
                <CardFooter className="p-3 md:p-4 pt-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">
                      ${calculateDiscountedPrice(product.price, product.discount).toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

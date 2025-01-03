'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useState, useEffect } from 'react'
import slideImg from "@/public/images/slideshow.png"
import SlideImg2 from "@/public/images/catetory-31.jpg.svg"


export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-purple-300 mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute right-[10%] top-[10%] h-[20rem] w-[20rem] rounded-full bg-yellow-300 mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute left-[20%] bottom-[10%] h-[25rem] w-[25rem] rounded-full bg-pink-300 mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Elevate Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Style Game</span>
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover a curated collection of premium fashion that defines your unique personality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="group text-lg px-8 py-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Shop Collection
                <ShoppingBag className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
          <div className="relative h-[600px] w-full">
            <motion.div
              className="absolute inset-0 z-10"
              style={{ y: y1 }}
            >
              <Image
                src={slideImg}
                alt="Featured Product 1"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 translate-x-16 translate-y-16"
              style={{ y: y2 }}
            >
              <Image
                src={SlideImg2}
                alt="Featured Product 2"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight className="h-8 w-8 text-gray-600 dark:text-gray-400" />
        </motion.div>
      </div>
    </div>
  )
}



import React from 'react'
import Hero from '@/components/hero/hero'
import { ProductCarousel } from './products/page'

function Home() {
  return (
    <div className='px-10'>
      <Hero />
      <ProductCarousel/>
    </div>
  )
}

export default Home
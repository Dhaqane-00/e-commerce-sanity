
import React from 'react'
import Hero from '@/components/hero/hero'
import { ProductCarousel } from './products/page'
import { SiteHeader } from '@/components/header/site-header'

function Home() {
  return (
    <div className='px-10'>
      <SiteHeader />
      <Hero />
      <ProductCarousel/>
    </div>
  )
}

export default Home
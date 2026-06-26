import NavigationBar from '@/components/navigation/NavigationBar'
import React from 'react'
import HeroSection from './sections/HeroSection'

export default function HomeContent() {
  return (
    <div className='flex flex-col flex-1 items-center bg-bg font-sans'>
      <NavigationBar />
      <HeroSection />
    </div>
  )
}

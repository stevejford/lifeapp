import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LifeStoryLayout } from '@/components/life-story-layout'

export default function BiographyPage() {
  return (
    <LifeStoryLayout currentPage="biography" hideYellowBar={true}>
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start mt-8">
          <div className="md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="w-[500px] h-[500px] relative overflow-hidden rounded-tr-[100px] rounded-bl-[100px]">
              <Image 
                src="/32294672_10216966744227474_4059912325824512000_n.jpg"
                alt="George Bush"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-2 text-blue-600">George Bush</h1>
            <p className="text-gray-600 mb-2 text-sm">Written by Stephen Ford</p>
            <div className="flex items-center mb-4">
              <span className="text-red-500 mr-2">❤</span>
              <span className="text-gray-600 text-sm">Loved By</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">SF</span>
            </div>
            <p className="text-gray-700 mb-4 text-sm">This Timeline was created to help collect our memories in a single place online.</p>
            <Button variant="outline" className="text-blue-600 border-blue-600 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit biography
            </Button>
          </div>
        </div>
      </div>
    </LifeStoryLayout>
  )
}

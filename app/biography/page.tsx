import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LifeStoryLayout } from '@/components/life-story-layout'

export default function BiographyPage() {
  return (
    <LifeStoryLayout currentPage="biography" hideYellowBar={true}>
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col items-start md:flex-row">
          <div className="mb-8 pr-0 md:mb-0 md:w-1/2 md:pr-8">
            <div className="relative overflow-hidden rounded-tr-[100px] rounded-bl-[100px] size-[500px]">
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
            <h1 className="mb-2 text-5xl font-bold text-blue-600">George Bush</h1>
            <p className="mb-2 text-sm text-gray-600">Written by Stephen Ford</p>
            <div className="mb-4 flex items-center">
              <span className="mr-2 text-red-500">❤</span>
              <span className="text-sm text-gray-600">Loved By</span>
              <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">SF</span>
            </div>
            <p className="mb-4 text-sm text-gray-700">This Timeline was created to help collect our memories in a single place online.</p>
            <Button variant="outline" className="border-blue-600 text-sm text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-4" viewBox="0 0 20 20" fill="currentColor">
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

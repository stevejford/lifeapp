import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LifeStoryLayout } from '@/components/life-story-layout'

export default function LifeStoryPage() {
  return (
    <LifeStoryLayout currentPage="life-story">
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
            <h2 className="text-xl font-light mb-1 text-gray-600">Preserving the memories of</h2>
            <h1 className="text-5xl font-bold mb-1 text-blue-600">George Bush</h1>
            <p className="mb-4 text-gray-600 font-light">7TH MAY, 1952</p>
            <p className="mt-4 max-w-2xl text-gray-700 font-light">This Timeline was created to help collect our memories in a single place online.</p>
            <Button className="mt-4 bg-blue-600 text-white font-normal flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              Invite family and friends
            </Button>
            <p className="text-sm mt-2 max-w-2xl text-gray-600 font-light">
              Invite loved ones to share their photos, videos, and stories of your life story, and even help you manage your memories.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-light mb-6 text-gray-700">Start adding your favourite memories to keep forever</h3>
          <div className="flex justify-center">
            <button className="mb-12 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold w-[325px] h-[65px] flex items-center justify-center">
              Add your first memory
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((index) => (
            <div key={index} className="border-dashed border-2 border-gray-300 flex items-center justify-center w-full h-[475px] rounded-lg">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-base text-blue-600">Add a memory</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LifeStoryLayout>
  )
}

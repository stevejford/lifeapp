import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LifeStoryLayout } from '@/components/life-story-layout'

export default function LifeStoryPage() {
  return (
    <LifeStoryLayout currentPage="life-story">
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
            <h2 className="mb-1 text-xl font-light text-gray-600">Preserving the memories of</h2>
            <h1 className="mb-1 text-5xl font-bold text-blue-600">George Bush</h1>
            <p className="mb-4 font-light text-gray-600">7TH MAY, 1952</p>
            <p className="mt-4 max-w-2xl font-light text-gray-700">This Timeline was created to help collect our memories in a single place online.</p>
            <Button className="mt-4 flex items-center bg-blue-600 font-normal text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              Invite family and friends
            </Button>
            <p className="mt-2 max-w-2xl text-sm font-light text-gray-600">
              Invite loved ones to share their photos, videos, and stories of your life story, and even help you manage your memories.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-6 text-2xl font-light text-gray-700">Start adding your favourite memories to keep forever</h3>
          <div className="flex justify-center">
            <button className="mb-12 flex h-[65px] w-[325px] items-center justify-center bg-blue-600 text-xl font-semibold text-white hover:bg-blue-700">
              Add your first memory
            </button>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex h-[475px] w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-2 size-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

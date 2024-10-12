import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface LifeStoryLayoutProps {
  children: React.ReactNode
  currentPage: 'life-story' | 'biography'
  hideYellowBar?: boolean
}

export function LifeStoryLayout({ children, currentPage, hideYellowBar = false }: LifeStoryLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Secondary header with navigation and menu */}
      <nav className="w-full border-b bg-white">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="w-1/3"></div> {/* Empty div for left side */}
          <div className="flex w-1/3 justify-center space-x-4">
            <Link href="/life-story" className={`text-sm font-medium ${currentPage === 'life-story' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Life story
            </Link>
            <Link href="/biography" className={`text-sm font-medium ${currentPage === 'biography' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
              Biography
            </Link>
          </div>
          <div className="flex w-1/3 items-center justify-end space-x-2">
            <Button variant="ghost" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 size-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.5 10a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" clipRule="evenodd" />
              </svg>
              Public
            </Button>
            <Button variant="ghost" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 size-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              Invite
            </Button>
            <Button variant="ghost" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 size-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Help
            </Button>
          </div>
        </div>
      </nav>

      {/* Yellow banner */}
      {!hideYellowBar && (
        <div className="w-full bg-yellow-50 py-2">
          <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4">
            <span className="font-medium text-yellow-800">Free life story</span>
            <Button variant="secondary" size="sm" className="bg-yellow-400 text-yellow-800 hover:bg-yellow-500">
              Add unlimited memories
            </Button>
          </div>
        </div>
      )}

      {/* Page content */}
      <main className="grow">
        {children}
      </main>
    </div>
  )
}

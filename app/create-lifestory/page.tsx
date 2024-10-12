'use client'

import { useState, ChangeEvent } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreateLifeStory() {
  const [givenName, setGivenName] = useState('')
  const [familyName, setFamilyName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const handleContinue = () => {
    console.log('Continuing with:', { givenName, familyName, dateOfBirth })
    // Add logic here to handle the form submission
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Life Story</h2>
            <p className="mt-2 text-sm text-gray-600">
              Craft a meaningful life story to share with your loved ones. Please provide the following details:
            </p>
          </div>

          <div className="mt-8">
            <form className="space-y-6">
              <div>
                <Label htmlFor="givenName">Given name</Label>
                <Input
                  id="givenName"
                  name="givenName"
                  type="text"
                  required
                  className="mt-1"
                  placeholder="Enter their given name"
                  value={givenName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setGivenName(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="familyName">Family name</Label>
                <Input
                  id="familyName"
                  name="familyName"
                  type="text"
                  required
                  className="mt-1"
                  placeholder="Enter their family name"
                  value={familyName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFamilyName(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="dateOfBirth">Date of birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  className="mt-1"
                  value={dateOfBirth}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setDateOfBirth(e.target.value)}
                />
              </div>

              <div>
                <Button
                  type="button"
                  className="w-full"
                  onClick={handleContinue}
                  disabled={!givenName || !familyName || !dateOfBirth}
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/new-lifestory-cover.jpg"
          alt="Life Story Cover"
          layout="fill"
        />
      </div>
    </div>
  )
}

'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import Image from "next/image"

type MemoryType = "Online Memorial" | "Life story" | null

export default function CreateMemory() {
  const [selectedMemory, setSelectedMemory] = useState<MemoryType>(null)
  const router = useRouter()

  const handleSelect = (memoryType: MemoryType) => {
    setSelectedMemory(memoryType)
  }

  const handleContinue = () => {
    if (selectedMemory) {
      if (selectedMemory === "Life story") {
        router.push('/create-lifestory')
      } else if (selectedMemory === "Online Memorial") {
        router.push('/create-memorial')
      }
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">What would you like to create?</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card 
          className={`cursor-pointer overflow-hidden transition-all duration-200 ${
            selectedMemory === "Online Memorial" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => handleSelect("Online Memorial")}
        >
          <CardHeader className="relative p-0">
            <Image
              src="/memorial-selection.png"
              alt="Online Memorial"
              width={300}
              height={200}
              className="size-48 object-cover"
            />
            {selectedMemory === "Online Memorial" && (
              <div className="absolute right-2 top-2 rounded-full bg-blue-500 p-1">
                <CheckIcon className="size-4 text-white" />
              </div>
            )}
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="mb-2 text-lg font-semibold">Online Memorial</CardTitle>
            <p className="text-sm text-gray-600">Honor and remember a loved one&apos;s memory.</p>
          </CardContent>
        </Card>
        <Card 
          className={`cursor-pointer overflow-hidden transition-all duration-200 ${
            selectedMemory === "Life story" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => handleSelect("Life story")}
        >
          <CardHeader className="relative p-0">
            <Image
              src="/lifestory-selection.png"
              alt="Life story"
              width={300}
              height={200}
              className="size-48 object-cover"
            />
            {selectedMemory === "Life story" && (
              <div className="absolute right-2 top-2 rounded-full bg-blue-500 p-1">
                <CheckIcon className="size-4 text-white" />
              </div>
            )}
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="mb-2 text-lg font-semibold">Life story</CardTitle>
            <p className="text-sm text-gray-600">Ensure your story is remembered for generations to come.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex justify-center">
        <Button 
          className="w-full px-8 py-2 sm:w-auto"
          onClick={handleContinue}
          disabled={!selectedMemory}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">What would you like to create?</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card 
          className={`overflow-hidden cursor-pointer transition-all duration-200 ${
            selectedMemory === "Online Memorial" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => handleSelect("Online Memorial")}
        >
          <CardHeader className="p-0 relative">
            <Image
              src="/memorial-selection.png"
              alt="Online Memorial"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            {selectedMemory === "Online Memorial" && (
              <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
            )}
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-lg font-semibold mb-2">Online Memorial</CardTitle>
            <p className="text-sm text-gray-600">Honor and remember a loved one's memory.</p>
          </CardContent>
        </Card>
        <Card 
          className={`overflow-hidden cursor-pointer transition-all duration-200 ${
            selectedMemory === "Life story" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => handleSelect("Life story")}
        >
          <CardHeader className="p-0 relative">
            <Image
              src="/lifestory-selection.png"
              alt="Life story"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            {selectedMemory === "Life story" && (
              <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
            )}
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-lg font-semibold mb-2">Life story</CardTitle>
            <p className="text-sm text-gray-600">Ensure your story is remembered for generations to come.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex justify-center">
        <Button 
          className="w-full sm:w-auto px-8 py-2"
          onClick={handleContinue}
          disabled={!selectedMemory}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

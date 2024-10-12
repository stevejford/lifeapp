import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-8 text-4xl font-bold text-primary">Welcome to Memorial App</h1>
      <p className="mb-8 text-xl text-secondary-foreground">A digital platform to commemorate and celebrate the lives of loved ones</p>
      <div className="flex space-x-4">
        <Button>Create a Memorial</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </main>
  )
}

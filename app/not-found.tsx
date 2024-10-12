import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-3 text-2xl">Page Not Found</h2>
      <p className="mt-5 text-center">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        <br />
        Please check the URL or go back to the homepage.
      </p>
      <Link href="/" className="mt-5 text-blue-500 hover:text-blue-600">
        Go back home
      </Link>
    </div>
  )
}

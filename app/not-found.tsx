import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl mt-3">Page Not Found</h2>
      <p className="mt-5 text-center">
        The page you're looking for doesn't exist or has been moved.
        <br />
        Please check the URL or go back to the homepage.
      </p>
      <Link href="/" className="mt-5 text-blue-500 hover:text-blue-600">
        Go back home
      </Link>
    </div>
  )
}

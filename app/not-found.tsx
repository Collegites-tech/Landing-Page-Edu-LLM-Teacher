// app/not-found.tsx
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 text-center p-6">
      <Image
        src="/error404.png" // found image in  /public directory
        alt="Page Not Found"
        width={400}
        height={300}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-orange-900 mb-4">Page Not Found</h1>
      <p className="text-orange-700 mb-6">
        Oops! The page you're looking for doesn't exist or is temporarily unavailable.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition">
          Go Home
        </button>
      </Link>
    </div>
  )
}

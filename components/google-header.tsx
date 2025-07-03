import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, User } from "lucide-react"

export function GoogleHeader() {
  return (
    <header className="flex h-16 items-center justify-between bg-white px-4 shadow-sm md:px-6">
      <div className="flex items-center gap-4">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
          <Image src="/placeholder.svg" alt="Google logo" width={24} height={24} className="h-6 w-6" />
          <span className="text-gray-700">Google for Education</span>
        </Link>
        <nav className="hidden space-x-4 text-sm font-medium md:flex">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Our values
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Product
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            AI
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Resources
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Search className="h-5 w-5 text-gray-600" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5 text-gray-600" />
          <span className="sr-only">User</span>
        </Button>
        <Link href="#" className="text-blue-600 hover:underline">
          Sign in
        </Link>
        <Button className="rounded-full bg-[#1A73E8] px-4 py-2 text-white hover:bg-[#1A73E8]/90">Contact sales</Button>
      </div>
    </header>
  )
}

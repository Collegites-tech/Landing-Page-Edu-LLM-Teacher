import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, LayoutGrid } from "lucide-react"
import Image from "next/image"

export function ClassroomHeader() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-4">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-gray-700">
          <Image src="/placeholder.svg" alt="Google Classroom icon" width={24} height={24} className="h-6 w-6" />
          Google Classroom
        </Link>
        <nav className="hidden space-x-6 text-sm font-medium md:flex">
          <Link href="#" className="relative text-green-700">
            Stream
            <span className="absolute -bottom-4 left-0 w-full border-b-2 border-green-700"></span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Classroom
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            People
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Grades
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="h-5 w-5 text-gray-600" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <LayoutGrid className="h-5 w-5 text-gray-600" />
          <span className="sr-only">Apps</span>
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/images/avatar-placeholder.jpg" alt="User avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

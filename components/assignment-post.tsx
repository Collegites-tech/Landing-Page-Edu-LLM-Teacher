import { Card } from "@/components/ui/card"
import Image from "next/image"
import { FolderOpen } from "lucide-react"

export function AssignmentPost() {
  return (
    <Card className="rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-2 text-gray-700">
        <FolderOpen className="h-5 w-5" />
        <span className="font-medium">Project 1 - Biomes of the World</span>
      </div>
      <div className="relative mt-4 h-64 w-full overflow-hidden rounded-lg">
        <Image
          src="/images/assignment-parrot.png"
          alt="Biomes of the World"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-5xl font-bold leading-tight">
            Biomes of <br /> the <span className="bg-yellow-500 px-2 py-1">World</span>
          </h3>
          <span className="absolute bottom-6 right-6 rounded-full bg-yellow-500 px-2 py-1 text-xs font-medium text-black">
            Ali Dinsmoor
          </span>
        </div>
      </div>
    </Card>
  )
}

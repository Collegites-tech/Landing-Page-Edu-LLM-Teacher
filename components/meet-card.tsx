import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import Image from "next/image"

export function MeetCard() {
  return (
    <Card className="rounded-lg p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/placeholder.svg" alt="Google Meet icon" width={20} height={20} className="h-5 w-5" />
          <span className="font-medium text-gray-700">Meet</span>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVertical className="h-5 w-5 text-gray-500" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
      <Button className="mt-4 w-full rounded-md border border-gray-300 bg-white text-green-700 hover:bg-gray-50">
        Generate link
      </Button>
    </Card>
  )
}

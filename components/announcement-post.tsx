import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AnnouncementPost() {
  return (
    <Card className="rounded-lg p-6 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/images/avatar-placeholder.jpg" alt="Ali Dinsmoor avatar" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-800">Ali Dinsmoor</p>
            <p className="text-sm text-gray-500">4:49 PM</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVertical className="h-5 w-5 text-gray-500" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
      <div className="mt-4 text-gray-700">
        <p>Welcome to Science 2, Period 1! Take a look at your first assignment.</p>
      </div>
    </Card>
  )
}

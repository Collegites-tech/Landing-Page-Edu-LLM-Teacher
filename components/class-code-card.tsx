import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreVertical, Copy } from "lucide-react"

export function ClassCodeCard() {
  return (
    <Card className="rounded-lg p-4 shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-700">Class code</span>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVertical className="h-5 w-5 text-gray-500" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
      <div className="mt-2 flex items-center justify-between rounded-md border border-dashed border-gray-300 p-2">
        <span className="font-mono text-lg font-bold text-gray-800">{"[ ]"}</span>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Copy className="h-5 w-5 text-gray-500" />
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
    </Card>
  )
}

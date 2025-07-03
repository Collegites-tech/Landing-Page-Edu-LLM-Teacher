import { Card } from "@/components/ui/card"

export function UpcomingCard() {
  return (
    <Card className="rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-medium text-gray-700">Upcoming</h3>
      <p className="mt-2 text-sm text-gray-500">Due Tuesday</p>
      <p className="text-sm text-gray-700">10:00 AM - Worksheet for...</p>
      <div className="mt-4 h-2 w-full rounded-full bg-gray-200">
        <div className="h-full w-1/3 rounded-full bg-green-500"></div>
      </div>
    </Card>
  )
}

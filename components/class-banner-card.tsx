import { Card } from "@/components/ui/card"
import Image from "next/image"

export function ClassBannerCard() {
  return (
    <Card className="relative h-48 overflow-hidden rounded-lg shadow-md">
      <Image
        src="/images/class-banner.png"
        alt="Science class banner"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h2 className="text-4xl font-bold">Science</h2>
        <p className="text-lg">Period 1</p>
      </div>
    </Card>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-md p-6">
        <div className="flex justify-end mb-4">
          <Button variant="outline" size="sm" className="text-xs">
            Edit
          </Button>
        </div>

        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Mariyam Mohona"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Mariyam Mohona</h1>

            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <span>+880 01567808747</span>
              <span className="text-gray-300">—</span>
              <span>ux.saifur.info@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-gray-500" />
                <span>Joined 2 months ago</span>
              </div>

              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-gray-500" />
                <span>You enrolled in six chapters for your ninth-grade class.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

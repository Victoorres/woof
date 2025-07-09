import { Heart } from "lucide-react"

interface FloatingPetCardProps {
  image: string
  className?: string
  showHeart?: boolean
}

export default function FloatingPetCard({ image, className = "", showHeart = false }: FloatingPetCardProps) {
  return (
    <div className={`w-16 h-16 rounded-full p-2 shadow-lg ${className} z-[20]`}>
      <img src={image || "/placeholder.svg"} alt="Pet" className="w-full h-full rounded-full object-cover" />
      {showHeart && (
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <Heart className="w-3 h-3 text-white fill-current" />
        </div>
      )}
    </div>
  )
}

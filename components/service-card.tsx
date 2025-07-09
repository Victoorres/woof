interface ServiceCardProps {
  icon?: string
  image?: string
  title: string
  description: string
  variant: "dark" | "purple" | "teal"
  badge?: string
  badgeText?: string
  linkText?: string
}

export default function ServiceCard({
  icon,
  image,
  title,
  description,
  variant,
  badge,
  badgeText,
  linkText,
}: ServiceCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "purple":
        return "bg-gradient-to-br from-purple-600 to-purple-700 text-white"
      case "teal":
        return "bg-gradient-to-br from-teal-500 to-teal-600 text-white"
      default:
        return "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    }
  }

  return (
    <div
      className={`p-6 rounded-2xl ${getVariantClasses()} relative group hover:scale-105 transform transition-all duration-300 hover:shadow-2xl`}
    >
      {badge && (
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 animate-pulse">
          <div className="text-lg font-bold">{badge}</div>
          <div className="text-xs opacity-90">{badgeText}</div>
        </div>
      )}

      <div className="space-y-4">
        {icon && <div className="text-3xl animate-bounce-slow">{icon}</div>}

        {image && (
          <div className="w-20 h-20 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
        )}

        <div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-200">{title}</h3>
          <p className="text-sm opacity-90 leading-relaxed mb-3">{description}</p>
          {linkText && (
            <div className="text-sm font-medium text-yellow-300 hover:text-yellow-200 cursor-pointer transition-colors duration-200">
              {linkText}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

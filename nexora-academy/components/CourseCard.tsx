import Link from 'next/link'

interface CourseCardProps {
  id: string
  title: string
  description: string
  image: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  category: string
}

const CourseCard = ({ id, title, description, image, duration, level, category }: CourseCardProps) => {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700',
  }

  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden card-hover">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[level]}`}>
            {level}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-secondary-700">
            {category}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-secondary-500 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Course Info */}
        <div className="flex items-center gap-4 text-sm text-secondary-500 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>12 Modules</span>
          </div>
        </div>

        {/* Button */}
        <Link 
          href={`/courses?id=${id}`}
          className="block w-full text-center py-3 px-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default CourseCard

import Link from 'next/link'
import CourseCard from './CourseCard'

const courses = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Master the basics of HTML, CSS, and JavaScript to build beautiful, responsive websites from scratch.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    duration: '8 weeks',
    level: 'Beginner' as const,
    category: 'Frontend',
  },
  {
    id: '2',
    title: 'Fullstack JavaScript',
    description: 'Build complete web applications with Node.js, Express, and modern JavaScript frameworks.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    duration: '12 weeks',
    level: 'Intermediate' as const,
    category: 'Fullstack',
  },
  {
    id: '3',
    title: 'UI/UX Design Basics',
    description: 'Learn user interface design principles, prototyping, and create stunning user experiences.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    duration: '6 weeks',
    level: 'Beginner' as const,
    category: 'Design',
  },
  {
    id: '4',
    title: 'Backend API Development',
    description: 'Create robust RESTful APIs and understand server-side architecture with modern technologies.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    duration: '10 weeks',
    level: 'Intermediate' as const,
    category: 'Backend',
  },
  {
    id: '5',
    title: 'Database & System Design',
    description: 'Master SQL, NoSQL databases, and learn to design scalable system architectures.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    duration: '8 weeks',
    level: 'Intermediate' as const,
    category: 'Backend',
  },
  {
    id: '6',
    title: 'Digital Entrepreneurship',
    description: 'Build your online business from scratch with digital marketing, monetization strategies, and growth hacking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    duration: '6 weeks',
    level: 'Beginner' as const,
    category: 'Business',
  },
]

const FeaturedCourses = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold text-sm rounded-full mb-4">
            Featured Courses
          </span>
          <h2 className="section-title">
            Expand Your Knowledge with Our Top Courses
          </h2>
          <p className="section-subtitle mx-auto">
            Choose from our professionally designed courses and start building your future today.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id}>
              <CourseCard
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                duration={course.duration}
                level={course.level}
                category={course.category}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/courses" className="btn-secondary inline-flex items-center gap-2">
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses

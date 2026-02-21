import { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import CourseCard from '@/components/CourseCard'
import Footer from '@/components/Footer'

const allCourses = [
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
  {
    id: '7',
    title: 'React Native Development',
    description: 'Build cross-platform mobile apps with React Native and Expo.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    duration: '10 weeks',
    level: 'Intermediate' as const,
    category: 'Mobile',
  },
  {
    id: '8',
    title: 'Python for Data Science',
    description: 'Learn Python programming and data analysis with pandas, numpy, and visualization libraries.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    duration: '12 weeks',
    level: 'Intermediate' as const,
    category: 'Data Science',
  },
]

const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Design', 'Business', 'Mobile', 'Data Science']

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredCourses = activeCategory === 'All' 
    ? allCourses 
    : allCourses.filter(course => course.category === activeCategory)

  return (
    <>
      <Head>
        <title>Courses - Nexora Academy</title>
        <meta name="description" content="Browse our comprehensive collection of online courses in web development, design, business, and more." />
      </Head>

      <div className="min-h-screen bg-secondary-50">
        <Navbar />
        
        <main className="pt-24 pb-16">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 mb-12">
            <div className="container-custom">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Courses
              </h1>
              <p className="text-lg text-primary-100 max-w-2xl">
                Explore our comprehensive courses designed to help you master in-demand skills and advance your career.
              </p>
            </div>
          </div>

          <div className="container-custom">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary-500 text-white shadow-soft'
                      : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-secondary-500 mb-6">
              Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            </p>

            {/* Course Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
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

            {/* No Results */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <p className="text-secondary-500 text-lg">
                  No courses found in this category. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default CoursesPage

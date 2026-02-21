const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Developer at Google',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'Nexora Academy transformed my career. The practical projects and expert mentorship helped me land my dream job at Google within 6 months of completing the course.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Fullstack Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'The curriculum is top-notch and always up-to-date with the latest industry trends. The community support is incredible - you are never alone in your learning journey.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'I went from a complete beginner to a professional designer thanks to Nexora Academy. The hands-on projects gave me a portfolio that impressed my employers.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Backend Engineer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'The flexibility of learning allowed me to upskill while working a full-time job. Now I have doubled my salary and love what I do!',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold text-sm rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="section-title">
            What Our Students Say
          </h2>
          <p className="section-subtitle mx-auto">
            Join thousands of successful graduates who have transformed their careers with Nexora Academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-secondary-50 rounded-2xl p-8 hover:shadow-card transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-secondary-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-secondary-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

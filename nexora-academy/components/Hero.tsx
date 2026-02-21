import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-50 via-white to-primary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container-custom relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              New Courses Available Now
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-800 leading-tight mb-6">
              Upgrade Your Skills with{' '}
              <span className="gradient-text">Modern Online Courses</span>
            </h1>
            
            <p className="text-lg text-secondary-500 mb-8 max-w-xl mx-auto lg:mx-0">
              Learn from industry-focused curriculum designed to help you build real-world skills. 
              Start your journey to career success today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/courses" className="btn-primary text-lg px-8 py-4">
                Explore Courses
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Get Started
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-secondary-200">
              <div>
                <div className="text-3xl font-bold text-secondary-800">10K+</div>
                <div className="text-secondary-500 text-sm">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-800">50+</div>
                <div className="text-secondary-500 text-sm">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-800">100+</div>
                <div className="text-secondary-500 text-sm">Instructors</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Students learning online"
                  className="w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-card p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-secondary-800">Certificate</div>
                  <div className="text-sm text-secondary-500">Get Certified</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-secondary-800">Affordable</div>
                  <div className="text-sm text-secondary-500">Best Prices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero

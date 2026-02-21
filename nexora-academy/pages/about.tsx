import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const teamMembers = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Former education director with 15+ years in EdTech. Passionate about making quality education accessible to everyone.',
  },
  {
    name: 'James Rodriguez',
    role: 'Head of Curriculum',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Industry veteran with experience at top tech companies. Dedicated to creating industry-relevant courses.',
  },
  {
    name: 'Emily Chen',
    role: 'Lead Instructor',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Award-winning educator with a passion for teaching. Specializes in web development and design.',
  },
  {
    name: 'Michael Thompson',
    role: 'Head of Student Success',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Former career counselor committed to helping students achieve their professional goals.',
  },
]

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Nexora Academy</title>
        <meta name="description" content="Learn about Nexora Academy - our mission, vision, and team of expert instructors dedicated to your success." />
      </Head>

      <div className="min-h-screen bg-secondary-50">
        <Navbar />
        
        <main className="pt-24 pb-16">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 mb-12">
            <div className="container-custom">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Nexora Academy
              </h1>
              <p className="text-lg text-primary-100 max-w-2xl">
                Empowering learners worldwide with industry-focused online education.
              </p>
            </div>
          </div>

          <div className="container-custom">
            {/* Our Story */}
            <section className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold text-sm rounded-full mb-4">
                    Our Story
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                    Transforming Education for the Modern World
                  </h2>
                  <div className="space-y-4 text-secondary-600">
                    <p>
                      Founded in 2020, Nexora Academy was born from a simple belief: everyone deserves access to quality education that prepares them for the careers of tomorrow.
                    </p>
                    <p>
                      We recognized that traditional education often fails to keep pace with rapidly evolving industry demands. That's why we built a platform that combines cutting-edge curriculum with flexible learning options, expert mentorship, and practical projects.
                    </p>
                    <p>
                      Today, we've helped over 10,000 students from 50+ countries transform their careers through our comprehensive online courses. Our mission continues to be: making world-class education accessible to anyone, anywhere.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-card">
                    <img 
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Nexora Academy team"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="mb-20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-soft">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">Our Mission</h3>
                  <p className="text-secondary-600">
                    To empower individuals worldwide with practical, industry-relevant skills through accessible online education. We strive to bridge the gap between traditional learning and real-world career requirements.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-soft">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">Our Vision</h3>
                  <p className="text-secondary-600">
                    To become the global leader in skill-based online education, creating a world where anyone can transform their career potential through accessible, high-quality learning experiences.
                  </p>
                </div>
              </div>
            </section>

            {/* Values */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold text-sm rounded-full mb-4">
                  Our Values
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800">
                  What Drives Us
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-800 mb-3">Quality First</h3>
                  <p className="text-secondary-500">
                    We never compromise on quality. Every course is meticulously designed and regularly updated.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-800 mb-3">Community Driven</h3>
                  <p className="text-secondary-500">
                    We believe in the power of community. Learning is better when we're together.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-800 mb-3">Continuous Growth</h3>
                  <p className="text-secondary-500">
                    We're always evolving. Our courses, platform, and methods improve every day.
                  </p>
                </div>
              </div>
            </section>

            {/* Team */}
            <section>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold text-sm rounded-full mb-4">
                  Our Team
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800">
                  Meet Our Expert Instructors
                </h2>
                <p className="text-secondary-500 mt-4 max-w-2xl mx-auto">
                  Our team consists of industry professionals with years of experience in their respective fields.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-secondary-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 font-medium text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-secondary-500 text-sm">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default AboutPage

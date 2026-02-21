import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChooseUs from '@/components/WhyChooseUs'
import LearningProcess from '@/components/LearningProcess'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nexora Academy - Modern Online Learning Platform</title>
        <meta name="description" content="Master modern skills with industry-focused online courses. Learn from expert mentors and build real-world projects at Nexora Academy." />
        <meta name="keywords" content="online courses, education, learning, programming, web development, UI/UX design, digital skills" />
        <meta property="og:title" content="Nexora Academy - Modern Online Learning Platform" />
        <meta property="og:description" content="Master modern skills with industry-focused online courses. Start your journey to career success today." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nexoraacademy.com" />
      </Head>

      <div className="min-h-screen bg-secondary-50">
        <Navbar />
        
        <main>
          <Hero />
          <FeaturedCourses />
          <WhyChooseUs />
          <LearningProcess />
          <Testimonials />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  )
}

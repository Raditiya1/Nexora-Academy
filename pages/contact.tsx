import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const faqs = [
  {
    question: 'How do I enroll in a course?',
    answer: 'Simply browse our courses, click on the one you\'re interested in, and click the "Enroll Now" button. You\'ll be guided through the registration process.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. We also offer installment plans for select courses.',
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact our support team within 30 days for a full refund.',
  },
  {
    question: 'Do you offer certificates?',
    answer: 'Yes, upon completion of any course, you\'ll receive a certificate that you can add to your LinkedIn profile and resume.',
  },
  {
    question: 'How long do I have access to course materials?',
    answer: 'You get lifetime access to all course materials, including any future updates we make to the course.',
  },
]

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Nexora Academy</title>
        <meta name="description" content="Get in touch with Nexora Academy. We\'re here to answer your questions and help you start your learning journey." />
      </Head>

      <div className="min-h-screen bg-secondary-50">
        <Navbar />
        
        <main className="pt-24 pb-16">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 mb-12">
            <div className="container-custom">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-primary-100 max-w-2xl">
                Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>

          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-card p-8">
                  <h3 className="text-2xl font-bold text-secondary-800 mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-800 mb-1">Email</h4>
                        <p className="text-secondary-500">hello@nexoraacademy.com</p>
                        <p className="text-secondary-500">support@nexoraacademy.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-800 mb-1">Phone</h4>
                        <p className="text-secondary-500">+1 (555) 123-4567</p>
                        <p className="text-secondary-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-800 mb-1">Location</h4>
                        <p className="text-secondary-500">123 Learning Street</p>
                        <p className="text-secondary-500">Education City, EC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-white rounded-2xl shadow-card p-8">
                  <h3 className="text-2xl font-bold text-secondary-800 mb-6">Frequently Asked Questions</h3>
                  <p className="text-secondary-500 mb-6">
                    Have a question? Check our FAQ section for quick answers to common questions.
                  </p>
                  <div className="space-y-4">
                    {faqs.slice(0, 3).map((faq, index) => (
                      <div key={index} className="border-b border-secondary-100 pb-4 last:border-0">
                        <h4 className="font-medium text-secondary-800 mb-2">{faq.question}</h4>
                        <p className="text-secondary-500 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/faq" className="inline-flex items-center gap-2 text-primary-600 font-medium mt-6 hover:text-primary-700">
                    View all FAQs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default ContactPage

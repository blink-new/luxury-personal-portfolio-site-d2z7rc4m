import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">
            Luxury Design
            <span className="block text-accent">& Craftsmanship</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary/70 mb-8 max-w-3xl mx-auto">
            Elevating brands through exceptional graphic design, premium timepieces, 
            and artistic prints that define sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center justify-center"
            >
              Explore Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-background transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Premium Services
            </h2>
            <p className="text-xl text-primary/70 max-w-2xl mx-auto">
              Three distinct offerings that embody luxury and exceptional quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Graphic Design',
                description: 'Bespoke visual identities and brand experiences that captivate and inspire.',
                link: '/services',
                image: '🎨'
              },
              {
                title: 'Luxury Timepieces',
                description: 'Handcrafted watch clocks that blend artistry with precision engineering.',
                link: '/clocks',
                image: '⌚'
              },
              {
                title: 'Art Prints',
                description: 'Limited edition printed posters that transform spaces into galleries.',
                link: '/services',
                image: '🖼️'
              }
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.image}</div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary/70 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-accent font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, Luxury Brand',
                content: 'Exceptional work that truly elevated our brand identity. The attention to detail is unmatched.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Art Collector',
                content: 'The custom timepiece exceeded all expectations. A true masterpiece of craftsmanship.',
                rating: 5
              },
              {
                name: 'Emma Davis',
                role: 'Interior Designer',
                content: 'The art prints transformed our space completely. Absolutely stunning quality and design.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-current" size={20} />
                  ))}
                </div>
                <p className="text-primary/80 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-primary/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl text-background/80 mb-8">
            Let's collaborate to bring your vision to life with luxury and precision.
          </p>
          <Link
            to="/contact"
            className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
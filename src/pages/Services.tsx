import { Link } from 'react-router-dom'
import { ArrowRight, Check, Palette, Printer, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Palette className="text-accent" size={48} />,
      title: 'Graphic Design',
      subtitle: 'Visual Identity & Brand Design',
      description: 'Crafting sophisticated visual identities that capture the essence of luxury brands and elevate market presence.',
      features: [
        'Logo Design & Brand Identity',
        'Marketing Materials & Collateral',
        'Digital Design & Web Graphics',
        'Packaging & Product Design',
        'Brand Guidelines & Style Guides'
      ],
      pricing: 'Starting at $2,500',
      timeline: '2-4 weeks'
    },
    {
      icon: <Sparkles className="text-accent" size={48} />,
      title: 'Premium Consultation',
      subtitle: 'Strategic Design Direction',
      description: 'Comprehensive design strategy sessions to align your vision with market demands and luxury positioning.',
      features: [
        'Brand Strategy Development',
        'Market Analysis & Positioning',
        'Design Direction & Concepts',
        'Competitive Analysis',
        'Implementation Roadmap'
      ],
      pricing: 'Starting at $1,200',
      timeline: '1-2 weeks'
    },
    {
      icon: <Printer className="text-accent" size={48} />,
      title: 'Print Design',
      subtitle: 'Luxury Print Materials',
      description: 'Exquisite print designs that command attention and reflect the highest standards of quality and sophistication.',
      features: [
        'Business Cards & Stationery',
        'Brochures & Catalogs',
        'Posters & Large Format',
        'Packaging Design',
        'Exhibition Materials'
      ],
      pricing: 'Starting at $800',
      timeline: '1-3 weeks'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Premium Design
              <span className="block text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 max-w-3xl mx-auto">
              Elevating brands through exceptional design that embodies luxury, 
              sophistication, and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                <p className="text-primary/70 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="text-accent mr-3 flex-shrink-0" size={16} />
                      <span className="text-primary/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-primary/10 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary/60">Investment</span>
                    <span className="font-semibold text-primary">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-primary/60">Timeline</span>
                    <span className="font-semibold text-primary">{service.timeline}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full bg-accent text-primary py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
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
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-background/80 mb-8">
            Let's create something extraordinary together. Schedule a consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-background text-background px-8 py-4 rounded-lg font-semibold hover:bg-background hover:text-primary transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
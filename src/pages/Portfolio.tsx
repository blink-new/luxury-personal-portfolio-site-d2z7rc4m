import { useState } from 'react'
import { ExternalLink, Filter } from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Branding', 'Print Design', 'Digital', 'Packaging']

  const projects = [
    {
      id: 1,
      title: 'Luxury Hotel Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity for a 5-star boutique hotel chain',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      tags: ['Logo Design', 'Brand Guidelines', 'Stationery']
    },
    {
      id: 2,
      title: 'Premium Wine Label Design',
      category: 'Packaging',
      description: 'Elegant label design for premium wine collection',
      image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=400&fit=crop',
      tags: ['Label Design', 'Typography', 'Luxury Packaging']
    },
    {
      id: 3,
      title: 'Fashion Magazine Layout',
      category: 'Print Design',
      description: 'Editorial design for luxury fashion magazine',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
      tags: ['Editorial', 'Typography', 'Layout Design']
    },
    {
      id: 4,
      title: 'Tech Startup Brand Identity',
      category: 'Branding',
      description: 'Modern brand identity for innovative tech company',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      tags: ['Logo Design', 'Digital Branding', 'Modern']
    },
    {
      id: 5,
      title: 'Luxury Watch Campaign',
      category: 'Digital',
      description: 'Digital campaign for premium timepiece collection',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
      tags: ['Digital Design', 'Campaign', 'Luxury']
    },
    {
      id: 6,
      title: 'Artisan Coffee Packaging',
      category: 'Packaging',
      description: 'Premium packaging design for specialty coffee roaster',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop',
      tags: ['Packaging', 'Branding', 'Artisan']
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Creative
              <span className="block text-accent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 max-w-3xl mx-auto">
              A curated collection of luxury design projects that showcase 
              exceptional craftsmanship and innovative thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-primary/60 mr-4">
              <Filter size={20} className="mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-accent text-primary shadow-lg'
                    : 'bg-white text-primary/70 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-accent text-primary p-3 rounded-full hover:bg-accent/90 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary/5 text-primary/70 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
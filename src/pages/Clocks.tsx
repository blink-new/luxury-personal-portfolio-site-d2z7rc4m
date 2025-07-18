import { useState } from 'react'
import { ShoppingCart, Heart, Star, Filter, Clock } from 'lucide-react'

export default function Clocks() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [favorites, setFavorites] = useState<number[]>([])

  const categories = ['All', 'Wall Clocks', 'Desk Clocks', 'Luxury Timepieces']

  const clocks = [
    {
      id: 1,
      name: 'Midnight Elegance',
      category: 'Wall Clocks',
      price: 1299,
      originalPrice: 1599,
      image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&h=600&fit=crop',
      description: 'Sophisticated black marble wall clock with gold accents',
      features: ['Premium marble construction', 'Silent movement', 'Gold-plated hands'],
      rating: 4.9,
      reviews: 24,
      inStock: true,
      isBestseller: true
    },
    {
      id: 2,
      name: 'Golden Hour',
      category: 'Desk Clocks',
      price: 899,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop',
      description: 'Luxurious brass desk clock with vintage-inspired design',
      features: ['Solid brass construction', 'Mechanical movement', 'Vintage design'],
      rating: 4.8,
      reviews: 18,
      inStock: true,
      isBestseller: false
    },
    {
      id: 3,
      name: 'Crystal Precision',
      category: 'Luxury Timepieces',
      price: 2499,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
      description: 'Handcrafted crystal timepiece with precision Swiss movement',
      features: ['Swiss movement', 'Crystal construction', 'LED illumination'],
      rating: 5.0,
      reviews: 12,
      inStock: true,
      isBestseller: false
    }
  ]

  const filteredClocks = activeFilter === 'All' 
    ? clocks 
    : clocks.filter(clock => clock.category === activeFilter)

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Luxury
              <span className="block text-accent">Timepieces</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 max-w-3xl mx-auto">
              Handcrafted clocks that blend artistry with precision, 
              transforming time into a luxury experience.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center space-x-8 text-center">
                <div>
                  <Clock className="text-accent mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-primary/60">Unique Designs</div>
                </div>
                <div className="w-px h-16 bg-primary/20"></div>
                <div>
                  <Star className="text-accent mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-primary">4.8</div>
                  <div className="text-primary/60">Average Rating</div>
                </div>
                <div className="w-px h-16 bg-primary/20"></div>
                <div>
                  <Heart className="text-accent mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-primary/60">Handcrafted</div>
                </div>
              </div>
            </div>
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

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClocks.map((clock) => (
              <div
                key={clock.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={clock.image}
                    alt={clock.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {clock.isBestseller && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-background px-3 py-1 rounded-full text-sm font-medium">
                        Bestseller
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => toggleFavorite(clock.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      size={20}
                      className={`${
                        favorites.includes(clock.id)
                          ? 'text-red-500 fill-current'
                          : 'text-primary/60'
                      }`}
                    />
                  </button>

                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center">
                      <ShoppingCart size={20} className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent text-sm font-medium">{clock.category}</span>
                    <div className="flex items-center">
                      <Star className="text-accent fill-current" size={16} />
                      <span className="text-primary/70 text-sm ml-1">
                        {clock.rating} ({clock.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {clock.name}
                  </h3>
                  
                  <p className="text-primary/70 mb-4 text-sm">
                    {clock.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        ${clock.price.toLocaleString()}
                      </span>
                      {clock.originalPrice && (
                        <span className="text-primary/40 line-through">
                          ${clock.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button className="bg-accent text-primary p-2 rounded-lg hover:bg-accent/90 transition-colors">
                      <ShoppingCart size={20} />
                    </button>
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
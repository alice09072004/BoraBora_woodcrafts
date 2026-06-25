import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Mock blog articles data (in production, this would come from a CMS or backend API)
  const blogArticles = [
    {
      id: 1,
      title: 'The Art of Traditional Kenyan Woodcraft: Techniques Passed Down Through Generations',
      excerpt: 'Explore the rich heritage of Kenyan woodworking traditions, from the coastal forests to the skilled artisans who preserve these ancient techniques.',
      content: 'Kenya\'s woodworking tradition spans centuries, with techniques passed down through generations of master craftsmen. From the intricate joinery methods used in traditional furniture to the delicate carving techniques found in ceremonial pieces, each method tells a story of cultural heritage and artistic excellence. Our artisans at BoraBora Woodcrafts continue these traditions, using tools and techniques that have remained largely unchanged for decades while adapting to contemporary design sensibilities.',
      author: 'Kamau Njoroge',
      date: '2024-01-20',
      category: 'Craftsmanship',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80'
    },
    {
      id: 2,
      title: 'Sustainable Forestry: Our Commitment to Ethical Wood Sourcing',
      excerpt: 'Learn about our responsible sourcing practices and how we ensure every piece of wood comes from sustainably managed forests.',
      content: 'At BoraBora Woodcrafts, we believe that beautiful furniture should never come at the cost of our environment. We work exclusively with certified sustainable forestry operations in Kenya, ensuring that every tree harvested is replaced and that forest ecosystems are preserved for future generations. Our partnerships with local forestry authorities and conservation organizations help us maintain the highest standards of environmental stewardship while supporting local communities that depend on these forests for their livelihoods.',
      author: 'Grace Wanjiku',
      date: '2024-01-15',
      category: 'Sustainability',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80'
    },
    {
      id: 3,
      title: 'Caring for Your Mahogany Pieces: A Complete Maintenance Guide',
      excerpt: 'Essential tips and techniques for keeping your mahogany furniture and kitchenware looking beautiful for years to come.',
      content: 'Mahogany is one of the most durable and beautiful woods used in fine furniture, but like all natural materials, it requires proper care to maintain its luster and longevity. This comprehensive guide covers everything from daily cleaning routines to seasonal maintenance, helping you protect your investment and ensure your mahogany pieces become cherished heirlooms. Learn about the best oils to use, how to handle scratches and water damage, and the ideal environmental conditions for storing your mahogany items.',
      author: 'David Omondi',
      date: '2024-01-10',
      category: 'Care Guide',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1645205449282-f96583a48054?w=800&q=80'
    },
    {
      id: 4,
      title: 'The Journey from Forest to Finished Piece: Behind the Scenes at BoraBora',
      excerpt: 'Take an exclusive look at our workshop and follow the transformation of raw timber into exquisite handcrafted pieces.',
      content: 'Every piece that leaves our workshop has a story—a journey that begins in the carefully managed forests of Kenya\'s coastal region and ends in homes around the world. This behind-the-scenes look at our process reveals the meticulous attention to detail at every stage, from selecting the perfect timber to the final hand-rubbed finish. Meet our master craftsmen, learn about our traditional tools, and discover why we believe slow craftsmanship produces superior results.',
      author: 'Peter Kamau',
      date: '2024-01-05',
      category: 'Behind the Scenes',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80'
    },
    {
      id: 5,
      title: 'Choosing the Right Wood for Your Home: A Buyer\'s Guide',
      excerpt: 'Understanding the characteristics of different wood types to make informed decisions for your furniture and decor.',
      content: 'With so many wood species available, choosing the right one for your home can be overwhelming. This guide breaks down the characteristics of the most popular woods used in Kenyan craftsmanship, including Mvule, Mahogany, Teak, and Cedar. Learn about their durability, grain patterns, color variations, and best uses. Whether you\'re looking for a dining table that will last generations or a decorative piece that adds warmth to your space, understanding these differences will help you make the perfect choice.',
      author: 'Sarah Muthoni',
      date: '2023-12-28',
      category: 'Buying Guide',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-wood-green text-wood-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Blog & Journal</h1>
          <p className="font-sans text-wood-bg/90">
            Insights on woodcraft, sustainability, and care for your treasured pieces
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <article className="mb-16">
            {blogArticles.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={blogArticles[0].image}
                      alt={blogArticles[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-wood-clay/20 text-wood-text text-xs font-medium rounded">
                        {blogArticles[0].category}
                      </span>
                      <span className="font-sans text-sm text-wood-text/60">
                        {blogArticles[0].readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-wood-text mb-4">
                      {blogArticles[0].title}
                    </h2>
                    <p className="font-sans text-wood-text/70 mb-6 leading-relaxed">
                      {blogArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-wood-clay/20 rounded-full flex items-center justify-center">
                          <span className="font-serif text-sm font-bold text-wood-clay">
                            {blogArticles[0].author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-sans text-sm font-medium text-wood-text">
                            {blogArticles[0].author}
                          </p>
                          <p className="font-sans text-xs text-wood-text/60">
                            {formatDate(blogArticles[0].date)}
                          </p>
                        </div>
                      </div>
                      <button className="font-sans text-sm text-wood-green font-medium hover:text-wood-green-dark transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.slice(1).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link to="#" className="block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-2 py-1 bg-wood-clay/20 text-wood-text text-xs font-medium rounded">
                      {article.category}
                    </span>
                    <span className="font-sans text-xs text-wood-text/60">
                      {article.readTime}
                    </span>
                  </div>
                  <Link to="#" className="block">
                    <h3 className="font-serif text-lg font-semibold text-wood-text mb-3 line-clamp-2 hover:text-wood-green transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="font-sans text-sm text-wood-text/70 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-wood-text/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-wood-clay/20 rounded-full flex items-center justify-center">
                        <span className="font-serif text-xs font-bold text-wood-clay">
                          {article.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-sans text-xs font-medium text-wood-text">
                          {article.author}
                        </p>
                        <p className="font-sans text-xs text-wood-text/60">
                          {formatDate(article.date)}
                        </p>
                      </div>
                    </div>
                    <button className="font-sans text-xs text-wood-green font-medium hover:text-wood-green-dark transition-colors">
                      Read →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-wood-green text-wood-bg rounded-lg p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="font-sans text-wood-bg/90 mb-6">
                Get the latest articles, care tips, and exclusive offers delivered straight to your inbox.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing to our newsletter!');
                }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 bg-wood-bg/10 border border-wood-bg/20 rounded font-sans text-wood-bg placeholder-wood-bg/50 focus:outline-none focus:border-wood-clay focus:ring-1 focus:ring-wood-clay transition-all duration-200"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-wood-bg text-wood-green font-sans font-semibold rounded hover:bg-wood-clay hover:text-wood-text transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

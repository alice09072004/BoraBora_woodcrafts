import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-wood-green text-wood-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">About Us</h1>
          <p className="font-sans text-wood-bg/90">
            Our story, our craft, our commitment to excellence
          </p>
        </div>
      </section>

      {/* Hero Story Section */}
      <section className="py-16 md:py-24 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-wood-text mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-wood-text/80 leading-relaxed">
                <p className="font-sans">
                  BoraBora Woodcrafts was born from a deep love for Kenya's rich woodworking heritage and a desire to preserve traditional craftsmanship in a modern world. Founded in 2015 by master craftsman Kamau Njoroge, our workshop began as a small family operation in the coastal town of Mombasa, where the scent of sawdust and the rhythm of hand tools have been part of daily life for generations.
                </p>
                <p className="font-sans">
                  What started as a passion project has grown into a celebrated brand, but our core values remain unchanged. Every piece that leaves our workshop carries the same dedication to quality, the same respect for the materials, and the same commitment to sustainable practices that guided our first days. We believe that true luxury lies in craftsmanship that honors both tradition and innovation.
                </p>
                <p className="font-sans">
                  Today, our team of 15 skilled artisans continues to push the boundaries of what's possible with wood, creating pieces that find homes across Kenya and beyond. Each item is a testament to the skill, patience, and artistry that defines Kenyan craftsmanship at its finest.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80"
                alt="Artisan at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-wood-text text-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="font-sans text-wood-bg/80 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-wood-clay/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-wood-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Quality</h3>
              <p className="font-sans text-wood-bg/80">
                We never compromise on quality. Every piece undergoes rigorous inspection to ensure it meets our exacting standards before reaching your home.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-wood-clay/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-wood-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Sustainability</h3>
              <p className="font-sans text-wood-bg/80">
                We source exclusively from certified sustainable forests and implement eco-friendly practices throughout our production process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-wood-clay/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-wood-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Community</h3>
              <p className="font-sans text-wood-bg/80">
                We're committed to supporting local communities by providing fair wages, training opportunities, and preserving traditional skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-16 md:py-24 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
                alt="Woodworking tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-wood-text mb-6">
                Our Craftsmanship
              </h2>
              <div className="space-y-4 text-wood-text/80 leading-relaxed">
                <p className="font-sans">
                  At the heart of BoraBora Woodcrafts is our unwavering commitment to traditional craftsmanship. Our artisans are masters of techniques that have been refined over generations, from the precise joinery methods that create furniture destined to last centuries to the delicate carving that transforms raw wood into works of art.
                </p>
                <p className="font-sans">
                  We believe in the beauty of slow craftsmanship. Unlike mass-produced furniture, each piece we create receives individual attention from start to finish. Our craftsmen spend hours—sometimes days—on a single item, ensuring every curve, every joint, and every finish meets our exacting standards.
                </p>
                <p className="font-sans">
                  This dedication to craft means that no two pieces are exactly alike. The natural variations in wood grain, the subtle differences in hand-applied finishes, and the personal touch of each artisan make every BoraBora piece unique—a true one-of-a-kind treasure for your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-wood-text mb-4">
              Meet Our Artisans
            </h2>
            <p className="font-sans text-wood-text/70 max-w-2xl mx-auto">
              The skilled hands behind every BoraBora piece
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Blessy Altah',
                name: 'Blessy',
                role: 'Master Craftsman & Founder',
                years: '25 years experience'
              },
              {
                name: 'Hassan',
                role: 'Lead Carver',
                years: '18 years experience'
              },
              {
                name: 'Saheel',
                role: 'Furniture Specialist',
                years: '15 years experience'
              },
              {
                name: 'Nadis',
                role: 'Finish Expert',
                years: '12 years experience'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-wood-clay/20 rounded-full flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-wood-clay">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-wood-text mb-1">
                  {member.name}
                </h3>
                <p className="font-sans text-sm text-wood-green font-medium mb-1">
                  {member.role}
                </p>
                <p className="font-sans text-xs text-wood-text/60">
                  {member.years}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-wood-green text-wood-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Experience the BoraBora Difference
          </h2>
          <p className="font-sans text-lg text-wood-bg/90 mb-8">
            Every piece tells a story of tradition, craftsmanship, and sustainable practices. 
            Bring the beauty of Kenyan woodcraft into your home today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="px-8 py-4 bg-wood-bg text-wood-green font-sans font-semibold rounded hover:bg-wood-clay hover:text-wood-text transition-all duration-300"
            >
              Shop Our Collection
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-wood-bg text-wood-bg font-sans font-semibold rounded hover:bg-wood-bg hover:text-wood-green transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

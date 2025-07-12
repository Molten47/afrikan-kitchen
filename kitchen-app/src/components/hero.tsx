import React from 'react'
import { DisplayCards } from '../data/displaycard'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col w-full bg-gradient-to-b pt-16 from-gray-50 to-white'>
      {/* Main Hero Content */}
      <div className='flex-1 flex flex-col items-center justify-center px-6 py-12'>
          {/* Navigation hint */}
      <div className='flex justify-end p-4'>
        <div className='flex items-center gap-2 text-sm text-gray-600'>
          <span className='px-2 py-1 bg-green-100 rounded-full text-green-800'>New</span>
          <span>Now serving authentic West African dishes →</span>
        </div>
      </div>
        {/* Upper part with content */}
        <div className='max-w-4xl text-center space-y-8 real-font'>
          {/* Hero Text */}
          <div className='space-y-6'>
            <h1 className='text-5xl md:text-6xl font-bold text-[#1e1d19] leading-tight'>
              The Original Home of 
              <span className='block'>West-African Cuisine</span>
              <span className='block'>in South London</span>
            </h1>
            <p className='text-xl  text-[#7b896f] max-w-2xl mx-auto leading-relaxed'>
              Bringing exhilarating flavours, aromas and tastes that is as original as homemade food to savour your buds and top your satisfaction.
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='px-8 py-3 bg-[#7b896f] text-white rounded-lg font-medium hover:bg-[#8bb962] transition-colors cursor-pointer'>
              Book a seat
            </button>
            <button className='px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer'>
              Learn More
            </button>
          </div>

          {/* Trust indicators */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600'>
            {/* Circular overlapping profile images */}
            <div className='flex items-center gap-4'>
              <div className='flex -space-x-2'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white'></div>
                <div className='w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white'></div>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white'></div>
                <div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white'></div>
              </div>
              <span>Trusted by 100's of food lovers</span>
            </div>
            
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span>Authentic flavors</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span>Fresh ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower part with scrolling images */}
      <div className='w-full overflow-hidden py-8'>
        <div className='flex gap-6 animate-scroll'>
          {/* Dynamically render images from DisplayCards data */}
          {DisplayCards.map((card) => (
            <div key={card.id} className='flex-shrink-0 w-100 h-110 rounded-xl overflow-hidden relative group real-font'>
              <img 
                loading='lazy'
                src={card.image} 
                alt={card.caption}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
              />
              {/* Caption overlay at bottom left */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                <h3 className='text-white font-medium text-lg'>{card.caption}</h3>
              </div>
            </div>
          ))}
          
          {/* Duplicate for seamless scroll */}
          {DisplayCards.map((card) => (
            <div key={`duplicate-${card.id}`} className='flex-shrink-0 w-100 h-110 rounded-xl overflow-hidden relative group real-font'>
              <img 
                loading='lazy'
                src={card.image} 
                alt={card.caption}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
              />
              {/* Caption overlay at bottom left */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                <h3 className='text-white font-medium text-lg'>{card.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${DisplayCards.length * 320 + (DisplayCards.length - 1) * 24}px);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Hero
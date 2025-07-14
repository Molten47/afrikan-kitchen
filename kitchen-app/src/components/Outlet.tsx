import React from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'
import { Outlets } from '../data/Outlet'

const Outlet = () => {

  return (
    <div className='flex flex-col w-full min-h-[80vh] bg-gradient-to-br from-slate-50 to-blue-50 real-font'>
      <div className='max-w-8xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Our Outlets in the UK
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Visit us at any of our conveniently located stores across the United Kingdom. 
            Experience our premium service and products in person.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Outlets.map((outlet) => (
            <div
              key={outlet.id}
              className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={outlet.image}
                  alt={outlet.branch}
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                  loading='lazy'
                />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                  {outlet.branch}
                </h3>

                <div className='space-y-3'>
                  <div className='flex items-start gap-3'>
                    <MapPin className='w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0' />
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {outlet.address}
                    </p>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Phone className='w-5 h-5 text-green-600 flex-shrink-0' />
                    <a
                      href={`tel:${outlet.contact}`}
                      className='text-gray-600 text-sm hover:text-blue-600 transition-colors'
                    >
                      {outlet.contact}
                    </a>
                  </div>

                  <div className='flex items-start gap-3'>
                    <Clock className='w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0' />
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {outlet.operating}
                    </p>
                  </div>
                </div>

                <div className='mt-6 pt-4 border-t border-gray-100'>
                  <div className='flex gap-3'>
                    <button className='flex-1 bg-cta text-white px-4 py-2 rounded-lg hover:bg-[#8bb962] transition-colors text-sm font-medium'>
                      Get Directions
                    </button>
                    <button className='flex-1 border-2 border-[#7b896f] text- px-4 py-2 text-black rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium'>
                      Call Store
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Outlet
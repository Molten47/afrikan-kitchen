import React from 'react'
import { Features } from '../data/Featured'

const Featured = () => {
  return (
    <div className='w-full min-h-[50vh] bg-gray-50 py-10 real-font'>
        <div className='max-w-7xl mx-auto px-4'>
            {/* Header */}
            <div className='text-center mb-12'>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='text-2xl md:text-4xl font-bold text-gray-800'>Featured recipes</h2>
                    <span className='text-gray-500 cursor-pointer hover:text-gray-700 text-lg'>View all</span>
                </div>
            </div>
            
            {/* Recipe Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {Features.map((feature) => (
                    <div key={feature.id} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                        {/* Recipe Image */}
                        <div className='relative h-64 overflow-hidden'>
                            <img 
                                src={feature.image} 
                                alt={feature.title}
                                className='w-full h-full object-cover transition-opacity duration-500'
                                loading='lazy'
                            />
                            {/* Category Badge */}
                            <div className='absolute top-4 left-4'>
                                <span className='bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm'>
                                    {feature.category}
                                </span>
                            </div>
                            {/* Reaction Count */}
                            <div className='absolute top-4 right-4 flex items-center'>
                                <span className='bg-white bg-opacity-95 text-gray-600 px-3 py-2 rounded-full text-sm flex items-center shadow-sm'>
                                    <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd' />
                                    </svg>
                                    {feature.reaction}
                                </span>
                            </div>
                        </div>
                        
                        {/* Recipe Details */}
                        <div className='p-6 md:p-8'>
                            <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-4'>{feature.title}</h3>
                            
                            {/* Time and Calories */}
                            <div className='flex items-center justify-between text-sm text-gray-600'>
                                <div className='flex items-center'>
                                    <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                    </svg>
                                    <span className='font-medium'>{feature.time}</span>
                                </div>
                                <div className='flex items-center'>
                                    <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                                    </svg>
                                    <span className='font-medium'>{feature.calories}</span>
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

export default Featured
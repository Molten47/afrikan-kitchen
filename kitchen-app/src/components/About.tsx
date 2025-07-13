import React, { useState } from 'react'
import { Abouts } from '../data/About'

const About = () => {
    const [activeTab, setActiveTab] = useState(0)
    
    return (
        <div className='w-full min-h-[80vh] bg-gray-50 py-10'>
            <div className='max-w-7xl mx-auto px-4'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>
                        What Is Exciting About Us?
                    </h2>
                </div>
                
                {/* Navigation Tabs */}
                <div className='mb-12'>
                    <nav className='relative'>
                        <ul className='flex flex-wrap justify-center md:justify-between gap-4 md:gap-8'>
                            {Abouts.map((about, index) => (
                                <li key={about.id} className='relative'>
                                    <button
                                        onClick={() => setActiveTab(index)}
                                        className={`px-4 py-2 text-sm md:text-base font-medium transition-colors duration-300 ${
                                            activeTab === index
                                                ? 'text-green-600'
                                                : 'text-gray-600 hover:text-gray-800'
                                        }`}
                                    >
                                        {about.title}
                                    </button>
                                    {/* Active indicator line */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                                            activeTab === index
                                                ? 'bg-green-600 scale-x-100'
                                                : 'bg-gray-300 scale-x-0'
                                        }`}
                                    />
                                </li>
                            ))}
                        </ul>
                        {/* Base line */}
                        <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200' />
                    </nav>
                </div>
                
                {/* Content Section */}
                <div className='grid md:grid-cols-2 gap-8 real-font'>
                    {/* Text Content */}
                    <div className='bg-[#f4f4f4] p-8 md:p-10 h-110 flex flex-col justify-center'>
                        <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>
                            {Abouts[activeTab].title}
                        </h3>
                        <p className='text-gray-600 leading-relaxed text-lg'>
                            {Abouts[activeTab].content}
                        </p>
                    </div>
                    
                    {/* Image */}
                    <div className='bg-white rounded-lg shadow-lg overflow-hidden h-110'>
                        <img
                            src={Abouts[activeTab].image}
                            alt={Abouts[activeTab].title}
                            className='w-full h-full object-cover transition-opacity duration-500'
                            loading='lazy'
                        />
                    </div>
                </div>
                
                {/* Dots indicator for mobile */}
                <div className='flex justify-center mt-8 md:hidden'>
                    <div className='flex space-x-2'>
                        {Abouts.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    activeTab === index
                                        ? 'bg-green-600'
                                        : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
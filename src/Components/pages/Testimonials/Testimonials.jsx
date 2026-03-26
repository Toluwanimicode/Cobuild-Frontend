import React from 'react'
import { Image } from 'react-bootstrap'
import "./Testimonials.css"

const Testimonials = () => {
    return (
        <div className='testimonials px-4 md:px-10 py-10' id='testimonials'>
            
            {/* Header */}
            <div className='text-center mb-8'>
                <h4 className='testimonial-header text-xl md:text-3xl font-bold'>
                    Our Clients say
                </h4>
            </div>

            {/* Main Section */}
            <div className='testimonial-section flex flex-col md:flex-row gap-10'>
                
                {/* First Testimonial */}
                <div className='testimonial-section-2 flex flex-col md:flex-row items-center text-center md:text-left gap-4'>
                    
                    <Image 
                        src="./images/image1.jpg" 
                        className='w-24 h-24 md:w-32 md:h-32 rounded-full object-cover'
                    />

                    <div className='testimonial-section-4'>
                        <p className='testimonial-paragraph text-sm md:text-base'>
                            <i>
                                "It's just brilliant. I will recommend Cobuild to everyone I know! I'm really glad these guys got Cobuild out there"
                            </i>
                        </p>
                        <h4 className='name mt-2 font-semibold'>Gene Stevens</h4>
                    </div>
                </div>

                {/* Second Testimonial */}
                <div className='testimonial-section-3 flex flex-col md:flex-row items-center text-center md:text-left gap-4'>
                    
                    <Image 
                        src="./images/image2.jpg" 
                        className='w-24 h-24 md:w-32 md:h-32 rounded-full object-cover'
                    />

                    <div className='testimonial-section-5'>
                        <p className='testimonial-paragraph text-sm md:text-base font-bold'>
                            <i>
                                “We are so excited to launch our new company. By using Cobuild it has great features. I think you are all about to make me happy.”
                            </i>
                        </p>
                        <p className='name mt-2'>Noah Sunday</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
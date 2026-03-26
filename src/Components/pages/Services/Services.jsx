import React from 'react'
import "./Services.css"

const Services = () => {
    return (
        <div id='services' className="px-4 md:px-10 py-16">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className='text-2xl md:text-4xl font-bold'>
                    Our Services
                </h1>
                <p className='mt-4 text-sm md:text-base text-gray-600'>
                    At Cobuild, we offer a wide range of construction services designed to bring your vision to life. We combine quality craftsmanship with expert project management to deliver results you can trust.
                </p>
            </div>

            {/* Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

                {/* Card */}
                {[ 
                    { img: "./images/excavator.png", title: "Fast Operations", text: "Our team is committed to delivering high-quality results efficiently, ensuring that every project stays on schedule without compromising on standards." },
                    { img: "./images/crane.png", title: "Renovation", text: "Give your space a fresh, modern look with our renovation services. We transform your existing structure into something truly remarkable." },
                    { img: "./images/helmet.png", title: "Consultation", text: "Our expert consultants provide guidance every step of the way—from planning and budgeting to material selection and project feasibility." },
                    { img: "./images/architecture.png", title: "Architecture", text: "Our skilled architects combine creativity and functionality to design spaces that are beautiful, practical, and tailored to your needs." }
                ].map((service, index) => (
                    
                    <div 
                        key={index} 
                        className="text-center p-6 rounded-xl hover:shadow-lg transition duration-300"
                    >
                        <img 
                            src={service.img}
                            alt={service.title}
                            className="w-16 h-16 md:w-20 md:h-20 mx-auto"
                        />

                        <h4 className="mt-4 font-semibold text-lg">
                            {service.title}
                        </h4>

                        <p className="mt-2 text-sm md:text-base text-gray-600">
                            {service.text}
                        </p>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Services
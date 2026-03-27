import React from 'react';
import "./Skills.css"

const Skills = () => {
    const progressData = [
        { title: 'Buildings', value: 85 },
        { title: 'Architecture', value: 60 },
        { title: 'Constructions', value: 70 },
        { title: 'Planning', value: 40 },
    ];

    return (
        <section id='skills' className="px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">

            {/* TOP SECTION: Expertise Text & Progress Bars */}
            <div className="Main-Section flex flex-col md:flex-row gap-20 md:gap-24 lg:gap-40 items-center md:items-start">

                {/* Left Text Area */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className='text-red-600 text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8'>
                        We are experts in this field since almost 20 years
                    </h3>
                    <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-xl">
                        Delivering excellence through innovation and decades of experience. Our commitment to quality ensures every project stands the test of time.
                    </p>
                </div>

                {/* Right Progress Bars */}
                <div className="w-full md:w-1/2 space-y-10">
                    {progressData.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-4">
                                <span className="font-bold text-lg text-gray-800 uppercase tracking-wide">
                                    {item.title}
                                </span>
                                <span className="text-lg font-black text-orange-500">
                                    {item.value}%
                                </span>
                            </div>

                            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner border border-gray-200">
                                <div
                                    className="bg-orange-400 h-full rounded-full transition-all duration-1000 ease-out"
                                    role="progressbar"
                                    aria-valuenow={item.value}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: `${item.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- WRAPPER FOR PADDING --- */}
            {/* This wrapper ensures there is literal empty space above the orange box */}
            <div className="pt-32 md:pt-48 lg:pt-64"> 
                
                {/* BOTTOM CTA SECTION: The Orange Box */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-12 p-12 md:p-20 bg-orange-400 rounded-[3rem] text-center lg:text-left shadow-2xl'>
                    
                    <div className="lg:w-2/3">
                        <h4 className='text-3xl md:text-5xl font-black text-white leading-tight'>
                            An innovative company working with latest technologies
                        </h4>
                        <p className='text-orange-50 mt-6 text-xl font-medium opacity-95'>
                            Ready to build the future? Let’s discuss your next project today.
                        </p>
                    </div>

                    <div className='Button-1 w-full lg:w-auto'>
                        <button className='w-full lg:w-auto bg-white text-orange-600 px-14 py-6 rounded-2xl font-black hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-base'>
                            GET A QUOTE
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
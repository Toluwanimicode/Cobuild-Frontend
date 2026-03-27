import React from 'react';

const Skills = () => {
    const progressData = [
        { title: 'Buildings', value: 85 },
        { title: 'Architecture', value: 60 },
        { title: 'Constructions', value: 70 },
        { title: 'Planning', value: 40 },
    ];

    return (
        <section id='skills' className="px-6 md:px-10 py-16 md:py-32 max-w-7xl mx-auto">

            {/* TOP SECTION */}
            <div className=" Main-Section flex flex-col md:flex-row gap-12 md:gap-24 lg:gap-40 items-center md:items-start mb-20 md:mb-32">
                {/* Left Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className='text-red-600 text-3xl md:text-6xl font-extrabold leading-tight mb-6'>
                        We are experts in this field since almost 20 years
                    </h3>
                    <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-xl">
                        Delivering excellence through innovation and decades of experience.
                    </p>
                </div>

                {/* Right Progress Bars */}
                <div className="w-full md:w-1/2 space-y-8">
                    {progressData.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-sm md:text-lg text-gray-800 uppercase tracking-wide">
                                    {item.title}
                                </span>
                                <span className="text-lg font-black text-orange-500">
                                    {item.value}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3 md:h-4 overflow-hidden shadow-inner border border-gray-200">
                                <div
                                    className="bg-orange-400 h-full rounded-full transition-all duration-1000 ease-out"
                                    role="progressbar"
                                    style={{ width: `${item.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BOTTOM CTA SECTION: Optimized for Mobile */}
            <div className='Sub-Section mt-16 md:mt-32 lg:mt-48 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-20 bg-orange-400 rounded-[2rem] md:rounded-[3rem] text-center lg:text-left shadow-2xl'>
                
                <div className="lg:w-2/3 Second-Section">
                    <h4 className='text-2xl md:text-5xl font-black text-white leading-tight'>
                        An innovative company working with latest technologies
                    </h4>
                    <p className='text-orange-50 mt-4 text-lg md:text-xl font-medium opacity-95'>
                        Ready to build the future? Let’s discuss your next project today.
                    </p>
                </div>

                <div className='Button-1 w-full lg:w-auto'>
                    <button className='w-full lg:w-auto bg-white text-orange-600 px-10 py-4 md:px-14 md:py-6 rounded-xl md:rounded-2xl font-black hover:bg-gray-50 transition-all shadow-xl uppercase tracking-widest text-sm md:text-base'>
                        GET A QUOTE
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Skills;
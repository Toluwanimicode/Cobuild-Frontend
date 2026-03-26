import React from 'react';

const Skills = () => {
    const progressData = [
        { title: 'Buildings', value: 85 },
        { title: 'Architecture', value: 60 },
        { title: 'Constructions', value: 70 },
        { title: 'Planning', value: 40 },
    ];

    return (
        <section id='skills' className="px-6 md:px-10 py-16 max-w-7xl mx-auto">

            {/* Top Section - Increased gap between text and bars */}
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-32 items-center md:items-start">

                {/* Left Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className='text-red-600 text-3xl md:text-5xl font-extrabold leading-tight'>
                        We are experts in this field since almost 20 years
                    </h3>
                    <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
                        Delivering excellence through innovation and decades of experience. Our commitment to quality ensures every project stands the test of time.
                    </p>
                </div>

                {/* Right Progress Bars */}
                <div className="w-full md:w-1/2">
                    {progressData.map((item, index) => (
                        <div className="mb-8" key={index}>
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-base text-gray-800">
                                    {item.title}
                                </span>
                                <span className="text-sm font-black text-orange-500">
                                    {item.value}%
                                </span>
                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
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

            {/* Bottom CTA Section - Added significant top margin (mt-24 to mt-48) */}
            <div className='mt-24 md:mt-32 lg:mt-48 flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-16 bg-orange-400 rounded-[2rem] text-center md:text-left shadow-2xl'>
                
                <div className="md:w-2/3">
                    <h4 className='text-3xl md:text-4xl font-black text-white leading-snug'>
                        An innovative company working with latest technologies
                    </h4>
                    <p className='text-orange-50 mt-4 text-lg font-medium opacity-90'>
                        Ready to build the future? Let’s discuss your next project today.
                    </p>
                </div>

                <div className='w-full md:w-auto'>
                    <button className='w-full md:w-auto bg-white text-orange-500 px-12 py-5 rounded-xl font-black hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl active:scale-95 uppercase tracking-widest text-sm'>
                        GET A QUOTE
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Skills;
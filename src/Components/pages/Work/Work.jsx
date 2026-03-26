import React, { useState } from 'react';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const filters = [
    { label: 'All', value: '*' },
    { label: 'Building', value: 'filter-building' },
    { label: 'Construction', value: 'filter-construction' },
    { label: 'Planning', value: 'filter-planning' },
  ];

  const portfolioItems = [
    { id: 1, image: './images/image6.jpg', title: 'Tower Building', category: 'filter-building' },
    { id: 2, image: './images/image3.jpg', title: 'Renovation', category: 'filter-construction' },
    { id: 3, image: './images/image4.jpg', title: 'Hospital Building', category: 'filter-planning' },
    { id: 4, image: './images/image5.jpg', title: 'Tower Building', category: 'filter-construction' },
    { id: 5, image: './images/image6.jpg', title: 'Tower Renovation', category: 'filter-building' },
    { id: 6, image: './images/image3.jpg', title: 'Planning', category: 'filter-planning' },
  ];

  const filteredItems =
    activeFilter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="work" className="py-12 px-4 md:px-12 lg:px-24 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Take a look at some of the projects we've brought to life. From residential builds to large-scale commercial
          developments.
        </p>
      </div>

      {/* Filter Buttons - Flex wrap handles mobile naturally */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${activeFilter === filter.value 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid of Images - Responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-500 capitalize">{item.category.replace('filter-', '')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;





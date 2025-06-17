import React, { useState } from 'react';
import './Work.css'; 

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const filters = [
    { label: 'All', value: '*' },
    { label: 'Building', value: 'filter-building' },
    { label: 'Construction', value: 'filter-construction' },
    { label: 'Planning', value: 'filter-planning' },
  ];

  const portfolioItems = [
    {
      id: 1,
      image: './images/image6.jpg',
      title: 'Tower Building',
      category: 'filter-building',
    },
    {
      id: 2,
      image: './images/image3.jpg',
      title: 'Renovation',
      category: 'filter-construction',
    },
    {
      id: 3,
      image: './images/image4.jpg',
      title: 'Hospital Building',
      category: 'filter-planning',
    },
    {
      id: 4,
      image: './images/image5.jpg',
      title: 'Tower Building',
      category: 'filter-construction',
    },
    {
      id: 5,
      image: './images/image6.jpg',
      title: 'Tower Renovation',
      category: 'filter-building',
    },
    {
      id: 6,
      image: './images/image3.jpg',
      title: 'Planning',
      category: 'filter-planning',
    },
  ];

  const filteredItems =
    activeFilter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="work-section">
      <div className="work-header">
        <h2 className='header'>Featured Work</h2>
        <p className='text'>
          Take a look at some of the projects we've brought to life. From residential builds to large-scale commercial
          developments.
        </p>
      </div>

      {/* Centered Filter Buttons */}
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={activeFilter === filter.value ? 'active' : ''}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid of Images */}
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className={`portfolio-item ${item.category}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;





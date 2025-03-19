import React from 'react';
import './FilterSection.css';

export default function FilterSection() {
  const categories = [
    'Laptops',
    'Gaming',
    'Accessories',
    'Peripherals',
    'Storage',
    'Components',
    'Monitors',
    'Printers'
  ];

  return (
    <div className="filter-section">
      {/* Filter Category Buttons */}
      <div className="filter-button">
        {categories.map((category, index) => (
          <button key={index}>{category}</button>
        ))}
      </div>
      {/* Clear Filters Button */}
      <div>
        <button className="clear-filters">Clear Filters</button>
      </div>
    </div>
  );
}

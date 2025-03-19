import React from 'react';
import FilterSection from './FilterSection';
import './LeftPanel.css';
import ProductGrid from './product/ProductGrid';

export default function LeftPanel() {
  return (
    <div className="left-panel">
      <div>
        <h1>Simple E-commerce</h1>
      </div>
      <div>
        <FilterSection />
      </div>
      <ProductGrid />
    </div>
  );
}

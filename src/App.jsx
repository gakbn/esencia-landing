import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WeAreDifferent } from './components/WeAreDifferent';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <Hero />
      <WeAreDifferent />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
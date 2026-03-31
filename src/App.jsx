import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WeAreDifferent } from './components/WeAreDifferent';
import { OurPromise } from './components/OurPromise';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';

function App() {
  return (
    <div> {/* <-- SIN overflow: hidden aquí */}
      <Navbar />
      <section id="inicio"><Hero /></section>
      <section id="diferente"><WeAreDifferent /></section>
      <section id="promesa"><OurPromise /></section>
      <section id="menu"><ProductGrid /></section>
      <section id="contacto"><Footer /></section>
    </div>
  );
}

export default App;
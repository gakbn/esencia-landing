import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
  return (
    <main id="menú" style={{ padding: 'clamp(50px, 8vw, 100px) 6%' }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: 'clamp(30px, 5vw, 60px)', 
        fontSize: 'clamp(1.8rem, 5vw, 3rem)',
        color: 'var(--color-negro)' 
      }}>
        Nuestro Menú <br /> <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Artesanal</span>
      </h2>
      
      {/* Grid responsivo: Replicate the image. Se ajusta solo */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'clamp(20px, 3vw, 35px)',
        alignItems: 'stretch'
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
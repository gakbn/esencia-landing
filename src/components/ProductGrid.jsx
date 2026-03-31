import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
  return (
    <main id="menú" style={{ padding: '100px 10%' }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '60px', 
        fontSize: '3rem',
        color: 'var(--color-negro)' 
      }}>
        Nuestro Menú <br /> <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Artesanal</span>
      </h2>
      
      {/* Grid responsivo: Replicate the image. Se ajusta solo */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '35px',
        alignItems: 'stretch'
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
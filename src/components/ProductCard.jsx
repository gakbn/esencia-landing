// src/components/ProductCard.jsx
import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <div className="card-hover" style={{
      backgroundColor: 'var(--color-blanco)',
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.03)'
    }}>
      <div style={{ position: 'relative', height: 'clamp(180px, 30vw, 240px)' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{
          position: 'absolute', bottom: '15px', right: '15px',
          backgroundColor: 'var(--color-blanco)',
          color: 'var(--color-negro)',
          borderRadius: '20px',
          padding: '8px 15px',
          fontSize: '12px',
          fontWeight: '600'
        }}>Gourmet</div>
      </div>
      
      <div style={{ padding: 'clamp(15px, 3vw, 25px)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}>
          {product.name}
        </h3>
        
        {/* Lógica responsiva de truncado aquí - Replicate the requirement */}
        <p className="text-truncate-mobile" style={{ fontSize: 'clamp(12px, 2vw, 14px)', marginBottom: '15px', flexGrow: 1, color: '#555' }}>
          {product.description}
        </p>
        
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.05)',
          paddingTop: '15px',
          marginTop: 'auto',
          color: 'var(--color-verde-oliva)',
          fontSize: 'clamp(11px, 2vw, 13px)',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          {product.prices}
        </div>
      </div>
    </div>
  );
};


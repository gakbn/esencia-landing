// src/components/ProductCard.jsx
import React, { useState } from 'react';

const quantities = [1, 6, 12];

export const ProductCard = ({ product }) => {
  const [selectedQty, setSelectedQty] = useState(1);

  return (
    <div className="product-card" style={{
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      border: '1px solid rgba(82,84,48,0.08)',
      boxShadow: '0 8px 30px rgba(82,84,48,0.06)',
      background: 'linear-gradient(165deg, #ffffff 0%, #faf9f5 60%, #f3f1ea 100%)',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    }}>
      {/* Image with category badge */}
      <div style={{ position: 'relative', height: 'clamp(180px, 30vw, 240px)' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        {/* Subtle gradient overlay at bottom of image */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.15))',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '15px', right: '15px',
          backgroundColor: 'var(--color-verde-oliva)',
          color: '#fff',
          borderRadius: '20px',
          padding: '6px 16px',
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          boxShadow: '0 2px 8px rgba(82,84,48,0.3)',
        }}>{product.category}</div>
      </div>
      
      {/* Card body */}
      <div style={{ padding: 'clamp(18px, 3vw, 25px)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ 
          margin: '0 0 10px 0', 
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'var(--color-negro)',
        }}>
          {product.name}
        </h3>
        
        <p className="text-truncate-mobile" style={{ 
          fontSize: 'clamp(12px, 2vw, 14px)', 
          marginBottom: '18px', 
          flexGrow: 1, 
          color: '#666',
          lineHeight: '1.5',
        }}>
          {product.description}
        </p>
        
        {/* Price section - left aligned */}
        <div style={{
          borderTop: '1px solid rgba(82,84,48,0.1)',
          paddingTop: '15px',
          marginTop: 'auto',
        }}>
          {/* Cantidad label */}
          <p style={{
            margin: '0 0 8px 0',
            fontSize: 'clamp(11px, 1.8vw, 12px)',
            fontWeight: '600',
            color: '#888',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            textAlign: 'left',
          }}>
            Cantidad
          </p>

          {/* Quantity selector - left aligned */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '6px',
            marginBottom: '14px',
          }}>
            {quantities.map(qty => (
              <button
                key={qty}
                onClick={() => setSelectedQty(qty)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: selectedQty === qty 
                    ? '2px solid var(--color-verde-oliva)' 
                    : '1.5px solid rgba(82,84,48,0.15)',
                  backgroundColor: selectedQty === qty 
                    ? 'var(--color-verde-oliva)' 
                    : 'transparent',
                  color: selectedQty === qty 
                    ? '#fff' 
                    : 'var(--color-negro)',
                  fontSize: 'clamp(11px, 2vw, 13px)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  fontFamily: 'inherit',
                }}
              >
                {qty} pz
              </button>
            ))}
          </div>

          {/* Price display - left aligned */}
          <div style={{
            textAlign: 'left',
            color: 'var(--color-verde-oliva)',
            fontSize: 'clamp(18px, 3.5vw, 24px)',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            fontFamily: "'Playfair Display', serif",
          }}>
            ${product.prices[selectedQty]}
            <span style={{
              fontSize: 'clamp(11px, 1.8vw, 13px)',
              fontWeight: '500',
              color: '#999',
              marginLeft: '4px',
              fontFamily: 'inherit',
            }}>
              MXN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

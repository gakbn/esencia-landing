import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      backgroundColor: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(10px)',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }}>
      <div style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontWeight: '700', 
        fontSize: '28px', 
        color: 'var(--color-verde-oliva)',
        letterSpacing: '2px'
      }}>
        ESENCIA
      </div>

      {/* Menú de PC - Replica la estructura de la imagen */}
      <div className="desktop-nav" style={{
        display: 'none',
        gap: '30px',
        alignItems: 'center',
      }}>
        {['Inicio', 'Nosotros', 'Menú', 'Galería', 'Contacto'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            textDecoration: 'none',
            color: 'var(--color-negro)',
            fontWeight: '600',
            fontSize: '15px'
          }}>
            {link}
          </a>
        ))}
      </div>

      {/* Iconos de la derecha - Replica la imagen */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span style={{ fontSize: '18px', cursor: 'pointer' }}>👤</span>
        <span style={{ fontSize: '18px', cursor: 'pointer' }}>🔍</span>
      </div>
    </nav>
  );
};
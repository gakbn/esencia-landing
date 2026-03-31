import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio', icon: '🏠' },
    { name: 'Esencia', href: '#diferente', icon: '✨' },
    { name: 'Nuestro Menú', href: '#menu', icon: '🍰' },
    { name: 'Contacto', href: '#contacto', icon: '📞' },
  ];

  return (
    <nav style={{
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      padding: '15px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky', /* SE QUEDA FIJO AL BAJAR */
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: '24px', 
        fontWeight: '700', 
        color: 'var(--color-verde-oliva)',
        letterSpacing: '1px'
      }}>
        ESENCIA
      </div>

      {/* Menú Desktop */}
      <div className="nav-desktop" style={{ gap: '30px' }}>
        {menuItems.map((item) => (
          <a key={item.name} href={item.href} style={{
            textDecoration: 'none',
            color: 'var(--color-negro)',
            fontWeight: '600',
            fontSize: '15px'
          }}>
            {item.name}
          </a>
        ))}
      </div>

      {/* Botón Hamburguesa */}
      <button 
        className="nav-mobile-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer', color: 'var(--color-verde-oliva)' }}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Menú Mobile */}
      {isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, width: '100%',
          backgroundColor: 'white', padding: '20px 0', display: 'flex',
          flexDirection: 'column', alignItems: 'center', gap: '20px',
          boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
          animation: 'fadeIn 0.3s ease'
        }}>
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} style={{
              textDecoration: 'none', color: 'var(--color-negro)', fontWeight: '600',
              fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px'
            }}>
              <span>{item.icon}</span> {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const menuItems = [
    { name: 'Inicio', href: '#inicio', icon: '🏠' },
    { name: 'Esencia', href: '#diferente', icon: '✨' },
    { name: 'Promesa', href: '#promesa', icon: '💚' },
    { name: 'Nuestro Menú', href: '#menu', icon: '🍰' },
    { name: 'Contacto', href: '#contacto', icon: '📞' },
  ];

  return (
    <>
      <nav style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        padding: '15px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 2px 15px rgba(0,0,0,0.03)',
        backdropFilter: 'blur(12px)',
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
      }}>
        <a href="#inicio" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          cursor: 'pointer',
        }}>
          <img src={logoImg} alt="Esencia Logo" style={{
            height: '38px',
            width: 'auto',
            objectFit: 'contain',
          }} />
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '24px',
            fontWeight: '700',
            color: 'var(--color-verde-oliva)',
            letterSpacing: '1px',
          }}>
            ESENCIA
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-desktop" style={{ gap: '30px', alignItems: 'center' }}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link-desktop"
              style={{
                textDecoration: 'none',
                color: 'var(--color-negro)',
                fontWeight: '600',
                fontSize: '15px',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.3s ease',
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="nav-mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: 'var(--color-verde-oliva)',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            transition: 'background-color 0.3s ease',
            backgroundColor: isOpen ? 'rgba(82,84,48,0.1)' : 'transparent',
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="nav-mobile-overlay"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 1001,
            backdropFilter: 'blur(4px)',
            animation: 'fadeIn 0.3s ease',
          }}
        />
      )}

      {/* Mobile Slide Panel */}
      <div
        className="nav-mobile-panel"
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? '0' : '-100%',
          width: '80%',
          maxWidth: '320px',
          height: '100%',
          backgroundColor: 'var(--color-blanco)',
          zIndex: 1002,
          transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isOpen ? '-10px 0 50px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        {/* Panel Header */}
        <div style={{
          padding: '25px 30px',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <a href="#inicio" onClick={() => setIsOpen(false)} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            cursor: 'pointer',
          }}>
            <img src={logoImg} alt="Esencia Logo" style={{
              height: '32px',
              width: 'auto',
              objectFit: 'contain',
            }} />
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '22px',
              fontWeight: '700',
              color: 'var(--color-verde-oliva)',
              letterSpacing: '1px',
            }}>
              ESENCIA
            </span>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '22px',
              cursor: 'pointer',
              color: 'var(--color-negro)',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div style={{
          padding: '20px 15px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          flex: 1,
        }}>
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--color-negro)',
                fontWeight: '600',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 18px',
                borderRadius: '12px',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
                animation: isOpen ? `slideInRight 0.4s ease ${index * 0.08}s both` : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(82,84,48,0.08)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <span style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-beige)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                flexShrink: 0,
              }}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Panel Footer */}
        <div style={{
          padding: '25px 30px',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}>
          <p style={{
            fontStyle: 'italic',
            color: '#888',
            fontSize: '13px',
            textAlign: 'center',
            fontFamily: "'Playfair Display', serif",
          }}>
            "Pequeños detalles, grandes momentos"
          </p>
        </div>
      </div>
    </>
  );
};
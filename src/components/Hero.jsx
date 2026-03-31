import React from 'react';

export const Hero = () => {
  return (
    <header id="inicio" style={{ 
      height: '100vh', 
      backgroundImage: 'url(/src/assets/fondo2.jpg)', // Usando tu imagen
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 10%',
      position: 'relative'
    }}>
      {/* Overlay oscuro para legibilidad - Replica la imagen */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1
      }} />

      {/* Contenido de texto - Replica la tipografía y layout */}
      <div style={{ zIndex: 10, maxWidth: '600px', color: 'var(--color-blanco)' }}>
        <h1 style={{ 
          color: 'var(--color-blanco)', 
          fontSize: '4rem', 
          lineHeight: '1.2',
          marginBottom: '20px',
          letterSpacing: '3px'
        }}>
          CREA GRANDES <br /> MOMENTOS
        </h1>
        <p style={{ 
          color: 'var(--color-beige)', 
          fontStyle: 'italic', 
          fontSize: '1.8rem',
          fontWeight: '300',
          marginBottom: '40px'
        }}>
          "Pequeños detalles, grandes momentos"
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button style={{
            backgroundColor: 'var(--color-verde-oliva)',
            color: 'var(--color-blanco)',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '16px'
          }}>Ver Menú</button>
          <button style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'var(--color-blanco)',
            border: '1px solid rgba(255,255,255,0.4)',
            padding: '15px 30px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '16px'
          }}>Contáctanos</button>
        </div>
      </div>
    </header>
  );
};
import React from 'react';

export const Footer = () => {
  return (
    <footer id="contacto" style={{
      backgroundColor: 'var(--color-negro)',
      color: 'var(--color-blanco)',
      textAlign: 'center',
      padding: '80px 10%',
      marginTop: '100px'
    }}>
      <h2 style={{ 
        color: 'var(--color-blanco)', 
        marginBottom: '15px', 
        fontSize: '2.5rem',
        letterSpacing: '2px' 
      }}>ESENCIA</h2>
      <p style={{ color: 'var(--color-beige)', fontStyle: 'italic', marginBottom: '40px', fontSize: '1.2rem' }}>Pequeños detalles, grandes momentos.</p>
      
      {/* Réplica de la estructura de enlaces de la imagen */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '60px',
        textAlign: 'left'
      }}>
        <div>
          <h4>Contacto</h4>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>📞 55 1234 5678</p>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>✉ esencia@gmail.com</p>
        </div>
        <div>
          <h4>Soporte</h4>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>FAQs</p>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>Pedidos Especiales</p>
        </div>
        <div>
          <h4>Pedidos</h4>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>Política de Entregas</p>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>Términos y Condiciones</p>
        </div>
      </div>

      <div style={{ fontSize: '0.9rem', opacity: 0.5 }}>
        © {new Date().getFullYear()} Esencia. Todos los derechos reservados.
      </div>
    </footer>
  );
};
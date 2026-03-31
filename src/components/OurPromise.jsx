import React from 'react';

export const OurPromise = () => {
  const stats = [
    { number: '100%', label: 'Artesanal', desc: 'Cada pieza hecha a mano' },
    { number: '❤️', label: 'Dedicación', desc: 'Pasión en cada detalle' },
    { number: '✨', label: 'Calidad', desc: 'Ingredientes selectos' },
  ];

  return (
    <section
      id="promesa"
      style={{
        backgroundColor: 'var(--color-verde-oliva)',
        padding: 'clamp(50px, 8vw, 100px) 6%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '250px', height: '250px', borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.06)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '200px', height: '200px', borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.04)',
      }} />

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Tagline */}
        <span style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255,255,255,0.15)',
          color: 'var(--color-beige)',
          padding: '8px 24px',
          borderRadius: '30px',
          fontSize: 'clamp(11px, 2vw, 13px)',
          fontWeight: '600',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '30px',
          backdropFilter: 'blur(4px)',
        }}>
          Nuestra Promesa
        </span>

        {/* Main heading */}
        <h2 style={{
          color: 'var(--color-blanco)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          lineHeight: '1.2',
          marginBottom: '20px',
          fontFamily: "'Playfair Display', serif",
          fontWeight: '700',
        }}>
          Cada bocado cuenta una{' '}
          <span style={{
            fontStyle: 'italic',
            fontWeight: '400',
            display: 'inline',
          }}>historia</span>
        </h2>

        {/* Subtitle */}
        <p style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          lineHeight: '1.8',
          maxWidth: '650px',
          margin: '0 auto 60px',
          fontWeight: '300',
        }}>
          En ESENCIA creemos que los pequeños detalles transforman momentos
          ordinarios en recuerdos extraordinarios. Cada mini postre y bocadillo
          es una pieza de arte comestible, diseñada para sorprender.
        </p>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 'clamp(15px, 3vw, 30px)',
          marginBottom: '50px',
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="promise-stat"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                borderRadius: '20px',
                padding: 'clamp(20px, 4vw, 35px) clamp(12px, 2vw, 20px)',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                fontWeight: '700',
                color: 'var(--color-blanco)',
                marginBottom: '8px',
                fontFamily: "'Playfair Display', serif",
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                fontWeight: '600',
                color: 'var(--color-blanco)',
                marginBottom: '6px',
                letterSpacing: '1px',
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: '300',
              }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#menu" style={{ textDecoration: 'none' }}>
          <button
            className="promise-cta"
            style={{
              backgroundColor: 'var(--color-blanco)',
              color: 'var(--color-verde-oliva)',
              border: 'none',
              padding: 'clamp(12px, 2vw, 16px) clamp(25px, 5vw, 40px)',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: 'clamp(13px, 2vw, 15px)',
              cursor: 'pointer',
              letterSpacing: '1px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
          >
            Descubre Nuestro Menú →
          </button>
        </a>
      </div>
    </section>
  );
};

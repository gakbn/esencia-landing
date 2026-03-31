import React from 'react';
// Importamos ambos también aquí
import imgFondo from '../assets/fondo.jpg';
import imgFondo2 from '../assets/fondo2.jpg';

export const WeAreDifferent = () => {
  const cards = [
    { title: "Artesanal", icon: "★", text: "Hechos con dedicación y técnicas gourmet." },
    { title: "Estético", icon: "★", text: "Presentación elegante para deleitar." },
    { title: "Atención", icon: "★", text: "Personalizada y adaptada a tu evento." },
    { title: "Experiencia", icon: "★", text: "Única y memorable en cada pedido." }
  ];

  return (
    <section id="nosotros" style={{ padding: 'clamp(50px, 8vw, 100px) 6%' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'clamp(30px, 5vw, 60px)',
        alignItems: 'center'
      }}>
        <div>
          {/* Aquí usamos imgFondo2 (fondo2.jpg) */}
          <img src={imgFondo2} alt="Esencia Detalle" style={{
            width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
          }} />
        </div>

        <div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', marginBottom: '15px' }}>
            Nuestra ESENCIA es <br /> <span style={{ fontStyle: 'italic', fontWeight: '400' }}>DIFERENTE</span>
          </h2>
          <p style={{ color: '#555', marginBottom: 'clamp(25px, 5vw, 50px)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            Cuidamos cada detalle en sabor, presentación y calidad. Creamos experiencias únicas ideales para eventos y momentos especiales.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(15px, 3vw, 30px)'
          }}>
            {cards.map((card, index) => (
              <div key={index} className="card-hover" style={{
                backgroundColor: 'var(--color-blanco)',
                padding: 'clamp(15px, 3vw, 25px)',
                borderRadius: '15px',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.03)'
              }}>
                <div style={{
                  backgroundColor: 'var(--color-beige)',
                  color: 'var(--color-verde-oliva)',
                  width: '50px', height: '50px',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', marginBottom: '15px'
                }}>{card.icon}</div>
                <h4 style={{ color: 'var(--color-negro)', marginBottom: '8px' }}>{card.title}</h4>
                <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: '#666', lineHeight: '1.4' }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
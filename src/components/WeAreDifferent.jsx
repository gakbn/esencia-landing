import React from 'react';

export const WeAreDifferent = () => {
  const cards = [
    { title: "Artesanal", icon: "Whisk", text: "Hechos con dedicación y técnicas gourmet." },
    { title: "Estético", icon: "Star", text: "Presentación elegante para deleitar." },
    { title: "Atención", icon: "Person", text: "Personalizada y adaptada a tu evento." },
    { title: "Experiencia", icon: "Sparkles", text: "Única y memorable en cada pedido." }
  ];

  return (
    <section id="nosotros" style={{ padding: '100px 10%' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Imagen de la izquierda - Replica la imagen */}
        <div>
          <img src="/src/assets/fondo2.jpg" alt="Esencia Detalle" style={{
            width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
          }} />
        </div>

        {/* Texto y Grid de tarjetas de la derecha */}
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
            Nuestra ESENCIA es <br /> <span style={{ fontStyle: 'italic', fontWeight: '400' }}>DIFERENTE</span>
          </h2>
          <p style={{ color: '#555', marginBottom: '50px' }}>
            Cuidamos cada detalle en sabor, presentación y calidad. Creamos experiencias únicas ideales para eventos y momentos especiales.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px'
          }}>
            {cards.map((card, index) => (
              <div key={index} className="card-hover" style={{
                backgroundColor: 'var(--color-blanco)',
                padding: '25px',
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
                }}>{/* Aquí iría un icono */} ★</div>
                <h4 style={{ color: 'var(--color-negro)', marginBottom: '8px' }}>{card.title}</h4>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.4' }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
function Experience() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="card-header">
        <i className="ri-briefcase-line"></i> Experiencia
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="exp-item">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="exp-logo">
              <span role="img" aria-label="logo" style={{ fontSize: '1.2rem' }}>🔹</span>
            </div>
            <div>
              <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>
                Papaya Group — <span style={{ color: 'var(--text-main)', fontWeight: 400 }}>2014 - 2014</span>
              </p>
              <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>Diseñador Gráfico.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="exp-buttons">
        <button className="btn-glass">
          <i className="ri-profile-line" style={{ opacity: 0.5, fontSize: '1rem' }}></i> Read.cv
        </button>
        <button className="btn-glass">
          <i className="ri-download-line" style={{ opacity: 0.5, fontSize: '1rem' }}></i> Descargar cv
        </button>
      </div>
    </div>
  );
}

export default Experience;

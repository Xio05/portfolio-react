export default function Contact() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 500, color: '#fff' }}>
        <i className="ri-chat-3-line" style={{ opacity: 0.5 }}></i> Contactar
      </span>
      <i className="ri-arrow-right-up-line" style={{ fontSize: '1.125rem', color: '#fff' }}></i>
    </div>
  );
}

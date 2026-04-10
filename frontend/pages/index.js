export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC' }}>
      <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 16px rgba(15,23,42,0.07)', padding: '2.5rem 3rem', border: '1.5px solid #E2E8F0', textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: '#0F172A', marginBottom: 16 }}>Welkom bij CHAMGO-Pulse</h1>
        <p style={{ color: '#64748B', fontSize: 18, marginBottom: 0 }}>
          Dit is de startpagina van de frontend/pages directory.<br />
          Bouw hier je nieuwe Next.js of React functionaliteit uit.
        </p>
      </div>
    </main>
  );
}

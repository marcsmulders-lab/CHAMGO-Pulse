import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header style={{
      padding: '2.5rem 1rem 1.5rem 1rem',
      background: 'linear-gradient(90deg, #0f2027 0%, #1976d2 50%, #42a5f5 100%)',
      textAlign: 'center',
      color: '#fff',
      boxShadow: '0 4px 24px rgba(25,118,210,0.13)',
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
      marginBottom: 0
    }}>
      <ThemeSwitcher />
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginBottom: 8}}>
        <Logo />
        <span style={{fontSize: 44, fontWeight: 900, letterSpacing: 2, fontFamily: 'Segoe UI, Arial, sans-serif'}}>CHAMGO-<span style={{color:'#ffe082'}}>Pulse</span></span>
      </div>
      <div style={{fontSize: 19, opacity: 0.92, fontWeight: 400, letterSpacing: 1, fontFamily: 'Segoe UI, Arial, sans-serif'}}>
        Platform voor participatie, projecten en vergunningen
      </div>
    </header>
  );
}

function Logo() {
  // Simpel strak SVG logo met C en P
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#fff" fillOpacity="0.13" stroke="#ffe082" strokeWidth="2" />
      <text x="13" y="30" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#ffe082">C</text>
      <text x="25" y="30" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#fff">P</text>
    </svg>
  );
}

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      background: 'rgba(255,255,255,0.85)',
      boxShadow: '0 8px 32px rgba(25,118,210,0.10)',
      borderRadius: 24,
      margin: '1.5rem auto 2.5rem auto',
      maxWidth: 1100,
      padding: '0.7rem 2.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backdropFilter: 'blur(8px)',
      border: '1.5px solid #e3f2fd',
      position: 'relative',
      zIndex: 10
    }}>
      <ul style={{
        display: 'flex',
        gap: '2.2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        alignItems: 'center',
      }}>
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/projecten">Projecten</NavLink></li>
        <li><NavLink to="/participatie">Participatie</NavLink></li>
        <li><NavLink to="/bezwaren">Bezwaren</NavLink></li>
        <li><NavLink to="/vergunningen">Vergunningen</NavLink></li>
        <li><NavLink to="/opennorm">Open Norm</NavLink></li>
        <li><NavLink to="/lca">LCA</NavLink></li>
        <li><NavLink to="/osint">OSINT</NavLink></li>
        <li><NavLink to="/bio2">BIO2</NavLink></li>
        <li><NavLink to="/slm">SLM</NavLink></li>
      </ul>
    </nav>
  );
}

function NavLink({ to, children }) {
  const isActive = window.location.pathname === to;
  return (
    <Link
      to={to}
      style={{
        color: isActive ? '#fff' : '#1976d2',
        fontWeight: 600,
        textDecoration: 'none',
        padding: '0.7rem 1.2rem',
        borderRadius: 12,
        fontSize: 18,
        letterSpacing: 0.5,
        background: isActive
          ? 'linear-gradient(90deg,#1976d2 0%,#42a5f5 100%)'
          : 'none',
        boxShadow: isActive ? '0 2px 12px rgba(25,118,210,0.10)' : 'none',
        border: isActive ? '1.5px solid #ffe082' : '1.5px solid transparent',
        transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'linear-gradient(90deg,#1976d2 0%,#42a5f5 100%)';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = isActive ? 'linear-gradient(90deg,#1976d2 0%,#42a5f5 100%)' : 'none';
        e.currentTarget.style.color = isActive ? '#fff' : '#1976d2';
      }}
    >
      {children}
    </Link>
  );
}

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/projecten">Projecten</Link></li>
        <li><Link to="/participatie">Participatie</Link></li>
        <li><Link to="/bezwaren">Bezwaren</Link></li>
        <li><Link to="/vergunningen">Vergunningen</Link></li>
        <li><Link to="/opennorm">Open Norm</Link></li>
      </ul>
    </nav>
  );
}

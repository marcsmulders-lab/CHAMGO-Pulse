
import DashboardCard from './DashboardCard';
import DashboardChart from './DashboardChart';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDashboardStats } from '../../services/api';
import { useTheme } from '../../theme/ThemeContext';
import { exportToCSV, exportToPDF } from '../../utils/export';
import { useMemo } from 'react';
import { useToast } from '../../components/ToastProvider';


const nav = [
  { to: '/projecten', label: 'Naar Projecten' },
  { to: '/bezwaren', label: 'Naar Bezwaren' },
  { to: '/vergunningen', label: 'Naar Vergunningen' },
  { to: '/participatie', label: 'Naar Participatie' },
];


export default function DashboardOverview() {
  const { addToast } = useToast();
  const { theme } = useTheme();
  const [stats, setStats] = useState([]);
  const [chart, setChart] = useState({ data: [], labels: [], colors: [] });
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetchDashboardStats().then(({ stats, chart }) => {
      setStats(stats);
      setChart(chart);
    });
  }, []);

  // Filter en sorteer de kaarten
  const filteredStats = useMemo(() => {
    let arr = [...stats];
    if (filter) {
      arr = arr.filter(s => s.title.toLowerCase().includes(filter.toLowerCase()));
    }
    if (sort === 'value-asc') {
      arr.sort((a, b) => a.value - b.value);
    } else if (sort === 'value-desc') {
      arr.sort((a, b) => b.value - a.value);
    } else if (sort === 'title-asc') {
      arr.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'title-desc') {
      arr.sort((a, b) => b.title.localeCompare(a.title));
    }
    return arr;
  }, [stats, filter, sort]);

  return (
    <div className="max-w-5xl mx-auto my-12 p-8 bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 text-slate-900 dark:text-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-600/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-500/10 rounded-full blur-2xl z-0" />
      <h2 className="text-center mb-10 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-xl relative z-10">Welkom bij CHAMGO-PULSE</h2>

      {/* Filter en sorteer controls */}
      <div className="flex flex-wrap items-center gap-4 mb-8 relative z-10">
        <input
          type="text"
          placeholder="Filter op titel..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 rounded-xl border border-slate-300/60 bg-white/60 placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400/70 min-w-[180px] shadow-sm transition"
        />
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="px-4 py-2 rounded-xl border border-slate-300/60 bg-white/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400/70 min-w-[180px] shadow-sm transition"
        >
          <option value="">Sorteer op...</option>
          <option value="value-asc">Waarde oplopend</option>
          <option value="value-desc">Waarde aflopend</option>
          <option value="title-asc">Titel A-Z</option>
          <option value="title-desc">Titel Z-A</option>
        </select>
        <div className="flex-1" />
        <button
          onClick={() => {
            exportToCSV(filteredStats, 'dashboard.csv');
            addToast('Dashboard geëxporteerd naar CSV!', 'success');
          }}
          className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-5 py-2 rounded-xl shadow-md transition text-base"
        >
          📄 Export CSV
        </button>
        <button
          onClick={() => {
            exportToPDF(filteredStats, 'dashboard.pdf');
            addToast('Dashboard geëxporteerd naar PDF!', 'success');
          }}
          className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-5 py-2 rounded-xl shadow-md transition text-base"
        >
          🖨️ Export PDF
        </button>
      </div>

      <div className="relative z-10">
        <DashboardChart data={chart.data} labels={chart.labels} title="Overzicht" />
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {filteredStats.map((s, i) => (
            <DashboardCard key={i} {...s} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {nav.map((n, i) => (
            <Link
              key={i}
              to={n.to}
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition text-base border border-white/20"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

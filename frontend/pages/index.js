export default function Home() {
  return (
export default function ChamgoPulseDashboard() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-3xl font-bold mb-4">
              C
            </div>
            <h1 className="text-3xl font-bold text-slate-800">
              CHAMGO-Pulse
            </h1>
            <p className="text-slate-500 mt-2">
              Meld u aan om toegang te krijgen tot het dashboard
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Gebruikersnaam
              </label>
              <input
                type="text"
                placeholder="Voer gebruikersnaam in"
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Wachtwoord
              </label>
              <input
                type="password"
                placeholder="Voer wachtwoord in"
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="rounded" />
                Onthoud mij
              </label>

              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Wachtwoord vergeten?
              </button>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-medium shadow-lg transition">
              Inloggen
            </button>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
            Alleen toegankelijk voor geautoriseerde gebruikers
          </div>
        </div>
      </div>
    );
  }

  const sections = [
    {
      title: 'Gemeentelijk Dashboard',
      color: 'bg-blue-600',
      items: [
        'Lopende projecten',
        'Vergunningenstatus',
        'Zorgvraag per wijk',
        'Switch Home doorstroming',
      ],
    },
    {
      title: 'Investeerdersportaal',
      color: 'bg-slate-800',
      items: [
        'Projectrendement',
        'Risicoanalyse',
        'Due diligence',
        'Documentdownloads',
      ],
    },
    {
      title: 'Realtime Bouwmonitor',
      color: 'bg-orange-500',
      items: [
        'Bouwplanning',
        'Materiaalstatus',
        'Budget vs realisatie',
        'Foto-updates',
      ],
    },
    {
      title: 'Vergunningenoverzicht',
      color: 'bg-purple-600',
      items: [
        'Omgevingsvergunningen',
        'Bezwaarprocedures',
        'Deadlines',
        'Juridische status',
      ],
    },
    {
      title: 'AI-Control Center',
      color: 'bg-green-600',
      items: [
        'AI meldingen',
        'Risicoherkenning',
        'Voorspellingen',
        'Automatische rapportages',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex text-white">
      <aside className="w-72 bg-slate-900/95 border-r border-white/10 backdrop-blur-xl text-white p-6 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CHAMGO-Pulse</h1>
          <p className="text-slate-400 mt-2 text-sm">
            Dashboard & Control Center
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <button className="text-left px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
            Gemeentelijk Dashboard
          </button>
          <button className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
            Investeerdersportaal
          </button>
          <button className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
            Bouwmonitor
          </button>
          <button className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
            Vergunningen
          </button>
          <button className="text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
            AI-Control Center
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-slate-800">
              Overzicht Modules
            </h2>
            <p className="text-slate-500 mt-2">
              Centrale omgeving voor beleid, bouw, vergunningen en AI-analyse.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl shadow-lg transition font-medium">
            Nieuw Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
            >
              <div className={`${section.color} p-5`}>
                <h3 className="text-white text-xl font-semibold">
                  {section.title}
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-2xl transition">
                  Open Module
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Lopende Projecten
            </h3>
            <div className="text-5xl font-bold text-blue-600">12</div>
            <p className="text-slate-500 mt-2">Actieve projecten in behandeling</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Vergunningen Open
            </h3>
            <div className="text-5xl font-bold text-purple-600">28</div>
            <p className="text-slate-500 mt-2">Dossiers in procedure</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              AI Meldingen
            </h3>
            <div className="text-5xl font-bold text-green-600">7</div>
            <p className="text-slate-500 mt-2">Nieuwe waarschuwingen beschikbaar</p>
          </div>
        </div>
      </main>
    </div>
  );
}
  );
}

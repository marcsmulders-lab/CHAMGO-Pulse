// Algemene fetch functie
export const fetchData = async (endpoint, options = {}) => {
  const res = await fetch(endpoint, options);
  if (!res.ok) throw new Error('API error');
  return res.json();
};

// Specifiek voor dashboarddata (REST/Supabase voorbeeld)
// Vervang de URL door je eigen endpoint
export const fetchDashboardStats = async () => {
  // Voorbeeld Supabase REST endpoint:
  // const url = 'https://<project>.supabase.co/rest/v1/dashboard_stats?select=*';
  // const apiKey = '<SUPABASE_ANON_KEY>';
  // return fetchData(url, { headers: { apikey: apiKey, Authorization: `Bearer ${apiKey}` } });

  // Placeholder demo (simuleer response)
  return Promise.resolve({
    stats: [
      { title: 'Projecten', value: 17, color: '#42a5f5' },
      { title: 'Bezwaren', value: 6, color: '#ffb74d' },
      { title: 'Vergunningen', value: 11, color: '#66bb6a' },
      { title: 'Participaties', value: 2, color: '#ab47bc' },
    ],
    chart: {
      data: [17, 6, 11, 2],
      labels: ['Projecten', 'Bezwaren', 'Vergunningen', 'Participaties'],
      colors: ['#42a5f5', '#ffb74d', '#66bb6a', '#ab47bc']
    }
  });
};

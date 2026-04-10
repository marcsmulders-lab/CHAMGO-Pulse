// Algemene fetch functie
export const fetchData = async (endpoint, options = {}) => {
  const res = await fetch(endpoint, options);
  if (!res.ok) throw new Error('API error');
  return res.json();
};

// Specifiek voor dashboarddata (REST/Supabase voorbeeld)
// Vervang de URL door je eigen endpoint
export const fetchDashboardStats = async () => {
  // Gebruik het backend endpoint (vervang indien nodig localhost door je productie-URL)
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/api/dashboard'
      : '/api/dashboard';
  return fetchData(url);
};

// Dummy dynamische data voor dashboard
export const fetchDashboardData = () => {
  // In een echte app haal je dit op via een API
  return Promise.resolve({
    stats: [
      { title: 'Projecten', value: Math.floor(Math.random()*20)+5, color: '#42a5f5' },
      { title: 'Bezwaren', value: Math.floor(Math.random()*10)+1, color: '#ffb74d' },
      { title: 'Vergunningen', value: Math.floor(Math.random()*15)+2, color: '#66bb6a' },
      { title: 'Participaties', value: Math.floor(Math.random()*8)+1, color: '#ab47bc' },
    ],
    chart: {
      data: Array.from({length: 4}, () => Math.floor(Math.random()*20)+1),
      labels: ['Projecten', 'Bezwaren', 'Vergunningen', 'Participaties'],
      colors: ['#42a5f5', '#ffb74d', '#66bb6a', '#ab47bc']
    }
  });
};

const express = require('express');
const router = express.Router();

// Demo endpoint: /api/dashboard
router.get('/', (req, res) => {
  res.json({
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
});

module.exports = router;

import { useEffect, useRef } from 'react';

// Eenvoudige staafdiagram met canvas
export default function DashboardChart({ data, labels, title }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Chart settings
    const max = Math.max(...data, 1);
    const barWidth = 60;
    const gap = 30;
    data.forEach((val, i) => {
      const x = i * (barWidth + gap) + 40;
      const y = 180 - (val / max) * 140;
      ctx.fillStyle = '#1976d2';
      ctx.fillRect(x, y, barWidth, (val / max) * 140);
      ctx.fillStyle = '#333';
      ctx.font = '14px Arial';
      ctx.fillText(labels[i], x, 200);
      ctx.fillText(val, x + barWidth / 2 - 10, y - 10);
    });
    ctx.font = 'bold 16px Arial';
    ctx.fillText(title, 40, 20);
  }, [data, labels, title]);

  return <canvas ref={canvasRef} width={400} height={220} style={{margin: '2rem auto', display: 'block', background: '#fafafa', borderRadius: 8}} />;
}

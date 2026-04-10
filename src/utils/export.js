
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Utility to export array of objects to CSV
export function exportToCSV(data, filename = 'export.csv') {
  if (!data || !data.length) return;
  const csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(','));
  for (const row of data) {
    csvRows.push(headers.map(h => '"' + (row[h] ?? '').toString().replace(/"/g, '""') + '"').join(','));
  }
  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Utility to export array of objects to PDF (simple table)
export function exportToPDF(data, filename = 'export.pdf') {
  if (!data || !data.length) return;
  const doc = new jsPDF();
  autoTable(doc, {
    head: [Object.keys(data[0])],
    body: data.map(row => Object.keys(data[0]).map(h => row[h])),
  });
  doc.save(filename);
}

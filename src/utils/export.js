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
export async function exportToPDF(data, filename = 'export.pdf') {
  if (!data || !data.length) return;
  const jsPDFModule = await import('jspdf');
  const autoTableModule = await import('jspdf-autotable');
  const jsPDF = jsPDFModule.jsPDF;
  // Patch autoTable in op jsPDF prototype
  if (typeof autoTableModule.default === 'function') {
    autoTableModule.default(jsPDF);
  } else if (typeof autoTableModule === 'function') {
    autoTableModule(jsPDF);
  }
  const doc = new jsPDF();
  const headers = [Object.keys(data[0])];
  const rows = data.map(row => headers[0].map(h => row[h]));
  doc.autoTable({ head: headers, body: rows });
  doc.save(filename);
}

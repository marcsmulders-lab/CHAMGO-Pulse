import { useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { useToast } from '../../components/ToastProvider';

export default function ParticipatieForm() {
  const { theme } = useTheme();
  const { addToast } = useToast();
  const [form, setForm] = useState({ naam: '', email: '', mening: '' });
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.naam.trim()) e.naam = 'Naam is verplicht';
    if (!form.email.trim()) e.email = 'E-mail is verplicht';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Ongeldig e-mailadres';
    if (!form.mening.trim()) e.mening = 'Geef uw mening';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(er => ({ ...er, [e.target.name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    // Simuleer submit
    setTimeout(() => {
      addToast('Bedankt voor uw deelname!', 'success');
      setForm({ naam: '', email: '', mening: '' });
    }, 500);
  }

  return (
    <div style={{
      maxWidth: 500,
      margin: '2rem auto',
      padding: '2rem',
      background: theme.card,
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(25, 118, 210, 0.07)',
      border: `1.5px solid ${theme.border}`,
      color: theme.color
    }}>
      <h2 style={{textAlign: 'center', marginBottom: '2rem', color: theme.navText, letterSpacing: 1}}>Participatieformulier</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{marginBottom: 18}}>
          <label htmlFor="naam" style={{display: 'block', marginBottom: 6, fontWeight: 500}}>Naam *</label>
          <input
            type="text"
            id="naam"
            name="naam"
            value={form.naam}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.6rem 1rem',
              borderRadius: 8,
              border: `1.5px solid ${errors.naam ? '#ff5252' : theme.border}`,
              fontSize: 15,
              background: theme.background,
              color: theme.color,
              outline: 'none',
              marginBottom: errors.naam ? 2 : 0
            }}
          />
          {errors.naam && <div style={{color: '#ff5252', fontSize: 13}}>{errors.naam}</div>}
        </div>
        <div style={{marginBottom: 18}}>
          <label htmlFor="email" style={{display: 'block', marginBottom: 6, fontWeight: 500}}>E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.6rem 1rem',
              borderRadius: 8,
              border: `1.5px solid ${errors.email ? '#ff5252' : theme.border}`,
              fontSize: 15,
              background: theme.background,
              color: theme.color,
              outline: 'none',
              marginBottom: errors.email ? 2 : 0
            }}
          />
          {errors.email && <div style={{color: '#ff5252', fontSize: 13}}>{errors.email}</div>}
        </div>
        <div style={{marginBottom: 18}}>
          <label htmlFor="mening" style={{display: 'block', marginBottom: 6, fontWeight: 500}}>Uw mening *</label>
          <textarea
            id="mening"
            name="mening"
            value={form.mening}
            onChange={handleChange}
            rows={4}
            style={{
              width: '100%',
              padding: '0.6rem 1rem',
              borderRadius: 8,
              border: `1.5px solid ${errors.mening ? '#ff5252' : theme.border}`,
              fontSize: 15,
              background: theme.background,
              color: theme.color,
              outline: 'none',
              marginBottom: errors.mening ? 2 : 0
            }}
          />
          {errors.mening && <div style={{color: '#ff5252', fontSize: 13}}>{errors.mening}</div>}
        </div>
        <button
          type="submit"
          style={{
            background: theme.navActive,
            color: theme.navTextActive,
            border: `1.5px solid ${theme.border}`,
            borderRadius: 8,
            padding: '0.7rem 1.5rem',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
            transition: 'background 0.2s, color 0.2s',
            width: '100%'
          }}
        >
          Versturen
        </button>
      </form>
    </div>
  );
}

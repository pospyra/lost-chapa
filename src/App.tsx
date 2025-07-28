import React from 'react';
import logo from './logo.svg';
import './App.css';
import chapaImg from './images/chapa.jpg';

function App() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2018;

  const sectionStyle = {
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    padding: '1rem 1.5rem',
    marginBottom: '1.5rem',
    lineHeight: 1.4,
    textAlign: 'center' as 'center',
  };

  const ulStyle = {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: '0.5rem',
    marginBottom: '0',
  };

  const liStyle = {
    marginBottom: '0.3rem',
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '1rem 1.5rem',
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        backgroundColor: '#eef2f7',
        minHeight: '100vh',
        scrollBehavior: 'smooth',
      }}
    >
      <header style={{ textAlign: 'center', margin: '1.5rem 0' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🐶 Это Чапа</h1>
        <img
          src={chapaImg}
          alt="Чапа"
          style={{ borderRadius: '1rem', width: '100%', maxWidth: 400, objectFit: 'cover', margin: 'auto' }}
        />
        <p style={{ marginTop: '1rem', fontSize: '1rem', fontWeight: '600' }}>
          Порода: беспородистая | Возраст: {age} лет
        </p>
      </header>

      <section id="contact" style={sectionStyle}>
        <h2 style={{ marginBottom: '0.7rem', fontSize: '1.3rem' }}> Если вы нашли Чапу</h2>
        <p>Пожалуйста, позвоните как можно скорее:</p>
        <p style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0.3rem 0' }}>
          <a href="tel:+79998887766" style={{ textDecoration: 'none', color: '#0056b3' }}>
            📞 +7 (978) 751-22-14
          </a>
        </p>
        <p>📍 Адрес: г. Симферополь, ул.1ой Конной Армии, д.17Б</p>
      </section>

      <section id="about" style={sectionStyle}>
        <h2 style={{ marginBottom: '0.7rem', fontSize: '1.3rem' }}>💖 О Чапе</h2>
        <ul style={ulStyle}>

          <li style={liStyle}>Вакцинирована (19.06.2025 – 19.06.2026)</li>
          <li style={liStyle}>Очень ласковая, любит, когда её гладят.</li>
          <li style={liStyle}>Дружит с другими животными</li>
          <li style={liStyle}>Спокойно моется в ванной 🛁</li>

        </ul>
      </section>

      <section id="food" style={sectionStyle}>
        <h2 style={{ marginBottom: '0.7rem', fontSize: '1.3rem' }}>🍽️ Что можно и нельзя</h2>
        <ul style={ulStyle}>
          <li style={liStyle}><strong>Можно:</strong> каши, сухой корм</li>
          <li style={liStyle}><strong>Нельзя:</strong> плоские кости, шоколад, жирное</li>
          <li style={liStyle}><strong>Любит:</strong> колбасу, сыр, мороженое </li>
        </ul>
      </section>

      <section id="commands" style={sectionStyle}>
        <h2 style={{ marginBottom: '0.7rem', fontSize: '1.3rem' }}>🗣️ Команды и поведение</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>Знает игровые команды: <em>«дай лапу», «лежать», «носик»</em></li>
          <li style={liStyle}><strong>Не знает:</strong> «нельзя», «фу», «брысь», «на пол»</li>
          <li style={liStyle}><strong>«Нет»</strong> — перестаёт делать то, что делала</li>
          <li style={liStyle}><strong>«Ушла»</strong> — уходит в сторону или отходит</li>
          <li style={liStyle}><strong>«Стой»</strong> — остановится, а скорее всего сядет</li>
        </ul>
      </section>

      <section id="careful" style={sectionStyle}>
        <h2 style={{ marginBottom: '0.7rem', fontSize: '1.3rem' }}>⚠️ Осторожно</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>Боится громких звуков: петард, салютов, выстрелов</li>
        </ul>
      </section>
    </div>
  );
}

export default App;

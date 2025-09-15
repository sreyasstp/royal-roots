import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { languages } from './languages';
import { contentData } from './contentData';

const HomePage = () => {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const content = contentData[lang];

  return (
    <div className="rr-root">
      <header className="rr-header">
        <div className="rr-logo">{content.headerLogo}</div>
        <nav className="rr-nav">
          <div className="rr-lang-dropdown">
            <button onClick={() => setOpen(!open)} className="rr-lang-button">
              {languages.find(l => l.code === lang)?.flag} {languages.find(l => l.code === lang)?.name}
            </button>
            {open && (
              <div className="rr-lang-menu">
                {languages.map(l => (
                  <div key={l.code} onClick={() => { setLang(l.code); setOpen(false); }}>
                    {l.flag} {l.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://wa.me/421915172199"
            target="_blank"
            rel="noopener noreferrer"
            className="rr-nav-btn rr-whatsapp-btn"
          >
            <FaWhatsapp style={{ marginRight: '0.5rem' }} /> WhatsApp
          </a>
          <a href="mailto:Info@royalroots.sk" className="rr-nav-btn">{content.emailUs}</a>
        </nav>
      </header>

      <div className="rr-hero">
        <h1>{content.heroTitle}</h1>
        <p>{content.heroDesc}</p>
        <a href="tel:+421915172199" className="rr-hero-btn">{content.heroBtn}</a>
      </div>

      <section className="rr-info-card">
        <h2>{content.infoTitle}</h2>
        <address>{content.address}</address>
      </section>

      <footer className="rr-footer">
        <p>{content.footer}</p>
      </footer>

      {/* <a
        href="https://wa.me/421915172199"
        target="_blank"
        rel="noopener noreferrer"
        className="rr-whatsapp-float"
      >
        <FaWhatsapp size={28} />
      </a> */}
    </div>
  );
};

export default HomePage;

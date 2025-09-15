import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const slovakContent = {
  headerLogo: "Royal Roots",
  callUs: "Zavolajte nám",
  emailUs: "Email",
  heroTitle: "Spoľahlivá taxislužba a kuriér pre celé Slovensko",
  heroDesc: "Ponúkame bezpečné a pohodlné jazdy a kuriérske služby po Slovensku. Profesionálni vodiči, moderné vozidlá, rýchla rezervácia. Vaša cesta začína s Royal Roots!",
  heroBtn: "Rezervovať",
  infoTitle: "Kontaktné údaje",
  address: (
    <>
      Karpatské námestie 7770/10A,<br />
      Bratislava - Rača 83106 Slovensko<br />
      <span>Mobil: <a href="tel:+421915172199">+421 915 172 199</a></span><br />
      <span>Web: <a href="https://www.royalroots.sk">www.royalroots.sk</a></span><br />
      <span>Email: <a href="mailto:Info@royalroots.sk">Info@royalroots.sk</a></span>
    </>
  ),
  footer: "© 2025 Royal Roots — Spoľahlivá taxislužba v Bratislave"
};

const englishContent = {
  headerLogo: "Royal Roots",
  callUs: "Call Us",
  emailUs: "Email",
  heroTitle: "Reliable taxi service and courier for Slovakia",
  heroDesc: "We offer safe and comfortable rides and courier services across Slovakia. Professional drivers, modern vehicles, and quick booking available. Your journey starts with Royal Roots!",
  heroBtn: "Book Now",
  infoTitle: "Contact Info",
  address: (
    <>
      Karpatské námestie 7770/10A,<br />
      Bratislava - Rača 83106 Slovakia<br />
      <span>Mob: <a href="tel:+421915172199">+421 915 172 199</a></span><br />
      <span>Website: <a href="https://www.royalroots.sk">www.royalroots.sk</a></span><br />
      <span>Email: <a href="mailto:Info@royalroots.sk">Info@royalroots.sk</a></span>
    </>
  ),
  footer: "© 2025 RoyalRoots — Reliable Taxi & Courier Service in Slovakia"
};

const HomePage = () => {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const content = lang === "en" ? englishContent : slovakContent;

  return (
    <div className="rr-root">
      <header className="rr-header">
        <div className="rr-logo">{content.headerLogo}</div>
        <nav className="rr-nav">
          {/* Dropdown switcher */}
          <div className="rr-lang-dropdown">
            <button onClick={() => setOpen(!open)} className="rr-lang-button">
              {lang === "en" ? "🇬🇧 English" : "🇸🇰 Slovak"}
            </button>
            {open && (
              <div className="rr-lang-menu">
                <div onClick={() => { setLang("en"); setOpen(false); }}>
                  🇬🇧 English
                </div>
                <div onClick={() => { setLang("sk"); setOpen(false); }}>
                  🇸🇰 Slovak
                </div>
              </div>
            )}
          </div>

          <a href="tel:+421915172199" className="rr-nav-btn">{content.callUs}</a>
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

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/421915172199"
        target="_blank"
        rel="noopener noreferrer"
        className="rr-whatsapp-float"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default HomePage;

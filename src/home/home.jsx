import React from 'react';
import { useState } from 'react';

const slovakContent = {
    headerLogo: "Royal Roots",
    callUs: "Zavolajte nám",
    emailUs: "Email",
    heroTitle: "Spoľahlivá taxislužba pre Bratislavu & Raču",
    heroDesc: "Ponúkame bezpečné a pohodlné jazdy po Bratislave. Profesionálni vodiči, moderné vozidlá, rýchla rezervácia. Vaša cesta začína s Royal Roots!",
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
    footer: "© 2025 Royal Roots  — Spoľahlivá taxislužba v Bratislave"
  };
  
  const englishContent = {
    headerLogo: "Royal Roots",
    callUs: "Call Us",
    emailUs: "Email",
    heroTitle: "Reliable taxi service for Bratislava & Rača",
    heroDesc: "We offer safe and comfortable rides around Bratislava. Professional drivers, modern vehicles, and quick booking available. Your journey starts with Royal Roots!",
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
    footer: "© 2025 RoyalRoots — Reliable Taxi Service in Bratislava"
  };
  
  const HomePage = () => {
    const [lang, setLang] = useState("en");
    const content = lang === "en" ? englishContent : slovakContent;
  
    return (
      <div className="rr-root">
        <header className="rr-header">
          <div className="rr-logo">{content.headerLogo}</div>
          <nav className="rr-nav">
            <button className="rr-lang-switcher" onClick={() => setLang(lang === "en" ? "sk" : "en")}>
              {lang === "en" ? "SK" : "EN"}
            </button>
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
          <address>
            {content.address}
          </address>
        </section>
        <footer className="rr-footer">
          <p>{content.footer}</p>
        </footer>
      </div>
    );
  };
  
  export default HomePage;
  
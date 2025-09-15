import React from 'react';

const HomePage = () => (
  <div className="rr-root">
    <header className="rr-header">
      <div className="rr-logo">Royal Roots</div>
      <nav className="rr-nav">
        <a href="tel:+421915172199" className="rr-nav-btn">Call Us</a>
        <a href="mailto:Info@royalroots.sk" className="rr-nav-btn">Email</a>
      </nav>
    </header>
    <div className="rr-hero">
      <h1>Reliable taxi service for Bratislava & Rača</h1>
      <p>
        We offer safe and comfortable rides around Bratislava. Professional drivers,
        modern vehicles, and quick booking available. Your journey starts with Royal Roots s.r.o!
      </p>
      <a href="tel:+421915172199" className="rr-hero-btn">Book Now</a>
    </div>
    <section className="rr-info-card">
      <h2>Contact Info</h2>
      <address>
        Karpatské námestie 7770/10A,<br />
        Bratislava - Rača 83106 Slovakia<br />
        <span>Mob: <a href="tel:+421915172199">+421 915 172 199</a></span><br />
        <span>Website: <a href="https://www.royalroots.sk">www.royalroots.sk</a></span><br />
        <span>Email: <a href="mailto:Info@royalroots.sk">Info@royalroots.sk</a></span>
      </address>
    </section>
    <footer className="rr-footer">
      <p>&copy; 2025 Royal Roots s.r.o &mdash; Reliable Taxi Service in Bratislava</p>
    </footer>
  </div>
);

export default HomePage;

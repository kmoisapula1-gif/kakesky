import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Solutions', href: '#services' },
  { name: 'Lifecycle', href: '#lifecycle' },
  { name: 'Industries', href: '#industries' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'services', 'lifecycle', 'industries', 'sustainability', 'contact'];

const PRIMARY = '#D48148';

export function Navbar({ logoSrc }: { logoSrc: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is currently in view to drive the active nav
  // indicator, the way most modern SaaS marketing sites do.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // The bar gets a solid dark background once scrolled, or while the mobile
  // menu overlay is open.
  const barSolid = isScrolled || mobileOpen;
  // The hero and the scrolled bar are both dark surfaces, so nav text and the
  // logo are always rendered light for readability.
  const onDark = true;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        margin: isScrolled ? '12px 16px 0' : 0,
        borderRadius: isScrolled ? 16 : 0,
        background: barSolid ? 'rgba(26,26,26,0.85)' : 'transparent',
        backdropFilter: barSolid ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: barSolid ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 12px 32px rgba(0,0,0,0.28)' : 'none',
        border: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        padding: isScrolled ? '10px 0' : '20px 0',
        transition: 'all 0.35s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#home');
          }}
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <img
            src={logoSrc}
            alt="Kake Sky Solutions"
            style={{ height: 40, filter: onDark ? 'brightness(0) invert(1)' : 'none' }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="ksk-desktop-nav" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV_LINKS.map((l) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <a
                key={l.name}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
                className="ksk-nav-link"
                style={{
                  position: 'relative',
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: isActive ? PRIMARY : onDark ? '#fff' : '#1A1A1A',
                  textDecoration: 'none',
                  paddingBottom: 4,
                }}
              >
                {l.name}
                <span
                  className="ksk-nav-underline"
                  style={{ transform: isActive ? 'scaleX(1)' : undefined }}
                />
              </a>
            );
          })}
          <button onClick={() => scrollTo('#contact')} className="ksk-nav-cta">
            Get a Quote <ArrowRight size={14} className="ksk-nav-cta-arrow" />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="ksk-mobile-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: onDark ? '#fff' : '#1A1A1A',
            padding: 4,
          }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <nav
          className="ksk-mobile-menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 4,
            padding: '16px 32px 28px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
              }}
              style={{
                fontSize: 15,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: activeSection === l.href.slice(1) ? PRIMARY : '#fff',
                textDecoration: 'none',
                padding: '12px 0',
              }}
            >
              {l.name}
            </a>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            style={{
              background: PRIMARY,
              color: '#fff',
              border: 'none',
              padding: '14px 24px',
              marginTop: 12,
              fontFamily: 'Oswald, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              fontSize: 15,
            }}
          >
            Get a Quote
          </button>
        </nav>
      )}
    </header>
  );
}

const PRIMARY = '#D48148';

const QUICK_LINKS: { label: string; href: string }[] = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#services' },
  { label: 'Lifecycle', href: '#lifecycle' },
  { label: 'Industries', href: '#industries' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Contact', href: '#contact' },
];

export function Footer({ logoSrc }: { logoSrc: string }) {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="ksk-footer" style={{ background: '#1A1A1A', color: '#aaa', paddingTop: 64 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div
          className="ksk-footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: 48,
            paddingBottom: 48,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div>
            <img
              src={logoSrc}
              alt="Kake Sky Solutions"
              style={{ height: 64, filter: 'brightness(0) invert(1)', marginBottom: 16 }}
            />
            <p
              style={{
                color: PRIMARY,
                fontFamily: 'Oswald, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontSize: 12,
              }}
            >
              Manufacture · Track · Recover · Repair · Recycle
            </p>
            <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.7, maxWidth: 340 }}>
              Industrial pallet lifecycle management driving efficiency and sustainability across South
              African supply chains.
            </p>
          </div>

          <div>
            <h4
              style={{
                color: '#fff',
                fontFamily: 'Oswald, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 16,
              }}
            >
              Quick Links
            </h4>
            {QUICK_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
                style={{ display: 'block', marginBottom: 8, color: '#aaa', textDecoration: 'none', fontSize: 14 }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4
              style={{
                color: '#fff',
                fontFamily: 'Oswald, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 16,
              }}
            >
              Headquarters
            </h4>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>
              House no. 474
              <br />
              Khunotswane
              <br />
              Madibana section, 2883
            </p>
            <a
              href="mailto:kakesky1@gmail.com"
              style={{ display: 'block', marginTop: 12, color: '#aaa', fontSize: 14 }}
            >
              kakesky1@gmail.com
            </a>
            <a
              href="tel:0646016462"
              style={{
                display: 'block',
                marginTop: 8,
                color: '#fff',
                fontFamily: 'Oswald, sans-serif',
                fontSize: 20,
                letterSpacing: '0.1em',
                textDecoration: 'none',
              }}
            >
              064 601 6462
            </a>
          </div>
        </div>

        <div
          className="ksk-footer-bottom"
          style={{
            marginTop: 32,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            fontSize: 13,
            color: '#666',
            flexWrap: 'wrap',
          }}
        >
          <span>© {new Date().getFullYear()} Kake Sky Solutions. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

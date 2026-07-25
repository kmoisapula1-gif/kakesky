import { useState } from 'react';
import {
  Factory,
  Wrench,
  Truck,
  MapPin,
  RefreshCw,
  ScanLine,
  BarChart3,
  Leaf,
  ArrowRight,
  Recycle,
  PackageCheck,
  Radar,
  Pickaxe,
  Building2,
  HardHat,
  ShoppingCart,
  Warehouse,
  Store,
  Phone,
  Mail,
} from 'lucide-react';
import Hero3D from '../components/Hero3D';
import { Section, StaggerContainer, StaggerItem } from '../components/Section';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import logoSrc from '../assets/kake-sky-logo.svg';
import heroBg from '../assets/pallet-yard.svg';
import './home.css';

const PRIMARY = '#D48148';
const FOREGROUND = '#1A1A1A';
const GREEN = '#1B4332';

export default function Home() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ background: '#F8F4EF', overflowX: 'hidden' }}>
      <Navbar logoSrc={logoSrc} />

      {/* HERO */}
      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 80,
          position: 'relative',
          background: '#1A1A1A',
        }}
      >
        {/* Pallet-yard background image */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(26,26,26,0.95) 45%, rgba(26,26,26,0.55))',
            zIndex: 1,
          }}
        />
        <div
          className="ksk-hero-grid"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
            width: '100%',
          }}
        >
          <div style={{ color: '#fff' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                border: `1px solid ${PRIMARY}55`,
                background: `${PRIMARY}20`,
                color: PRIMARY,
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: 24,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: PRIMARY }} />
              South Africa's Premier Partner
            </div>
            <h1
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                lineHeight: 0.9,
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              INDUSTRIAL PALLET
              <br />
              <span style={{ color: PRIMARY }}>LIFECYCLE</span>
              <br />
              MANAGEMENT
            </h1>
            <p
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.75)',
                marginBottom: 40,
                maxWidth: 480,
                lineHeight: 1.7,
              }}
            >
              Manufacturing, refurbishment, recovery and recycling solutions for industrial supply chains
              across South Africa.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                onClick={() => scrollTo('#contact')}
                style={{
                  background: PRIMARY,
                  color: '#fff',
                  border: 'none',
                  padding: '16px 32px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 16,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Request a Quote <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '1px solid #fff',
                  padding: '16px 32px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 16,
                  cursor: 'pointer',
                }}
              >
                Schedule Collection
              </button>
            </div>
          </div>
          <Hero3D />
        </div>
      </section>

      {/* CORE SERVICES */}
      <Section id="services" style={{ padding: '96px 0', background: '#F8F4EF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            Core Services
          </h2>
          <div style={{ width: 96, height: 8, background: PRIMARY, marginBottom: 24 }} />
          <p style={{ fontSize: 18, color: '#666', marginBottom: 64, maxWidth: 600, lineHeight: 1.6 }}>
            We manage the entire lifecycle of your pallet fleet, ensuring you always have the right assets
            when and where you need them.
          </p>
          <StaggerContainer className="ksk-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              {
                icon: Factory,
                title: 'New Pallet Manufacturing',
                desc: 'Custom and standard pallets engineered for demanding environments including mining, construction, FMCG and distribution sectors. Built to exact specifications.',
              },
              {
                icon: Wrench,
                title: 'Pallet Refurbishment',
                desc: "Extend your pallet fleet's lifespan through rigorous grading, repair and refurbishment processes. We return damaged units to fully operational condition.",
              },
              {
                icon: Truck,
                title: 'Recovery & Collection',
                desc: 'Aggressive recovery programs to retrieve pallets from customer sites, retail nodes, and distribution centers to return them to active circulation.',
              },
            ].map((s) => (
              <StaggerItem
                key={s.title}
                className="ksk-card-hover"
                style={{ background: '#fff', border: '1px solid #ddd', padding: 40, position: 'relative', overflow: 'hidden' }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: FOREGROUND,
                    marginBottom: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <s.icon size={24} color={PRIMARY} />
                </div>
                <h3
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    textTransform: 'uppercase',
                    fontSize: 20,
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* LIFECYCLE */}
      <Section id="lifecycle" style={{ padding: '96px 0', background: FOREGROUND, color: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            The Pallet Lifecycle
          </h2>
          <div style={{ width: 96, height: 8, background: PRIMARY, margin: '0 auto 24px' }} />
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, maxWidth: 560, margin: '0 auto 64px', lineHeight: 1.6 }}>
            Our closed-loop system minimizes waste, reduces costs, and ensures operational readiness.
          </p>
          <StaggerContainer className="ksk-grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 24 }}>
            {[
              { step: '01', title: 'Recover', desc: 'Retrieve assets from sites', icon: MapPin },
              { step: '02', title: 'Repair', desc: 'Grade and fix damages', icon: Wrench },
              { step: '03', title: 'Redeploy', desc: 'Return to circulation', icon: PackageCheck },
              { step: '04', title: 'Track', desc: 'Monitor fleet location', icon: Radar },
              { step: '05', title: 'Manufacture', desc: 'Inject new units', icon: Factory },
              { step: '06', title: 'Recycle', desc: 'Process end-of-life wood', icon: Recycle },
            ].map((item) => (
              <StaggerItem
                key={item.step}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    border: `3px solid ${PRIMARY}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    color: PRIMARY,
                  }}
                >
                  <item.icon size={28} />
                </div>
                <div
                  style={{
                    color: PRIMARY,
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {item.step}.
                </div>
                <h4
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section id="industries" style={{ padding: '96px 0', background: '#faf7f4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            Industries We Serve
          </h2>
          <div style={{ width: 96, height: 8, background: PRIMARY, marginBottom: 64 }} />
          <StaggerContainer className="ksk-grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
            {[
              { name: 'Mining', icon: Pickaxe },
              { name: 'Cement', icon: Building2 },
              { name: 'Construction', icon: HardHat },
              { name: 'FMCG', icon: ShoppingCart },
              { name: 'Warehousing', icon: Warehouse },
              { name: 'Retail Dist.', icon: Store },
            ].map((item) => (
              <StaggerItem
                key={item.name}
                className="ksk-card-hover"
                style={{ border: '1px solid #ddd', padding: '32px 16px', textAlign: 'center', background: '#fff' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12, color: PRIMARY }}>
                  <item.icon size={30} />
                </div>
                <h4
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: 13,
                  }}
                >
                  {item.name}
                </h4>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* SUSTAINABILITY */}
      <Section id="sustainability" style={{ padding: '96px 0', background: GREEN, color: '#fff', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ maxWidth: 720 }}>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: PRIMARY,
                fontFamily: 'Oswald, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: 16,
              }}
            >
              <Leaf size={16} /> Environmental Impact
            </p>
            <h2
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                marginBottom: 40,
              }}
            >
              Building a Circular
              <br />
              Pallet Economy
            </h2>
            <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                'Recover pallets from supply chain endpoints',
                'Refurbish damaged units to full strength',
                'Manufacture replacement pallets sustainably',
                'Recycle unusable timber into secondary products',
                'Divert industrial wood waste from landfill',
              ].map((point, i) => (
                <StaggerItem
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 18, fontWeight: 500 }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: PRIMARY,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: '#fff',
                    }}
                  >
                    <ArrowRight size={16} />
                  </div>
                  {point}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Section>

      {/* VALUE ADDED SERVICES */}
      <Section style={{ padding: '96px 0', background: '#F8F4EF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            Value Added Services
          </h2>
          <div style={{ width: 64, height: 6, background: PRIMARY, margin: '0 auto 16px' }} />
          <p style={{ color: '#666', marginBottom: 64, lineHeight: 1.6 }}>
            Beyond physical assets, we offer strategic services to optimize your supply chain logistics.
          </p>
          <StaggerContainer className="ksk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              {
                icon: MapPin,
                title: 'Asset Recovery',
                desc: 'Dedicated teams to locate, negotiate, and retrieve pallets from unauthorized locations.',
              },
              {
                icon: RefreshCw,
                title: 'Reverse Logistics',
                desc: 'Scheduled collection routes integrated with your delivery patterns for maximum efficiency.',
              },
              {
                icon: ScanLine,
                title: 'RFID & Tracking',
                desc: 'Implement tracking technologies for high-value and custom pallet fleets.',
              },
              {
                icon: BarChart3,
                title: 'Asset Reporting',
                desc: 'Detailed analytics on recovery rates, fleet losses, damages, and utilization metrics.',
              },
            ].map((s) => (
              <StaggerItem
                key={s.title}
                className="ksk-card-hover"
                style={{ padding: 32, border: '1px solid #ddd', background: '#fff', textAlign: 'left' }}
              >
                <div style={{ marginBottom: 20, color: PRIMARY }}>
                  <s.icon size={30} />
                </div>
                <h3
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" style={{ padding: '96px 0', background: FOREGROUND, color: '#fff', borderTop: `8px solid ${PRIMARY}` }}>
        <div
          className="ksk-contact-grid"
          style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              Partner With Us
            </h2>
            <div style={{ width: 96, height: 8, background: PRIMARY, marginBottom: 32 }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, marginBottom: 48, lineHeight: 1.7 }}>
              Ready to optimize your pallet fleet? Contact our team to discuss custom manufacturing,
              recovery, or lifecycle management solutions.
            </p>
            {[
              {
                icon: MapPin,
                label: 'Headquarters',
                value: 'House no. 474, Khunotswane\nMadibana section, 2883',
              },
              { icon: Phone, label: 'Direct Line', value: '064 601 6462', href: 'tel:0646016462' },
              { icon: Mail, label: 'Email', value: 'kakesky1@gmail.com', href: 'mailto:kakesky1@gmail.com' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: `${PRIMARY}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: PRIMARY,
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={20} />
                </div>
                <div>
                  <div
                    style={{
                      color: PRIMARY,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        color: '#fff',
                        fontSize: 18,
                        fontFamily: 'Oswald, sans-serif',
                        letterSpacing: '0.05em',
                        textDecoration: 'none',
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, whiteSpace: 'pre-line' }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#F8F4EF', padding: 48, color: FOREGROUND }}>
            <h3
              style={{
                fontFamily: 'Oswald, sans-serif',
                textTransform: 'uppercase',
                fontSize: 22,
                marginBottom: 32,
              }}
            >
              Send an Inquiry
            </h3>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer logoSrc={logoSrc} />
    </div>
  );
}

/* --- Contact form (kept in-file to mirror the original single-page layout) --- */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('fullName') as HTMLInputElement)?.value ?? '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '';

    // No backend here — open the visitor's mail client pre-filled.
    const subject = encodeURIComponent(`Pallet inquiry from ${name || 'website visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:kakesky1@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#666',
    marginBottom: 6,
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <label htmlFor="fullName" style={labelStyle}>
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="John Doe"
          style={{ width: '100%', height: 48, border: '1px solid #ccc', background: '#fff', padding: '0 16px', fontSize: 15, outline: 'none' }}
        />
      </div>
      <div>
        <label htmlFor="email" style={labelStyle}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          style={{ width: '100%', height: 48, border: '1px solid #ccc', background: '#fff', padding: '0 16px', fontSize: 15, outline: 'none' }}
        />
      </div>
      <div>
        <label htmlFor="message" style={labelStyle}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="I need a quote for pallet recovery..."
          style={{ width: '100%', border: '1px solid #ccc', background: '#fff', padding: '12px 16px', fontSize: 15, resize: 'none', outline: 'none', fontFamily: 'inherit' }}
        />
      </div>
      <button
        type="submit"
        style={{
          background: PRIMARY,
          color: '#fff',
          border: 'none',
          height: 56,
          fontFamily: 'Oswald, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: 16,
          cursor: 'pointer',
          marginTop: 8,
        }}
      >
        {submitted ? 'Opening your mail app…' : 'Send Message'}
      </button>
    </form>
  );
}

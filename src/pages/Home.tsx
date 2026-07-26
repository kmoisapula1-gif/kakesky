import { useState } from 'react';
import { motion } from 'framer-motion';
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
  MessageCircle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Wheat,
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
const WHATSAPP_URL = "https://wa.me/27646016462?text=Hi%20Kake%20Sky%2C%20I'd%20like%20a%20quote%20for%20pallet%20services.";

export default function Home() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ background: '#F8F4EF', overflowX: 'hidden' }}>
      <a href="#home" className="ksk-skip-link">
        Skip to content
      </a>
      <Navbar logoSrc={logoSrc} />

      <main>
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
              North West's Trusted Pallet Partner
            </div>
            <h1
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(2.75rem, 7vw, 6rem)',
                lineHeight: 0.95,
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              RELIABLE PALLET
              <br />
              <span style={{ color: PRIMARY }}>
                RECOVERY
                <br />
                RECYCLING
              </span>
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
              Reduce pallet costs and improve supply chain efficiency with full-cycle manufacturing,
              refurbishment, recovery and recycling — built for mines, warehouses, agriculture and logistics
              across North West, South Africa.
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
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  padding: '16px 24px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 16,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <Hero3D />
            <div
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {[
                { icon: MapPin, text: 'Based in North West, South Africa' },
                { icon: Clock, text: 'Fast collection & turnaround times' },
                { icon: ShieldCheck, text: 'Industrial-grade, reliable service' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff', fontSize: 14 }}>
                  <item.icon size={18} color={PRIMARY} style={{ flexShrink: 0 }} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: '#141414', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className="ksk-grid-4"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '28px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
          }}
        >
          {[
            { icon: MapPin, text: 'Local North West Business' },
            { icon: Clock, text: 'Fast Response & Turnaround' },
            { icon: Leaf, text: 'Sustainable Operations' },
            { icon: CheckCircle2, text: 'Industrial Expertise' },
          ].map((item) => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.85)' }}>
              <item.icon size={20} color={PRIMARY} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

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
            Complete Pallet Lifecycle Solutions
          </h2>
          <div style={{ width: 96, height: 8, background: PRIMARY, marginBottom: 24 }} />
          <p style={{ fontSize: 18, color: '#666', marginBottom: 64, maxWidth: 640, lineHeight: 1.6 }}>
            From manufacturing and refurbishment to collection and recycling, we help businesses reduce
            pallet costs, improve availability, and support sustainable operations.
          </p>
          <StaggerContainer className="ksk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {[
              {
                icon: Factory,
                iconClass: 'ksk-icon-factory',
                title: 'New Pallet Manufacturing',
                points: [
                  'Custom-built pallets to spec',
                  'Mining, construction & FMCG designs',
                  'Industrial-grade timber',
                ],
              },
              {
                icon: Wrench,
                iconClass: 'ksk-icon-wrench',
                title: 'Pallet Refurbishment',
                points: [
                  'Rigorous grading & repair',
                  'Damaged units restored to spec',
                  'Extends fleet lifespan',
                ],
              },
              {
                icon: Truck,
                iconClass: 'ksk-icon-truck',
                title: 'Recovery & Collection',
                points: [
                  'Scheduled site collections',
                  'Retail & distribution recovery',
                  'Returns pallets to circulation',
                ],
              },
              {
                icon: Recycle,
                iconClass: 'ksk-icon-recycle',
                title: 'Recycling & Lifecycle',
                points: [
                  'End-of-life timber recycling',
                  'Landfill diversion',
                  'Closed-loop pallet economy',
                ],
              },
            ].map((s) => (
              <StaggerItem
                key={s.title}
                className="ksk-card-hover ksk-service-card"
                style={{ background: '#fff', padding: 40, position: 'relative', overflow: 'hidden' }}
              >
                <div
                  className={`ksk-service-icon ${s.iconClass}`}
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
                    fontSize: 18,
                    marginBottom: 16,
                  }}
                >
                  {s.title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.points.map((point) => (
                    <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: '#666', fontSize: 14, lineHeight: 1.5 }}>
                      <CheckCircle2 size={16} color={PRIMARY} style={{ flexShrink: 0, marginTop: 2 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div
            style={{
              marginTop: 56,
              paddingTop: 40,
              borderTop: '1px solid #ddd',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 32,
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
              {['Cost Reduction', 'Sustainable Operations', 'Reliable Collection', 'Custom Solutions'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: FOREGROUND }}>
                  <CheckCircle2 size={16} color={PRIMARY} />
                  {item}
                </div>
              ))}
            </div>
            <button
              className="ksk-full-width-mobile"
              onClick={() => scrollTo('#contact')}
              style={{
                background: PRIMARY,
                color: '#fff',
                border: 'none',
                padding: '16px 32px',
                fontFamily: 'Oswald, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: 15,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                whiteSpace: 'nowrap',
              }}
            >
              Request a Quote <ArrowRight size={16} />
            </button>
          </div>
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
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, maxWidth: 620, margin: '0 auto 64px', lineHeight: 1.6 }}>
            From manufacturing through recovery, repair and recycling, our closed-loop process extends
            pallet lifespan, reduces costs, and keeps your fleet operational.
          </p>
          <StaggerContainer
            className="ksk-grid-6"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 24, position: 'relative' }}
          >
            <motion.div
              className="ksk-lifecycle-connector"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            />
            {[
              { step: '01', title: 'Manufacture', desc: 'Produce new units', icon: Factory, iconClass: 'ksk-icon-lc-factory' },
              { step: '02', title: 'Deploy', desc: 'Enter active circulation', icon: PackageCheck, iconClass: 'ksk-icon-lc-deploy' },
              { step: '03', title: 'Track', desc: 'Monitor fleet location', icon: Radar, iconClass: 'ksk-icon-lc-track' },
              { step: '04', title: 'Recover', desc: 'Retrieve assets from sites', icon: Truck, iconClass: 'ksk-icon-lc-truck' },
              { step: '05', title: 'Repair', desc: 'Grade and fix damages', icon: Wrench, iconClass: 'ksk-icon-lc-wrench' },
              { step: '06', title: 'Recycle', desc: 'Process end-of-life wood', icon: Recycle, iconClass: 'ksk-icon-lc-recycle' },
            ].map((item) => (
              <StaggerItem
                key={item.step}
                className="ksk-lifecycle-item"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <div
                  className={`ksk-lifecycle-icon ${item.iconClass}`}
                  style={{
                    width: 72,
                    height: 72,
                    background: FOREGROUND,
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

          <div
            style={{
              marginTop: 56,
              paddingTop: 40,
              borderTop: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
            }}
          >
            {['Reduce replacement costs', 'Extend asset lifespan', 'Improve fleet visibility', 'Support sustainability goals'].map(
              (item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600 }}>
                  <CheckCircle2 size={16} color={PRIMARY} />
                  {item}
                </div>
              ),
            )}
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ fontSize: 18, marginBottom: 24, color: 'rgba(255,255,255,0.85)' }}>
              Ready to optimize your pallet fleet?
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                className="ksk-full-width-mobile"
                onClick={() => scrollTo('#contact')}
                style={{
                  background: PRIMARY,
                  color: '#fff',
                  border: 'none',
                  padding: '16px 32px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 15,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Request a Quote <ArrowRight size={16} />
              </button>
              <button
                className="ksk-full-width-mobile"
                onClick={() => scrollTo('#contact')}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '1px solid #fff',
                  padding: '16px 32px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 15,
                  cursor: 'pointer',
                }}
              >
                Schedule Collection
              </button>
            </div>
          </div>
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
            Trusted Across South Africa's Industrial Sectors
          </h2>
          <div style={{ width: 96, height: 8, background: PRIMARY, marginBottom: 24 }} />
          <p style={{ fontSize: 18, color: '#666', marginBottom: 56, maxWidth: 700, lineHeight: 1.6 }}>
            Supporting mining, construction, logistics, warehousing, agriculture and manufacturing
            businesses with reliable pallet manufacturing, recovery, refurbishment and recycling solutions.
          </p>
          <StaggerContainer className="ksk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              {
                name: 'Mining',
                icon: Pickaxe,
                iconClass: 'ksk-icon-ind-mining',
                desc: 'Heavy-duty pallet solutions built for demanding mining operations.',
              },
              {
                name: 'Cement',
                icon: Building2,
                iconClass: 'ksk-icon-ind-cement',
                desc: 'Durable pallets engineered for cement and bulk-material handling.',
              },
              {
                name: 'Construction',
                icon: HardHat,
                iconClass: 'ksk-icon-ind-construction',
                desc: 'Reliable pallet recovery for construction and building supply chains.',
              },
              {
                name: 'FMCG',
                icon: ShoppingCart,
                iconClass: 'ksk-icon-ind-fmcg',
                desc: 'Fast-turnaround pallet supply for high-volume FMCG distribution.',
              },
              {
                name: 'Warehousing',
                icon: Warehouse,
                iconClass: 'ksk-icon-ind-warehousing',
                desc: 'Consistent pallet availability to keep warehouse operations moving.',
              },
              {
                name: 'Logistics',
                icon: Truck,
                iconClass: 'ksk-icon-ind-logistics',
                desc: 'Scheduled recovery and collection integrated with your delivery routes.',
              },
              {
                name: 'Retail Distribution',
                icon: Store,
                iconClass: 'ksk-icon-ind-retail',
                desc: 'Pallet recovery from retail nodes and distribution centers.',
              },
              {
                name: 'Agriculture',
                icon: Wheat,
                iconClass: 'ksk-icon-ind-agriculture',
                desc: 'Durable pallets built for farm, produce and agricultural supply chains.',
              },
            ].map((item) => (
              <StaggerItem
                key={item.name}
                className="ksk-card-hover ksk-industry-card"
                style={{ padding: '32px 24px', textAlign: 'left', background: '#fff' }}
              >
                <div
                  className={`ksk-industry-icon ${item.iconClass}`}
                  style={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    color: PRIMARY,
                  }}
                >
                  <item.icon size={30} />
                </div>
                <h4
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontSize: 15,
                    marginBottom: 8,
                  }}
                >
                  {item.name}
                </h4>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                className="ksk-full-width-mobile"
                onClick={() => scrollTo('#contact')}
                style={{
                  background: PRIMARY,
                  color: '#fff',
                  border: 'none',
                  padding: '16px 32px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 15,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Request a Quote <ArrowRight size={16} />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ksk-full-width-mobile"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  padding: '16px 24px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 15,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* SUSTAINABILITY */}
      <Section id="sustainability" style={{ padding: '96px 0', background: GREEN, color: '#fff', position: 'relative' }}>
        <div
          className="ksk-sustainability-grid"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 32px',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div>
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
                marginBottom: 24,
              }}
            >
              Building a Circular
              <br />
              Pallet Economy
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', marginBottom: 32, maxWidth: 480, lineHeight: 1.7 }}>
              Every pallet we recover is an asset kept out of landfill. Our closed-loop process extends
              pallet lifespan, cuts replacement costs, and supports sustainable supply chains across North
              West.
            </p>
            <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {[
                'Recover pallets from supply chain endpoints',
                'Refurbish damaged units to full strength',
                'Manufacture replacement pallets sustainably',
                'Recycle unusable timber into secondary products',
                'Divert industrial wood waste from landfill',
              ].map((point, i) => (
                <StaggerItem
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 17, fontWeight: 500 }}
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
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                className="ksk-full-width-mobile"
                onClick={() => scrollTo('#contact')}
                style={{
                  background: PRIMARY,
                  color: '#fff',
                  border: 'none',
                  padding: '16px 32px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 15,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Request a Quote <ArrowRight size={16} />
              </button>
              <button
                className="ksk-full-width-mobile"
                onClick={() => scrollTo('#contact')}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.5)',
                  padding: '16px 32px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 15,
                  cursor: 'pointer',
                }}
              >
                Schedule Collection
              </button>
            </div>
          </div>

          {/* Circular lifecycle diagram */}
          <div className="ksk-econ-diagram" style={{ position: 'relative', width: '100%', maxWidth: 380, aspectRatio: '1 / 1', margin: '0 auto' }}>
            <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
              <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
              <motion.circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke={PRIMARY}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
              />
              {[45, 135, 225, 315].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const x = 200 + 160 * Math.sin(rad);
                const y = 200 - 160 * Math.cos(rad);
                return (
                  <motion.g
                    key={deg}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    transform={`translate(${x}, ${y}) rotate(${deg})`}
                  >
                    <path d="M -8 -6 L 8 0 L -8 6 Z" fill={PRIMARY} />
                  </motion.g>
                );
              })}
            </svg>
            <StaggerContainer style={{ position: 'absolute', inset: 0 }}>
              {[
                { label: 'Recover', icon: Truck, iconClass: 'ksk-icon-econ-recover', top: '10%', left: '50%' },
                { label: 'Refurbish', icon: Wrench, iconClass: 'ksk-icon-econ-refurbish', top: '50%', left: '90%' },
                { label: 'Redeploy', icon: PackageCheck, iconClass: 'ksk-icon-econ-redeploy', top: '90%', left: '50%' },
                { label: 'Recycle', icon: Recycle, iconClass: 'ksk-icon-econ-recycle', top: '50%', left: '10%' },
              ].map((node) => (
                // Centering lives on this plain div's transform. StaggerItem
                // is a motion.div that drives its own animated transform
                // (translateY) for the fade-up reveal — putting the
                // translate(-50%,-50%) centering on that element instead
                // gets silently overwritten once framer-motion sets its
                // resting-state transform.
                <div
                  key={node.label}
                  style={{
                    position: 'absolute',
                    top: node.top,
                    left: node.left,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <StaggerItem
                    className="ksk-econ-item"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
                  >
                    <div
                      className={`ksk-econ-icon ${node.iconClass}`}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: FOREGROUND,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: PRIMARY,
                      }}
                    >
                      <node.icon size={26} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 12,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {node.label}
                    </span>
                  </StaggerItem>
                </div>
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
            Beyond Pallet Recovery
          </h2>
          <div style={{ width: 64, height: 6, background: PRIMARY, margin: '0 auto 16px' }} />
          <p style={{ color: '#666', marginBottom: 56, lineHeight: 1.6, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Strategic services that give you visibility, control and efficiency across your entire pallet
            fleet — reducing losses and cutting operating costs.
          </p>
          <StaggerContainer className="ksk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              {
                icon: MapPin,
                iconClass: 'ksk-icon-vas-recovery',
                title: 'Asset Recovery',
                tagline: 'Locate and recover pallets from unauthorized locations.',
                points: ['Dedicated recovery teams', 'Site & retail node tracing', 'Reduced asset shrinkage'],
                featured: false,
              },
              {
                icon: RefreshCw,
                iconClass: 'ksk-icon-vas-reverse',
                title: 'Reverse Logistics',
                tagline: 'Collection routes built around your delivery patterns.',
                points: ['Scheduled pickup routes', 'Synced with your logistics', 'Lower collection costs'],
                featured: false,
              },
              {
                icon: ScanLine,
                iconClass: 'ksk-icon-vas-rfid',
                title: 'RFID & Tracking',
                tagline: 'Real-time visibility into your pallet fleet.',
                points: ['Live asset tracking', 'Location visibility', 'Reduced losses'],
                featured: true,
              },
              {
                icon: BarChart3,
                iconClass: 'ksk-icon-vas-reporting',
                title: 'Asset Reporting',
                tagline: 'Clear reporting on fleet performance and losses.',
                points: ['Recovery rate tracking', 'Damage & utilization data', 'Data-backed decisions'],
                featured: false,
              },
            ].map((s) => (
              <StaggerItem
                key={s.title}
                className={`ksk-card-hover ksk-vas-card ${s.featured ? 'ksk-vas-featured' : ''}`}
                style={{
                  padding: 32,
                  background: s.featured ? FOREGROUND : '#fff',
                  color: s.featured ? '#fff' : FOREGROUND,
                  textAlign: 'left',
                  position: 'relative',
                }}
              >
                {s.featured && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      background: PRIMARY,
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                    }}
                  >
                    Advanced Tech
                  </span>
                )}
                <div
                  className={`ksk-vas-icon ${s.iconClass}`}
                  style={{ marginBottom: 20, color: PRIMARY, position: 'relative', width: 30, height: 30 }}
                >
                  <s.icon size={30} />
                </div>
                <h3
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 8,
                    fontSize: 17,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: s.featured ? 'rgba(255,255,255,0.75)' : '#666',
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {s.tagline}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.points.map((point) => (
                    <li
                      key={point}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        fontSize: 13,
                        color: s.featured ? 'rgba(255,255,255,0.85)' : '#666',
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle2 size={14} color={PRIMARY} style={{ flexShrink: 0, marginTop: 2 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div
            style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: '1px solid #ddd',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 24,
            }}
          >
            {['Improve Recovery Rates', 'Reduce Asset Losses', 'Increase Fleet Visibility', 'Lower Operating Costs'].map(
              (item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600 }}>
                  <CheckCircle2 size={16} color={PRIMARY} />
                  {item}
                </div>
              ),
            )}
          </div>

          <div style={{ marginTop: 48 }}>
            <p style={{ fontSize: 18, marginBottom: 24, color: '#333' }}>
              Need a smarter pallet management strategy?
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                className="ksk-full-width-mobile"
                onClick={() => scrollTo('#contact')}
                style={{
                  background: PRIMARY,
                  color: '#fff',
                  border: 'none',
                  padding: '16px 32px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 15,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Request a Quote <ArrowRight size={16} />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ksk-full-width-mobile"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  padding: '16px 24px',
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 15,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={16} /> Speak to a Specialist
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" style={{ padding: '96px 0', background: FOREGROUND, color: '#fff', borderTop: `8px solid ${PRIMARY}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          {/* Trust strip */}
          <div
            className="ksk-grid-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
              paddingBottom: 40,
              marginBottom: 40,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {['Fast Response Times', 'North West Based', 'Industrial Specialists', 'Sustainable Solutions'].map(
              (item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600 }}>
                  <CheckCircle2 size={16} color={PRIMARY} style={{ flexShrink: 0 }} />
                  {item}
                </div>
              ),
            )}
          </div>

          <div className="ksk-contact-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 64 }}>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, marginBottom: 32, lineHeight: 1.7 }}>
                Ready to optimize your pallet fleet? Contact our team to discuss custom manufacturing,
                recovery, or lifecycle management solutions.
              </p>

              <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
                <a
                  href="tel:0646016462"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff',
                    padding: '12px 20px',
                    fontFamily: 'Oswald, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: 13,
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={15} /> Call Now
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#25D366',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 20px',
                    fontFamily: 'Oswald, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: 13,
                    textDecoration: 'none',
                  }}
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>

              {[
                {
                  icon: MapPin,
                  label: 'Headquarters',
                  value: 'House no. 474, Khunotswane\nMadibana section, 2883',
                },
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

              <iframe
                title="Kake Sky Solutions location"
                src="https://www.google.com/maps?q=Khunotswane,Madibeng,North+West,South+Africa&output=embed"
                style={{ width: '100%', height: 200, border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div style={{ background: '#F8F4EF', padding: 48, color: FOREGROUND }}>
              <h3
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  textTransform: 'uppercase',
                  fontSize: 22,
                  marginBottom: 8,
                }}
              >
                Send an Inquiry
              </h3>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 28 }}>
                Tell us what you need and we'll get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
      </main>

      <Footer logoSrc={logoSrc} />

      {/* Sticky mobile CTA bar — hidden on desktop via CSS. Floating pill
          with three thumb-friendly actions; Quote is visually primary. */}
      <div className="ksk-mobile-cta-bar">
        <a href="tel:0646016462" className="ksk-mobile-cta-btn">
          <Phone size={18} />
          <span>Call</span>
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ksk-mobile-cta-btn">
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
        <button onClick={() => scrollTo('#contact')} className="ksk-mobile-cta-btn ksk-mobile-cta-primary">
          <ArrowRight size={18} />
          <span>Quote</span>
        </button>
      </div>
    </div>
  );
}

/* --- Contact form (kept in-file to mirror the original single-page layout) --- */
const INQUIRY_TYPES = ['Quote Request', 'Collection Request', 'Lifecycle Consultation', 'General Inquiry'];
const INDUSTRY_OPTIONS = [
  'Mining',
  'Cement',
  'Construction',
  'FMCG',
  'Warehousing',
  'Logistics',
  'Retail Distribution',
  'Agriculture',
];

// Floating label: the label sits where a placeholder normally would and
// floats up once the field is focused or filled. Uses the CSS
// :placeholder-shown trick, which needs *some* placeholder attribute
// present (its text is never actually shown — the label covers the same
// spot, so real example text would overlap it).
function FloatingField({
  as = 'input',
  id,
  name,
  type,
  label,
  rows,
}: {
  as?: 'input' | 'textarea';
  id: string;
  name: string;
  type?: string;
  label: string;
  rows?: number;
}) {
  const shared = { id, name, required: true, placeholder: ' ', className: 'ksk-float-input' };
  return (
    <div className="ksk-float-field">
      {as === 'textarea' ? (
        <textarea {...shared} rows={rows ?? 4} />
      ) : (
        <input {...shared} type={type ?? 'text'} />
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

function ContactForm() {
  const [inquiryType, setInquiryType] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('fullName') as HTMLInputElement)?.value ?? '';
    const company = (form.elements.namedItem('company') as HTMLInputElement)?.value ?? '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? '';
    const industry = (form.elements.namedItem('industry') as HTMLSelectElement)?.value ?? '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '';

    // No backend here — open the visitor's mail client pre-filled.
    const subject = encodeURIComponent(`${inquiryType ?? 'Inquiry'} from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${company ? ` (${company})` : ''}\n${email}${phone ? `\n${phone}` : ''}${
        industry ? `\nIndustry: ${industry}` : ''
      }`,
    );
    window.location.href = `mailto:kakesky1@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', padding: '32px 8px' }}
      >
        <CheckCircle2 size={48} color={PRIMARY} style={{ margin: '0 auto 16px' }} />
        <h4 style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', fontSize: 20, marginBottom: 8 }}>
          Inquiry Received
        </h4>
        <p style={{ color: '#666', fontSize: 15 }}>
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            display: 'block',
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#666',
            marginBottom: 10,
          }}
        >
          What do you need?
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {INQUIRY_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setInquiryType(type)}
              style={{
                textAlign: 'left',
                padding: '12px 14px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                background: inquiryType === type ? PRIMARY : '#fff',
                color: inquiryType === type ? '#fff' : FOREGROUND,
                border: `1px solid ${inquiryType === type ? PRIMARY : '#ccc'}`,
                transition: 'all 0.2s ease',
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {inquiryType && (
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
        >
          <div className="ksk-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <FloatingField id="fullName" name="fullName" label="Full Name" />
            <FloatingField id="company" name="company" label="Company" />
          </div>
          <div className="ksk-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <FloatingField id="email" name="email" type="email" label="Email Address" />
            <FloatingField id="phone" name="phone" type="tel" label="Phone Number" />
          </div>
          <div>
            <label
              htmlFor="industry"
              style={{
                display: 'block',
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#666',
                marginBottom: 6,
              }}
            >
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              required
              defaultValue=""
              style={{
                width: '100%',
                height: 48,
                border: '1px solid #ccc',
                background: '#fff',
                padding: '0 16px',
                fontSize: 15,
                outline: 'none',
                fontFamily: 'inherit',
                color: FOREGROUND,
              }}
            >
              <option value="" disabled>
                Select your industry
              </option>
              {INDUSTRY_OPTIONS.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
          <FloatingField as="textarea" id="message" name="message" label="How can we help?" rows={4} />
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
            Send Message
          </button>
        </motion.form>
      )}
    </div>
  );
}

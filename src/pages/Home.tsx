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
                style={{ padding: '32px 16px', textAlign: 'center', background: '#fff' }}
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
                style={{ padding: 32, background: '#fff', textAlign: 'left' }}
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
      </main>

      <Footer logoSrc={logoSrc} />

      {/* Sticky mobile CTA bar — hidden on desktop via CSS */}
      <div className="ksk-mobile-cta-bar">
        <button
          onClick={() => scrollTo('#contact')}
          style={{
            flex: 1,
            background: PRIMARY,
            color: '#fff',
            border: 'none',
            padding: '14px 12px',
            fontFamily: 'Oswald, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          Request a Quote
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            background: '#25D366',
            color: '#fff',
            border: 'none',
            padding: '14px 12px',
            fontFamily: 'Oswald, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontSize: 14,
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
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

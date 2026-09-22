import { useState } from 'react'
import './App.css'

type TemplateKey = 'bureau-nine' | 'operator-01' | 'ethan-clark' | 'campione' | 'porta'
type Template = { key: TemplateKey; name: string; label: string; description: string; accent: string; background: string; image: string; features: string[] }

const templates: Template[] = [
  { key: 'bureau-nine', name: 'Bureau Nine', label: 'Minimal creative agency', description: 'Quietly confident digital identities and portfolio experiences for studios that let the work speak.', accent: '#d7ef5a', background: '#15221b', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1800&q=90', features: ['CMS case studies', 'About story', 'Direct contact'] },
  { key: 'operator-01', name: 'Operator-01', label: 'Unique portfolio', description: 'A precise seven-column system for creators who want their work to feel considered, responsive, and alive.', accent: '#ff7048', background: '#e8e4da', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=90', features: ['Interactive homepage', 'Smooth scrolling', 'Responsive images'] },
  { key: 'ethan-clark', name: 'Ethan Clark', label: 'Minimal designer portfolio', description: 'Bold type, generous space, and expressive image movement for a portfolio that feels unmistakably yours.', accent: '#d6ff00', background: '#0a0a0a', image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1800&q=90', features: ['Cursor image trail', 'Blob reveal', 'Category filtering'] },
  { key: 'campione', name: 'Campione', label: 'Gen Z photography portfolio', description: 'A bright, impossible-to-ignore visual identity for photographers, artists, and creative directors.', accent: '#f55bd1', background: '#e6f546', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=90', features: ['Project details', 'Smooth animations', 'SEO-ready pages'] },
  { key: 'porta', name: 'Porta', label: 'Minimalist premium portfolio', description: 'A stripped-back studio home for people building the visual culture of what comes next.', accent: '#ff3d1f', background: '#050505', image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=1800&q=90', features: ['Video and photo support', 'CMS projects', 'Responsive layout'] },
]

const work = [
  { title: 'Form / 01', category: 'Brand identity', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=90' },
  { title: 'Morrow / 02', category: 'Digital', image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1200&q=90' },
  { title: 'Arc House / 03', category: 'Art direction', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=90' },
]

function getTemplateKey() {
  const value = window.location.pathname.split('/').filter(Boolean)[0] || window.location.hash.replace('#/', '')
  return templates.some((template) => template.key === value) ? value as TemplateKey : null
}

function Directory() {
  return <main className="directory"><p className="eyebrow">PORTA STUDIO / TEMPLATE INDEX</p><h1>Five ways<br /><em>to make a mark.</em></h1><div className="directory-grid">{templates.map((template, index) => <a className="directory-card" href={`#/${template.key}`} key={template.key}><span>0{index + 1}</span><div><h2>{template.name}</h2><p>{template.label}</p></div><b>↗</b></a>)}</div><p className="directory-note">One repository. Five responsive creative systems.</p></main>
}

function TemplatePage({ template }: { template: Template }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Brand identity', 'Digital', 'Art direction']
  const filteredWork = filter === 'All' ? work : work.filter((item) => item.category === filter)
  return <div className="template-shell" style={{ '--accent': template.accent, '--template-bg': template.background } as React.CSSProperties}>
    <header className="template-nav"><a href="/" className="template-logo">{template.name}<sup>®</sup></a><button onClick={() => setMenuOpen(!menuOpen)} className="template-menu">{menuOpen ? 'Close' : 'Menu'} <span>↗</span></button>{menuOpen && <nav className="template-menu-panel"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>}</header>
    <section className="template-hero"><p className="eyebrow">{template.label} / AVAILABLE WORLDWIDE</p><h1>{template.name}<sup>®</sup></h1><p className="template-lead">{template.description}</p><a className="hero-link" href="#work">See projects <span>↘</span></a></section>
    <section className="template-image"><img src={template.image} alt={`${template.name} project preview`} /></section>
    <section className="template-intro" id="about"><p className="eyebrow">01 / APPROACH</p><h2>Design is a competitive advantage, not an afterthought.</h2><p className="body-copy">A flexible, editorial system for presenting thoughtful work with clarity, character, and a little bit of surprise.</p></section>
    <section className="template-work" id="work"><div className="work-heading"><p className="eyebrow">02 / SELECTED WORK</p><div className="filters">{filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div></div><div className="work-grid">{filteredWork.map((item, index) => <a className="work-card" href="#contact" key={item.title}><div><img src={item.image} alt={item.title} /><span>0{index + 1}</span></div><h3>{item.title}</h3><p>{item.category}</p></a>)}</div></section>
    <section className="feature-strip"><p className="eyebrow">03 / FEATURES</p><div>{template.features.map((feature, index) => <article key={feature}><span>0{index + 1}</span><h2>{feature}</h2><b>↗</b></article>)}</div></section>
    <footer id="contact" className="template-footer"><p className="eyebrow">HAVE A GOOD ONE?</p><h2>Let's make<br /><em>something</em> great.</h2><a href="mailto:hello@porta.studio" className="footer-link">Start a conversation ↗</a><div className="footer-meta"><a href="#">All templates</a><span>{template.name} / 2026</span></div></footer>
  </div>
}

function App() {
  const templateKey = getTemplateKey()
  const template = templates.find((item) => item.key === templateKey)
  return template ? <TemplatePage template={template} /> : <Directory />
}

export default App

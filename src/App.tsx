import { useState } from 'react'
import './App.css'

const projects = [
  { title: 'Arc House', type: 'Digital experience', year: '2025', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=90' },
  { title: 'Morrow', type: 'Brand identity', year: '2024', image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1800&q=90' },
  { title: 'Open Form', type: 'Art direction', year: '2024', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=90' },
]

const services = ['Design', 'Branding', 'AI', 'Web', 'Photo']
const faqs = ['What services do you offer?', 'How does your process work?', 'How long does a project typically take?', 'Do you work with early-stage startups?', 'Can you work with our existing team?']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="site-shell" id="top">
      <header className="nav-wrap">
        <a className="wordmark" href="#top">Porta<span>®</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">Menu</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      </header>
      <main>
        <section className="hero"><div><p className="eyebrow">INDEPENDENT DESIGN STUDIO / NYC + WORLDWIDE</p><h1>Porta Studio<span>®</span></h1><p className="hero-description">Design studio specializing in brand identity, web, and digital experiences.</p></div><div className="hero-foot"><a className="see-projects" href="#projects">( See Projects ) <span>↘</span></a><a className="circle-link" href="#projects">Explore<br />work <span>↘</span></a></div></section>
        <div className="ticker"><div>BRAND / DIGITAL / CULTURE / MOTION / BRAND / DIGITAL / CULTURE / MOTION /</div></div>
        <section className="intro section" id="about"><p className="eyebrow">01 / OUR APPROACH</p><h2>We partner with founders and creative teams who treat design as a competitive advantage, not an afterthought.</h2><a className="underline-link" href="#contact">More about Porta <span>↗</span></a></section>
        <section className="projects section" id="projects"><div className="section-label"><p className="eyebrow">02 / SELECTED WORK</p><a className="underline-link" href="#contact">All projects <span>↗</span></a></div><div className="project-list">{projects.map((project, index) => <a className="project" href="#contact" key={project.title}><div className="project-image"><img src={project.image} alt={project.title} /><span>0{index + 1}</span></div><div className="project-meta"><h3>{project.title}</h3><p>{project.type}</p><p>{project.year}</p></div></a>)}</div></section>
        <section className="services section"><p className="eyebrow">03 / WHAT WE DO</p><div className="service-list">{services.map((service, index) => <div className="service" key={service}><span>0{index + 1}</span><h2>{service}</h2><span>↗</span></div>)}</div></section>
        <section className="numbers section"><div><strong>10+</strong><p>Years of experience in high-end digital craftsmanship.</p></div><div><strong>80+</strong><p>Successful projects launched for clients worldwide.</p></div><div><strong>12</strong><p>International design awards and recognitions.</p></div></section>
        <section className="faq section"><p className="eyebrow">04 / FAQ</p><div className="faq-list">{faqs.map((faq, index) => <button className={openFaq === index ? 'faq-row open' : 'faq-row'} onClick={() => setOpenFaq(openFaq === index ? null : index)} key={faq}><span>{faq}</span><b>+</b>{openFaq === index && <p>Every project starts with a conversation. We shape the right collaboration around your goals, your team, and the work that needs to exist.</p>}</button>)}</div></section>
      </main>
      <footer id="contact"><div className="footer-head"><p className="eyebrow">HAVE A GOOD ONE?</p><h2>Let's make<br /><em>something</em> great.</h2><a className="circle-link light" href="mailto:hello@porta.studio">Get in touch <span>↗</span></a></div><div className="footer-bottom"><a className="wordmark" href="#top">Porta<span>®</span></a><p>New York / Available worldwide</p><div><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a></div></div></footer>
    </div>
  )
}

export default App

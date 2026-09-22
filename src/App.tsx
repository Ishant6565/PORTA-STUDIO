import './App.css'

type Site = {
  number: string
  name: string
  description: string
  url: string
}

const sites: Site[] = [
  { number: '01', name: 'Bureau Nine', description: 'Minimal creative agency and portfolio template.', url: 'https://bureaunine.framer.website/' },
  { number: '02', name: 'Operator-01', description: 'Unique portfolio template built around a flexible grid.', url: 'https://operator-template.framer.website/' },
  { number: '03', name: 'Ethan Clark', description: 'Minimal designer portfolio with expressive interactions.', url: 'https://ethanclark.framer.ai/' },
  { number: '04', name: 'Campione', description: 'Bold portfolio template for photographers and artists.', url: 'https://ovo-campione.framer.website/' },
  { number: '05', name: 'Porta', description: 'Minimalist premium portfolio for studios and creatives.', url: 'https://porta.framer.ai/' },
]

function App() {
  return (
    <main className="directory">
      <header className="directory-header">
        <p className="eyebrow">Framer collection / 2026</p>
        <span className="status">Five live websites <i /></span>
      </header>
      <section className="intro">
        <p className="eyebrow">Published Framer sites</p>
        <h1>Choose a<br /><em>website.</em></h1>
        <p className="intro-copy">Explore the five published Framer templates in this collection. Open any site to view the complete live experience.</p>
      </section>
      <section className="site-list" aria-label="Published Framer websites">
        {sites.map((site) => (
          <a className="site-row" href={site.url} target="_blank" rel="noreferrer" key={site.name}>
            <span className="site-number">{site.number}</span>
            <div className="site-info"><h2>{site.name}</h2><p>{site.description}</p></div>
            <span className="visit">Visit site <b>↗</b></span>
          </a>
        ))}
      </section>
      <footer><span>PORTA STUDIO</span><span>All sites open in a new tab</span></footer>
    </main>
  )
}

export default App

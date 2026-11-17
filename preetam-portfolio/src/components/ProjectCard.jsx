import { useState } from 'react'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
export default function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="glass card proj">
      <h3>{p.title}</h3>
      <p>{p.short}</p>
      <div className={'more' + (open ? ' open' : '')}>{p.more}</div>
      <div className="chips" style={{ marginBottom: 16 }}>{p.tech.map(t => <span className="chip" key={t}>{t}</span>)}</div>
      <div className="row">
        {p.github && <a className="btn sm" href={p.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>}
        {p.demo && <a className="btn sm primary" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live Demo</a>}
        <button className="btn sm" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Less' : 'More'} <ChevronDown size={15} style={{ transform: open ? 'rotate(180deg)' : 'none' }} /></button>
      </div>
    </article>
  )
}

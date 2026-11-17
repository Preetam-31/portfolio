import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
const items = ['About', 'Skills', 'Projects', 'Education', 'Achievements', 'Resume', 'Contact']
export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  return (
    <nav><div className="wrap">
      <a href="#home" className="logo">PK<span className="grad">.</span></a>
      <div className={'links' + (open ? ' open' : '')}>
        {items.map(i => <a key={i} href={'#' + i.toLowerCase()} onClick={() => setOpen(false)}>{i}</a>)}
      </div>
      <div className="row" style={{ gap: 8 }}>
        <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
        <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
    </div></nav>
  )
}

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'About', href: '#about' },
]

export default function Navbar({ onConnect }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between rounded-b-2xl backdrop-blur bg-slate-900/60 border-b border-white/10">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 ring-2 ring-white/10 shadow-lg" />
          <span className="text-white font-semibold tracking-tight">CS Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-200/80 hover:text-white transition">
              {n.label}
            </a>
          ))}
          <button onClick={onConnect} className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold shadow hover:shadow-cyan-500/20 transition">
            Connect
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl backdrop-blur bg-slate-900/70 border border-white/10 p-4 space-y-3">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-slate-200/80 hover:text-white">
              {n.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); onConnect(); }} className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold">
            Connect
          </button>
        </div>
      )}
    </header>
  )
}

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Consultation Request', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'portfolio' })
      })
      const data = await res.json()
      if (res.ok) setStatus('success')
      else setStatus(data?.detail || 'Something went wrong')
    } catch (e) {
      setStatus('Network error')
    }
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
            <h3 className="text-white text-2xl font-bold">Get in touch</h3>
            <p className="text-slate-300/90 mt-2">Tell us about your requirement and we'll respond within 24 hours.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white outline-none focus:border-cyan-400/60" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} />
                <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white outline-none focus:border-cyan-400/60" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} />
              </div>
              <input placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white outline-none focus:border-cyan-400/60" value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} />
              <textarea required placeholder="Your message" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white outline-none focus:border-cyan-400/60" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} />
              <button disabled={status==='loading'} className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold">
                {status==='loading' ? 'Sending...' : 'Send message'}
              </button>
              {status && status!=='loading' && (
                <p className={`text-sm mt-1 ${status==='success' ? 'text-green-400' : 'text-red-400'}`}>{status==='success' ? 'Thanks! We will contact you shortly.' : status}</p>
              )}
            </form>
          </div>

          <div className="rounded-2xl bg-slate-900/40 border border-white/10 p-8">
            <h3 className="text-white text-2xl font-bold">Why work with us</h3>
            <ul className="mt-4 space-y-3 text-slate-300/90">
              <li>• Expert Company Secretary with startup focus</li>
              <li>• Transparent, fixed-fee packages</li>
              <li>• Fast turnaround with e-sign workflows</li>
              <li>• Proactive compliance calendar & reminders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

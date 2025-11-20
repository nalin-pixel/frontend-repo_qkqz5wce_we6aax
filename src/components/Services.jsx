import { Building2, FileText, BadgeCheck, Globe, Layers, IdCard, PieChart, ShieldCheck, ReceiptText, Copyright } from 'lucide-react'
import { useEffect, useState } from 'react'

const ICONS = {
  building2: Building2,
  'file-text': FileText,
  'badge-check': BadgeCheck,
  globe: Globe,
  layers: Layers,
  'id-card': IdCard,
  'pie-chart': PieChart,
  'shield-check': ShieldCheck,
  receipt: ReceiptText,
  copyright: Copyright,
}

function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] || BadgeCheck
  return (
    <div className="group rounded-2xl bg-slate-900/60 border border-white/10 p-6 hover:border-cyan-400/40 transition relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-2xl" />
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 text-slate-900 flex items-center justify-center shadow">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{service.title}</h3>
          <p className="text-slate-300/90 mt-1 text-sm">{service.summary}</p>
          {service.starting_price && (
            <p className="text-cyan-300/90 mt-3 text-sm font-medium">Starts at ₹{service.starting_price}</p>
          )}
          {service.tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {service.tags.map((t) => (
                <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-slate-800/80 border border-white/10 text-slate-200/80">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/services`)
        const data = await res.json()
        setServices(data.data || [])
      } catch (e) {
        setServices([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-cyan-300/90 text-sm font-medium tracking-widest uppercase">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">What we offer</h2>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-40 rounded-2xl bg-slate-800/40 border border-white/10 animate-pulse" />
          ))}
          {!loading && services.map((s, i) => <ServiceCard key={i} service={s} />)}
        </div>
      </div>
    </section>
  )
}

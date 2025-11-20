import { useEffect, useState } from 'react'

function BlogCard({ post }) {
  return (
    <article className="group rounded-2xl bg-slate-900/60 border border-white/10 p-6 hover:border-cyan-400/40 transition h-full flex flex-col">
      <div className="flex-1">
        <p className="text-cyan-300/90 text-xs tracking-wider uppercase">Blog</p>
        <h3 className="text-white font-semibold text-xl mt-2">{post.title}</h3>
        <p className="text-slate-300/90 mt-2 text-sm">{post.excerpt}</p>
        {post.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-slate-800/80 border border-white/10 text-slate-200/80">{t}</span>
            ))}
          </div>
        )}
      </div>
      <a href={`#blog-${post.slug || post.title?.toLowerCase().replaceAll(' ', '-')}`}
        className="mt-6 inline-flex items-center gap-2 text-cyan-300 hover:text-white">Read more →</a>
    </article>
  )
}

export default function Blogs() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/blogs`)
        const data = await res.json()
        setPosts(data.data || [])
      } catch (e) {
        setPosts([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blogs" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-cyan-300/90 text-sm font-medium tracking-widest uppercase">Insights</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Latest blogs</h2>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 rounded-2xl bg-slate-800/40 border border-white/10 animate-pulse" />
          ))}
          {!loading && posts.map((p) => <BlogCard key={p.slug || p.title} post={p} />)}
        </div>
      </div>
    </section>
  )
}

import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionTitle from '../components/common/SectionTitle'
import { news, categoriesNews } from '../data/news'
import styles from '../styles/pages/Page.module.css'
import stylesNews from '../styles/pages/Novedades.module.css'

const formatDate = (d) => new Date(d).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function Novedades() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const filtered = useMemo(() => {
    let list = [...news].sort((a, b) => new Date(b.date) - new Date(a.date))
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.excerpt.toLowerCase().includes(q) ||
          n.tags?.some((t) => t.toLowerCase().includes(q))
      )
    }
    if (category) list = list.filter((n) => n.category === category)
    return list
  }, [search, category])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: 'Novedades' }]} />
        <header className={stylesNews.header}>
          <h1 className={stylesNews.title}>Novedades</h1>
          <p className={stylesNews.subtitle}>
            Noticias, comunicados y novedades de la gestión municipal.
          </p>
        </header>

        <div className={stylesNews.toolbar}>
          <input
            type="search"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={stylesNews.search}
            aria-label="Buscar novedades"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={stylesNews.select}
            aria-label="Filtrar por categoría"
          >
            <option value="">Todas las categorías</option>
            {categoriesNews.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <section className={stylesNews.section}>
          {filtered.length === 0 ? (
            <p className={stylesNews.empty}>No se encontraron novedades con los filtros aplicados.</p>
          ) : (
            <ul className={stylesNews.grid}>
              {filtered.map((item) => (
                <li key={item.id}>
                  <article className={stylesNews.card}>
                    <time className={stylesNews.date} dateTime={item.date}>
                      {formatDate(item.date)}
                    </time>
                    <h2 className={stylesNews.cardTitle}>
                      <Link to={`/novedades/${item.slug}`}>{item.title}</Link>
                    </h2>
                    <p className={stylesNews.excerpt}>{item.excerpt}</p>
                    {item.tags && item.tags.length > 0 && (
                      <div className={stylesNews.tags}>
                        {item.tags.map((tag) => (
                          <span key={tag} className={stylesNews.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link to={`/novedades/${item.slug}`} className={stylesNews.link}>
                      Leer más
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

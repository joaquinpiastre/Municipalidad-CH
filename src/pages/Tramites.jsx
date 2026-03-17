import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionTitle from '../components/common/SectionTitle'
import { tramites, categoriasTramites } from '../data/tramites'
import { SITE } from '../constants/site'
import styles from '../styles/pages/Page.module.css'
import stylesTram from '../styles/pages/Tramites.module.css'

export default function Tramites() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const filtered = useMemo(() => {
    let list = tramites
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q) ||
          (t.category && categoriasTramites.find((c) => c.id === t.category)?.name.toLowerCase().includes(q))
      )
    }
    if (category) list = list.filter((t) => t.category === category)
    return list
  }, [search, category])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: 'Trámites y Servicios' }]} />
        <header className={stylesTram.header}>
          <h1 className={stylesTram.title}>Trámites y Servicios</h1>
          <p className={stylesTram.subtitle}>
            Encontrá el trámite que necesitás. Muchos pueden realizarse desde la Oficina Virtual.
          </p>
        </header>

        <div className={stylesTram.toolbar}>
          <input
            type="search"
            placeholder="Buscar trámites..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={stylesTram.search}
            aria-label="Buscar trámites"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={stylesTram.select}
            aria-label="Filtrar por categoría"
          >
            <option value="">Todas las categorías</option>
            {categoriasTramites.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <section className={stylesTram.section}>
          {filtered.length === 0 ? (
            <p className={stylesTram.empty}>No se encontraron trámites con los filtros aplicados.</p>
          ) : (
            <ul className={stylesTram.grid}>
              {filtered.map((t) => (
                <li key={t.id}>
                  <Link to={`/tramites/${t.slug}`} className={stylesTram.card}>
                    <h3 className={stylesTram.cardTitle}>{t.title}</h3>
                    <p className={stylesTram.cardSummary}>{t.summary}</p>
                    {t.category && (
                      <span className={stylesTram.category}>
                        {categoriasTramites.find((c) => c.id === t.category)?.name}
                      </span>
                    )}
                    {t.oficinaVirtual && <span className={stylesTram.badge}>Oficina Virtual</span>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className={stylesTram.ctaBlock}>
          <p className={stylesTram.ctaText}>Realice pagos y consultas en línea.</p>
          <a
            href={SITE.oficinaVirtual}
            target="_blank"
            rel="noopener noreferrer"
            className={stylesTram.cta}
          >
            Ir a Oficina Virtual
          </a>
        </div>
      </div>
    </div>
  )
}

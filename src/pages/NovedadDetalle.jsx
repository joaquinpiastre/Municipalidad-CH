import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { news, categoriesNews } from '../data/news'
import styles from '../styles/pages/Page.module.css'
import stylesDet from '../styles/pages/NovedadDetalle.module.css'

const formatDate = (d) => new Date(d).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function NovedadDetalle() {
  const { slug } = useParams()
  const item = news.find((n) => n.slug === slug)

  useEffect(() => {
    if (item) document.title = `${item.title} | Novedades | Municipalidad de Chos Malal`
  }, [item])

  if (!item) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <Breadcrumbs items={[{ path: '/novedades', label: 'Novedades' }, { label: 'No encontrado' }]} />
          <p className={stylesDet.notFound}>No se encontró la novedad solicitada.</p>
          <Link to="/novedades">Volver a Novedades</Link>
        </div>
      </div>
    )
  }

  const categoryName = categoriesNews.find((c) => c.id === item.category)?.name

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { path: '/novedades', label: 'Novedades' },
            { label: item.title },
          ]}
        />
        <article className={stylesDet.article}>
          <header className={stylesDet.header}>
            {categoryName && <span className={stylesDet.category}>{categoryName}</span>}
            <h1 className={stylesDet.title}>{item.title}</h1>
            <time className={stylesDet.date} dateTime={item.date}>
              {formatDate(item.date)}
            </time>
          </header>
          <div className={stylesDet.body}>
            {item.body.split('\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {item.tags && item.tags.length > 0 && (
            <footer className={stylesDet.footer}>
              <span className={stylesDet.tagsLabel}>Etiquetas:</span>
              {item.tags.map((tag) => (
                <span key={tag} className={stylesDet.tag}>
                  {tag}
                </span>
              ))}
            </footer>
          )}
          <p className={stylesDet.back}>
            <Link to="/novedades">← Volver a Novedades</Link>
          </p>
        </article>
      </div>
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { tramites, categoriasTramites } from '../data/tramites'
import { SITE } from '../constants/site'
import styles from '../styles/pages/Page.module.css'
import stylesDet from '../styles/pages/TramiteDetalle.module.css'

export default function TramiteDetalle() {
  const { slug } = useParams()
  const tramite = tramites.find((t) => t.slug === slug)

  useEffect(() => {
    if (tramite) document.title = `${tramite.title} | Trámites | Municipalidad de Chos Malal`
  }, [tramite])

  if (!tramite) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <Breadcrumbs items={[{ path: '/tramites', label: 'Trámites' }, { label: 'No encontrado' }]} />
          <p className={stylesDet.notFound}>No se encontró el trámite solicitado.</p>
          <Link to="/tramites">Volver a Trámites</Link>
        </div>
      </div>
    )
  }

  const categoryName = tramite.category
    ? categoriasTramites.find((c) => c.id === tramite.category)?.name
    : null

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { path: '/tramites', label: 'Trámites' },
            { label: tramite.title },
          ]}
        />
        <article className={stylesDet.article}>
          <header className={stylesDet.header}>
            {categoryName && <span className={stylesDet.category}>{categoryName}</span>}
            <h1 className={stylesDet.title}>{tramite.title}</h1>
            <p className={stylesDet.summary}>{tramite.summary}</p>
          </header>

          <div className={stylesDet.body}>
            <p className={stylesDet.description}>{tramite.description}</p>

            <dl className={stylesDet.meta}>
              <dt>Área responsable</dt>
              <dd>{tramite.area}</dd>
              <dt>Modalidad</dt>
              <dd>{tramite.modalidad}</dd>
              <dt>Tiempo estimado</dt>
              <dd>{tramite.tiempoEstimado}</dd>
            </dl>

            {tramite.requisitos && tramite.requisitos.length > 0 && (
              <section className={stylesDet.block}>
                <h2 className={stylesDet.blockTitle}>Requisitos</h2>
                <ul>
                  {tramite.requisitos.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </section>
            )}

            {tramite.documentacion && tramite.documentacion.length > 0 && (
              <section className={stylesDet.block}>
                <h2 className={stylesDet.blockTitle}>Documentación</h2>
                <ul>
                  {tramite.documentacion.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </section>
            )}

            {tramite.pasos && tramite.pasos.length > 0 && (
              <section className={stylesDet.block}>
                <h2 className={stylesDet.blockTitle}>Pasos</h2>
                <ol>
                  {tramite.pasos.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ol>
              </section>
            )}

            <div className={stylesDet.actions}>
              {tramite.oficinaVirtual && (
                <a
                  href={SITE.oficinaVirtual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={stylesDet.ctaPrimary}
                >
                  Ir a Oficina Virtual
                </a>
              )}
              <a href={`mailto:${SITE.email}`} className={stylesDet.ctaSecondary}>
                Consultar: {SITE.email}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

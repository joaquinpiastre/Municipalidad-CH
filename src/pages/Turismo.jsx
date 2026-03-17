import { useEffect } from 'react'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionTitle from '../components/common/SectionTitle'
import { sitiosInteres, introTurismo } from '../data/tourism'
import { SITE } from '../constants/site'
import styles from '../styles/pages/Page.module.css'
import stylesTur from '../styles/pages/Turismo.module.css'

export default function Turismo() {
  useEffect(() => {
    document.title = 'Turismo | Municipalidad de Chos Malal'
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: 'Turismo' }]} />
        <header className={stylesTur.header}>
          <h1 className={stylesTur.title}>Turismo</h1>
          <p className={stylesTur.subtitle}>
            Chos Malal, Capital Histórica y Cultural del Neuquén. Descubrí patrimonio, cultura y naturaleza en el norte neuquino.
          </p>
        </header>

        <section className={stylesTur.section}>
          <h2 className={stylesTur.sectionTitle}>{introTurismo.title}</h2>
          <p className={stylesTur.intro}>{introTurismo.text}</p>
        </section>

        <section className={stylesTur.section}>
          <SectionTitle
            title="Qué hacer y sitios de interés"
            subtitle="Museos, edificios patrimoniales y espacios culturales para recorrer."
          />
          <ul className={stylesTur.grid}>
            {sitiosInteres.map((s) => (
              <li key={s.id}>
                <article className={stylesTur.card}>
                  <span className={stylesTur.category}>{s.category}</span>
                  <h3 className={stylesTur.cardTitle}>{s.name}</h3>
                  <p className={stylesTur.cardDesc}>{s.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className={stylesTur.section}>
          <SectionTitle title="Mapa turístico y entorno" />
          <div className={stylesTur.mapPlaceholder}>
            <p>
              [Placeholder: integrar mapa interactivo del casco histórico y puntos de interés. Chos Malal es puerta de entrada al norte neuquino y punto de partida para recorrer la Ruta 40, los ríos Neuquén y Curi Leuvú y el patrimonio natural y cultural de la región.]
            </p>
          </div>
        </section>

        <div className={stylesTur.ctaBlock}>
          <p className={stylesTur.ctaText}>
            Visité Chos Malal y descubrí la historia y la cultura del norte neuquino.
          </p>
          <p className={stylesTur.contact}>
            Para más información: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> o acercate a Belgrano 98.
          </p>
        </div>
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionTitle from '../components/common/SectionTitle'
import { intendente, areas } from '../data/government'
import styles from '../styles/pages/Page.module.css'
import stylesGov from '../styles/pages/Gobierno.module.css'

export default function Gobierno() {
  useEffect(() => {
    document.title = 'Gobierno | Municipalidad de Chos Malal'
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: 'Gobierno' }]} />
        <header className={stylesGov.header}>
          <h1 className={stylesGov.title}>Gobierno municipal</h1>
          <p className={stylesGov.subtitle}>Equipo de gobierno y estructura institucional al servicio del vecino.</p>
        </header>

        <section className={stylesGov.section} id="intendente">
          <SectionTitle title="Mensaje del Intendente" />
          <div className={stylesGov.intendenteCard}>
            <h2 className={stylesGov.intendenteName}>{intendente.name}</h2>
            <p className={stylesGov.intendenteRole}>{intendente.title}</p>
            <p className={stylesGov.message}>{intendente.message}</p>
            {intendente.bio && <p className={stylesGov.bio}>{intendente.bio}</p>}
          </div>
        </section>

        <section className={stylesGov.section} id="organigrama">
          <SectionTitle
            title="Organigrama municipal"
            subtitle="Secretarías y áreas que conforman la estructura de gobierno."
          />
        </section>

        <section className={stylesGov.section} id="areas">
          <h2 className={stylesGov.areasTitle}>Áreas de gobierno</h2>
          <ul className={stylesGov.areasGrid}>
            {areas.map((area) => (
              <li key={area.id}>
                <article className={stylesGov.areaCard}>
                  <h3 className={stylesGov.areaName}>{area.shortName}</h3>
                  <p className={stylesGov.areaDesc}>{area.description}</p>
                  <ul className={stylesGov.functions}>
                    {area.functions.slice(0, 3).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  {area.tramites && area.tramites.length > 0 && (
                    <p className={stylesGov.tramites}>
                      Trámites: {area.tramites.slice(0, 2).join(', ')}
                      {area.tramites.length > 2 && '…'}
                    </p>
                  )}
                  <p className={stylesGov.contactPlaceholder}>{area.contact}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

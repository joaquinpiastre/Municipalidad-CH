import { Link } from 'react-router-dom'
import { tramites } from '../../data/tramites'
import SectionTitle from '../common/SectionTitle'
import styles from '../../styles/home/HomeTramites.module.css'

const display = tramites.slice(0, 6)

export default function HomeTramites() {
  return (
    <section className={styles.section} aria-label="Trámites y servicios">
      <div className={styles.container}>
        <SectionTitle
          title="Trámites y Servicios"
          subtitle="Acceda a los trámites municipales más solicitados. Muchos pueden realizarse desde la Oficina Virtual."
        />
        <ul className={styles.grid}>
          {display.map((t) => (
            <li key={t.id}>
              <Link to={`/tramites/${t.slug}`} className={styles.card}>
                <h3 className={styles.title}>{t.title}</h3>
                <p className={styles.summary}>{t.summary}</p>
                {t.oficinaVirtual && (
                  <span className={styles.badge}>Disponible en Oficina Virtual</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.more}>
          <Link to="/tramites" className={styles.moreLink}>
            Ver todos los trámites
          </Link>
        </div>
      </div>
    </section>
  )
}

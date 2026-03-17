import { Link } from 'react-router-dom'
import { SITE } from '../../constants/site'
import SectionTitle from '../common/SectionTitle'
import styles from '../../styles/home/HomeContacto.module.css'

export default function HomeContacto() {
  return (
    <section className={styles.section} aria-label="Contacto y canales oficiales">
      <div className={styles.container}>
        <SectionTitle
          title="Contacto y canales oficiales"
          subtitle="Atención al vecino en sede y por vías digitales."
        />
        <div className={styles.grid}>
          <div className={styles.block}>
            <p className={styles.address}>{SITE.address}</p>
            <p className={styles.line}>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a>
            </p>
            <p className={styles.line}>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p className={styles.horario}>{SITE.horario}</p>
          </div>
          <div className={styles.actions}>
            <Link to="/contacto" className={styles.cta}>
              Ver contacto completo
            </Link>
            <a
              href={SITE.oficinaVirtual}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              Oficina Virtual
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

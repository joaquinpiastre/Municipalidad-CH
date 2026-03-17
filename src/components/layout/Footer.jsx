import { Link } from 'react-router-dom'
import { SITE } from '../../constants/site'
import Icon from '../common/Icons'
import styles from '../../styles/components/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <span className={styles.brandName}>{SITE.name}</span>
            <span className={styles.tagline}>{SITE.tagline}</span>
            {SITE.facebook && (
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Facebook">
                <Icon name="facebook" />
              </a>
            )}
          </div>
          <div className={styles.grid}>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Contacto</h3>
              <p className={styles.address}>{SITE.address}</p>
              <p className={styles.contact}>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a>
              </p>
              <p className={styles.contact}>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
              <p className={styles.horario}>{SITE.horario}</p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Enlaces</h3>
              <ul className={styles.links}>
                <li><Link to="/tramites">Trámites y Servicios</Link></li>
                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/transparencia">Transparencia</Link></li>
                <li><Link to="/calendario-tributario">Calendario Tributario</Link></li>
                <li><Link to="/turismo">Turismo</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Oficina Virtual</h3>
              <p className={styles.ovText}>
                Realice trámites y pagos en línea.
              </p>
              <a
                href={SITE.oficinaVirtual}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                Acceder a Oficina Virtual
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

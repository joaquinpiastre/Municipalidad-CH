import { Link } from 'react-router-dom'
import { SITE } from '../../constants/site'
import Icon from '../common/Icons'
import styles from '../../styles/home/QuickAccess.module.css'

const items = [
  { to: '/tramites', icon: 'tramites', label: 'Trámites' },
  { to: SITE.oficinaVirtual, icon: 'oficina', label: 'Oficina Virtual', external: true },
  { to: '/novedades', icon: 'novedades', label: 'Novedades' },
  { to: '/transparencia', icon: 'boletin', label: 'Boletín Oficial' },
  { to: '/calendario-tributario', icon: 'calendario', label: 'Calendario Tributario' },
  { to: '/turismo', icon: 'turismo', label: 'Turismo' },
  { to: '/gobierno', icon: 'gobierno', label: 'Gobierno' },
  { to: '/contacto', icon: 'contacto', label: 'Contacto' },
]

export default function QuickAccess() {
  return (
    <section className={styles.section} aria-label="Accesos rápidos">
      <div className={styles.container}>
        <h2 className={styles.srOnly}>Accesos rápidos</h2>
        <ul className={styles.grid}>
          {items.map((item, i) => (
            <li key={item.label} className={styles.gridItem} style={{ animationDelay: `${i * 0.06}s` }}>
              {item.external ? (
                <a
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <span className={styles.icon}><Icon name={item.icon} /></span>
                  <span className={styles.label}>{item.label}</span>
                </a>
              ) : (
                <Link to={item.to} className={styles.card}>
                  <span className={styles.icon}><Icon name={item.icon} /></span>
                  <span className={styles.label}>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

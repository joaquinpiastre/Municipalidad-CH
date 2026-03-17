import { Link } from 'react-router-dom'
import { SITE } from '../../constants/site'
import styles from '../../styles/home/HomeEnlaces.module.css'

const enlaces = [
  { to: '/tramites', label: 'Trámites y Servicios' },
  { to: '/calendario-tributario', label: 'Calendario Tributario' },
  { to: SITE.oficinaVirtual, label: 'Oficina Virtual', external: true },
  { to: '/transparencia', label: 'Transparencia y Boletín Oficial' },
  { to: '/turismo', label: 'Turismo' },
  { to: '/contacto', label: 'Contacto' },
]

export default function HomeEnlaces() {
  return (
    <section className={styles.section} aria-label="Enlaces útiles">
      <div className={styles.container}>
        <h2 className={styles.title}>Enlaces útiles</h2>
        <ul className={styles.list}>
          {enlaces.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a href={item.to} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

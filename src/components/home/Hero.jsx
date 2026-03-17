import { Link } from 'react-router-dom'
import { SITE } from '../../constants/site'
import styles from '../../styles/home/Hero.module.css'

const ctaItems = [
  { to: '/tramites', label: 'Trámites' },
  { to: SITE.oficinaVirtual, label: 'Oficina Virtual', external: true },
  { to: '/novedades', label: 'Novedades' },
  { to: '/transparencia#boletin', label: 'Boletín Oficial' },
  { to: '/turismo', label: 'Turismo' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Bienvenida">
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.container}>
          {SITE.logoImage && (
            <img src={SITE.logoImage} alt="" className={styles.logo} />
          )}
          <p className={styles.badge}>{SITE.tagline}</p>
          <h1 className={styles.title}>{SITE.name}</h1>
          <p className={styles.subtitle}>
            Gestión cercana, servicios al ciudadano y transparencia. La ciudad que fue primera capital del Neuquén hoy es puerta de entrada al norte neuquino.
          </p>
          <div className={styles.ctas}>
            {ctaItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cta}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.to} className={styles.cta}>
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

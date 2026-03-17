import { Link } from 'react-router-dom'
import styles from '../styles/pages/NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Página no encontrada</h1>
          <p className={styles.text}>
            La página que buscaba no existe o fue movida. Podés volver al inicio o usar el menú para acceder a las secciones del sitio.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.ctaPrimary}>
              Ir al inicio
            </Link>
            <Link to="/contacto" className={styles.ctaSecondary}>
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

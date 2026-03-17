import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import Icon from '../common/Icons'
import styles from '../../styles/home/HomeTransparencia.module.css'

export default function HomeTransparencia() {
  return (
    <section className={styles.section} aria-label="Transparencia">
      <div className={styles.container}>
        <SectionTitle
          title="Transparencia"
          subtitle="Acceso al Boletín Oficial, normativa y información pública."
        />
        <div className={styles.grid}>
          <Link to="/transparencia" className={styles.card}>
            <span className={styles.icon}><Icon name="document" /></span>
            <h3 className={styles.title}>Boletín Oficial</h3>
            <p className={styles.desc}>Ordenanzas, decretos, resoluciones y avisos oficiales por año.</p>
          </Link>
          <Link to="/transparencia#documentos" className={styles.card}>
            <span className={styles.icon}><Icon name="folder" /></span>
            <h3 className={styles.title}>Documentos y normativa</h3>
            <p className={styles.desc}>Base para futuras secciones: compras, presupuesto, concursos.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

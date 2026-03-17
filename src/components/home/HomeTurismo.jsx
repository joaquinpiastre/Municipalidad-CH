import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import styles from '../../styles/home/HomeTurismo.module.css'

export default function HomeTurismo() {
  return (
    <section className={styles.section} aria-label="Turismo y ciudad">
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.container}>
          <SectionTitle
            title="Turismo y ciudad"
            subtitle="Destino histórico y cultural. Museos, patrimonio y naturaleza en el norte neuquino."
            align="center"
          />
          <p className={styles.text}>
            El Museo Histórico Provincial Manuel José Olascoaga, el Torreón, el Centro Cultural del Norte Neuquino y el casco histórico conforman un circuito que combina historia, cultura y paisaje.
          </p>
          <Link to="/turismo" className={styles.cta}>
            Descubrir turismo
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { intendente } from '../../data/government'
import SectionTitle from '../common/SectionTitle'
import styles from '../../styles/home/HomeGobierno.module.css'

export default function HomeGobierno() {
  return (
    <section className={styles.section} aria-label="Gobierno y gestión">
      <div className={styles.container}>
        <SectionTitle
          title="Gobierno y gestión"
          subtitle="Conozca al Intendente y la estructura municipal al servicio del vecino."
        />
        <div className={styles.block}>
          <div className={styles.intendente}>
            <h3 className={styles.name}>{intendente.name}</h3>
            <p className={styles.role}>{intendente.title}</p>
            <p className={styles.message}>{intendente.message}</p>
          </div>
          <Link to="/gobierno" className={styles.cta}>
            Ver organigrama y áreas
          </Link>
        </div>
      </div>
    </section>
  )
}

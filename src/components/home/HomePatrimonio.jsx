import { Link } from 'react-router-dom'
import { SITE } from '../../constants/site'
import SectionTitle from '../common/SectionTitle'
import styles from '../../styles/home/HomePatrimonio.module.css'

export default function HomePatrimonio() {
  return (
    <section className={styles.section} aria-label="Patrimonio e historia">
      <div className={styles.container}>
        <SectionTitle
          title="Patrimonio e historia"
          subtitle={`Chos Malal, fundada el ${SITE.fundacion}, fue la primera capital del territorio neuquino hasta ${SITE.capitalHasta}. Hoy conserva un casco histórico que invita a recorrer la memoria de la región.`}
        />
        <div className={styles.content}>
          <p className={styles.text}>
            Entre los ríos Neuquén y Curi Leuvú, la ciudad es puerta de entrada al norte neuquino y punto de partida de la Ruta 40. Museos, edificios patrimoniales y el paisaje de estepa y cordillera forman parte de la identidad local.
          </p>
          <Link to="/la-ciudad" className={styles.cta}>
            Conocer la ciudad
          </Link>
        </div>
      </div>
    </section>
  )
}

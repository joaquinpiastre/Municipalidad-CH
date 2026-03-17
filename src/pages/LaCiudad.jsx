import { useEffect } from 'react'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionTitle from '../components/common/SectionTitle'
import { SITE } from '../constants/site'
import styles from '../styles/pages/Page.module.css'
import stylesCity from '../styles/pages/LaCiudad.module.css'

export default function LaCiudad() {
  useEffect(() => {
    document.title = 'La Ciudad | Municipalidad de Chos Malal'
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: 'La Ciudad' }]} />
        <header className={stylesCity.header}>
          <h1 className={stylesCity.title}>Chos Malal</h1>
          <p className={stylesCity.subtitle}>{SITE.tagline}</p>
        </header>

        <section className={stylesCity.section} id="presentacion">
          <SectionTitle title="Presentación" />
          <div className={stylesCity.content}>
            <p>
              Chos Malal es la ciudad cabecera del norte neuquino y se presenta como <strong>Capital Histórica y Cultural del Neuquén</strong>. Ubicada entre los ríos Neuquén y Curi Leuvú, fue fundada el <strong>{SITE.fundacion}</strong> y se constituyó en la primera capital del territorio neuquino hasta <strong>{SITE.capitalHasta}</strong>.
            </p>
            <p>
              Hoy es puerta de entrada al norte de la provincia, vinculada a la Ruta 40 y a un patrimonio natural, histórico y cultural que atrae a visitantes y fortalece la identidad local. La gestión municipal trabaja en la puesta en valor del casco histórico, los museos y los espacios que dan cuenta de la memoria regional.
            </p>
          </div>
        </section>

        <section className={stylesCity.section} id="historia">
          <SectionTitle title="Historia" />
          <div className={stylesCity.timeline}>
            <div className={stylesCity.timelineItem}>
              <span className={stylesCity.timelineYear}>1887</span>
              <p>Fundación de Chos Malal. La ciudad nace en el marco de la campaña al desierto y la organización del territorio nacional.</p>
            </div>
            <div className={stylesCity.timelineItem}>
              <span className={stylesCity.timelineYear}>1887 - 1904</span>
              <p>Chos Malal es la primera capital del territorio del Neuquén, sede de las autoridades territoriales.</p>
            </div>
            <div className={stylesCity.timelineItem}>
              <span className={stylesCity.timelineYear}>Siglo XX y XXI</span>
              <p>Desarrollo como ciudad cabecera del norte neuquino, con crecimiento institucional, cultural y turístico. Reconocimiento como Capital Histórica y Cultural.</p>
            </div>
          </div>
        </section>

        <section className={stylesCity.section} id="identidad">
          <SectionTitle title="Identidad local" />
          <div className={stylesCity.content}>
            <p>
              La identidad de Chos Malal se construye sobre la historia del territorio, el paisaje de estepa y cordillera, la Ruta 40 y los ríos que marcan la geografía. Museos, archivos, edificios patrimoniales y manifestaciones culturales dan forma a una comunidad que valora su pasado y proyecta su futuro como destino turístico y centro de servicios del norte neuquino.
            </p>
          </div>
        </section>

        <section className={stylesCity.section} id="patrimonio">
          <SectionTitle title="Patrimonio" />
          <div className={stylesCity.content}>
            <p>
              El casco histórico conserva edificios y espacios de valor patrimonial. El Museo Histórico Provincial Manuel José Olascoaga, el Torreón (Fuerte IV División), el Centro Cultural del Norte Neuquino, el Museo de la Gente, el Archivo Histórico Municipal, el Almacén Enrique Dewey y la Parroquia María Auxiliadora son algunos de los referentes que integran el circuito histórico y cultural de la ciudad.
            </p>
          </div>
        </section>

        <section className={stylesCity.section} id="como-llegar">
          <SectionTitle title="Cómo llegar" />
          <div className={stylesCity.content}>
            <p>
              Chos Malal se encuentra en el norte de la provincia del Neuquén, Argentina. Se accede por la Ruta Nacional 40 y por rutas provinciales que la vinculan con el resto del norte neuquino. La ciudad dispone de servicios de transporte y alojamiento para quienes la visitan. Para más información turística, consulte la sección <a href="/turismo">Turismo</a>.
            </p>
          </div>
        </section>

        <section className={stylesCity.section} id="datos-utiles">
          <SectionTitle title="Datos útiles de la ciudad" />
          <ul className={stylesCity.datosList}>
            <li><strong>Ubicación:</strong> Norte de la provincia del Neuquén</li>
            <li><strong>Ríos:</strong> Neuquén y Curi Leuvú</li>
            <li><strong>Ruta 40:</strong> Puerta de entrada al norte neuquino</li>
            <li><strong>Fundación:</strong> {SITE.fundacion}</li>
            <li><strong>Reconocimiento:</strong> Capital Histórica y Cultural del Neuquén</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

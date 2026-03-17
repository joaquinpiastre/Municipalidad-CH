import { useState, useEffect } from 'react'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionTitle from '../components/common/SectionTitle'
import { boletinYears, boletinEditions } from '../data/boletin'
import styles from '../styles/pages/Page.module.css'
import stylesTrans from '../styles/pages/Transparencia.module.css'

export default function Transparencia() {
  const [selectedYear, setSelectedYear] = useState(boletinYears[0])

  useEffect(() => {
    document.title = 'Transparencia y Boletín Oficial | Municipalidad de Chos Malal'
  }, [])

  const editions = boletinEditions.filter((e) => e.year === selectedYear)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: 'Transparencia' }]} />
        <header className={stylesTrans.header}>
          <h1 className={stylesTrans.title}>Transparencia</h1>
          <p className={stylesTrans.subtitle}>
            Acceso a la información pública, Boletín Oficial y normativa municipal.
          </p>
        </header>

        <section className={stylesTrans.section} id="boletin">
          <SectionTitle
            title="Boletín Oficial"
            subtitle="Publicación oficial de ordenanzas, decretos, resoluciones y avisos. Las ediciones se encuentran organizadas por año."
          />
          <div className={stylesTrans.boletinToolbar}>
            <label htmlFor="year-select" className={stylesTrans.label}>
              Año
            </label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className={stylesTrans.select}
            >
              {boletinYears.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className={stylesTrans.tableWrapper}>
            <table className={stylesTrans.table}>
              <thead>
                <tr>
                  <th>Edición</th>
                  <th>Fecha</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {editions.length === 0 ? (
                  <tr>
                    <td colSpan={3}>No hay ediciones cargadas para este año. [Placeholder: integrar con archivos reales]</td>
                  </tr>
                ) : (
                  editions.map((ed) => (
                    <tr key={`${ed.year}-${ed.number}`}>
                      <td>{ed.title}</td>
                      <td>{new Date(ed.date).toLocaleDateString('es-AR')}</td>
                      <td>
                        <span className={stylesTrans.placeholder}>Descarga (placeholder)</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className={stylesTrans.section} id="documentos">
          <SectionTitle
            title="Documentos y normativa"
            subtitle="Espacio preparado para futuras secciones: compras y licitaciones, presupuesto, concursos, ordenanzas y resoluciones."
          />
          <div className={stylesTrans.placeholderBlock}>
            <p>
              En esta sección se incorporarán en futuras etapas: ordenanzas vigentes, resoluciones, decretos, compras y licitaciones, presupuesto, concursos y normativa municipal. La estructura del sitio está preparada para integrar estos contenidos desde una API o CMS.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

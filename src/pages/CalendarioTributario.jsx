import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionTitle from '../components/common/SectionTitle'
import { tiposTributo, vencimientos, yearCalendario } from '../data/calendarioTributario'
import { SITE } from '../constants/site'
import styles from '../styles/pages/Page.module.css'
import stylesCal from '../styles/pages/CalendarioTributario.module.css'

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export default function CalendarioTributario() {
  const [filter, setFilter] = useState('')

  useEffect(() => {
    document.title = 'Calendario Tributario | Municipalidad de Chos Malal'
  }, [])

  const filtered = filter
    ? vencimientos.filter((v) => v.tipo === filter)
    : vencimientos

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: 'Calendario Tributario' }]} />
        <header className={stylesCal.header}>
          <h1 className={stylesCal.title}>Calendario Tributario</h1>
          <p className={stylesCal.subtitle}>
            Vencimientos de obligaciones tributarias municipales para el año {yearCalendario}. Realice sus pagos en ventanilla o a través de la Oficina Virtual.
          </p>
        </header>

        <section className={stylesCal.section}>
          <SectionTitle title="Resumen por tipo de tributo" />
          <div className={stylesCal.tiposGrid}>
            {tiposTributo.map((t) => (
              <div key={t.id} className={stylesCal.tipoCard}>
                <h3 className={stylesCal.tipoName}>{t.name}</h3>
                <p className={stylesCal.tipoDesc}>{t.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={stylesCal.section}>
          <div className={stylesCal.toolbar}>
            <label htmlFor="filter-tipo" className={stylesCal.label}>
              Filtrar por tipo
            </label>
            <select
              id="filter-tipo"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={stylesCal.select}
            >
              <option value="">Todos</option>
              {tiposTributo.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <div className={stylesCal.tableWrapper}>
            <table className={stylesCal.table}>
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Día</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((v, i) => (
                  <tr key={i}>
                    <td>{meses[v.mes - 1]}</td>
                    <td>{v.dia}</td>
                    <td>{v.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className={stylesCal.ctaBlock}>
          <p className={stylesCal.ctaText}>
            Para realizar sus pagos puede acercarse a Recaudaciones (Belgrano 98) en horario de atención o utilizar la Oficina Virtual.
          </p>
          <div className={stylesCal.buttons}>
            <a
              href={SITE.oficinaVirtual}
              target="_blank"
              rel="noopener noreferrer"
              className={stylesCal.ctaPrimary}
            >
              Ir a Oficina Virtual
            </a>
            <a href={`mailto:${SITE.email}`} className={stylesCal.ctaSecondary}>
              Contactar Recaudaciones: {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

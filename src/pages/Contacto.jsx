import { useState, useEffect } from 'react'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionTitle from '../components/common/SectionTitle'
import { SITE } from '../constants/site'
import styles from '../styles/pages/Page.module.css'
import stylesCont from '../styles/pages/Contacto.module.css'

const initialForm = { name: '', email: '', subject: '', message: '' }
const initialErrors = {}

export default function Contacto() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Contacto | Municipalidad de Chos Malal'
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Ingrese su nombre.'
    if (!form.email.trim()) e.email = 'Ingrese su correo.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Correo no válido.'
    if (!form.subject.trim()) e.subject = 'Ingrese el asunto.'
    if (!form.message.trim()) e.message = 'Ingrese su mensaje.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
    setForm(initialForm)
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: 'Contacto' }]} />
        <header className={stylesCont.header}>
          <h1 className={stylesCont.title}>Contacto</h1>
          <p className={stylesCont.subtitle}>
            Atención al vecino, consultas y canales oficiales de la Municipalidad de Chos Malal.
          </p>
        </header>

        <div className={stylesCont.grid}>
          <div className={stylesCont.info}>
            <SectionTitle title="Datos de contacto" />
            <div className={stylesCont.block}>
              <h3 className={stylesCont.blockTitle}>Dirección</h3>
              <p className={stylesCont.address}>{SITE.address}</p>
            </div>
            <div className={stylesCont.block}>
              <h3 className={stylesCont.blockTitle}>Teléfono</h3>
              <p>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a>
              </p>
            </div>
            <div className={stylesCont.block}>
              <h3 className={stylesCont.blockTitle}>Correo electrónico</h3>
              <p>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
              <p className={stylesCont.secondary}>
                Ventanilla única: <a href={`mailto:${SITE.emailVentanilla}`}>{SITE.emailVentanilla}</a>
              </p>
            </div>
            <div className={stylesCont.block}>
              <h3 className={stylesCont.blockTitle}>Horario de atención</h3>
              <p>{SITE.horario}</p>
            </div>
            <div className={stylesCont.block}>
              <h3 className={stylesCont.blockTitle}>Oficina Virtual</h3>
              <p>
                <a href={SITE.oficinaVirtual} target="_blank" rel="noopener noreferrer">
                  {SITE.oficinaVirtual}
                </a>
              </p>
            </div>
          </div>

          <div className={stylesCont.formBlock}>
            <SectionTitle title="Enviar consulta" />
            {sent ? (
              <div className={stylesCont.success}>
                <p>Su mensaje fue enviado correctamente. Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={stylesCont.form} noValidate>
                <div className={stylesCont.field}>
                  <label htmlFor="contact-name">Nombre *</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={errors.name ? stylesCont.inputError : ''}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                  />
                  {errors.name && (
                    <span id="error-name" className={stylesCont.error} role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className={stylesCont.field}>
                  <label htmlFor="contact-email">Correo electrónico *</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={errors.email ? stylesCont.inputError : ''}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span className={stylesCont.error} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className={stylesCont.field}>
                  <label htmlFor="contact-subject">Asunto *</label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className={errors.subject ? stylesCont.inputError : ''}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <span className={stylesCont.error} role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>
                <div className={stylesCont.field}>
                  <label htmlFor="contact-message">Mensaje *</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={errors.message ? stylesCont.inputError : ''}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span className={stylesCont.error} role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>
                <button type="submit" className={stylesCont.submit}>
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>

        <section className={stylesCont.mapSection}>
          <SectionTitle title="Ubicación" />
          <div className={stylesCont.mapPlaceholder}>
            <p>
              [Placeholder: integrar mapa con Belgrano 98, CP 8353, Chos Malal, Neuquén. Se puede usar Google Maps embed o similar.]
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

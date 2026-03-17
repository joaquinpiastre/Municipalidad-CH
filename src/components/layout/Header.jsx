import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE } from '../../constants/site'
import styles from '../../styles/components/Header.module.css'

const navItems = [
  { path: '/', label: 'Inicio' },
  {
    label: 'La Ciudad',
    path: '/la-ciudad',
    children: [
      { path: '/la-ciudad', label: 'Presentación' },
      { path: '/la-ciudad#historia', label: 'Historia' },
      { path: '/la-ciudad#patrimonio', label: 'Patrimonio' },
      { path: '/la-ciudad#como-llegar', label: 'Cómo llegar' },
    ],
  },
  {
    label: 'Gobierno',
    path: '/gobierno',
    children: [
      { path: '/gobierno', label: 'Intendente' },
      { path: '/gobierno#organigrama', label: 'Organigrama' },
      { path: '/gobierno#areas', label: 'Áreas' },
    ],
  },
  { path: '/tramites', label: 'Trámites y Servicios' },
  { path: '/novedades', label: 'Novedades' },
  {
    label: 'Transparencia',
    path: '/transparencia',
    children: [
      { path: '/transparencia', label: 'Transparencia' },
      { path: '/transparencia#boletin', label: 'Boletín Oficial' },
    ],
  },
  { path: '/calendario-tributario', label: 'Calendario Tributario' },
  { path: '/turismo', label: 'Turismo' },
  { path: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <span className={styles.tagline}>{SITE.tagline}</span>
          <span className={styles.phone}>{SITE.phone}</span>
        </div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            {SITE.logoImage && (
              <img src={SITE.logoImage} alt="" className={styles.logoImg} />
            )}
            <span className={styles.logoText}>Municipalidad de Chos Malal</span>
          </Link>
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Abrir menú"
          >
            <span className={styles.hamburger} />
            <span className={styles.hamburger} />
            <span className={styles.hamburger} />
          </button>
          <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.path || item.label} className={styles.navItem}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                      </button>
                      <ul className={`${styles.dropdown} ${openDropdown === item.label ? styles.dropdownOpen : ''}`}>
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              className={styles.dropdownLink}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

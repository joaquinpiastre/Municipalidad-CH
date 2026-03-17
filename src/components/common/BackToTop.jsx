import { useState, useEffect } from 'react'
import styles from '../../styles/components/BackToTop.module.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      type="button"
      className={styles.button}
      onClick={scrollTop}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  )
}

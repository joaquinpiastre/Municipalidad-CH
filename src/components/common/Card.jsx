import { Link } from 'react-router-dom'
import styles from '../../styles/components/Card.module.css'

export default function Card({ title, description, href, children, className = '' }) {
  const content = (
    <>
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http')
    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.card} ${className}`}>
        {content}
      </a>
    ) : (
      <Link to={href} className={`${styles.card} ${className}`}>
        {content}
      </Link>
    )
  }

  return <div className={`${styles.card} ${className}`}>{content}</div>
}

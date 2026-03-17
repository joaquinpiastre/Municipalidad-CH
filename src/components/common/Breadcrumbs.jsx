import { Link } from 'react-router-dom'
import styles from '../../styles/components/Breadcrumbs.module.css'

export default function Breadcrumbs({ items }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Miga de pan">
      <ol className={styles.list}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path || i}>
            {i < items.length - 1 && item.path ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

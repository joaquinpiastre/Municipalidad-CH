import { Link } from 'react-router-dom'
import { news } from '../../data/news'
import SectionTitle from '../common/SectionTitle'
import styles from '../../styles/home/HomeNews.module.css'

const featured = news.filter((n) => n.featured).slice(0, 3)
const formatDate = (d) => new Date(d).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function HomeNews() {
  return (
    <section className={styles.section} aria-label="Novedades destacadas">
      <div className={styles.container}>
        <SectionTitle
          title="Novedades"
          subtitle="Noticias y comunicados oficiales de la gestión municipal."
        />
        <ul className={styles.grid}>
          {featured.map((item) => (
            <li key={item.id}>
              <article className={styles.card}>
                <div className={styles.cardContent}>
                  <time className={styles.date} dateTime={item.date}>
                    {formatDate(item.date)}
                  </time>
                  <h3 className={styles.title}>
                    <Link to={`/novedades/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className={styles.excerpt}>{item.excerpt}</p>
                  <Link to={`/novedades/${item.slug}`} className={styles.link}>
                    Leer más
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className={styles.more}>
          <Link to="/novedades" className={styles.moreLink}>
            Ver todas las novedades
          </Link>
        </div>
      </div>
    </section>
  )
}

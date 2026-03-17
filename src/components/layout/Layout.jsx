import Header from './Header'
import Footer from './Footer'
import BackToTop from '../common/BackToTop'
import styles from '../../styles/components/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main} id="main-content">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

import styles from '../../styles/components/PageLoading.module.css'

export default function PageLoading() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.spinner} />
      <p className={styles.text}>Cargando...</p>
    </div>
  )
}

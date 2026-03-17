import styles from '../../styles/home/HomeNumbers.module.css'

const items = [
  { value: '1887', label: 'Año de fundación' },
  { value: 'Capital histórica', label: 'Del Neuquén' },
  { value: 'Ruta 40', label: 'Puerta al norte neuquino' },
]

export default function HomeNumbers() {
  return (
    <section className={styles.section} aria-label="Chos Malal en números">
      <div className={styles.container}>
        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.value}>{item.value}</span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

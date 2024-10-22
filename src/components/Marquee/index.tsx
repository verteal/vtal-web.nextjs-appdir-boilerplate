import styles from './Marquee.module.scss'

interface IMarquee {
  paragraph: string
  newStyle?: string
}

export default function Marquee({ paragraph, newStyle }: IMarquee) {
  return (
    <section id={styles.phrase} className={`${newStyle}`}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <div className={styles.text} key={i}>
                {paragraph}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

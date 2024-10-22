import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from './TextReveal.module.scss'

interface ITextReveal {
  paragraphs: string[]
  style?: string
  delay?: number
}

export default function TextReveal({ paragraphs, style, delay }: ITextReveal) {
  const animation = {
    initial: { y: '100%' },
    enter: (i: number) => ({
      y: '0',
      x: '0',
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.25 * i + (delay || 0),
      },
    }),
  }

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  })
  return (
    <div ref={ref}>
      {paragraphs.map((phrase, i) => {
        return (
          <div key={i} className={styles.lineMask}>
            <motion.p
              custom={i}
              className={style}
              variants={animation}
              initial="initial"
              animate={inView ? 'enter' : ''}
              dangerouslySetInnerHTML={{ __html: phrase }}
            />
          </div>
        )
      })}
    </div>
  )
}

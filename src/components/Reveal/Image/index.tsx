import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import styles from './ImageReveal.module.scss'

interface IImageReveal {
  children: ReactNode
  style?: string
  delay?: number
}

export default function ImageReveal({ style, children, delay }: IImageReveal) {
  const animation = {
    initial: { y: '100%' },
    enter: {
      y: '0%',
      transition: {
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1],
        delay,
      },
    },
  }

  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  })
  return (
    <div className={styles.imagewrap} ref={ref}>
      <motion.div
        className={style}
        variants={animation}
        initial="initial"
        animate={inView ? 'enter' : ''}
      >
        {children}
      </motion.div>
    </div>
  )
}

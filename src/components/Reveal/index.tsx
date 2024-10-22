import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import styles from './Reveal.module.scss'

interface IReveal {
  children: ReactNode
  variant?: string
  style?: string
  delay: number
}

function Reveal({ children, style, delay }: IReveal) {
  const transition = {
    hidden: { y: '100%' },
    visible: {
      y: '0px',
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 200,
        delay,
      },
    },
  }

  return (
    <>
      <div className={styles.line}>
        <motion.div
          className={style}
          variants={transition}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      </div>
    </>
  )
}

export default Reveal

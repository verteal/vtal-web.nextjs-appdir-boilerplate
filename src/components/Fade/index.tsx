import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface IFade {
  children: ReactNode
  delay: number
}

function Fade({ children, delay }: IFade) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'easeIn',
        duration: 0.3,
        delay,
      },
    },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {children}
    </motion.div>
  )
}

export default Fade

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IAnimateWord {
  text: string
}

function AnimateWord({ text }: IAnimateWord) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 2 * i,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: 15,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const [containerVariant, setContainerVariant] = useState('visible')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContainerVariant('hidden')
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
      variants={container}
      initial="hidden"
      animate={containerVariant}
      exit="hidden"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '5px' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimateWord

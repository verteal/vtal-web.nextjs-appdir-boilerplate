/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import React, { ReactNode, useRef } from 'react'

import styles from './Gradient.module.scss'

interface IGradientReveal {
  paragraph: string
  style: string
  align: 'left' | 'right'
}

interface IWord {
  children: ReactNode
  progress: MotionValue<number>
  range: any
}

export default function GradientReveal({
  paragraph,
  style,
  align,
}: IGradientReveal) {
  const container = useRef(null)
  const words = paragraph.split(' ')

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.6', 'end 0.5'],
  })

  const createMarkup = (content: any) => {
    return { __html: content }
  }
  return (
    <div
      ref={container}
      className={`${styles.paragraph} ${style}`}
      style={{
        justifyContent: `${align === 'right' ? 'flex-end' : 'flex-start'}`,
      }}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            <span dangerouslySetInnerHTML={createMarkup(word)} />
          </Word>
        )
      })}
    </div>
  )
}

const Word = ({ children, progress, range }: IWord) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}

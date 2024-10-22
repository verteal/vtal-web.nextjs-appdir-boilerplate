import { cubicBezier, motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface IParallax {
  imageSource: string
  style: string
}

export default function Parallax({ imageSource, style }: IParallax) {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -500], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  })

  return (
    <div ref={container}>
      <motion.div style={{ y }}>
        <Image
          width={1920}
          height={1080}
          className={style}
          src={imageSource}
          alt="\0"
        />
      </motion.div>
    </div>
  )
}

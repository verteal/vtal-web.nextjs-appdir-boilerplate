import gsap from 'gsap'
import { useEffect } from 'react'

interface ITextReveal {
  paragraphs: string[]
  style?: string
  delay?: number
  reference?: string
}

export default function TextBlur({
  paragraphs,
  style,
  delay,
  reference,
}: ITextReveal) {
  useEffect(() => {
    gsap.to(`.${reference} h2`, {
      filter: 'blur(0px)',
      duration: 0.6,
      ease: 'power2.in',
      delay,
      scrollTrigger: `.${reference}`,
    })
  }, [])
  return (
    <div>
      {paragraphs.map((phrase, i) => {
        return (
          <div className={reference} key={i}>
            <h2
              className={style}
              dangerouslySetInnerHTML={{ __html: phrase }}
              style={{ filter: 'blur(10px)' }}
            />
          </div>
        )
      })}
    </div>
  )
}

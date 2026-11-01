import { useEffect, useRef } from 'react'
import Photo from './Photo'
import { PHOTOS } from '../data/images'

const PARALLAX_FACTOR = 0.25

export default function Hero() {
  const mediaRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let frame = 0
    const update = () => {
      frame = 0
      const offset = window.scrollY
      if (offset < window.innerHeight) {
        mediaRef.current?.style.setProperty('--parallax', `${offset * PARALLAX_FACTOR}px`)
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__media" ref={mediaRef}>
        <Photo
          photo={PHOTOS.hero}
          alt=""
          width={1600}
          height={1067}
          sizes="100vw"
          widths={[800, 1200, 1600, 2200]}
          eager
        />
      </div>
      <div className="hero__overlay" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__label">قهوة مختصة · منذ 2024</p>
          <h1 className="hero__title" id="hero-title">
            <span>صباحات هادئة.</span>
            <span className="hero__title-accent">قهوة أفضل.</span>
          </h1>
          <p className="hero__subtitle">
            قهوة مختصة، ومخبوزات طازجة، ومكان صُنع للحظاتك الأجمل.
          </p>
          <div className="hero__actions">
            <a className="btn-ritual btn-ritual--light" href="#menu">
              استكشف المنيو
              <i className="bi bi-arrow-left" aria-hidden="true" />
            </a>
            <a className="btn-ritual btn-ritual--outline-light" href="#visit">
              اعثر على مقهانا
            </a>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#intro" aria-label="انتقل إلى المحتوى">
        <span>مرّر</span>
        <i aria-hidden="true" />
      </a>
    </section>
  )
}

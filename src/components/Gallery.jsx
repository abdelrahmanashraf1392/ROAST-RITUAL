import { useState } from 'react'
import Lightbox from './Lightbox'
import Photo from './Photo'
import Reveal from './Reveal'
import { GALLERY } from '../data/siteData'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">المعرض</p>
          <h2 className="display-title" id="gallery-title">
            من داخل المقهى
          </h2>
        </Reveal>

        <Reveal className="gallery-grid">
          {GALLERY.map((image, index) => (
            <button
              type="button"
              key={image.id}
              className={`gallery-grid__item${image.layout ? ` gallery-grid__item--${image.layout}` : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`فتح الصورة: ${image.alt}`}
            >
              <Photo
                photo={image.photo}
                alt=""
                width={800}
                height={800}
                sizes="(min-width: 992px) 28vw, 50vw"
              />
              <span className="gallery-grid__caption">{image.caption}</span>
            </button>
          ))}
        </Reveal>
      </div>

      <Lightbox images={GALLERY} index={activeIndex} onIndexChange={setActiveIndex} />
    </section>
  )
}

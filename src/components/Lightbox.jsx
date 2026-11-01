import { useEffect, useRef } from 'react'
import Photo from './Photo'

const LIGHTBOX_WIDTHS = [800, 1200, 1600, 2200]

// Uses the native <dialog> element for focus trapping, Escape handling and the backdrop.
export default function Lightbox({ images, index, onIndexChange }) {
  const dialogRef = useRef(null)
  const isOpen = index !== null
  const image = isOpen ? images[index] : null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  const move = (step) => onIndexChange((index + step + images.length) % images.length)

  // In RTL the "next" button sits on the left, so ArrowLeft advances.
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') move(1)
    if (event.key === 'ArrowRight') move(-1)
  }

  const handleClick = (event) => {
    const { target } = event
    if (target === dialogRef.current || target.classList.contains('lightbox__stage')) {
      onIndexChange(null)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="عارض الصور"
      onClose={() => onIndexChange(null)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {image && (
        <>
          <div className="lightbox__stage">
            <figure className="lightbox__figure">
              <Photo
                key={image.id}
                photo={image.photo}
                alt={image.alt}
                width={1600}
                height={1200}
                sizes="100vw"
                widths={LIGHTBOX_WIDTHS}
                eager
              />
              <figcaption>
                {image.caption}
                <span>
                  {index + 1} / {images.length}
                </span>
              </figcaption>
            </figure>
          </div>

          <button
            type="button"
            className="lightbox__btn lightbox__btn--close"
            onClick={() => onIndexChange(null)}
            aria-label="إغلاق عارض الصور"
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__btn--prev"
            onClick={() => move(-1)}
            aria-label="الصورة السابقة"
          >
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__btn--next"
            onClick={() => move(1)}
            aria-label="الصورة التالية"
          >
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
        </>
      )}
    </dialog>
  )
}

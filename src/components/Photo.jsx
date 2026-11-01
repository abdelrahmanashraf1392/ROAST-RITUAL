import { useState } from 'react'
import { DEFAULT_WIDTHS, photoSrcSet, photoUrl } from '../data/images'

// Responsive, lazy-loaded image with a graceful fallback so a failed request never shows a broken icon.
export default function Photo({
  photo,
  alt,
  width,
  height,
  sizes = '100vw',
  widths = DEFAULT_WIDTHS,
  eager = false,
  className = '',
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`photo photo--fallback ${className}`}
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
      />
    )
  }

  return (
    <img
      className={`photo ${className}`}
      src={photoUrl(photo, widths[Math.min(1, widths.length - 1)])}
      srcSet={photoSrcSet(photo, widths)}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
      onError={() => setFailed(true)}
    />
  )
}

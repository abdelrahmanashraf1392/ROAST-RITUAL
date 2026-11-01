import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/siteData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    document.body.classList.add('no-scroll')
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)
  const classes = ['site-nav', scrolled && 'site-nav--solid', open && 'site-nav--open']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className="container site-nav__bar">
        <a className="site-nav__logo" href="#home" onClick={closeMenu} aria-label="روست آند ريتوال — الرئيسية">
          ROAST <span>&amp;</span> RITUAL
        </a>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-nav" className="site-nav__panel" aria-label="التنقل الرئيسي">
          <ul className="site-nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="site-nav__link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

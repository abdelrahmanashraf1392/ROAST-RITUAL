import { useState } from 'react'
import Photo from './Photo'
import Reveal from './Reveal'
import { MENU_CATEGORIES, MENU_ITEMS, formatPrice } from '../data/menuData'

const THUMB_WIDTHS = [160, 320]

export default function Menu() {
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id)
  const items = MENU_ITEMS.filter((item) => item.category === activeId)

  const handleKeyDown = (event) => {
    // In RTL the next tab is on the left, so ArrowLeft advances.
    const step = event.key === 'ArrowLeft' ? 1 : event.key === 'ArrowRight' ? -1 : 0
    if (!step) return

    event.preventDefault()
    const current = MENU_CATEGORIES.findIndex((category) => category.id === activeId)
    const next = MENU_CATEGORIES[(current + step + MENU_CATEGORIES.length) % MENU_CATEGORIES.length]
    setActiveId(next.id)
    document.getElementById(`menu-tab-${next.id}`)?.focus()
  }

  return (
    <section className="section menu" id="menu" aria-labelledby="menu-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">يُحضَّر عند الطلب</p>
          <h2 className="display-title" id="menu-title">
            المنيو
          </h2>
        </Reveal>

        <div className="menu__tabs" role="tablist" aria-label="فئات المنيو" onKeyDown={handleKeyDown}>
          {MENU_CATEGORIES.map((category) => {
            const selected = category.id === activeId
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`menu-tab-${category.id}`}
                aria-selected={selected}
                aria-controls="menu-panel"
                tabIndex={selected ? 0 : -1}
                className={`menu__tab${selected ? ' is-active' : ''}`}
                onClick={() => setActiveId(category.id)}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div
          className="menu__panel"
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeId}`}
          key={activeId}
        >
          {items.map((item) => (
            <article className="menu-item" key={item.id}>
              {item.photo && (
                <div className="menu-item__thumb">
                  <Photo
                    photo={item.photo}
                    alt=""
                    width={84}
                    height={84}
                    sizes="84px"
                    widths={THUMB_WIDTHS}
                  />
                </div>
              )}
              <div className="menu-item__body">
                <div className="menu-item__head">
                  <h3 className="menu-item__name">{item.name}</h3>
                  <span className="menu-item__leader" aria-hidden="true" />
                  <span className="menu-item__price">{formatPrice(item.price)}</span>
                </div>
                <p className="menu-item__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

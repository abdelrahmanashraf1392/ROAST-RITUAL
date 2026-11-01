import Reveal from './Reveal'
import { CONTACT, externalLinkProps } from '../data/siteData'

export default function VisitUs() {
  return (
    <section className="section visit" id="visit" aria-labelledby="visit-title">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <Reveal>
              <p className="eyebrow">زورونا</p>
              <h2 className="display-title" id="visit-title">
                أهلًا بك في مقهانا.
              </h2>

              <ul className="visit__details">
                <li>
                  <i className="bi bi-geo-alt" aria-hidden="true" />
                  <address>
                    {CONTACT.addressLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </li>
                <li>
                  <i className="bi bi-clock" aria-hidden="true" />
                  <div>
                    {CONTACT.hours.map((slot) => (
                      <span key={slot.days}>
                        <strong>{slot.days}</strong> {slot.time}
                      </span>
                    ))}
                  </div>
                </li>
                <li>
                  <i className="bi bi-telephone" aria-hidden="true" />
                  <a href={CONTACT.phoneHref} dir="ltr">
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <i className="bi bi-envelope" aria-hidden="true" />
                  <a href={`mailto:${CONTACT.email}`} dir="ltr">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>

              <div className="visit__actions">
                <a
                  className="btn-ritual btn-ritual--light"
                  href={CONTACT.mapsUrl}
                  {...externalLinkProps(CONTACT.mapsUrl)}
                >
                  افتح في خرائط جوجل
                  <i className="bi bi-arrow-up-left" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal delay={2}>
              <a
                className="map-card"
                href={CONTACT.mapsUrl}
                aria-label="عرض روست آند ريتوال على خرائط جوجل"
                {...externalLinkProps(CONTACT.mapsUrl)}
              >
                <svg className="map-card__streets" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <path d="M-10 70 L410 40" />
                  <path d="M-10 190 L410 230" />
                  <path d="M90 -10 L130 310" />
                  <path d="M290 -10 L250 310" />
                  <path d="M-10 130 C120 120 240 170 410 120" />
                </svg>
                <span className="map-card__pin" aria-hidden="true">
                  <i className="bi bi-geo-alt-fill" />
                </span>
                <span className="map-card__label">
                  <strong>روست آند ريتوال</strong>
                  {CONTACT.addressLines.join('، ')}
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

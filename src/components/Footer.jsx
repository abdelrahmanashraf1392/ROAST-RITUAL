import { CONTACT, NAV_LINKS, SOCIAL_LINKS, externalLinkProps } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <a className="site-footer__logo" href="#home" aria-label="روست آند ريتوال — الرئيسية">
              ROAST <span>&amp;</span> RITUAL
            </a>
            <p className="site-footer__about">
              قهوة مختصة، ومخبوزات طازجة، ولحظات هادئة في قلب القاهرة.
            </p>
            <ul className="site-footer__social">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a href={social.href} aria-label={social.label} {...externalLinkProps(social.href)}>
                    <i className={`bi ${social.icon}`} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h2 className="site-footer__heading">استكشف</h2>
            <ul className="site-footer__list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h2 className="site-footer__heading">مواعيد العمل</h2>
            <ul className="site-footer__list">
              {CONTACT.hours.map((slot) => (
                <li key={slot.days}>
                  <strong>{slot.days}</strong>
                  <br />
                  {slot.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h2 className="site-footer__heading">تواصل معنا</h2>
            <ul className="site-footer__list">
              <li>{CONTACT.addressLines.join('، ')}</li>
              <li>
                <a href={CONTACT.phoneHref} dir="ltr">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} dir="ltr">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="site-footer__copy">
          © {new Date().getFullYear()} روست آند ريتوال. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}

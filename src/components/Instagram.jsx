import Photo from './Photo'
import Reveal from './Reveal'
import { INSTAGRAM, INSTAGRAM_POSTS, externalLinkProps } from '../data/siteData'

export default function Instagram() {
  return (
    <section className="section social" id="social" aria-labelledby="social-title">
      <div className="container">
        <Reveal className="social__head">
          <div>
            <p className="eyebrow">
              <bdi>{INSTAGRAM.handle}</bdi>
            </p>
            <h2 className="display-title" id="social-title">
              تابع طقوسنا
            </h2>
          </div>
          <a
            className="btn-ritual btn-ritual--dark"
            href={INSTAGRAM.url}
            {...externalLinkProps(INSTAGRAM.url)}
          >
            <i className="bi bi-instagram" aria-hidden="true" />
            تابعنا <bdi>{INSTAGRAM.handle}</bdi>
          </a>
        </Reveal>

        <Reveal as="ul" className="social__grid" delay={1}>
          {INSTAGRAM_POSTS.map((post) => (
            <li key={post.id}>
              <a
                className="social__tile"
                href={INSTAGRAM.url}
                aria-label={`${post.alt} — عرض على إنستجرام`}
                {...externalLinkProps(INSTAGRAM.url)}
              >
                <Photo
                  photo={post.photo}
                  alt=""
                  width={400}
                  height={400}
                  sizes="(min-width: 992px) 16vw, (min-width: 576px) 32vw, 48vw"
                />
                <span className="social__overlay" aria-hidden="true">
                  <i className="bi bi-instagram" />
                </span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

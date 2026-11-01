import Photo from './Photo'
import Reveal from './Reveal'
import { PHOTOS } from '../data/images'
import { FEATURES } from '../data/siteData'

export default function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <Reveal className="experience__media">
              <Photo
                photo={PHOTOS.interior}
                alt="مقهى تغمره أشعة الشمس بطاولات خشبية وإضاءة دافئة"
                width={1000}
                height={1150}
                sizes="(min-width: 992px) 56vw, 92vw"
              />
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal>
              <p className="eyebrow">التجربة</p>
              <h2 className="display-title" id="experience-title">
                صُنع للحظات الهادئة.
              </h2>
              <p className="lead-text">
                مكان للعمل، أو لقاء الأصدقاء، أو القراءة، أو فنجان قهوة هادئ، أو ببساطة لتأخذ نفَسًا. إضاءة
                ناعمة وموسيقى جميلة وخدمة بلا استعجال — تعال لساعة وابقَ حتى المساء.
              </p>
            </Reveal>

            <Reveal as="ul" className="feature-list" delay={2}>
              {FEATURES.map((feature) => (
                <li className="feature-list__item" key={feature.label}>
                  <i className={`bi ${feature.icon}`} aria-hidden="true" />
                  <span>{feature.label}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

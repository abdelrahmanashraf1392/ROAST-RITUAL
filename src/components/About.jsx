import Photo from './Photo'
import Reveal from './Reveal'
import { PHOTOS } from '../data/images'
import { STATS } from '../data/siteData'

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 order-lg-2">
            <Reveal className="about__media">
              <div className="about__main">
                <Photo
                  photo={PHOTOS.barista}
                  alt="باريستا يحضّر القهوة خلف البار"
                  width={800}
                  height={1000}
                  sizes="(min-width: 992px) 40vw, 80vw"
                />
              </div>
              <div className="about__inset">
                <Photo
                  photo={PHOTOS.beans}
                  alt="حبوب قهوة محمّصة طازجة"
                  width={400}
                  height={400}
                  sizes="(min-width: 992px) 20vw, 40vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6 order-lg-1">
            <Reveal>
              <p className="eyebrow">عنّا</p>
              <h2 className="display-title" id="about-title">
                حكايتنا
              </h2>
              <p className="lead-text">
                بدأ روست آند ريتوال من شغف بالقهوة المختصة، وفكرة بسيطة: مكان تجتمع فيه القهوة الجيدة
                باللحظات الجميلة.
              </p>
              <p className="about__text">
                نتعامل مباشرة مع مزارعين صغار، ونحمّص على دفعات صغيرة، وندرّب كل باريستا ليعامل كل فنجان
                كحرفة. ما تتذوقه هو ثمرة أيادٍ كثيرة اهتمّت بكل التفاصيل، من المزرعة إلى الكاونتر.
              </p>
            </Reveal>

            <Reveal as="ul" className="stats" delay={2}>
              {STATS.map((stat) => (
                <li className="stats__item" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

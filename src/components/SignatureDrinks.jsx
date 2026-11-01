import Photo from './Photo'
import Reveal from './Reveal'
import { SIGNATURES, formatPrice } from '../data/menuData'

export default function SignatureDrinks() {
  return (
    <section className="section signatures" id="signatures" aria-labelledby="signatures-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">اختيارات المقهى</p>
          <h2 className="display-title" id="signatures-title">
            مشروباتنا المميزة
          </h2>
          <p className="section-head__sub">بعض المفضّلات تستحق أن نتمهّل من أجلها.</p>
        </Reveal>

        <div className="row g-4 g-xl-5">
          {SIGNATURES.map((drink, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={drink.id}>
              <Reveal delay={(index % 3) + 1} className="h-100">
                <article className="drink">
                  <div className="drink__media">
                    <Photo
                      photo={drink.photo}
                      alt={drink.name}
                      width={640}
                      height={800}
                      sizes="(min-width: 992px) 30vw, (min-width: 768px) 46vw, 92vw"
                    />
                    <span className="drink__price">{formatPrice(drink.price)}</span>
                  </div>
                  <div className="drink__body">
                    <h3 className="drink__name">{drink.name}</h3>
                    <p className="drink__desc">{drink.description}</p>
                    <a className="link-arrow" href="#menu">
                      استكشف
                      <i className="bi bi-arrow-left" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

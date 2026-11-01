import { useState } from 'react'
import Reveal from './Reveal'
import { REVIEWS } from '../data/siteData'

const STAR_COUNT = 5

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const review = REVIEWS[current]

  const go = (step) => setCurrent((index) => (index + step + REVIEWS.length) % REVIEWS.length)

  return (
    <section className="section testimonials" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <Reveal
          className="row g-5 align-items-center"
          role="region"
          aria-roledescription="carousel"
          aria-label="آراء العملاء"
        >
          <div className="col-lg-4">
            <p className="eyebrow">آراء الزوار</p>
            <h2 className="display-title" id="reviews-title">
              يحبها عشّاق القهوة
            </h2>
            <div className="testimonials__controls">
              <button type="button" className="round-btn" onClick={() => go(-1)} aria-label="الرأي السابق">
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </button>
              <button type="button" className="round-btn" onClick={() => go(1)} aria-label="الرأي التالي">
                <i className="bi bi-arrow-left" aria-hidden="true" />
              </button>
              <span className="testimonials__count" aria-hidden="true">
                {current + 1} / {REVIEWS.length}
              </span>
            </div>
          </div>

          <div className="col-lg-8">
            <figure className="review" key={review.id} aria-live="polite">
              <div
                className="review__stars"
                role="img"
                aria-label={`${review.rating} من ${STAR_COUNT} نجوم`}
              >
                {Array.from({ length: STAR_COUNT }, (_, i) => (
                  <i key={i} className={`bi ${i < review.rating ? 'bi-star-fill' : 'bi-star'}`} aria-hidden="true" />
                ))}
              </div>
              <blockquote className="review__quote">
                <p>{review.text}</p>
              </blockquote>
              <figcaption className="review__author">
                <span className="review__avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <strong>{review.name}</strong>
                  <small>{review.role}</small>
                </span>
              </figcaption>
            </figure>

            <div className="testimonials__dots">
              {REVIEWS.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={`dot${index === current ? ' is-active' : ''}`}
                  onClick={() => setCurrent(index)}
                  aria-label={`عرض رأي ${item.name}`}
                  aria-current={index === current}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import Reveal from './Reveal'

export default function BrandStatement() {
  return (
    <section className="section statement" id="intro" aria-labelledby="statement-title">
      <div className="container">
        <Reveal as="h2" className="statement__title" id="statement-title">
          <span>القهوة أكثر من مجرد مشروب.</span>
          <em>إنها طقس.</em>
        </Reveal>
        <Reveal as="p" className="statement__text" delay={2}>
          نختار حبوبنا بعناية، ونحضّر كل مشروب بأيدينا، ونخبز مخبوزاتنا طازجة كل صباح، ونحافظ على مكان دافئ
          وهادئ — لتصبح كل زيارة استراحة صغيرة متقنة في يومك.
        </Reveal>
      </div>
    </section>
  )
}

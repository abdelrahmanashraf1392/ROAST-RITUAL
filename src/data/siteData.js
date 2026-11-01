import { PHOTOS } from './images'

export const externalLinkProps = (href) =>
  /^https?:\/\//.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}

export const NAV_LINKS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'المنيو', href: '#menu' },
  { label: 'عنّا', href: '#about' },
  { label: 'المعرض', href: '#gallery' },
  { label: 'زورونا', href: '#visit' },
]

export const CONTACT = {
  addressLines: ['123 شارع القهوة', 'القاهرة، مصر'],
  hours: [
    { days: 'السبت – الخميس', time: '8:00 صباحًا – 12:00 منتصف الليل' },
    { days: 'الجمعة', time: '2:00 مساءً – 12:00 منتصف الليل' },
  ],
  phone: '+20 10 0000 0000',
  phoneHref: 'tel:+201000000000',
  email: 'hello@roastandritual.com',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=123%20Coffee%20Street%20Cairo%20Egypt',
}

export const INSTAGRAM = {
  handle: '@roastandritual',
  url: 'https://www.instagram.com/roastandritual',
}

export const SOCIAL_LINKS = [
  { label: 'إنستجرام', icon: 'bi-instagram', href: INSTAGRAM.url },
  { label: 'فيسبوك', icon: 'bi-facebook', href: 'https://www.facebook.com/roastandritual' },
  { label: 'تيك توك', icon: 'bi-tiktok', href: 'https://www.tiktok.com/@roastandritual' },
]

export const FEATURES = [
  { icon: 'bi-cup-hot', label: 'قهوة مختصة' },
  { icon: 'bi-cake2', label: 'مخبوزات طازجة' },
  { icon: 'bi-wifi', label: 'واي فاي مجاني' },
  { icon: 'bi-house-heart', label: 'جلسات مريحة' },
  { icon: 'bi-egg-fried', label: 'فطور طوال اليوم' },
]

export const STATS = [
  { value: '12+', label: 'منشأ للبن' },
  { value: '8', label: 'مشروبات مميزة' },
  { value: '4.9', label: 'تقييم العملاء' },
]

// `layout` shapes the asymmetric grid; see .gallery-grid in index.css.
export const GALLERY = [
  { id: 'latte-art', photo: PHOTOS.latteArt, alt: 'فن اللاتيه في فنجان سيراميك', caption: 'فن اللاتيه', layout: 'tall' },
  { id: 'espresso-machine', photo: PHOTOS.espressoMachine, alt: 'ماكينة إسبريسو أثناء تحضير شوت', caption: 'الماكينة', layout: '' },
  { id: 'interior', photo: PHOTOS.interiorWide, alt: 'مقهى بإضاءة دافئة وطاولات خشبية', caption: 'المكان', layout: 'wide' },
  { id: 'barista', photo: PHOTOS.barista, alt: 'باريستا يحضّر القهوة عند البار', caption: 'عند البار', layout: '' },
  { id: 'pastries', photo: PHOTOS.pastries, alt: 'كرواسون مخبوز طازج', caption: 'مخبوزات الصباح', layout: '' },
  { id: 'customers', photo: PHOTOS.customers, alt: 'أصدقاء يتشاركون القهوة حول طاولة', caption: 'رفقة طيبة', layout: 'tall' },
  { id: 'exterior', photo: PHOTOS.exterior, alt: 'واجهة المقهى من الشارع', caption: 'من الخارج', layout: '' },
  { id: 'beans', photo: PHOTOS.beans, alt: 'حبوب قهوة محمّصة بجانب فنجان', caption: 'مختارة بعناية', layout: 'wide' },
]

export const REVIEWS = [
  {
    id: 'salma',
    name: 'سلمى حسن',
    role: 'زبونة منذ 2024',
    rating: 5,
    text: 'أفضل فيلفت لاتيه جربته في القاهرة. المكان هادئ، والفريق يتذكر طلبك، والمخبوزات تنفد بسرعة.',
  },
  {
    id: 'omar',
    name: 'عمر فتحي',
    role: 'مصمم مستقل',
    rating: 5,
    text: 'مكتبي الثاني. واي فاي ممتاز، وجلسات مريحة، وكولد برو تونيك يكفيني طوال العصر.',
  },
  {
    id: 'nour',
    name: 'نور خالد',
    role: 'زائرة في عطلة الأسبوع',
    rating: 5,
    text: 'تشعر أنهم يهتمون بالتفاصيل، من الحبوب إلى الأكواب. أمسيات الجمعة هنا أجمل طريقة لتهدأ قليلًا.',
  },
]

export const INSTAGRAM_POSTS = [
  { id: 'ig-1', photo: PHOTOS.latteArt, alt: 'فن اللاتيه في فنجان أبيض' },
  { id: 'ig-2', photo: PHOTOS.pastries, alt: 'كرواسون على صينية خشبية' },
  { id: 'ig-3', photo: PHOTOS.matcha, alt: 'ماتشا لاتيه مثلجة' },
  { id: 'ig-4', photo: PHOTOS.cafeTable, alt: 'قهوة على طاولة المقهى' },
  { id: 'ig-5', photo: PHOTOS.cake, alt: 'قطعة كيك' },
  { id: 'ig-6', photo: PHOTOS.interior, alt: 'مقهى تغمره أشعة الشمس' },
]

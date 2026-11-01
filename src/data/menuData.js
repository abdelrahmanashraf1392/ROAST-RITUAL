import { PHOTOS } from './images'

export const formatPrice = (price) => `${price} ج.م`

export const SIGNATURES = [
  {
    id: 'velvet-latte',
    name: 'فيلفت لاتيه',
    description: 'إسبريسو مزدوج وحليب مبخّر ناعم ولمسة من الفانيليا.',
    price: 115,
    photo: PHOTOS.velvet,
  },
  {
    id: 'iced-spanish-latte',
    name: 'سبانش لاتيه مثلج',
    description: 'إسبريسو فوق حليب بارد وكريمة مكثّفة محلّاة ببطء.',
    price: 125,
    photo: PHOTOS.icedLatte,
  },
  {
    id: 'honey-cinnamon-cappuccino',
    name: 'كابتشينو العسل والقرفة',
    description: 'عسل الأزهار البرية وقرفة دافئة ورغوة كثيفة مخملية.',
    price: 120,
    photo: PHOTOS.cinnamon,
  },
  {
    id: 'cold-brew-tonic',
    name: 'كولد برو تونيك',
    description: 'كولد برو مُخمَّر ثماني عشرة ساعة فوق التونيك وقشر البرتقال والثلج.',
    price: 130,
    photo: PHOTOS.coldBrew,
  },
  {
    id: 'pistachio-cream-latte',
    name: 'لاتيه كريمة الفستق',
    description: 'كريمة فستق محمّص مدموجة في لاتيه ناعم بنكهة المكسّرات.',
    price: 140,
    photo: PHOTOS.pistachio,
  },
  {
    id: 'classic-flat-white',
    name: 'فلات وايت كلاسيك',
    description: 'ريستريتو مزدوج ورغوة ميكروفوم، بسيط ومتقَن.',
    price: 105,
    photo: PHOTOS.flatWhite,
  },
]

export const MENU_CATEGORIES = [
  { id: 'coffee', label: 'قهوة' },
  { id: 'cold-drinks', label: 'مشروبات باردة' },
  { id: 'matcha', label: 'ماتشا' },
  { id: 'pastries', label: 'مخبوزات' },
  { id: 'desserts', label: 'حلويات' },
]

export const MENU_ITEMS = [
  { id: 'espresso', category: 'coffee', name: 'إسبريسو', description: 'خلطتنا الخاصة، قصيرة وكثيفة القوام.', price: 65 },
  { id: 'cortado', category: 'coffee', name: 'كورتادو', description: 'كميات متساوية من الإسبريسو والحليب الدافئ.', price: 90, photo: PHOTOS.barista },
  { id: 'cappuccino', category: 'coffee', name: 'كابتشينو', description: 'شوت مزدوج وحليب مبخّر وطبقة سميكة من الرغوة.', price: 100, photo: PHOTOS.cappuccino },
  { id: 'v60', category: 'coffee', name: 'قهوة V60 المقطّرة', description: 'قهوة مفلترة من أصل واحد، تُحضَّر عند الطلب.', price: 135 },
  { id: 'flat-white', category: 'coffee', name: 'فلات وايت', description: 'ريستريتو مزدوج مع ميكروفوم ناعم.', price: 105 },

  { id: 'iced-americano', category: 'cold-drinks', name: 'أمريكانو مثلج', description: 'إسبريسو مزدوج فوق الثلج والماء المفلتر.', price: 85 },
  { id: 'cold-brew', category: 'cold-drinks', name: 'كولد برو', description: 'يُنقع ثماني عشرة ساعة ويُقدَّم فوق مكعّب ثلج كبير.', price: 110, photo: PHOTOS.coldBrew },
  { id: 'iced-spanish', category: 'cold-drinks', name: 'سبانش لاتيه مثلج', description: 'إسبريسو وحليب بارد وكريمة مكثّفة محلّاة.', price: 125, photo: PHOTOS.icedLatte },
  { id: 'espresso-tonic', category: 'cold-drinks', name: 'إسبريسو تونيك', description: 'منعش، مُرّ حلو، وفوّار.', price: 120 },
  { id: 'iced-mocha', category: 'cold-drinks', name: 'موكا مثلجة', description: 'شوكولاتة داكنة وإسبريسو وحليب بارد.', price: 115 },

  { id: 'ceremonial-matcha', category: 'matcha', name: 'ماتشا احتفالية', description: 'تُخفق عند الطلب وتُقدَّم ساخنة من غير حليب.', price: 120 },
  { id: 'matcha-latte', category: 'matcha', name: 'ماتشا لاتيه', description: 'ماتشا مطحونة بالحجر مع حليب مبخّر كامل الدسم أو شوفان.', price: 115, photo: PHOTOS.matcha },
  { id: 'iced-matcha', category: 'matcha', name: 'ماتشا لاتيه مثلجة', description: 'حليب بارد وثلج وسحابة خضراء زاهية من الماتشا.', price: 120 },
  { id: 'strawberry-matcha', category: 'matcha', name: 'ماتشا بالفراولة', description: 'هريس فراولة طازجة تحت ماتشا وحليب بارد.', price: 135 },

  { id: 'butter-croissant', category: 'pastries', name: 'كرواسون بالزبدة', description: 'عجين مطوي على مدى ثلاثة أيام ويُخبز كل صباح.', price: 70, photo: PHOTOS.pastries },
  { id: 'pain-au-chocolat', category: 'pastries', name: 'بان أو شوكولا', description: 'قطعتان من الشوكولاتة الداكنة في عجينة هشّة.', price: 85 },
  { id: 'almond-croissant', category: 'pastries', name: 'كرواسون اللوز', description: 'يُخبز مرتين بحشوة فرانجيبان ولوز محمّص.', price: 95 },
  { id: 'cardamom-bun', category: 'pastries', name: 'كعكة الهيل', description: 'طرية ولزجة بنكهة هيل خفيفة.', price: 75 },
  { id: 'sourdough-toastie', category: 'pastries', name: 'توست الجبن', description: 'خبز ساوردو مع شيدر معتّق وموتزاريلا.', price: 110 },

  { id: 'basque-cheesecake', category: 'desserts', name: 'تشيز كيك باسك', description: 'محروق من الأعلى وكريمي من الداخل.', price: 125, photo: PHOTOS.cake },
  { id: 'tiramisu', category: 'desserts', name: 'تيراميسو بالإسبريسو', description: 'ماسكاربوني وإسفنج منقوع بالإسبريسو وكاكاو.', price: 120 },
  { id: 'pistachio-cake', category: 'desserts', name: 'كيكة الفستق', description: 'قوام رطب مع كريمة الفستق.', price: 115 },
  { id: 'brownie', category: 'desserts', name: 'براوني الشوكولاتة الداكنة', description: 'غنيّ وطري مع رشّة ملح بحري.', price: 85 },
]

const IMAGE_HOST = 'https://images.unsplash.com'

export const DEFAULT_WIDTHS = [480, 800, 1200, 1600]

export const photoUrl = (photo, width) =>
  `${IMAGE_HOST}/${photo}?auto=format&fit=crop&q=75&w=${width}`

export const photoSrcSet = (photo, widths = DEFAULT_WIDTHS) =>
  widths.map((width) => `${photoUrl(photo, width)} ${width}w`).join(', ')

// Unsplash photo IDs. Swap any of these for your own photography.
export const PHOTOS = {
  hero: 'photo-1445116572660-236099ec97a0',
  interior: 'photo-1554118811-1e0d58224f24',
  interiorWide: 'photo-1501339847302-ac426a4a7cbb',
  exterior: 'photo-1559925393-8be0ec4767c8',
  latteArt: 'photo-1514432324607-a09d9b4aefdd',
  espressoMachine: 'photo-1453614512568-c4024d13c247',
  barista: 'photo-1442512595331-e89e73853f31',
  pastries: 'photo-1555507036-ab1f4038808a',
  customers: 'photo-1521017432531-fbd92d768814',
  beans: 'photo-1447933601403-0c6688de566e',
  coldBrew: 'photo-1461023058943-07fcbe16d735',
  icedLatte: 'photo-1517701604599-bb29b565090c',
  matcha: 'photo-1515823064-d6e0c04616a7',
  pistachio: 'photo-1536256263959-770b48d82b0a',
  cake: 'photo-1578985545062-69928b1d9587',
  flatWhite: 'photo-1509042239860-f550ce710b93',
  cappuccino: 'photo-1572442388796-11668a67e53d',
  velvet: 'photo-1511920170033-f8396924c348',
  cinnamon: 'photo-1497935586351-b67a49e012bf',
  cafeTable: 'photo-1495474472287-4d71bcdd2085',
}

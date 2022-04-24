import { v4 as uuidv4 } from 'uuid';

export const PRODUCT = {
  sushi: [
    {
      name: 'Сет Половинки',
      price: 44.90,
      discount: 39.90,
      img: 'https://yummy-gomel.by/wp-content/uploads/2021/02/img_5523-300x300.jpg',
      composition: 'Филадельфия, 1/2 Вулкан Hot, 1/2 Бонито, 1/2 Сёгун, 1/2 Чизик, 1/2 Филадельфия Грин, Маки с креветкой, маки с огурцом',
      id: uuidv4()
    },
    {
      name: 'Сет Гурман',
      price: 44.90,
      discount: 43.90,
      img: 'https://yummy-gomel.by/wp-content/uploads/2020/05/1.-gurman-300x300.jpg',
      composition: 'Филадельфия, Калифорния, Тайский, Тори',
      id: uuidv4()
    },
    {
      name: 'Сет Для особого случая',
      price: 59.90,
      discount: 52.90,
      img: 'https://yummy-gomel.by/wp-content/uploads/2020/05/15.-dlya-osobogo-sluchaya-300x300.jpg',
      composition: 'Филадельфия VIP, Канада Чиз, Акари, Калифорния Магуро',
      id: uuidv4()
    },
    {
      name: 'Сет За Эбись',
      price: 56.90,
      discount: 50.90,
      img: 'https://yummy-gomel.by/wp-content/uploads/2020/05/20.-za-ebis-set-300x300.jpg',
      composition: 'Филадельфия VIP, Канада Чиз, Акари, Калифорния Магуро',
      id: uuidv4()
    },
  ],
  pizza: [
    {
      name: 'Пицца Казацкая',
      price: 16.90,
      discount: null,
      img: 'https://yummy-gomel.by/wp-content/uploads/2020/05/96-300x300.jpg',
      composition: 'Ветчина, салями, куриное филе, колбаски «Охотничьи», шампиньоны, оливки, петрушка, сыр «Моцарелла».',
      id: uuidv4()
    },
    {
      name: 'Пицца Суприм',
      price: 16.90,
      discount: null,
      img: 'https://yummy-gomel.by/wp-content/uploads/2020/05/96-300x300.jpg',
      composition: 'Салями, карбонат, куриное филе, шампиньоны, перец болгарский, лук красный, сыр «Моцарелла», сыр «Пармезан», чеснок сушеный, петрушка.',
      id: uuidv4()
    },
    {
      name: 'Пицца 4 сезона',
      price: 15.90,
      discount: 14.90,
      img: 'https://yummy-gomel.by/wp-content/uploads/2020/05/92-300x300.jpg',
      composition: 'Ветчина, салями, куриное филе, шампиньоны, черри, ананасы, маслины, сыр «Моцарелла», сыр «Фету».',
      id: uuidv4()
    },
    {
      name: 'Пицца Аль-Каппоне',
      price: 15.90,
      discount: 14.90,
      img: 'https://yummy-gomel.by/wp-content/uploads/2020/05/90-300x300.jpg',
      composition: 'Салями, сервелат, колбаски «Охотничьи», томат, шампиньоны, перец болгарский, соленый огурец, петрушка, сыр «Моцарелла».',
      id: uuidv4()
    },
  ]
}
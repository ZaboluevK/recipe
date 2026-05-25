// ═══════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════
const CATEGORIES = ['🍲 Супы','🥗 Салаты','🍝 Паста','🍖 Мясо','🐟 Рыба','🥞 Выпечка','🥘 Рагу','🍰 Десерты'];
const CUISINES   = ['🇷🇺 Русская','🇮🇹 Итальянская','🇫🇷 Французская','🇯🇵 Японская','🇬🇪 Грузинская','🥗 Средиземноморская'];
const DIETS      = ['Вегетарианское','Веганское','Без глютена','Без лактозы','Диетическое'];

const RECIPES = [
  {
    id:1, title:'Борщ классический', emoji:'🍲', cat:'🍲 Супы', cuisine:'🇷🇺 Русская',
    time:90, servings:6, rating:4.8, reviews:312,
    kcal:210, proteins:12, fats:8, carbs:24,
    tags:[], diet:[],
    desc:'Насыщенный красный борщ с говядиной, свёклой и свежей сметаной. Рецепт передаётся из поколения в поколение.',
    ingredients:[
      {name:'Говядина (лопатка)',unit:'г',amount:600},
      {name:'Свёкла',unit:'г',amount:300},
      {name:'Капуста белокочанная',unit:'г',amount:400},
      {name:'Картофель',unit:'шт',amount:3},
      {name:'Морковь',unit:'шт',amount:1},
      {name:'Лук репчатый',unit:'шт',amount:1},
      {name:'Томатная паста',unit:'ст. л.',amount:2},
      {name:'Сметана',unit:'г',amount:100},
      {name:'Соль, перец',unit:'по вкусу',amount:0},
    ],
    steps:[
      'Залить говядину холодной водой, довести до кипения, снять пену. Варить на слабом огне 1,5 часа.',
      'Свёклу натереть на крупной тёрке, потушить 10 минут с томатной пастой и ложкой уксуса.',
      'Картофель нарезать кубиком и добавить в бульон, варить 10 минут.',
      'Добавить нашинкованную капусту и тушёную свёклу. Варить ещё 10 минут.',
      'Обжарить лук и морковь до золотистого цвета, добавить в борщ.',
      'Посолить, поперчить. Подавать со сметаной и зеленью.',
    ],
    group:'Первые блюда',
  },
  {
    id:2, title:'Паста Карбонара', emoji:'🍝', cat:'🍝 Паста', cuisine:'🇮🇹 Итальянская',
    time:25, servings:2, rating:4.9, reviews:541,
    kcal:520, proteins:22, fats:18, carbs:68,
    tags:['Быстро'], diet:[],
    desc:'Классическая итальянская паста со сливочным соусом из яиц, пармезана и гуанчале.',
    ingredients:[
      {name:'Спагетти',unit:'г',amount:200},
      {name:'Гуанчале или бекон',unit:'г',amount:150},
      {name:'Яйца',unit:'шт',amount:3},
      {name:'Пармезан тёртый',unit:'г',amount:80},
      {name:'Чёрный перец',unit:'щепотка',amount:1},
      {name:'Соль',unit:'по вкусу',amount:0},
    ],
    steps:[
      'Отварить спагетти в подсолённой воде до состояния al dente. Сохранить 200 мл воды.',
      'Обжарить гуанчале кубиком без масла до хрустящей корочки.',
      'Смешать яйца с тёртым пармезаном и чёрным перцем до однородной смеси.',
      'Горячие спагетти смешать с гуанчале. Снять с огня, добавить яичную смесь.',
      'Быстро перемешать, разбавляя водой от пасты до кремовой консистенции.',
    ],
    group:'Паста',
  },
  {
    id:3, title:'Греческий салат', emoji:'🥗', cat:'🥗 Салаты', cuisine:'🥗 Средиземноморская',
    time:15, servings:4, rating:4.6, reviews:198,
    kcal:185, proteins:7, fats:13, carbs:12,
    tags:['Быстро','Лёгкий'], diet:['Вегетарианское','Без глютена'],
    desc:'Свежий средиземноморский салат с сыром фета, маслинами и оливковым маслом.',
    ingredients:[
      {name:'Помидоры',unit:'г',amount:400},
      {name:'Огурцы',unit:'г',amount:300},
      {name:'Болгарский перец',unit:'шт',amount:1},
      {name:'Красный лук',unit:'шт',amount:0.5},
      {name:'Сыр фета',unit:'г',amount:200},
      {name:'Маслины без косточек',unit:'г',amount:100},
      {name:'Оливковое масло',unit:'мл',amount:60},
      {name:'Орегано',unit:'ч. л.',amount:1},
    ],
    steps:[
      'Нарезать помидоры и огурцы крупными кусками, перец — полукольцами.',
      'Лук нарезать тонкими полукольцами.',
      'Выложить овощи в миску, добавить маслины и кусочки феты.',
      'Полить оливковым маслом, посыпать орегано. Не перемешивать.',
    ],
    group:'Салаты',
  },
  {
    id:4, title:'Стейк из лосося', emoji:'🐟', cat:'🐟 Рыба', cuisine:'🇫🇷 Французская',
    time:20, servings:2, rating:4.7, reviews:176,
    kcal:320, proteins:34, fats:18, carbs:4,
    tags:['Быстро'], diet:['Без глютена'],
    desc:'Сочный стейк из лосося с лимонно-травяным маринадом, поданный с хрустящей корочкой.',
    ingredients:[
      {name:'Стейк лосося',unit:'г',amount:400},
      {name:'Лимон',unit:'шт',amount:1},
      {name:'Оливковое масло',unit:'ст. л.',amount:2},
      {name:'Тимьян свежий',unit:'веточки',amount:3},
      {name:'Чеснок',unit:'зубчики',amount:2},
      {name:'Соль, перец',unit:'по вкусу',amount:0},
    ],
    steps:[
      'Стейки промокнуть бумажным полотенцем, посолить и поперчить с обеих сторон.',
      'Разогреть сковороду с оливковым маслом на сильном огне.',
      'Обжарить лосось 3–4 минуты с каждой стороны не переворачивая лишний раз.',
      'В конце добавить тимьян, чеснок и ломтики лимона. Полить маслом из сковороды.',
    ],
    group:'Рыба и морепродукты',
  },
  {
    id:5, title:'Хачапури по-аджарски', emoji:'🥖', cat:'🥞 Выпечка', cuisine:'🇬🇪 Грузинская',
    time:60, servings:2, rating:4.9, reviews:403,
    kcal:580, proteins:24, fats:28, carbs:58,
    tags:[], diet:['Вегетарианское'],
    desc:'Открытый хлебный пирог с сулугуни и яйцом — визитная карточка грузинской кухни.',
    ingredients:[
      {name:'Мука пшеничная',unit:'г',amount:500},
      {name:'Дрожжи сухие',unit:'ч. л.',amount:1.5},
      {name:'Сулугуни',unit:'г',amount:400},
      {name:'Сливочное масло',unit:'г',amount:50},
      {name:'Яйца',unit:'шт',amount:3},
      {name:'Молоко',unit:'мл',amount:200},
      {name:'Соль',unit:'ч. л.',amount:1},
    ],
    steps:[
      'Замесить дрожжевое тесто: мука, дрожжи, соль, тёплое молоко. Оставить на 40 минут.',
      'Сулугуни натереть на тёрке, смешать с 1 яйцом и маслом.',
      'Раскатать тесто, сформировать «лодочки». Наполнить сырной начинкой.',
      'Выпекать при 220°C 15–18 минут.',
      'В центр каждой лодочки разбить яйцо и выпекать ещё 3–4 минуты.',
    ],
    group:'Выпечка',
  },
  {
    id:6, title:'Суп-пюре из тыквы', emoji:'🎃', cat:'🍲 Супы', cuisine:'🥗 Средиземноморская',
    time:40, servings:4, rating:4.5, reviews:221,
    kcal:145, proteins:4, fats:6, carbs:22,
    tags:['Лёгкий'], diet:['Вегетарианское','Веганское','Без глютена','Без лактозы'],
    desc:'Нежный и ароматный тыквенный суп-пюре с имбирём и кокосовым молоком.',
    ingredients:[
      {name:'Тыква',unit:'г',amount:800},
      {name:'Лук репчатый',unit:'шт',amount:1},
      {name:'Имбирь свежий',unit:'см',amount:3},
      {name:'Кокосовое молоко',unit:'мл',amount:200},
      {name:'Овощной бульон',unit:'мл',amount:500},
      {name:'Оливковое масло',unit:'ст. л.',amount:2},
      {name:'Куркума',unit:'ч. л.',amount:0.5},
    ],
    steps:[
      'Тыкву и лук нарезать кубиком. Обжарить лук в масле до мягкости.',
      'Добавить тыкву, имбирь и куркуму. Обжарить 5 минут.',
      'Залить бульоном и варить 20 минут до мягкости тыквы.',
      'Добавить кокосовое молоко. Пробить блендером до однородной консистенции.',
      'Посолить, при необходимости разбавить бульоном. Подавать со сметаной или семенами.',
    ],
    group:'Первые блюда',
  },
  {
    id:7, title:'Тирамису', emoji:'🍰', cat:'🍰 Десерты', cuisine:'🇮🇹 Итальянская',
    time:30, servings:6, rating:4.9, reviews:487,
    kcal:380, proteins:8, fats:22, carbs:38,
    tags:[], diet:['Вегетарианское'],
    desc:'Классический итальянский десерт из савоярди, маскарпоне и кофейного сиропа.',
    ingredients:[
      {name:'Маскарпоне',unit:'г',amount:500},
      {name:'Яйца',unit:'шт',amount:4},
      {name:'Сахарная пудра',unit:'г',amount:120},
      {name:'Печенье савоярди',unit:'г',amount:250},
      {name:'Эспрессо крепкий',unit:'мл',amount:250},
      {name:'Какао-порошок',unit:'ст. л.',amount:2},
    ],
    steps:[
      'Разделить яйца. Желтки взбить с сахарной пудрой до белой пены.',
      'Добавить маскарпоне и взбить до однородности.',
      'Белки взбить в крепкую пену и аккуратно вмешать в крем.',
      'Савоярди быстро окунуть в остывший кофе. Выложить слоем в форму.',
      'Покрыть половиной крема. Повторить слои. Посыпать какао.',
      'Убрать в холодильник минимум на 4 часа.',
    ],
    group:'Десерты',
  },
  {
    id:8, title:'Чахохбили из курицы', emoji:'🍗', cat:'🥘 Рагу', cuisine:'🇬🇪 Грузинская',
    time:55, servings:4, rating:4.7, reviews:289,
    kcal:285, proteins:32, fats:12, carbs:14,
    tags:[], diet:['Без глютена'],
    desc:'Пряное грузинское рагу из курицы с помидорами, кинзой и обилием специй.',
    ingredients:[
      {name:'Курица (части)',unit:'кг',amount:1.2},
      {name:'Помидоры',unit:'г',amount:500},
      {name:'Лук репчатый',unit:'шт',amount:2},
      {name:'Кинза свежая',unit:'пучок',amount:1},
      {name:'Чеснок',unit:'зубчики',amount:4},
      {name:'Хмели-сунели',unit:'ч. л.',amount:1.5},
      {name:'Аджика',unit:'ч. л.',amount:1},
    ],
    steps:[
      'Кусочки курицы обжарить на сухой сковороде без масла до румяной корочки.',
      'Добавить нарезанный лук, продолжать обжарку 5 минут.',
      'Помидоры очистить от кожицы, добавить к курице. Тушить 20 минут.',
      'Добавить чеснок, хмели-сунели и аджику. Тушить ещё 10 минут.',
      'В конце добавить рубленую кинзу, посолить.',
    ],
    group:'Горячие блюда',
  },
  {
    id:9, title:'Нигири с лососем', emoji:'🍣', cat:'🍖 Мясо', cuisine:'🇯🇵 Японская',
    time:45, servings:4, rating:4.6, reviews:163,
    kcal:195, proteins:14, fats:5, carbs:26,
    tags:[], diet:['Без глютена'],
    desc:'Классические японские нигири с рисом для суши и свежим лососем.',
    ingredients:[
      {name:'Рис для суши',unit:'г',amount:300},
      {name:'Лосось свежий',unit:'г',amount:300},
      {name:'Рисовый уксус',unit:'мл',amount:60},
      {name:'Соевый соус',unit:'мл',amount:50},
      {name:'Имбирь маринованный',unit:'г',amount:50},
      {name:'Васаби',unit:'г',amount:20},
    ],
    steps:[
      'Промыть рис до прозрачной воды. Сварить с соотношением 1:1,1.',
      'Горячий рис заправить смесью уксуса, сахара и соли.',
      'Лосось нарезать ломтиками 5×3 см, толщиной 5 мм.',
      'Слепить из риса продолговатые колобки влажными руками.',
      'На каждый колобок положить щепотку васаби и ломтик лосося.',
    ],
    group:'Японская кухня',
  },
  {
    id:10, title:'Овощной рататуй', emoji:'🍅', cat:'🥘 Рагу', cuisine:'🇫🇷 Французская',
    time:75, servings:6, rating:4.4, reviews:134,
    kcal:120, proteins:4, fats:5, carbs:16,
    tags:['Лёгкий'], diet:['Вегетарианское','Веганское','Без глютена','Без лактозы','Диетическое'],
    desc:'Провансальское овощное рагу из кабачков, баклажанов и помидоров.',
    ingredients:[
      {name:'Кабачок',unit:'шт',amount:2},
      {name:'Баклажан',unit:'шт',amount:1},
      {name:'Помидоры',unit:'шт',amount:4},
      {name:'Болгарский перец',unit:'шт',amount:2},
      {name:'Лук репчатый',unit:'шт',amount:1},
      {name:'Чеснок',unit:'зубчики',amount:3},
      {name:'Оливковое масло',unit:'мл',amount:50},
      {name:'Прованские травы',unit:'ч. л.',amount:2},
    ],
    steps:[
      'Все овощи нарезать тонкими кружочками (3–4 мм).',
      'Лук и чеснок обжарить в масле. Половину помидоров пробить блендером — томатный соус.',
      'Смазать дно формы соусом. Выложить кружочки овощей внахлёст по спирали.',
      'Сбрызнуть маслом, посыпать травами. Накрыть фольгой.',
      'Запекать при 180°C 45–60 минут. Снять фольгу на последние 15 минут.',
    ],
    group:'Горячие блюда',
  },
  {
    id:11, title:'Блины на молоке', emoji:'🥞', cat:'🥞 Выпечка', cuisine:'🇷🇺 Русская',
    time:30, servings:4, rating:4.7, reviews:356,
    kcal:220, proteins:8, fats:7, carbs:32,
    tags:['Быстро'], diet:['Вегетарианское'],
    desc:'Тонкие русские блины на молоке — нежные, с ажурными краями.',
    ingredients:[
      {name:'Молоко',unit:'мл',amount:500},
      {name:'Мука',unit:'г',amount:200},
      {name:'Яйца',unit:'шт',amount:2},
      {name:'Сливочное масло',unit:'г',amount:30},
      {name:'Сахар',unit:'ст. л.',amount:1},
      {name:'Соль',unit:'щепотка',amount:1},
    ],
    steps:[
      'Взбить яйца с сахаром и щепоткой соли.',
      'Добавить половину молока. Всыпать просеянную муку, перемешать до однородности.',
      'Добавить оставшееся молоко и растопленное масло.',
      'Выпекать на раскалённой сковороде по 1–1,5 минуты с каждой стороны.',
    ],
    group:'Завтраки',
  },
  {
    id:12, title:'Цезарь с курицей', emoji:'🥗', cat:'🥗 Салаты', cuisine:'🇫🇷 Французская',
    time:25, servings:2, rating:4.6, reviews:267,
    kcal:340, proteins:28, fats:16, carbs:22,
    tags:['Быстро'], diet:[],
    desc:'Классический салат Цезарь с хрустящими гренками, куриным филе и соусом.',
    ingredients:[
      {name:'Куриное филе',unit:'г',amount:300},
      {name:'Листья романо',unit:'г',amount:200},
      {name:'Пармезан',unit:'г',amount:60},
      {name:'Хлеб для гренков',unit:'кусков',amount:3},
      {name:'Соус Цезарь',unit:'мл',amount:80},
      {name:'Оливковое масло',unit:'ст. л.',amount:2},
    ],
    steps:[
      'Куриное филе посолить, обжарить 5–6 минут с каждой стороны. Дать остыть, нарезать.',
      'Хлеб нарезать кубиком, обжарить на масле с чесноком до золотистого цвета.',
      'Листья романо нарвать руками.',
      'Смешать листья с соусом. Добавить курицу, гренки, стружку пармезана.',
    ],
    group:'Салаты',
  },
];

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let state = {
  user: null,
  favourites: new Set(),
  cart: [],      // [{id, title, emoji, ing: [{name,amount,unit}] }]
  currentRecipe: null,
  currentPortions: 4,
  searchQuery: '',
  filters: { cat: null, cuisine: null, diet: null, time: 120, kcal: 900 },
  searchResults: [...RECIPES],
};

// ═══════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + (id === 'favourites' ? 'favourites' : id)).classList.add('active');
  window.scrollTo(0,0);
  if (id === 'home') renderHome();
  if (id === 'search') renderSearch();
  if (id === 'favourites') renderFavourites();
  if (id === 'shopping') renderShopping();
  if (id === 'profile') renderProfile();
}

// ═══════════════════════════════════════════
//  RENDER HOME
// ═══════════════════════════════════════════
function renderHome() {
  // Category pills
  const catsEl = document.getElementById('home-cats');
  catsEl.innerHTML = '';
  CATEGORIES.forEach(c => {
    const el = document.createElement('div');
    el.className = 'cat-pill';
    el.textContent = c;
    el.onclick = () => { state.filters.cat = c; showPage('search'); };
    catsEl.appendChild(el);
  });

  // Featured
  const featured = RECIPES.filter((_,i) => i < 4);
  document.getElementById('home-featured').innerHTML = featured.map(r => recipeCardHTML(r)).join('');

  // Quick
  const quick = RECIPES.filter(r => r.time <= 30).slice(0,4);
  document.getElementById('home-quick').innerHTML = quick.map(r => recipeCardHTML(r)).join('');

  // World
  const world = RECIPES.filter(r => r.cuisine !== '🇷🇺 Русская').slice(0,4);
  document.getElementById('home-world').innerHTML = world.map(r => recipeCardHTML(r)).join('');
}

// ═══════════════════════════════════════════
//  RECIPE CARD HTML
// ═══════════════════════════════════════════
function recipeCardHTML(r) {
  const saved = state.favourites.has(r.id);
  const stars = '★'.repeat(Math.round(r.rating)) + '☆'.repeat(5 - Math.round(r.rating));
  return `<div class="recipe-card" onclick="openRecipe(${r.id})">
    <div class="card-img">
      ${r.emoji}
      <div class="card-fav ${saved ? 'saved' : ''}" onclick="event.stopPropagation();toggleFavCard(${r.id},this)">
        ${saved ? '❤️' : '♡'}
      </div>
    </div>
    <div class="card-body">
      <div class="card-title">${r.title}</div>
      <div class="card-meta">
        <span>⏱ ${r.time} мин</span>
        <span>🔥 ${r.kcal} ккал</span>
        <span class="card-stars">${stars}</span>
      </div>
      <div class="card-meta" style="margin-top:6px">
        <span class="card-tag">${r.cat}</span>
        ${r.diet.includes('Вегетарианское') ? '<span class="card-tag" style="background:#E8F5E9;color:#2E7D32">🌿 Вег</span>' : ''}
      </div>
      <div class="card-actions">
        <button class="card-btn" onclick="event.stopPropagation();openRecipe(${r.id})">Подробнее</button>
        <button class="card-btn cart" onclick="event.stopPropagation();addToCartDirect(${r.id})">🛒</button>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════
//  SEARCH
// ═══════════════════════════════════════════
function handleSearchInput(val) {
  state.searchQuery = val;
  if (document.getElementById('page-search').classList.contains('active')) {
    applyFilters();
  }
}

function doSearch() {
  showPage('search');
  document.getElementById('header-search').value = state.searchQuery;
  applyFilters();
}

function renderSearch() {
  // Filter tags
  ['cat','cuisine','diet'].forEach((type, i) => {
    const id = ['filter-cat','filter-cuisine','filter-diet'][i];
    const arr = [CATEGORIES, CUISINES, DIETS][i];
    const el = document.getElementById(id);
    el.innerHTML = arr.map(v => `<div class="filter-tag ${state.filters[type]===v?'on':''}" onclick="toggleFilter('${type}','${v}',this)">${v}</div>`).join('');
  });
  applyFilters();
}

function toggleFilter(type, val, el) {
  if (state.filters[type] === val) {
    state.filters[type] = null;
    el.classList.remove('on');
  } else {
    document.querySelectorAll(`#filter-${type === 'cat' ? 'cat' : type === 'cuisine' ? 'cuisine' : 'diet'} .filter-tag`).forEach(e => e.classList.remove('on'));
    state.filters[type] = val;
    el.classList.add('on');
  }
  applyFilters();
}

function applyFilters() {
  const q = (document.getElementById('header-search').value || '').toLowerCase();
  const sort = document.getElementById('sort-select').value;
  const maxTime = parseInt(document.getElementById('filter-time').value);
  const maxKcal = parseInt(document.getElementById('filter-kcal').value);

  let results = RECIPES.filter(r => {
    if (q && !r.title.toLowerCase().includes(q) &&
        !r.ingredients.some(i => i.name.toLowerCase().includes(q)) &&
        !r.desc.toLowerCase().includes(q)) return false;
    if (state.filters.cat && r.cat !== state.filters.cat) return false;
    if (state.filters.cuisine && r.cuisine !== state.filters.cuisine) return false;
    if (state.filters.diet && !r.diet.includes(state.filters.diet)) return false;
    if (r.time > maxTime) return false;
    if (r.kcal > maxKcal) return false;
    return true;
  });

  if (sort === 'rating') results.sort((a,b) => b.rating - a.rating);
  if (sort === 'time')   results.sort((a,b) => a.time - b.time);
  if (sort === 'kcal')   results.sort((a,b) => a.kcal - b.kcal);

  document.getElementById('results-count').textContent = `Найдено: ${results.length} рецептов`;

  const el = document.getElementById('search-results');
  if (results.length === 0) {
    el.innerHTML = `<div class="no-results" style="grid-column:1/-1">
      <div class="emoji">🤷</div>
      <div style="font-size:16px;font-weight:700;margin-bottom:6px">Ничего не найдено</div>
      <div>Попробуйте изменить фильтры или поисковый запрос</div>
    </div>`;
  } else {
    el.innerHTML = results.map(r => recipeCardHTML(r)).join('');
  }
}

function resetFilters() {
  state.filters = { cat: null, cuisine: null, diet: null, time: 120, kcal: 900 };
  document.getElementById('filter-time').value = 120;
  document.getElementById('filter-kcal').value = 900;
  document.getElementById('time-val').textContent = 120;
  document.getElementById('kcal-val').textContent = 900;
  document.querySelectorAll('.filter-tag').forEach(e => e.classList.remove('on'));
  applyFilters();
}

// ═══════════════════════════════════════════
//  RECIPE PAGE
// ═══════════════════════════════════════════
function openRecipe(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;
  state.currentRecipe = r;
  state.currentPortions = r.servings;

  document.getElementById('recipe-bc').textContent = r.title;
  document.getElementById('recipe-emoji-hero').textContent = r.emoji;
  document.getElementById('recipe-title-main').textContent = r.title;

  const stars = '★'.repeat(Math.round(r.rating)) + '☆'.repeat(5 - Math.round(r.rating));
  document.getElementById('recipe-stars-main').textContent = stars;
  document.getElementById('recipe-reviews').textContent = `(${r.reviews} отзывов)`;
  document.getElementById('recipe-tag-cat').textContent = r.cat;

  document.getElementById('recipe-meta-row').innerHTML = `
    <div class="meta-chip"><span class="icon">⏱</span>${r.time} мин</div>
    <div class="meta-chip"><span class="icon">👥</span>${r.servings} порции</div>
    <div class="meta-chip"><span class="icon">🔥</span>${r.kcal} ккал/порция</div>
    <div class="meta-chip"><span class="icon">🌍</span>${r.cuisine}</div>
    ${r.diet.map(d => `<div class="meta-chip" style="background:#E8F5E9;color:#2E7D32"><span class="icon">🌿</span>${d}</div>`).join('')}
  `;

  document.getElementById('portions-num').textContent = state.currentPortions;
  renderIngredients();
  renderSteps(r);
  renderKBJU(r);

  // fav btn
  const favBtn = document.getElementById('fav-recipe-btn');
  const saved = state.favourites.has(r.id);
  favBtn.className = `big-btn fav mt16 ${saved ? 'on' : ''}`;
  favBtn.textContent = saved ? '❤️ В избранном' : '♡ В избранное';

  // sidebar kbju
  document.getElementById('sidebar-kbju').innerHTML = `
    <div class="kbju-item"><div class="kbju-val">${r.kcal}</div><div class="kbju-lbl">ккал</div></div>
    <div class="kbju-item"><div class="kbju-val">${r.proteins}г</div><div class="kbju-lbl">Белки</div></div>
    <div class="kbju-item"><div class="kbju-val">${r.fats}г</div><div class="kbju-lbl">Жиры</div></div>
    <div class="kbju-item"><div class="kbju-val">${r.carbs}г</div><div class="kbju-lbl">Углеводы</div></div>
  `;

  // reset tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  document.querySelectorAll('.tab')[0].classList.add('on');
  document.getElementById('tab-ingredients').style.display = '';
  document.getElementById('tab-steps').style.display = 'none';
  document.getElementById('tab-kbju').style.display = 'none';

  showPage('recipe');
}

function renderIngredients() {
  const r = state.currentRecipe;
  const ratio = state.currentPortions / r.servings;
  const rows = r.ingredients.map(i => {
    const amt = i.amount ? (i.amount * ratio % 1 === 0 ? i.amount * ratio : (i.amount * ratio).toFixed(1)) : '';
    return `<div class="ing-row"><span class="ing-name">${i.name}</span><span class="ing-amount">${amt ? amt + ' ' + i.unit : i.unit}</span></div>`;
  }).join('');

  document.getElementById('sidebar-ingredients').innerHTML = rows;

  // tab-ingredients table
  document.getElementById('tab-ingredients').innerHTML = `
    <div style="background:var(--surface);border-radius:var(--r);border:1px solid var(--border);overflow:hidden">
      ${r.ingredients.map(i => {
        const amt = i.amount ? (i.amount * ratio % 1 === 0 ? i.amount * ratio : (i.amount * ratio).toFixed(1)) : '';
        return `<div class="ing-row" style="padding:10px 16px">
          <span>${i.name}</span>
          <span class="ing-amount">${amt ? amt + ' ' + i.unit : i.unit}</span>
        </div>`;
      }).join('')}
    </div>
  `;
}

function renderSteps(r) {
  document.getElementById('tab-steps').innerHTML = `<ol class="steps-list">` +
    r.steps.map((s,i) => `<li class="step-item">
      <div class="step-num">${i+1}</div>
      <div class="step-text">${s}</div>
    </li>`).join('') + `</ol>`;
}

function renderKBJU(r) {
  const ratio = state.currentPortions / r.servings;
  document.getElementById('tab-kbju').innerHTML = `
    <div class="kbju-grid" style="grid-template-columns:repeat(4,1fr)">
      <div class="kbju-item"><div class="kbju-val">${Math.round(r.kcal*ratio)}</div><div class="kbju-lbl">ккал</div></div>
      <div class="kbju-item"><div class="kbju-val">${Math.round(r.proteins*ratio)}г</div><div class="kbju-lbl">Белки</div></div>
      <div class="kbju-item"><div class="kbju-val">${Math.round(r.fats*ratio)}г</div><div class="kbju-lbl">Жиры</div></div>
      <div class="kbju-item"><div class="kbju-val">${Math.round(r.carbs*ratio)}г</div><div class="kbju-lbl">Углеводы</div></div>
    </div>
    <p style="font-size:13px;color:var(--text2);margin-top:12px">Значения рассчитаны для ${state.currentPortions} порций</p>
  `;
}

function changePortion(delta) {
  state.currentPortions = Math.max(1, Math.min(20, state.currentPortions + delta));
  document.getElementById('portions-num').textContent = state.currentPortions;
  renderIngredients();
  renderKBJU(state.currentRecipe);
}

function switchTab(name, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
  ['tab-ingredients','tab-steps','tab-kbju'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById('tab-' + name).style.display = '';
}

// ═══════════════════════════════════════════
//  FAVOURITES
// ═══════════════════════════════════════════
function toggleFav() {
  if (!state.user) { openModal('login'); return; }
  const r = state.currentRecipe;
  if (state.favourites.has(r.id)) {
    state.favourites.delete(r.id);
    toast('Удалено из избранного');
  } else {
    state.favourites.add(r.id);
    toast('Добавлено в избранное ❤️', true);
  }
  const saved = state.favourites.has(r.id);
  const btn = document.getElementById('fav-recipe-btn');
  btn.className = `big-btn fav mt16 ${saved ? 'on' : ''}`;
  btn.textContent = saved ? '❤️ В избранном' : '♡ В избранное';
  updateBadges();
}

function toggleFavCard(id, el) {
  if (!state.user) { openModal('login'); return; }
  if (state.favourites.has(id)) {
    state.favourites.delete(id);
    el.classList.remove('saved');
    el.textContent = '♡';
    toast('Удалено из избранного');
  } else {
    state.favourites.add(id);
    el.classList.add('saved');
    el.textContent = '❤️';
    toast('Добавлено в избранное ❤️', true);
  }
  updateBadges();
}

function renderFavourites() {
  const el = document.getElementById('fav-content');
  const ids = [...state.favourites];
  document.getElementById('fav-count-label').textContent = ids.length ? `${ids.length} рецептов` : '';
  if (ids.length === 0) {
    el.innerHTML = `<div class="fav-empty">
      <div class="emoji">🤍</div>
      <h2>Избранное пусто</h2>
      <p>Добавляйте рецепты нажатием на ♡</p>
      <button class="btn btn-fill" style="margin-top:20px" onclick="showPage('search')">Найти рецепты</button>
    </div>`;
    return;
  }
  const recipes = RECIPES.filter(r => ids.includes(r.id));
  el.innerHTML = `<div class="cards-grid">${recipes.map(r => recipeCardHTML(r)).join('')}</div>`;
}

// ═══════════════════════════════════════════
//  SHOPPING LIST
// ═══════════════════════════════════════════
function addToCartDirect(id) {
  if (!state.user) { openModal('login'); return; }
  const r = RECIPES.find(x => x.id === id);
  mergeCart(r, r.servings);
  toast('Ингредиенты добавлены в список 🛒', true);
  updateBadges();
}

function addToCart() {
  if (!state.user) { openModal('login'); return; }
  const r = state.currentRecipe;
  mergeCart(r, state.currentPortions);
  toast('Ингредиенты добавлены в список 🛒', true);
  updateBadges();
}

function mergeCart(recipe, portions) {
  const ratio = portions / recipe.servings;
  recipe.ingredients.forEach(ing => {
    if (!ing.amount) return;
    const existing = state.cart.find(i => i.name === ing.name && i.unit === ing.unit);
    if (existing) {
      existing.amount = parseFloat((existing.amount + ing.amount * ratio).toFixed(2));
      if (!existing.sources.includes(recipe.id)) existing.sources.push(recipe.id);
    } else {
      state.cart.push({
        name: ing.name,
        amount: parseFloat((ing.amount * ratio).toFixed(2)),
        unit: ing.unit,
        group: getIngGroup(ing.name),
        checked: false,
        sources: [recipe.id],
      });
    }
  });
}

function getIngGroup(name) {
  const n = name.toLowerCase();
  if (['молоко','сметана','сыр','маскарпоне','пармезан','сулугуни','яйц','сливочн'].some(x => n.includes(x))) return 'Молочное и яйца';
  if (['курица','говядина','лосось','рыба','бекон','гуанчале','мясо'].some(x => n.includes(x))) return 'Мясо и рыба';
  if (['мука','рис','спагетти','макарон','хлеб','тесто','савоярди','печень'].some(x => n.includes(x))) return 'Крупы и мучное';
  if (['помидор','картоф','морков','лук','капуст','свёкл','кабачок','баклажан','перец','огурц','тыква'].some(x => n.includes(x))) return 'Овощи';
  if (['масло оливков','масло сливочн','масло растит'].some(x => n.includes(x))) return 'Масла';
  if (['соль','перец','сахар','уксус','специи','хмели','куркума','аджика','орегано','тимьян','прованс','какао'].some(x => n.includes(x))) return 'Специи и приправы';
  return 'Прочее';
}

function renderShopping() {
  const el = document.getElementById('shop-content');
  const stats = document.getElementById('shop-stats');

  if (state.cart.length === 0) {
    stats.innerHTML = '';
    el.innerHTML = `<div class="shop-empty">
      <div style="font-size:64px;margin-bottom:16px">🛒</div>
      <div style="font-size:20px;font-weight:700;margin-bottom:8px">Список покупок пуст</div>
      <p style="color:var(--text2)">Добавляйте рецепты, и ингредиенты появятся здесь</p>
      <button class="btn btn-fill" style="margin-top:20px" onclick="showPage('search')">Найти рецепты</button>
    </div>`;
    return;
  }

  const total = state.cart.length;
  const done = state.cart.filter(i => i.checked).length;
  const sources = new Set(state.cart.flatMap(i => i.sources)).size;

  stats.innerHTML = `
    <div class="stat-card"><div class="stat-val">${total}</div><div class="stat-lbl">Ингредиентов</div></div>
    <div class="stat-card"><div class="stat-val">${done}</div><div class="stat-lbl">Куплено</div></div>
    <div class="stat-card"><div class="stat-val">${sources}</div><div class="stat-lbl">Рецептов</div></div>
  `;

  const groups = {};
  state.cart.forEach(i => {
    if (!groups[i.group]) groups[i.group] = [];
    groups[i.group].push(i);
  });

  el.innerHTML = Object.entries(groups).map(([g, items]) => `
    <div class="shop-group">
      <div class="shop-group-title">${g}</div>
      ${items.map((item, idx) => {
        const globalIdx = state.cart.indexOf(item);
        const amt = item.amount % 1 === 0 ? item.amount : item.amount.toFixed(1);
        return `<div class="shop-item ${item.checked ? 'done' : ''}" id="shop-item-${globalIdx}">
          <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleCartItem(${globalIdx},this)">
          <span class="item-name ${item.checked ? 'done' : ''}">${item.name}</span>
          <span class="item-qty">${amt} ${item.unit}</span>
          <button class="del-btn" onclick="removeCartItem(${globalIdx})">✕</button>
        </div>`;
      }).join('')}
    </div>
  `).join('');
}

function toggleCartItem(idx, checkbox) {
  state.cart[idx].checked = checkbox.checked;
  renderShopping();
}

function removeCartItem(idx) {
  state.cart.splice(idx, 1);
  renderShopping();
  updateBadges();
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  renderShopping();
  updateBadges();
  toast('Список покупок очищен');
}

// ═══════════════════════════════════════════
//  PROFILE
// ═══════════════════════════════════════════
function renderProfile() {
  if (!state.user) { openModal('login'); return; }
  const u = state.user;
  document.getElementById('profile-avatar').textContent = u.name[0].toUpperCase();
  document.getElementById('profile-name').textContent = u.name;
  document.getElementById('profile-email').textContent = u.email;
  switchProfileTab('favourites', document.querySelector('.ptab'));
}

function switchProfileTab(tab, el) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
  const cont = document.getElementById('profile-tab-content');
  if (tab === 'favourites') {
    const ids = [...state.favourites];
    if (ids.length === 0) {
      cont.innerHTML = `<div class="fav-empty"><div class="emoji">🤍</div><h2>Пока ничего нет</h2><p>Добавляйте рецепты в избранное</p></div>`;
    } else {
      cont.innerHTML = `<div class="cards-grid">${RECIPES.filter(r => ids.includes(r.id)).map(r => recipeCardHTML(r)).join('')}</div>`;
    }
  } else if (tab === 'shopping') {
    renderShopping();
    cont.innerHTML = document.getElementById('page-shopping').innerHTML;
  } else {
    cont.innerHTML = `
      <div style="background:var(--surface);border-radius:var(--r);border:1px solid var(--border);padding:24px;max-width:480px">
        <h3 style="font-size:16px;font-weight:700;margin-bottom:20px">Диетические предпочтения</h3>
        ${DIETS.map(d => `<label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);cursor:pointer;font-size:15px">
          <input type="checkbox" style="width:18px;height:18px;accent-color:var(--accent)"> ${d}
        </label>`).join('')}
        <button class="btn btn-fill" style="margin-top:20px" onclick="toast('Настройки сохранены ✓',true)">Сохранить</button>
      </div>`;
  }
}

// ═══════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════
function openModal(type) {
  document.getElementById('modal-overlay').classList.add('open');
  switchModal(type);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function switchModal(type) {
  document.getElementById('modal-login').style.display = type === 'login' ? '' : 'none';
  document.getElementById('modal-register').style.display = type === 'register' ? '' : 'none';
}

function doLogin() {
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;
  if (!email || !pass) { toast('Заполните все поля'); return; }
  state.user = { name: email.split('@')[0], email };
  closeModal();
  updateAuthUI();
  toast('Добро пожаловать, ' + state.user.name + '! 👋', true);
}

function doRegister() {
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const pass = document.getElementById('reg-pass').value;
  if (!name || !email || !pass) { toast('Заполните все поля'); return; }
  if (pass.length < 6) { toast('Пароль слишком короткий'); return; }
  state.user = { name, email };
  closeModal();
  updateAuthUI();
  toast('Аккаунт создан! Добро пожаловать 🎉', true);
}

function doLogout() {
  state.user = null;
  updateAuthUI();
  showPage('home');
  toast('Вы вышли из аккаунта');
}

function updateAuthUI() {
  const hasUser = !!state.user;
  document.getElementById('auth-btn').style.display = hasUser ? 'none' : '';
  document.getElementById('user-btn').style.display = hasUser ? '' : 'none';
  if (hasUser) {
    document.getElementById('user-avatar').textContent = state.user.name[0].toUpperCase();
  }
}

// ═══════════════════════════════════════════
//  BADGES & TOAST
// ═══════════════════════════════════════════
function updateBadges() {
  const fc = state.favourites.size;
  const cc = state.cart.length;

  const fb = document.getElementById('fav-badge');
  fb.style.display = fc > 0 ? 'flex' : 'none';
  fb.textContent = fc;

  const cb = document.getElementById('cart-badge');
  cb.style.display = cc > 0 ? 'flex' : 'none';
  cb.textContent = cc;
}

let toastTimer;
function toast(msg, green = false) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show' + (green ? ' green' : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.classList.remove('show'); }, 2500);
}

// Close modal on overlay click
document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Init
renderHome();

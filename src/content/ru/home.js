export default {
  meta: {
    title: "ADISA",
    description: "description",
    keywords: "ADISA"
  },
  // ========== Intro ==========
  intro: {
    logoAlt: "Логотип ADISA",
    title: "Официальный предствитель ADISA в Украине",
    description: "самые компактные котлы" // +b
  },
  // ========== Tagline ==========
  tagline: "Котлы ADISA - это",
  // ========== Economy ==========
  economy: {
    title: "Минимальный расход газа",
    subtitle: "Благодаря высокой эффективности конденсационных котлов <b>расход газа ниже на 15%, чем у обычных жаротрубных котлов.</b>", // +b
    label: "Введите мощность котельной, чтобы увидеть свою экономию", // +b
    unit: "кВт",
    error: "Введите значение",
    calcButton: "Посчитать",
    chartDescription: "Ваша <b>экономия газа</b> в сравнении с обычным котлом <b>составит</b>!", // +b
    scaleItems: [
      { label: "За год",
        mod: 1.22
      },
      { label: "За 5 лет",
        mod: 1.22 * 5
      },
      { label: "За 10 лет",
        mod: 1.22 * 10
      },
      { label: "За 20 лет",
        mod: 1.22 * 20
      }
    ]
  },
  // ========== Power section ==========
  power: {
    title: "Огромная мощность при компактных размерах и низком весе",
    description: [ // +b resizable
      "Широкий диапазон мощностей в линейке котлов от 104 до 1800 кВт позволяет подобрать наиболее оптимальное решение для каждого случая.",
      "Занимаемая <b>площадь конденсационными котлами ADISA в 2,5 раза меньше, а вес котла с водой и горелкой в 4 раза меньше</b> жаротрубных котлов аналогичной мощности. Это позволит застройщику значительно сэкономить на возведении помещения котельной, а также при необходимости поднять котел при помощи автокрана или грузового лифта.",
    ],
    subTitle: "Котельная на 1000 кВт",
    schemeImgNameFirst: "Обычный котел",
    schemeImgAltFirst : "Схема расположения обычного котла",
    schemeImgNameSecond: "Котел ADISA (ADI LT 450)",
    schemeImgAltSecond : "Схема расположения котла ADISA (ADI LT 450)",
    blueRect: "Экономия <br />9 м <sup>2</sup> <br />и <br />1704 кг", // html
    info: "*Вес указан с водой"
  },
  // ========== Noise section ==========
  noiseLvl: {
    title: "Низкий уровень шума",
    description: "<b>Уровень шума в 18 раз ниже,</b> чем у жаротрубного котла смодулирующей горелкой. Нет необходимости в шумоизоляции котельной, а   также установке дорогостоящих (от шумоглушителей) горелок и дымоходов.", // +b
    advantagesListTitle: "Такой выдающийся показатель достигнут благодаря:",
    advantagesList: [ // +b resizable
      "Уникальной конструкции премиксной горелки котла;",
      "Шумоподавляющим матам (входят в стоимость котла);",
      "Виброопорам (входят в стоимость котла)."
    ],
    featureName1: "Премиксная горелка",
    featureAlt1: "Премиксная горелка",
    featureName2: "Акустический поролон",
    featureAlt2: "Акустический поролон",
    featureName3: "Виброопоры",
    featureAlt3: "Виброопоры"
  },
  // ========== Quality section ==========
  quality: {
    title: "Высочайшее качество",
    description: [ // +b resizable
      "<b>Теплообменник</b> котла изготовлен из <b>качественной нержавеющей стали EN 1.4509</b> (AISI344), трубчатая конструкция снижает сопротивление и риск засорения. Нет особых требований к качеству теплоносителя, в отличии от теплообменников, изготовленных из алюминия или обычной котловой стали.",
      "Отсутствует необходимость в поддержании температуры обратного теплоносителя выше 60 градусов, как в классических жаротрубных котлах. (Экономия на трехходовом клапане с сервоприводом и автоматикой или подмешивающем насосе). Чем ниже температура обратного теплоносителя, тем выше эффективность котла.",
      "На котлах ADISA установлен воздушный фильтр в стандартной комплектации. Газовый клапан и труба Вентури Honeywell (США). Плата управления и дисплей от мирового производителя котловой автоматики — Siemens (Германия) модель LMS, надежность которого проверена годами."
    ],
    siemensAlt: "Контрольная панель Siemens"
  },
  // ========== Pollution section ==========
  pollution: {
    title: "Низкие выбросы",
    ecoAlt: 'ECO',
    ecoDescription: "Конденсационные котлы ADISA бережно относятся к окружающей среде.", // +b
    chartNameAdisa: "Котел ADISA",
    chartNameCommon: "Обычный котел",
    pollutionDescription: "NOx: менее 10ppm. CO: менее 50ppm. <b>Высота и затраты на дымоход в разы меньше.</b>" // +b
  },
  // ========== Training section ==========
  training: {
    title: "Бесплатное обучение на новом заводе",
    trainingText: "Обслуживающий персонал наших постоянных клиентов проходит бесплатное обучение на заводе-изготовителе в Барселоне.", // +b
    watchButtonText: "Посмотреть полное видео"
  },
  // ========== Repairs section ==========
  repairs: {
    title: "Обслуживание и ремонт",
    description: "Котлы спроектированы по промышленному стандарту для простого доступа ко всем элементам котла. Все необходимые запчасти доступны 24/7 в наших ", // +b
    serviceLinkText: "СЕРВИСНЫХ ОРГАНИЗАЦИЯХ."
  }
};

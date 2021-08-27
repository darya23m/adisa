export default {
  meta: {
    title: "ADISA",
    description: "description",
    keywords: "ADISA"
  },
  // ========== Intro ==========
  intro: {
    logoAlt: "Логотип ADISA",
    title: "Конденсаційні котли ADISA в Україні",
    description: "ADISA - TESLA серед котлів" // +b
  },
  // ========== Tagline ==========
  tagline: "Котли ADISA - це",
  // ========== Economy ==========
  economy: {
    title: "Мінімальна витрата газу",
    subtitle: "Завдяки високій ефективності конденсаційних котлів <b>витрата газу нижче на 15%, ніж у звичайних жаротрубних котлів.</b>", // +b
    label: "Введіть потужність котельні, щоб побачити свою економію", // +b
    unit: "кВт",
    error: "Введіть значення",
    calcButton: "Порахувати",
    chartDescription: "Ваша <b> економія газу </b> в порівнянні зі звичайним котлом складе:", // +b
    scaleItems: [
      { label: "За рік",
        mod: 31.94
      },
      { label: "За 5 років",
        mod: 31.94 * 5
      },
      { label: "За 10 років",
        mod: 31.94 * 10
      },
      { label: "За 20 років",
        mod: 31.94 * 20
      }
    ]
  },
  // ========== Power section ==========
  power: {
    title: "Величезна потужність при компактних розмірах та малій вазі",
    description: [ // +b resizable
      "Широкий діапазон потужностей в лінійці котлів від 104 до 1800 кВт дозволяє підібрати найбільш оптимальне рішення для кожного випадку.",
      "Займана <b>площа конденсаційними котлами ADISA в 2,5 рази менше, а вага котла з водою і пальником в 4 рази менше </b>жаротрубних котлів аналогічної потужності. Це дозволить забудовнику значно заощадити на зведенні приміщення котельні, а також при необхідності підняти котел за допомогою автокрана чи вантажного ліфта.",
    ],
    subTitle: "Котельня на 1000 кВт",
    schemeImgNameFirst: "Звичайний котел",
    schemeImgAltFirst : "Схема розташування звичайного котла",
    schemeImgNameSecond: "Котел ADISA (ADI LT 450)",
    schemeImgAltSecond : "Схема розташування котлаADISA (ADI LT 450)",
    blueRect: "Економія <br />9 м <sup>2</sup> <br />та <br />1704 кг", // html
    info: "*Вага вказана з водою"
  },
  // ========== Noise section ==========
  noiseLvl: {
    title: "Низький рівень шуму",
    description: "<b>Рівень шуму в 18 разів нижче, </ b>ніж у жаротрубного котла з модулюючим пальником. Немає необхідності в шумоізоляції котельні, а також установці дорогих шумоглушників пальників та димоходів.", // +b
    advantagesListTitle: "Такий видатний показник досягнутий завдяки:",
    advantagesList: [ // +b resizable
      "Унікальній конструкції преміксного пальника котла;",
      "Шумопоглинаючі мати (входять у вартість котла);",
      "Віброопори (входять у вартість котла)."
    ],
    featureName1: "Преміксний пальник",
    featureAlt1: "Преміксний пальник",
    featureName2: "Акустичний поролон",
    featureAlt2: "Акустичний поролон",
    featureName3: "Віброопори",
    featureAlt3: "Віброопори"
  },
  // ========== Quality section ==========
  quality: {
    title: "Найвища якість",
    description: [ // +b resizable
      "<b>Теплообмінник </b>котла ADISA виготовлений <b>із якісної нержавіючої сталі EN 1.4509 </b> (AISI344), трубчаста конструкція знижує опір і ризик засмічення. Немає особливих вимог до якості теплоносія, на відміну від теплообмінників, виготовлених з алюмінію або звичайною котлової сталі.",
      "Не має потреби в підтримці температури зворотного теплоносія вище 60 градусів, як у класичних жаротрубних котлах. (Економія на триходовому клапані з сервоприводом та автоматикою або підмішуючому насосі). Чим нижче температура зворотного теплоносія, тим вище ефективність котла.",
      "На котлах ADISA встановлений повітряний фільтр в стандартній комплектації. Газовий клапан та труба Вентурі Honeywell (США). Плата управління та дисплей від світового виробника котлової автоматики - Siemens (Німеччина) модель LMS, надійність якої перевірена роками."
    ],
    siemensAlt: "Контрольна панель Siemens"
  },
  // ========== Pollution section ==========
  pollution: {
    title: "Дбайливе ставлення до навколишнього середовища",
    ecoAlt: 'ECO',
    ecoDescription: "NOx: менш 10ppm. CO: менш 50ppm. <b>Висота та витрати на димохід в рази менше.</b>", // +b
    chartNameAdisa: "Конденсаційний котел ADISA",
    chartNameCommon: "Звичайний котел"
  },
  // ========== Training section ==========
  training: {
    title: "Безкоштовне навчання на заводі в Барселоні",
    trainingText: "Обслуговуючий персонал наших постійних клієнтів проходить безкоштовне навчання на заводі-виробнику в Барселоні.", // +b
    watchButtonText: "Переглянути повне відео"
  },
  // ========== Repairs section ==========
  repairs: {
    title: "Обслуговування та ремонт",
    description: "Котли спроектовані по промисловому стандарту для простого доступу до всіх елементів котла. Всі необхідні запчастини доступні 24/7 в наших ", // +b
    serviceLinkText: "СЕРВІСНИХ ОРГАНІЗАЦІЯХ."
  }
};

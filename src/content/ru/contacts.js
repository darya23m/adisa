export default {
  meta: {
    title: "Контакты — ADISA",
    description: "description",
    keywords: "ADISA"
  },
  header: "Региональные представительства",
  offices: {
    mainOffice: {
      title: "Головной офис:",
      office: { 
        address: "Адрес: ул. Академика Королева, 5/4",
        tels: [ // resizable
          "+38(050)333-88-77",
          "+38(050)333-88-83",
        ],
        emails: [ // resizable
          "adisa.ua@ukr.net"
        ]
      }
    },
    listOffices: {
      title: 'Региональные представительства:',
      list: [ // resizable
        // ========== Ивано-Франковская область ==========
        { city: "Ивано-Франковская область",
          path: "ivanofrankivsk",
          addresses: [
            // ---------- Тега Інжиніринг ----------
            { officeName: "ТОВ “Тега Інжиніринг”",
              address: "г.Ивано-Франковск, ул.Днестровская, дом 55",
              tels: [
                "+38(050)844-44-08"
              ],
              emails: [
                "igor@tega.com.ua"
              ]
            }
            // ---------- Add+ ----------
          ]
        },
        // ========== Киевская область ==========
        { city: "Киевская область",
          path: "kiev",
          addresses: [
            // ---------- Грін Апекс ----------
            { officeName: "ТОВ “Грін Апекс”",
              address: "г.Киев, ул. Скляренка Семена, дом 17",
              tels: [
                "+38(044)583-11-98"
              ],
              emails: [
                "info@greenapex.com.ua"
              ],
              webs: [
                "www.greenapex.com.ua"
              ]
            },
            // ---------- МельситБуд ----------
            { officeName: "ТОВ “МельситБуд”",
              address: "г.Киев, переулок Куренеский, дом 4/8-А",
              tels: [
                "+38(044)467-58-35",
                "+38(050)331-44-27"
              ],
              emails: [
                "melsit_bud@ukr.net"
              ]
            },
            // ---------- Гранд Енерджи ЛТД ----------
            { officeName: "ТОВ “Гранд Енерджи ЛТД”",
              address: "г.Киев, ул.Ливарская, дом 7",
              tels: [
                "+38(067)367-76-92",
                "+38(099)534-56-38",
                "+38(044)465-62-39"
              ],
              emails: [
                "info@grandenergy.com.ua"
              ],
              webs: [
                "www.grandenergy.com.ua"
              ]
            }
            // ---------- Add+ ----------
          ]
        },
        // ========== Львовская область ==========
        { city: "Львовская область",
          path: "lviv",
          addresses: [
            // ---------- Абеліт Плюс ----------
            { officeName: "ТОВ “Абеліт Плюс”",
              address: "г.Львов, проспект Вячеслава Черновола, дом 73",
              tels: [
                "+38(067)673-15-52",
                "+38(050)315-59-21"
              ],
              emails: [
                "abelitplus@ukr.net"
              ]
            },
            // ---------- Енерго Консалт Груп ----------
            { officeName: "ТОВ “Енерго Консалт Груп”",
              address: "г.Львов, проспект Шевченка, дом 11",
              tels: [
                "+38(093)489-51-91"
              ],
              emails: [
                "ssslviv@gmail.com",
                "ssslviv@ukr.net"
              ]
            }
            // ---------- Add+ ----------
          ]
        },
        // ========== Одесская область ==========
        { city: "Одесская область",
          path: "odessa",
          addresses: [
            // ---------- ТМ Інжиніринг ----------
            { officeName: "ТОВ “ТМ Інжиніринг”",
              address: "г.Раздельная, ул.Тираспольская, дом 35Д",
              tels: [
                "+38(050)333-65-08"
              ],
              emails: [
                "ovkprom@gmail.com"
              ]
            }
            // ---------- Add+ ----------
          ]
        },
        // ========== Полтавская область ==========
        { city: "Полтавская область",
          path: "poltava",
          addresses: [
            // ---------- Стандартпромсервіс ----------
            { officeName: "ПП “Стандартпромсервіс”",
              address: "г.Полтава, переулок Великий, дом 4а",
              tels: [
                "+38(093)392-01-99",
                "+38(099)661-21-83",
                "+38(053)250-26-99"
              ],
              emails: [
                "standart-sps@ukr.net"
              ],
              webs: [
                "www.s-p-s.top"
              ]
            }
            // ---------- Add+ ----------
          ]
        } 
        // ========== Add+ ==========
      ]
    }
  },

  form: {
    title: "ОСТАЛИСЬ ВОПРОСЫ?",
    labels: { 
      name: "Введите ваше имя или название организации",
      contact: "Введите ваш e-mail или номер телефона",
      message: "Оставьте сообщение"
    },
    submitBtn: "СВЯЗАТЬСЯ С НАМИ",
    errors: {
      title: "Пожалуйста, заполните все поля: ",
      fields: {
        name: {
          cantBeBlank: "Введите имя или название организации."
        },
        contact: {
          cantBeBlank: "Введите e-mail или номер телефона.",
          invalidInput: "E-mail или номер телефона введён не верно."
        },
        message: {
          cantBeBlank: "Введите сообщение."
        },
        captcha: {
          cantBeBlank: "Пройдите проверку reCAPTCHA."
        }
      }
    },
    success: {
      message: "Ваш запрос успешно отправлен. Мы свяжемся с вами в ближайшее время!"
    }
  }
};

export default {
  meta: {
    title: "ADISA | Контакты",
    description: "description",
    keywords: "ADISA"
  },
  header: "Региональные представительства",
  offices: {
    mainOffice: {
      title: "Головной офис:",
      office: { 
        address: "Адрес: ул. Академика королева, 5/4",
        tels: [ // resizable
          "+38(050)333-88-77",
          "+38(050)333-88-83",
        ],
        emails: [ // resizable
          "ovkprom@gmail.com"
        ]
      }
    },
    listOffices: {
      title: 'Региональные представительства:',
      list: [ // resizable
        // ========== Киевская область ==========
        { city: "Киевская область",
          path: "kiev",
          addresses: [
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

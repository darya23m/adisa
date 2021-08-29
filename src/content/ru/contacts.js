export default {
  meta: {
    title: "ADISA | Contacts",
    description: "description",
    keywords: "ADISA"
  },
  header: "Обратная связь",
  description: "Для получения информации по проектированию, монтажу и поставке оборудования ADISA вы можете обратиться в одно из наших",
  descriptionLinkText: "представительств",
  orText: "или",
  contactUs: "Связаться с нами",
  form: {
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

export default {
  calculateBtn: "Прорахувати котельню",
  title: "Прорахувати котельню",
  description: "Введіть е-мейл або номер телефону, і ми зв'яжемося з вами зручним для вас способом",
  form: {
    labels: { 
      name: "Введіть ваше ім'я",
      contact: "Введіть ваш e-mail або номер телефону",
      message: "Залиште повідомлення"
    },
    submitBtn: "Прорахувати котельню",
    errors: {
      title: "Будь ласка, заповніть усі поля: ",
      fields: {
        name: {
          cantBeBlank: "Введіть ім'я або назва організації."
        },
        contact: {
          cantBeBlank: "Введіть е-мейл або номер телефону."
        },
        captcha: {
          cantBeBlank: "Пройдіть перевірку reCAPTCHA."
        }
      }
    },
    success: {
      message: "Ваш запит успішно відправлений. Ми зв'яжемося з вами найближчим часом!"
    }
  }
};

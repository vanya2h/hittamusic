import {
  LANGUAGE_US,
  LANGUAGE_RUS,
} from "../../consts";

const translation = {
  [LANGUAGE_US]: {
    ["loading"]: "Wait until process finished..",
    ["title"]: "Payment",
    ["email_holder"]: "Enter your e-mail..",
    ["enter_email"]: "Next",
    ["email_notice"]: "The full wav-formatted files will be sended on this email",
    ["payment_currency"]: "Selected currency: "
  },
  [LANGUAGE_RUS]: {
    ["loading"]: "Подождите пока мы упаковываем ваш заказ..",
    ["title"]: "Оплата",
    ["email_holder"]: "Введите ваш e-mail",
    ["enter_email"]: "Далее",
    ["email_notice"]: "Введите e-mail, на который будут отправлены ссылки для скачивания полных версий",
    ["payment_currency"]: "Выбранная валюта: "
  }
};

export default translation;
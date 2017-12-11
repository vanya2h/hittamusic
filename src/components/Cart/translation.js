import {
  LANGUAGE_US,
  LANGUAGE_RUS,
} from "../../consts";

const translation = {
  [LANGUAGE_US]: {
    ["loading"]: "Loading..",
    ["no-content"]: "Seems, there's empty",
    ["proceed"]: "Proceed to checkout",
  },
  [LANGUAGE_RUS]: {
    ["loading"]: "Загрузка..",
    ["no-content"]: "Похоже, вы ещё ничего не добавили в корзину",
    ["proceed"]: "Перейти к оплате"
  }
};

export default translation;
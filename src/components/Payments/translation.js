import {
  LANGUAGE_US,
  LANGUAGE_RUS,
} from "../../consts";

const translation = {
  [LANGUAGE_US]: {
    ["title"]: "Payment statuses",
    ["description"]: "Here will be stored your orders. In future you can download beats from this list",
    ["item_id"]: "ID",
    ["item_items"]: "Items",
    ["item_currency"]: "Currency",
    ["item_total"]: "Total",
    ["item_date"]: "Data",
    ["item_status"]: "Status",
  },
  [LANGUAGE_RUS]: {
    ["title"]: "Мои заказы",
    ["description"]: "Здесь будут сохраняться все ваши заказы. В будущем вы можете скачивать отсюда купленные биты",
    ["item_id"]: "ID",
    ["item_items"]: "Товары",
    ["item_currency"]: "Валюта",
    ["item_total"]: "Сумма",
    ["item_date"]: "Дата",
    ["item_status"]: "Статус",
  }
};

export default translation;
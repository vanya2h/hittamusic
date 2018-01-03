import {
  LANGUAGE_US,
  LANGUAGE_RUS,
} from "../../../consts";

const translation = {
  [LANGUAGE_US]: {
    ["status_error"]: "Server Error",
    ["status_start"]: "Wait for payment",
    ["status_cancel"]: "Cancelled",
    ["status_done"]: "Done",
    ["status_reject"]: "Money refund",
    ["status_stop"]: "Stopped by service",
    ["status_success"]: "Done"
  },
  [LANGUAGE_RUS]: {
    ["status_error"]: "Ошибка сервера",
    ["status_start"]: "Счёт выставлен",
    ["status_cancel"]: "Платёж отменён",
    ["status_done"]: "Платёж выполнен",
    ["status_reject"]: "Возврат средств",
    ["status_stop"]: "Платёж остановлен",
    ["status_success"]: "Платёж выполнен"
  }
};

export default translation;
export default ({ response }, cb, cbValidation) => {
  if (response) {
    if (response.status === 422 && cbValidation) {
      return cbValidation(response.data);
    } else if (response.status === 500) {
      return cb(response.data);
    } else {
      return cb("Неизвестная ошибка сервера");
    }
  } else {
    return cb("Не удалось соединиться с сервером");
  }
}
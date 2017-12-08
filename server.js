const express = require('express')
const app = express();
const port = 3000;

app.use("/dist", express.static('dist'));

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, () => {
  console.log('--> Приложение доступно по адресу: localhost:' + port);
});
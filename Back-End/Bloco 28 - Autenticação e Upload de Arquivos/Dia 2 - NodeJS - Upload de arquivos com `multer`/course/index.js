const express = require('express');
const app = express();
const PORT = 3000;
// 1 - Importo o Multer
const multer = require('multer');
// 2 - Vou trazer o multer para uma variável
const upload = multer ({ dest: 'uploads/'}); // esse dest já salva na pasta 'uploads' os arquivos enviados futuramente

app.get("/ping", (_req, res) => {
  res.send("pong")
});
// 3 - Endpoint de envio dos arquivos - 'arquivo' corresponde ao campo no forms html que vai conter a informação subida
app.post("/upload", upload.single('arquivo'), (_req, res) => { // esse upload atua como um middleware ... se quizesse muitos arquivos ia colocar upload.
  res.send("Ok")
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;
// 1 - Importo o Multer
const multer = require('multer');
// 2 - Vou trazer o multer para uma variável
const upload = multer ({ dest: 'uploads/'}); // esse dest já salva na pasta 'uploads' os arquivos enviados futuramente

// 6 - forma de ligar ao middleware de tratar o filename
const upload = multer ({ storage })

// 5 - melhorar o nome dos arquivos no upload com diskstorage
const storage = multer.diskStorage({
  // 1º parametro => destino da imagem
  destination: (req, file, callback) => {
    callback(null, 'uploads/') // esse nome tem que bater com o nome da pasta de destino
  },
  // 2º parametro => esse é um campo no array para personalizar a info
  filename: (req, file, callback) => {
    // essa forma é colocar uma data
    callback(null, Date.now() + "-" + file.originalname);
  }
});


app.get("/ping", (_req, res) => {
  res.send("pong")
});
// 3 - Endpoint de envio dos arquivos - 'arquivo' corresponde ao campo no forms html que vai conter a informação subida
app.post("/upload", upload.single('arquivo'), (req, res) => { // esse upload atua como um middleware ... se quizesse muitos arquivos ia colocar upload.array()

  //4 - ver pra crer, o que o multer tráz
  console.log(req.body, req.file);

  res.send("Ok")

  //4.1 ia chamar como 'arquivo' dentro do 'body' do post
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

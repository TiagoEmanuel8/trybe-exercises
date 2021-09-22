const express = require('express');
const path = require('path'); // 1.2 - essa lib é pra organizar caminhos de dir
const multer = require('multer');// 2 - essa lib também é para subir arquivos

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
// caminho do direretório atual
console.log(__dirname); // 1 - considera o caminho em RELATIVO ao arquivo

// essa forma tras o benefício de trazer um caminho que funcione igual ao SO
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); // 1.3 - forma de concretizar acesso RELATIVO a pasta de uploads

// 3 - util para salvar os arquivos com nomes personalizados
const storage = multer.diskStorage({
  destination: (_req, _file, callback) => { // 3.1 - manda para um local específico
    callback(null, 'uploads')
  },
  filename:  (req, file, callback) => {
    callback(null, `${req.params.id}-${file.originalname}`) // 3.2 - o arquivo vai ter nome personalizado
  },
});

// 2.1 - local para salvar arquivos, usando a própria lib multer
// const upload = multer({ dest: path.join(__dirname, '..', 'uploads')});
const upload = multer({ storage })

// 2.0 - rota para mandar dados para a api
app.post('/file/upload', upload.single('file'), // tratamento para receber um arquivo
//obs: para receber vários arquivos ia usar upload.arrays()
//obs: também poderia usar o upload.fields()
  (req, res) => {
  res.send({ files: req.files, body: req.body }); // retorno o arquivo apenas para fins didáticos
});

app.post('/user/:id/avatar', upload.single('avatar'), 
  (req, res) => {
  res.send({ files: req.files, body: req.body });
});

app.listen(3001);
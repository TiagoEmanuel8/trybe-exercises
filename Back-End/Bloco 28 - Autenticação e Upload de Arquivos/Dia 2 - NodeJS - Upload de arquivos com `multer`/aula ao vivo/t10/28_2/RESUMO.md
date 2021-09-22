### Deixando os arquivos dentro da pasta uploads acessíveis

```js
// ..
app.use(express.static(__dirname + '/uploads'));
// ..
```


### Instalar Multer

```
npm i multer
```

### Upload básico

```js
const upload = multer({dest: 'uploads'});

app.post('/files/upload', upload.single('file'), (req, res) => {
  const { body, file } = req;

  res.status(200).json({ body, file });
});
```

#### Movendo para um middleware

```js
const multer = require('multer');

const upload = multer({dest: 'uploads'});

module.exports = [
  upload.single('arquivo'), 
  (req, res) => {
    const file = req.file;

    console.log(file);

    res.json({ message: 'Arquivo recebido com sucesso!' });
  }
]
```



### Criando cli para fazer upload com axios

```
npm init -y
npm i axios form-data
```


### Upload de múltiplo arquivos

```js
const multer = require('multer');

const upload = multer({dest: 'uploads'});

module.exports = [
  upload.array('arquivos'), 
  (req, res) => {
    const files = req.files;

    console.log(files);

    res.json({ message: 'enviado com sucesso!', files });
  }
]
```

### Disk storage

```js
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
    callback(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage });

module.exports = [
  upload.single('documento'),
  (req, res) => {
    res.json({ file: req.file });
  }
]
```

### Memory Storage
Útil quando vou subir um arquivo grande, essa função apenas lê os arquivos na memoria e os salva no BD
```js
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

const uploadWithMultiSotorage = async (req, res) => {
  const { buffer, ...fileData } = req.file;
  const fileAsString = buffer.toString('utf-8');

  try {
    JSON.parse(fileAsString);
  } catch (err) {
    return res.status(400).json({ message: 'Arquivo não é um JSON válido' });
  }

  const path = `./uploads/${fileData.originalname}`;
  await fs.writeFile(path, buffer);
  res.status(201).json({ message: 'Arquivo armazenado com sucesso', path });
});
```




#### Arquivo `send.js`

```js
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./meu-arquivo.txt');

/* Aqui adicionamos uma propriedade chamada 'file' onde carregará nosso arquivo */
const form = new FormData();
form.append('file', stream);

/* Esse arquivo não será enviado  no body da requisição como de costume,
   dessa vez iremos utilizar o header para  enviar essa informação. */
const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/upload/single', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => {
    const { file } = response.data;
    console.log("arquivo foi feito upload com o nome", file.filename)
  })
  .catch((error) => console.error(error));
```

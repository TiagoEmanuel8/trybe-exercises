// configurar o multer (após usar o npm i multer)
const path = require('path');
const multer = require('multer');
// 1.2 - Esse método JOIN serve para acertar exatamente onde a pasta está
const UPLOADS_FOLDER = path.join(__dirname, '..', 'uploads'); // OUTRA VANTAGEM DO JOIN: é útil para qualquer SO, 

const memoryStorage = multer.memoryStorage();
const originalNameStorage = multer.diskStorage({
  destination: UPLOADS_FOLDER,
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
// 1.1 - config para dizer onde está a pasta de arquivos de upload
const upload = multer({ dest: UPLOADS_FOLDER });
const memoryUpload = multer({ storage: memoryStorage });
const originalNameUpload = multer({ storage: originalNameStorage });

module.exports = {
  upload,
  memoryUpload,
  originalNameUpload,
};

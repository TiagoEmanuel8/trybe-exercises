const path = require('path');
const fs = require('fs').promises;
const {
  memoryUpload,
  // originalNameUpload,
} = require('../middlewares/upload');
// 2 - uma rota / Essa sintaxe de array é para abrigar o middleware de upload
const uploadPicture = [
  // originalNameUpload.single('file'),
  memoryUpload.single('file'),
  async (req, res) => {
    // 2.1 - Captura informações do corpo
    const { username, caption } = req.body;
    // 2.4 - Se não tiver esses campos na requisição deve cair no erro
    if (!username || !caption) {
      res.status(422).json({ message: 'Missing username or caption' });
      // 2.4.1 - Garantindo a exclusão do arquivo - sim, aqui mesmo em erro o arquivo é gerado
      // await fs.rm(req.file.path);
      return;
    }
    // 2.5 - Sintaxe para apenas ler arquivos, mas sem salvar nada no local
    const { file: { buffer, ...file } } = req;

    const filePath = path.join(__dirname, '..', 'uploads', file.originalname);

    await fs.writeFile(filePath, buffer);
    // 2.2 - Exibir mensagem de sucesso
    res.status(200).json({
      message: 'Upload realizado com sucesso',
      picture: {
        username,
        caption,
        file,
        filePath,
      },
    });
  },
];

module.exports = {
  uploadPicture,
};

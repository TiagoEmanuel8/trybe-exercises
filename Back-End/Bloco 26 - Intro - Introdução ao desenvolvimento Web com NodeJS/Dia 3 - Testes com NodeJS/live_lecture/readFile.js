const fs = require('fs').promises;

module.exports = {
  readFile: async (fileName) => {
    const fileContent = await fs.readFile(fileName, 'utf-8').catch(() => null);

    return fileContent;
  },
};

const fs = require('fs');
const path = require('path');

const appDataDir = process.env.APPDATA;


fs.readdir(appDataDir, (err, files) => {
  if (err) {
    console.error('Erro ao ler o diretório %AppData%:', err);
    return;
  }

  // Procurar pela pasta desejada
  const targetFolder = 'Adobe'; // Substitua 'NomeDaPasta' pelo nome da pasta que você está procurando

  if (files.includes(targetFolder)) {
    console.log(`Pasta encontrada em ${path.join(appDataDir, targetFolder)}`);
  } else {
    console.log(`Pasta ${targetFolder} não encontrada em ${appDataDir}`);
  }
});

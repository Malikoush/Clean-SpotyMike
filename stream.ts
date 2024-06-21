const express = require('express'); // System de route API
const fs = require('fs'); // FileSytem read file
const path = require('path'); // Parcourir les dossier

const app = express();
const PORT = 3001;

app.get('/stream', (req, res) => {
  const filePath = path.resolve(__dirname, 'Vayana.mp3');
  const info = fs.statSync(filePath);
  const fileSize = info.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'audio/mpeg',
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'audio/mpeg',
    };
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
});

app.listen(PORT, () => {
  console.log('Serveur run');
});

const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: '/tmp/' });

app.post('/api/recompile', upload.single('manifest'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No manifest file uploaded." });
  }

  // 这里只是示例，不真正重新打包
  res.json({ message: "Manifest received.", file: req.file.originalname });
});

app.listen(3000, () => console.log("Recompile endpoint ready"));

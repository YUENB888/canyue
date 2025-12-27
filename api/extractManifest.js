const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const app = express();

const upload = multer({ dest: '/tmp/' });

app.use(express.json());
app.use(express.static('public'));

app.post('/api/extractManifest', upload.single('apkFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  try {
    const zip = new AdmZip(req.file.path);
    const xmlEntry = zip.getEntry("AndroidManifest.xml");

    if (!xmlEntry) {
      return res.status(404).json({ error: "Manifest XML not found in APK." });
    }

    const xmlData = xmlEntry.getData().toString("utf8");
    res.json({ manifest: xmlData });
  } catch (e) {
    res.status(500).json({ error: "Failed to extract APK." });
  }
});

app.listen(3000, () => console.log("API running on port 3000"));

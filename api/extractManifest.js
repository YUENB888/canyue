import fs from "fs";
import path from "path";
import { promisify } from "util";
import AdmZip from "adm-zip";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const buffer = Buffer.concat(chunks);

  try {
    const zip = new AdmZip(buffer);
    const xmlEntry = zip.getEntry("AndroidManifest.xml");

    if (!xmlEntry) {
      return res.status(404).json({ error: "Manifest XML not found in APK." });
    }

    const xmlData = xmlEntry.getData().toString("utf8");
    res.status(200).json({ manifest: xmlData });
  } catch (e) {
    res.status(500).json({ error: "Failed to extract APK." });
  }
}

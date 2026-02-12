import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();

const PORT = 3435;
const HOST = "0.0.0.0";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "web")));

app.use("/pkg", express.static(path.join(__dirname, "..","pkg")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "web", "index.html"));
});
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

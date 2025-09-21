import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 静的ファイルを配信（myFront 直下の JS, JSON などがブラウザからアクセス可能になる）
app.use(express.static(__dirname));

// ルートにアクセスしたら index.html を返す
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

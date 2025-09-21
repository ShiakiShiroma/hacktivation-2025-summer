import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8080;

// __dirname を ESModules で使えるように変換
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 静的ファイルを配信 (public フォルダ内がブラウザからアクセス可能になる)
app.use(express.static(path.join(__dirname, "public")));

// ルートにアクセスしたら index.html を返す
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// サーバ起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

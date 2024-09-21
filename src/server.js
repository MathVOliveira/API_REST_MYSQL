import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.APP_PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.APP_PORT}`);
})

import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

// escutar a porta (só sobe o server se a conexão com mysql for bem sucedida)
app.listen(process.env.APP_PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.APP_PORT}`);
})

import app from "./src/app.js";
import connection from './infra/conexao.js';
import dotenv from "dotenv";
dotenv.config();

// connect -> faz de fato a conexão com mysql
connection.connect((error) => {
  
  if (error) {
    console.log(error);
  } else {
    console.log('Conexão realizada com sucesso');
    // escutar a porta (só sobe o server se a conexão com mysql for bem sucedida)
    app.listen(process.env.APP_PORT, () => {
      console.log(`Servidor rodando em: http://localhost:${process.env.APP_PORT}`);
    })
  }
  
})

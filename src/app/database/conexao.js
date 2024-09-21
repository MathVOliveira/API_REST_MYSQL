import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

connection.connect();

/** JSDoc
 * Executa um código sql com ou sem valores (parâmetro vazio)
 * @param {string} sql -> instrução sql para ser executada
 * @param {*} valores -> valores a serem passados como parâmetros para o sql
 * @param {string} mensagemReject -> mensagem de erro a ser exibida
 * @returns -> objeto da Promise
 */
export const consulta = (sql, valores='', mensagemReject) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, valores, (error, result) => {
      if (error) return reject(mensagemReject);
      const row = JSON.parse(JSON.stringify(result));
      return resolve(row);
    })
  })
}

export default connection;

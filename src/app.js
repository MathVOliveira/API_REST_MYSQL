import express from 'express';
import connection from '../infra/conexao.js';
const app = express();

app.use(express.json());

// ROTAS

// GET
app.get('/selecoes', (req, res) => {
  // query sql
  const sql = "SELECT * FROM selecoes;";
  // query() -> sempre retorna um array com algo ou vazio
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(404).json({ 'erro': error })
    } else {
      res.status(200).json(result);
    }
  })

})

// GET por id
app.get('/selecoes/:id', (req, res) => {
  
  const sql = `SELECT * FROM selecoes WHERE id=${req.params.id};`;
  
  connection.query(sql, (error, result) => {
    const row = result[0];
    if (error) {
      res.status(404).json({ 'erro': error })
    } else {
      res.status(200).json(row);
    }
  })

  // É possível passar o id em query(), como abaixo:
  // const id = req.params.id;
  // const sql = `SELECT * FROM selecoes WHERE id=?;`;
  // connection.query(sql, id (error, result) => {})
})

// POST -> criar dados
app.post('/selecoes', (req, res) => {
  
    const selecao = req.body; 
    const sql = `INSERT INTO selecoes SET ?;`;
    
    connection.query(sql, selecao, (error, result) => {
      if (error) {
        res.status(400).json({ 'erro': error })
      } else {
        res.status(201).json(result);
      }
    })
  
  // const sql = `INSERT INTO selecoes (selecao, grupo) VALUES ('${req.body.selecao}','${req.body.grupo}');`;
  // connection.query(sql, (error, result) => {})

})

// PUT -> atualizar dados
app.put('/selecoes/:id', (req, res) => {
  
  const sql = `UPDATE selecoes SET selecao='${req.body.selecao}',grupo='${req.body.grupo}' WHERE id=${req.params.id};`;
  
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(404).json({ 'erro': error })
    } else {
      res.status(200).json(result);
    }
  })

})

// DELETE
app.delete('/selecoes/:id', (req, res) => {
  
  const sql = `DELETE FROM selecoes WHERE id=${req.params.id};`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.status(404).json({ 'erro': error })
    } else {
      res.status(200).json(result);
    }
  })

})

// exportação da instancia
export default app;

import connection from "../database/conexao.js";

class SelecaoRepository {
  // Cuida de todas as queries no DB / Regras de Persistência
  
  // CRUD
  create(selecao) {
    const sql = `INSERT INTO selecoes SET ?;`;
    return new Promise((resolve, reject) => {
      connection.query(sql, selecao, (error, result) => {
        if (error) return reject('Não foi possível cadastrar');
        // fazer o parse da resposta
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }

  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject('Não foi possível localizar');
        const rows = JSON.parse(JSON.stringify(result));
        return resolve(rows);
      })
    })
  }

  findById(id) {
    const sql = `SELECT * FROM selecoes WHERE id=${id};`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject('Não foi possível localizar o Id');
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }

  update(selecao, grupo, id) {
    const sql = `UPDATE selecoes SET selecao='${selecao}',grupo='${grupo}' WHERE id=${id};`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject('Não foi possível atualizar');
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }
  
  delete(id) {
    const sql = `DELETE FROM selecoes WHERE id=${id};`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject('Não foi possível deletar');
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }

}

export default new SelecaoRepository();

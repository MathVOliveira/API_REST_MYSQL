import { consulta } from "../database/conexao.js";

class SelecaoRepository {
  // Cuida de todas as queries no DB / Regras de Persistência
  
  // CRUD
  create(selecao) {
    const sql = `INSERT INTO selecoes SET ?;`;
    return consulta(sql, selecao, 'Não foi possível cadastrar.')
  }

  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return consulta(sql, 'Não foi possível encontrar.')
  }

  findById(id) {
    const sql = `SELECT * FROM selecoes WHERE id=${id};`;
    return consulta(sql, 'Não foi possível encontrar id.')
  }

  update(selecao, grupo, id) {
    const sql = `UPDATE selecoes SET selecao='${selecao}',grupo='${grupo}' WHERE id=${id};`;
    return consulta(sql, 'Não foi possível atualizar.')
  }
  
  delete(id) {
    const sql = `DELETE FROM selecoes WHERE id=${id};`;
    return consulta(sql, 'Não foi possível deletar.')
  }

}

export default new SelecaoRepository();

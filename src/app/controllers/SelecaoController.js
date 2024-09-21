import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
  // Controller "cuida" de todas as rotas

  // lista todos os registros
  async index(req, res) {
    const result = await SelecaoRepository.findAll();
    res.json(result);
  }

  // lista tudo por ID
  async show(req, res) {
    const result = await SelecaoRepository.findById(req.params.id);
    res.json(result);
  }

  // cria dados
  async store(req, res) {
    const result = await SelecaoRepository.create(req.body);
    res.json(result);
  }

  // atualiza dados
  async update(req, res) {
    const result = await SelecaoRepository.update(req.body.selecao, req.body.grupo, req.params.id);
    res.json(result);
  }

  // deleta dados
  async delete(req, res) {
    const result = await SelecaoRepository.delete(req.params.id);
    res.json(result);
  }

}

// padrão Singleton - única instância para toda a aplicação
export default new SelecaoController();

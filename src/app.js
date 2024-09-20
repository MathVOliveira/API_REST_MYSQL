// importação e instanciação do express (module ES)
import express from 'express';
const app = express();

// indica para o express ler json em corpo de requisições (body)
app.use(express.json());

// mock -> "imitação" de unidades reais, usado para testes
const selecoes = [
  {id: 1, selecao: 'Brasil', grupo: 'G'},
  {id: 2, selecao: 'Suíça', grupo: 'G'},
  {id: 3, selecao: 'Camarões', grupo: 'G'},
  {id: 4, selecao: 'Sérvia', grupo: 'G'}
];

function buscarSelecaoPorId(id) {
  // retorna como lista apenas o que tiver id igual ao parâmetro passado
  return selecoes.filter( selecao => selecao.id == id );
}

function buscarIndexSelecao(id) {
  // retorna o índice que tiver mesmo id que o parâmetro passado
  return selecoes.findIndex( selecao => selecao.id == id )
}

// criar rota padrão ou raiz
app.get('/', (request, response) => {
  response.send('Hello World!');
})

// GET -> pegar/buscar informações
app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes);
})

// GET por id
app.get('/selecoes/:id', (req, res) => {
  res.status(200).json(buscarSelecaoPorId(req.params.id));
})

// POST -> criar dados
app.post('/selecoes', (req, res) => {
  selecoes.push(req.body);

  res.status(201).send('Selecao cadastrada com sucesso');
})

// PUT -> atualizar dados
app.put('/selecoes/:id', (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes[index].selecao = req.body.selecao;
  selecoes[index].grupo   = req.body.grupo;

  res.json(selecoes);
})

// DELETE
app.delete('/selecoes/:id', (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes.splice(index, 1);

  res.send(`Seleção com id ${req.params.id} excluída com sucesso!`)
})


// exportação da instancia
export default app;

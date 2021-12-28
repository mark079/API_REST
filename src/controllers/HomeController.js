import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'João',
      sobrenome: 'Pedro',
      email: 'joao@gmail.com',
      idade: 21,
      peso: 80,
      altura: 1.83,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
